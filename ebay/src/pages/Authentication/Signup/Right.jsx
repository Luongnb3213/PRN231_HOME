import Input from "../Signin/Input";
import Button from "../Signin/Button";
export default function Right() {
  return (
    <div className="flex-grow">
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
          <Input
            className="w-[12.5rem] h-11 border border-stone-500 rounded-lg px-3 text-sm"
            placeholder="First name"
          />
          <Input
            className="w-[12.5rem] h-11 border border-stone-500 rounded-lg px-3 text-sm"
            placeholder="Last name"
          />
        </div>
        <Input
          className="block m-auto w-[25.5rem] h-11 border border-stone-500 rounded-lg px-3 text-sm my-4"
          placeholder="Email"
        />
        <Input
          className="block m-auto w-[25.5rem] h-11 border border-stone-500 rounded-lg px-3 text-sm my-4"
          placeholder="Password"
          type="password"
        />
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
        <Button className="block m-auto w-full h-12 bg-blue-600 text-white mt-4 rounded-full hover:bg-blue-500">
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
