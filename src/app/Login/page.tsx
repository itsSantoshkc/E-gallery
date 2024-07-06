"use client";
import { Separator } from "@/components/ui/separator";
import React, { FormEvent, useRef } from "react";

type Props = {};

const page = (props: Props) => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(emailRef.current?.value, passwordRef.current?.value);
  };
  return (
    <div className="h-full  overflow-y-hidden w-screen flex justify-center items-center">
      <div className=" flex flex-col sm:w-3/4 sm:px-5 md:w-1/2 lg:w-1/3 xl:w-1/4  py-5 w-full  mx-4 rounded-xl bg-stone-200 ">
        <h1 className="w-full  text-3xl text-center mt-4 py-3 font-bold">
          Log In
        </h1>
        <div className=" py-2">
          <h2 className="text-center font-semibold text-stone-600">
            Enter your email and password to log in.
          </h2>
          <h2 className="text-center font-semibold text-stone-600">or</h2>
        </div>
        <div className="w-full text-lg font-semibold    *:p-2">
          <div className=" m-2 rounded-xl transition-colors duration-500 cursor-pointer bg-stone-300 hover:bg-stone-100 ">
            <span className="px-2">Log In With Google</span>
          </div>
          <div className=" m-2 rounded-xl  transition-colors duration-500 cursor-pointer bg-stone-300 hover:bg-stone-100 ">
            <span className="px-2">Log In With Apple</span>
          </div>
        </div>
        <div className="my-3 w-full  flex justify-center items-center">
          <Separator className="bg-stone-400 w-[90%]  " />
        </div>
        <div className="mx-2">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <label
              htmlFor="email"
              className="px-3 my-1 font-bold text-stone-600"
            >
              Email Address
            </label>
            <input
              ref={emailRef}
              type="email"
              name="email"
              className="h-10 px-3 rounded-xl"
              placeholder="Enter Your Password"
            />
            <label
              htmlFor="password"
              className="px-3 font-bold text-stone-600 my-1"
            >
              Password
            </label>
            <div className="relative w-full h-10 flex items-center   rounded-xl">
              <input
                ref={passwordRef}
                type="password"
                name="password"
                className="w-full h-full px-3 rounded-xl"
                placeholder="Enter Your Password"
              />
              <span className="absolute right-5">%</span>
            </div>
            <div className="flex mx-1 m-2 items-center justify-between text-sm font-bold text-stone-600">
              <h2 className=" cursor-pointer hover:text-stone-400 transition-colors duration-500 ">
                Create a new account
              </h2>
              <h2 className=" cursor-pointer hover:text-stone-400 transition-colors duration-500 underline">
                Forgot Password ?
              </h2>
            </div>
            <input
              type="submit"
              value="Log In"
              className="p-3 my-3 text-xl font-bold text-white
              transition-colors duration-500 cursor-pointer rounded-xl bg-stone-500 hover:bg-stone-400
              "
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
