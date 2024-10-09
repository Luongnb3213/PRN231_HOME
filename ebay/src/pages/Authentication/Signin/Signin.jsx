import Button from "./Button";
import Input from "./Input";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";
import { useRef } from "react";
import { useState } from "react";
import ErrorMsg from "../../CommonComponents/Error";
import axios from "axios";
import { urlDev, requireHeader } from "../../../constant/url";
import LoadingComponent from "../../../Components/LoadingComponent";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const saveTokenToCookie = (accessToken) => {
  Cookies.set("accessToken", accessToken, { expires: 7 });
};

export default function Signin() {
  const [showError, setShowError] = useState(false);
  const usernameValueRef = useRef();
  const passwordValueRef = useRef();
  const [msgErr, setMsgErr] = useState("");
  const [errUsername, setErrUsername] = useState("");
  const [isLoadingUsername, setIsLoadingUsername] = useState(false);
  const [isLoadingSignin, setIsLoadingSignin] = useState(false);
  const [isUsernameYet, setIsUsernameYet] = useState(false);
  const [user, setUser] = useState(false);
  const [username, setUsername] = useState();
  const refRemember = useRef();
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
  });

  let handleBtnClick = null;

  if (!isUsernameYet) {
    handleBtnClick = async () => {
      const username = usernameValueRef.current.value;
      try {
        await validationSchema.validate({ username });
        setShowError((prev) => false);

        const params = {
          Username: username,
        };

        const headers = {
          "X-Header-Required": requireHeader,
          "Content-Type": "application/json",
        };

        setIsLoadingUsername(true);
        //call
        axios
          .get(urlDev + `/prn-authen/api/Auth/access_name`, { params, headers })
          .then((response) => {
            setIsLoadingUsername(false);
            setErrUsername(null);
            setIsUsernameYet(true);
            setUsername(response.data.response.username);
            setUser({
              username: response.data.response.username,
              rememberMe: refRemember.current.checked,
            });
          })
          .catch((error) => {
            setIsLoadingUsername(false);
            setIsUsernameYet(false);
            setErrUsername(error.response.data.Detail);

            setUser("hong có");
          });
      } catch (err) {
        setShowError((prev) => true);
        setMsgErr(err.errors[0]);
      }
    };
  }

  if (isUsernameYet) {
    handleBtnClick = () => {
      try {
        if (passwordValueRef.current.value.trim() !== "") {
          setErrUsername(null);
          const headers = {
            "X-Header-Required": requireHeader,
            "Content-Type": "application/json",
          };
          const params = {
            ...user,
            password: passwordValueRef.current.value,
          };
          setIsLoadingSignin(true);

          axios
            .post(urlDev + "/prn-authen/api/Auth/login", params, { headers })
            .then((response) => {
              setShowError(false);
              setMsgErr(null);
              setIsLoadingSignin(false);
              const token = response.data.response.accessToken;
              console.log(token);

              saveTokenToCookie(token);
              navigate("/");
            })
            .catch((error) => {
              setShowError(true);
              setIsLoadingSignin(false);
              setMsgErr(error.response.data.Detail);
            });
        } else {
          setErrUsername("Password is required");
        }
      } catch (error) {}
    };
  }

  return (
    <>
      {!isUsernameYet && (
        <div className="relative h-screen pt-11">
          {isLoadingUsername && <LoadingComponent />}
          <div className="logo-ebay w-[8.75rem] h-12 ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-labelledby="ebayLogoTitle"
              width="100%"
              height="100%"
              viewBox="0 0 122 48.592"
              id="gh-logo"
            >
              <title id="ebayLogoTitle">eBay Home</title>
              <g>
                <path
                  fill="#E53238"
                  d="M24.355 22.759c-.269-5.738-4.412-7.838-8.826-7.813-4.756.026-8.544 2.459-9.183 7.915zM6.234 26.93c.364 5.553 4.208 8.814 9.476 8.785 3.648-.021 6.885-1.524 7.952-4.763l6.306-.035c-1.187 6.568-8.151 8.834-14.145 8.866C4.911 39.844.043 33.865-.002 25.759c-.05-8.927 4.917-14.822 15.765-14.884 8.628-.048 14.978 4.433 15.033 14.291l.01 1.625z"
                ></path>
                <path
                  fill="#0064D2"
                  d="M46.544 35.429c5.688-.032 9.543-4.148 9.508-10.32s-3.947-10.246-9.622-10.214-9.543 4.148-9.509 10.32 3.974 10.245 9.623 10.214zM30.652.029l6.116-.034.085 15.369c2.978-3.588 7.1-4.65 11.167-4.674 6.817-.037 14.412 4.518 14.468 14.454.045 8.29-5.941 14.407-14.422 14.454-4.463.026-8.624-1.545-11.218-4.681a33.237 33.237 0 01-.19 3.731l-5.994.034c.09-1.915.185-4.364.174-6.322z"
                ></path>
                <path
                  fill="#F5AF02"
                  d="M77.282 25.724c-5.548.216-8.985 1.229-8.965 4.883.013 2.365 1.94 4.919 6.7 4.891 6.415-.035 9.826-3.556 9.794-9.289v-.637c-2.252.02-5.039.054-7.529.152zm13.683 7.506c.01 1.778.071 3.538.232 5.1l-5.688.032a33.381 33.381 0 01-.225-3.825c-3.052 3.8-6.708 4.909-11.783 4.938-7.532.042-11.585-3.915-11.611-8.518-.037-6.665 5.434-9.049 14.954-9.318 2.6-.072 5.529-.1 7.945-.116v-.637c-.026-4.463-2.9-6.285-7.854-6.257-3.68.021-6.368 1.561-6.653 4.2l-6.434.035c.645-6.566 7.53-8.269 13.595-8.3 7.263-.04 13.406 2.508 13.448 10.192z"
                ></path>
                <path
                  fill="#86B817"
                  d="M91.939 19.852l-4.5-8.362 7.154-.04 10.589 20.922 10.328-21.02 6.486-.048-18.707 37.251-6.85.039 5.382-10.348-9.887-18.393"
                ></path>
              </g>
            </svg>
          </div>
          <header className="w-full text-center">
            <h1 className="text-[2.5rem] font-medium text-login">Hello</h1>
            <p className="inline-block text-[0.9rem] mr-1">
              Sign in to eBay or{" "}
            </p>
            <div className="inline-block text-[0.9rem] cursor-pointer text-blue-600 underline">
              <NavLink to="/signup">create an account</NavLink>
            </div>
          </header>
          <Input
            ref={usernameValueRef}
            className="px-4 text-sm border border-stone-500 m-auto block mt-5 w-[22rem] h-10 rounded-lg"
            placeholder="Username or email"
          />
          {showError && (
            <ErrorMsg
              className="block m-auto w-[22rem] mt-3 text-sm text-red-600"
              msg={msgErr}
            />
          )}
          {errUsername && (
            <ErrorMsg
              className="block m-auto w-[22rem] mt-3 text-sm text-red-600"
              msg={errUsername}
            />
          )}
          <Button
            onClick={handleBtnClick}
            className="block m-auto w-[22rem] h-12 bg-blue-600 text-white mt-4 rounded-full hover:bg-blue-500"
          >
            Continue
          </Button>
          <div className="flex items-center justify-center w-[22rem] m-auto">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="my-7 mx-4 text-sm text-stone-700 font-normal">
              or
            </span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <Button className="block m-auto w-[22rem] h-12 border border-stone-700 text-stone-700 rounded-full hover:opacity-80">
            <div className="w-full h-full flex justify-center items-center flex-row relative">
              <div className="w-6 h-6 absolute left-5">
                <img
                  src="https://ir.ebaystatic.com/rs/c/sgninui-src-static-images-google-logo-icon-PNG-Transparent-Background-Z_TFsqo3.png"
                  className="ggl-icon"
                  alt=""
                />
              </div>
              <span>Continue with Google</span>
            </div>
          </Button>
          <div className="flex items-center justify-center flex-row w-[8.75rem] m-auto mt-6">
            <input
              ref={refRemember}
              type="checkbox"
              className="custom-checkbox mr-2 w-3 h-3"
            />
            <span className="text-base">Stay signed in</span>
          </div>
          <div className="w-full border-gray-400 border-t absolute bottom-[4rem]">
            <div className="w-10/12 text-xs text-center text-stone-500 absolute bottom-[-3rem] left-1/2 transform -translate-x-1/2">
              Copyright © 1995-2024 eBay Inc. All Rights Reserved.
              Accessibility, User Agreement, Privacy, Consumer Health Data,
              Payments Terms of Use, Cookies, CA Privacy Notice, Your Privacy
              Choices and AdChoice
            </div>
          </div>
        </div>
      )}
      {isUsernameYet && (
        <div className="relative h-screen pt-11">
          {isLoadingSignin && <LoadingComponent />}
          <div className="logo-ebay w-[8.75rem] h-12 ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-labelledby="ebayLogoTitle"
              width="100%"
              height="100%"
              viewBox="0 0 122 48.592"
              id="gh-logo"
            >
              <title id="ebayLogoTitle">eBay Home</title>
              <g>
                <path
                  fill="#E53238"
                  d="M24.355 22.759c-.269-5.738-4.412-7.838-8.826-7.813-4.756.026-8.544 2.459-9.183 7.915zM6.234 26.93c.364 5.553 4.208 8.814 9.476 8.785 3.648-.021 6.885-1.524 7.952-4.763l6.306-.035c-1.187 6.568-8.151 8.834-14.145 8.866C4.911 39.844.043 33.865-.002 25.759c-.05-8.927 4.917-14.822 15.765-14.884 8.628-.048 14.978 4.433 15.033 14.291l.01 1.625z"
                ></path>
                <path
                  fill="#0064D2"
                  d="M46.544 35.429c5.688-.032 9.543-4.148 9.508-10.32s-3.947-10.246-9.622-10.214-9.543 4.148-9.509 10.32 3.974 10.245 9.623 10.214zM30.652.029l6.116-.034.085 15.369c2.978-3.588 7.1-4.65 11.167-4.674 6.817-.037 14.412 4.518 14.468 14.454.045 8.29-5.941 14.407-14.422 14.454-4.463.026-8.624-1.545-11.218-4.681a33.237 33.237 0 01-.19 3.731l-5.994.034c.09-1.915.185-4.364.174-6.322z"
                ></path>
                <path
                  fill="#F5AF02"
                  d="M77.282 25.724c-5.548.216-8.985 1.229-8.965 4.883.013 2.365 1.94 4.919 6.7 4.891 6.415-.035 9.826-3.556 9.794-9.289v-.637c-2.252.02-5.039.054-7.529.152zm13.683 7.506c.01 1.778.071 3.538.232 5.1l-5.688.032a33.381 33.381 0 01-.225-3.825c-3.052 3.8-6.708 4.909-11.783 4.938-7.532.042-11.585-3.915-11.611-8.518-.037-6.665 5.434-9.049 14.954-9.318 2.6-.072 5.529-.1 7.945-.116v-.637c-.026-4.463-2.9-6.285-7.854-6.257-3.68.021-6.368 1.561-6.653 4.2l-6.434.035c.645-6.566 7.53-8.269 13.595-8.3 7.263-.04 13.406 2.508 13.448 10.192z"
                ></path>
                <path
                  fill="#86B817"
                  d="M91.939 19.852l-4.5-8.362 7.154-.04 10.589 20.922 10.328-21.02 6.486-.048-18.707 37.251-6.85.039 5.382-10.348-9.887-18.393"
                ></path>
              </g>
            </svg>
          </div>
          <header className="w-full text-center">
            <h1 className="text-[2.5rem] font-medium text-login">
              Welcome, {username}
            </h1>
            <p className="inline-block text-[0.9rem] mr-1">
              Enter your password to continue
            </p>
          </header>
          <Input
            ref={passwordValueRef}
            className="px-4 text-sm border border-stone-500 m-auto block mt-5 w-[22rem] h-10 rounded-lg"
            placeholder="Password"
            type="password"
          />
          {showError && (
            <ErrorMsg
              className="block m-auto w-[22rem] mt-3 text-sm text-red-600"
              msg={msgErr}
            />
          )}
          {errUsername && (
            <ErrorMsg
              className="block m-auto w-[22rem] mt-3 text-sm text-red-600"
              msg={errUsername}
            />
          )}
          <Button
            onClick={handleBtnClick}
            className="block m-auto w-[22rem] h-12 bg-blue-600 text-white mt-4 rounded-full hover:bg-blue-500"
          >
            Continue
          </Button>
          <div className="w-full border-gray-400 border-t absolute bottom-[4rem]">
            <div className="w-10/12 text-xs text-center text-stone-500 absolute bottom-[-3rem] left-1/2 transform -translate-x-1/2">
              Copyright © 1995-2024 eBay Inc. All Rights Reserved.
              Accessibility, User Agreement, Privacy, Consumer Health Data,
              Payments Terms of Use, Cookies, CA Privacy Notice, Your Privacy
              Choices and AdChoice
            </div>
          </div>
        </div>
      )}
    </>
  );
}
