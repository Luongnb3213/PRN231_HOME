import Input from "../Signin/Input";
import Button from "../Signin/Button";
import * as Yup from "yup";
import { useState } from "react";
import { useRef } from "react";
import ErrorMsg from "../../CommonComponents/Error";
import axios from "axios";
import { urlDev } from "../../../constant/url";
import { requireHeader } from "../../../constant/url";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import LoadingComponent from "../../../Components/LoadingComponent";

const saveTokenToCookie = (accessToken) => {
  Cookies.set("accessToken", accessToken, { expires: 7 });
};

export default function Right(props) {
  const [isLoadingSignup, setIsLoadingSignup] = useState(false);
  const navigate = useNavigate();
  const [msgExist, setMsgExist] = useState("");
  const [msgErr, setMsgErr] = useState({
    firstName: null,
    lastName: null,
    email: null,
    password: null,
  });

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required("Firstname is required")
      .matches(/^[A-Za-z\s]+$/, {
        message: "Firstname only accept alphabet",
        excludeEmptyString: true,
      }),
    lastName: Yup.string()
      .required("Lastname is required")
      .matches(/^[A-Za-z\s]+$/, {
        message: "Firstname only accept alphabet",
        excludeEmptyString: true,
      }),
    email: Yup.string()
      .required("Email is required")
      .email("Please enter an email"),
    password: Yup.string()
      .required("Password is required")
      .min(5, "Password must between 5-10 characters")
      .max(10, "Password must between 5-10 characters"),
  });

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleBtnClick = async () => {
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    setIsLoadingSignup(true);

    try {
      await validationSchema.validate(
        { firstName, lastName, email, password },
        { abortEarly: false }
      );
      setMsgErr({
        firstName: null,
        lastName: null,
        email: null,
        password: null,
      });

      const register = {
        firstName,
        lastName,
        email,
        password,
      };

      const headers = {
        "X-Header-Required": requireHeader,
        "Content-Type": "application/json",
      };

      axios
        .post(`${urlDev}/prn-authen/api/Auth/register`, register, { headers })
        .then((response) => {
          const params = {
            username: response.data.response.username,
            password: register.password,
            rememberMe: false,
          };
          setIsLoadingSignup(false);

          axios
            .post(urlDev + "/prn-authen/api/Auth/login", params, { headers })
            .then((response) => {
              const token = response.data.response.accessToken;
              saveTokenToCookie(token);
              navigate("/");
            })
            .catch((error) => {
              // setMsgErr(error.response.data.Detail);
            });
        })
        .catch((err) => {
          setIsLoadingSignup(false);
          setMsgExist(err.response.data.Detail);
        });
    } catch (err) {
      const errors = {
        firstName: null,
        lastName: null,
        email: null,
        password: null,
      };

      err.inner.forEach((error) => {
        errors[error.path] = error.message;
      });

      setMsgErr(errors);
    }
  };
  return (
    <div className="flex-grow">
      {isLoadingSignup && <LoadingComponent />}
      <div className=" w-[25.75rem] m-auto mt-6">
        <h1 className="text-3xl font-medium mb-5">Create an account</h1>
        <div className="border border-stone-600 w-full h-[2.4rem] rounded-full p-[0.15rem] flex justify-between">
          <div className="bg-stone-950 w-[12.5rem] h-8 rounded-full align-middle text-center">
            <span className="text-white line leading-8 text-sm">Hello</span>
          </div>
          <div className="w-[12.5rem] h-8 rounded-full align-middle text-center">
            <span className="text-stone-950 line leading-8 text-sm">
              world!
            </span>
          </div>
        </div>
        <div className="flex justify-between my-4">
          <div className="w-[12.5rem]">
            <Input
              ref={firstNameRef}
              className="w-[12.5rem] h-11 border border-stone-500 rounded-lg px-3 text-sm"
              placeholder="First name"
            />

            {msgErr.firstName && (
              <ErrorMsg
                className="block m-auto w-[22rem] mt-3 text-sm text-red-600"
                msg={msgErr.firstName}
              />
            )}
          </div>
          <div className="w-[12.5rem]">
            <Input
              ref={lastNameRef}
              className="w-[12.5rem] h-11 border border-stone-500 rounded-lg px-3 text-sm"
              placeholder="Last name"
            />

            {msgErr.lastName && (
              <ErrorMsg
                className="block m-auto w-[22rem] mt-3 text-sm text-red-600"
                msg={msgErr.lastName}
              />
            )}
          </div>
        </div>
        <Input
          ref={emailRef}
          className="block m-auto w-[25.5rem] h-11 border border-stone-500 rounded-lg px-3 text-sm my-4"
          placeholder="Email"
        />

        {msgErr.email && (
          <ErrorMsg
            className="block w-[22rem] mt-3 text-sm text-red-600"
            msg={msgErr.email}
          />
        )}

        <Input
          ref={passwordRef}
          className="block m-auto w-[25.5rem] h-11 border border-stone-500 rounded-lg px-3 text-sm my-4"
          placeholder="Password"
          type="password"
        />

        {msgErr.password && (
          <ErrorMsg
            className="block w-[22rem] mt-3 text-sm text-red-600"
            msg={msgErr.password}
          />
        )}

        <div className="w-full">
          <span className="text-[0.8rem] font-normal text-stone-500">
            By selecting
          </span>
          <span> </span>
          <span className="text-[0.8rem] font-normal text-stone-900">
            Create personal account,
          </span>
          <span> </span>
          <span className="text-[0.8rem] font-normal text-stone-500">
            you agree to our
          </span>
          <span> </span>
          <span className="text-[0.8rem] font-normal text-stone-500 underline">
            User Agreement
          </span>
          <span> </span>
          <span className="text-[0.8rem] font-normal text-stone-500">
            and acknowledge reading our
          </span>
          <span> </span>
          <span className="text-[0.8rem] font-normal text-stone-500 underline">
            User Privacy Notice.
          </span>
        </div>

        {msgExist && (
          <ErrorMsg
            className="block w-[22rem] mt-3 text-sm text-red-600"
            msg={msgExist}
          />
        )}

        <Button
          onClick={handleBtnClick}
          className="block m-auto w-full h-12 bg-blue-600 text-white mt-4 rounded-full hover:bg-blue-500"
        >
          Create account
        </Button>
        <div className="flex items-center justify-center w-full h-auto m-auto">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="my-7 mx-4 text-xs text-stone-700 font-normal">
            or
          </span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <Button className="block m-auto w-full h-12 border border-stone-700 text-stone-700 rounded-full hover:opacity-80">
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
      </div>
    </div>
  );
}
