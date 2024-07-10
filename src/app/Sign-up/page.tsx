"use client";
import { Separator } from "@/components/ui/separator";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="h-full  overflow-y-hidden w-screen flex justify-center items-center">
      <div className=" flex   flex-col sm:w-3/4 sm:px-5 md:w-1/2 lg:w-1/3 xl:w-1/4  py-5 w-full  mx-4 rounded-xl bg-stone-200 ">
        <h1 className="w-full  text-3xl text-center mt-4 py-3 font-bold">
          Sign Up
        </h1>
        <div className=" py-2">
          <h2 className="text-center font-semibold text-stone-600">
            Enter your email and password to Sign Up
          </h2>
          <h2 className="text-center font-semibold text-stone-600">Or</h2>
        </div>
        <div className="w-full text-lg font-semibold    *:p-3 *:md:p-3">
          <div className=" m-2  border rounded-xl transition-colors duration-500 cursor-pointer bg-stone-300 hover:bg-stone-100 ">
            <span className="px-2  ">Sign In With Google</span>
          </div>
          <div className=" m-2 rounded-xl  transition-colors duration-500 cursor-pointer bg-stone-300 hover:bg-stone-100 ">
            <span className="px-2">Sign In With Apple</span>
          </div>
        </div>

        <div className="my-3 w-full  flex justify-center items-center">
          <Separator className="bg-stone-400 w-[90%]  " />
        </div>
        <div className="mx-2">
          <form className="flex flex-col ">
            <label
              htmlFor="email"
              className="px-3 my-1 font-bold text-stone-600"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              className="h-12 px-3 rounded-xl"
              placeholder="Enter Your Password"
            />
            <label
              htmlFor="password"
              className="px-3 font-bold text-stone-600 my-1"
            >
              Password
            </label>
            <div className="relative w-full h-12 flex items-center   rounded-xl">
              <input
                type="password"
                name="password"
                className="w-full h-full px-3 rounded-xl"
                placeholder="Enter Your Password"
              />
              <span className="absolute right-5">%</span>
            </div>
            <label
              htmlFor="Re-password"
              className="px-3 font-bold text-stone-600 my-1"
            >
              Re-Type Password
            </label>
            <div className="relative w-full h-12 flex items-center   rounded-xl">
              <input
                type="password"
                name="Re-password"
                className="w-full h-full px-3 rounded-xl"
                placeholder="Re-type Your Password"
              />
              <span className="absolute right-5">%</span>
            </div>
            <div className="flex mx-1 m-2 pt-3 items-center  *:px-2 text-sm font-bold text-stone-600">
              <h2 className=" cursor-pointer hover:text-stone-400 transition-colors duration-500 ">
                Already Have a account?
              </h2>
            </div>
            <input
              type="submit"
              value="Log In"
              className="p-3 my-6 text-xl font-bold text-white
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
