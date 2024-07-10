import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Separator } from "@/components/ui/separator";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="h-full  overflow-y-hidden w-screen flex justify-center items-center">
      <div className=" flex flex-col items-center h-1/2 sm:w-3/4 sm:px-5 md:w-1/2 lg:w-1/2 xl:w-1/3 2xl:w-1/4  py-5 w-full  mx-4 rounded-xl bg-stone-200 ">
        <h1 className="w-full  text-3xl text-center mt-4 py-3 font-bold">
          Security Login
        </h1>
        <div className=" py-2">
          <h2 className="text-center font-semibold text-stone-600">
            Enter a 6-digit login code send to your email
          </h2>
        </div>

        <div className="mt-3 w-full  flex justify-center items-center">
          <Separator className="bg-stone-400 w-[90%]  " />
        </div>
        <div className="mx-2 flex h-full mt-5 flex-col ">
          <div className="flex  h-full    justify-center items-center ">
            <InputOTP maxLength={6}>
              <InputOTPGroup className="*:border *:md:text-3xl *:text-2xl *:p-6 *:md:p-7  *:border-stone-400">
                <InputOTPSlot index={0} className="" />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup className="*:border *:md:text-3xl *:text-2xl *:p-6 *:md:p-7 *:border-stone-400">
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>
          <Button
            className="p-3 py-7  text-xl font-bold text-white
          transition-colors duration-500 cursor-pointer rounded-xl bg-stone-500 hover:bg-stone-400
          "
          >
            Proceed
          </Button>
        </div>
      </div>
    </div>
  );
};

export default page;
