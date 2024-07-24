"use client";

import React, { FormEvent, useState } from "react";
import PersonalInfo from "./PersonalInfo";
import ShippingInfo from "./ShippingInfo";
import { FaEdit } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Props = {};

const page = (props: Props) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const handleSubmit = (e: any | FormEvent) => {
    //post the data
    // check if email ,password and everything
    e.preventDefault();
    setIsEdit(!isEdit);
    console.log(e.target?.form[6].value);
  };

  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center py-5 mt-5">
          <h1 className="w-full mb-5 text-2xl font-bold text-center lg:text-4xl md:text-3xl">
            Profile Settings
          </h1>

          <div className=" bg-stone-200 relative rounded-xl w-[90%] flex flex-col  md:w-5/6 xl:w-4/6  2xl:w-1/2    px-2 mt-5">
            {!isEdit && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="absolute cursor-pointer top-5 right-5">
                    <span
                      onClick={() => setIsEdit(!isEdit)}
                      className="text-2xl "
                    >
                      <FaEdit />
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Edit Profile</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}

            <form
              onSubmit={handleSubmit}
              className="grid content-center grid-cols-1 gap-5 pb-16 md:gap-10 md:grid-cols-2"
            >
              <div className="flex flex-col items-center justify-center p-5  md:col-start-2 md:col-span-1 md:row-span-4">
                <img
                  className="object-cover w-48 h-48 border rounded-full cursor-pointer hover:opacity-90"
                  src="https://i.pinimg.com/564x/6a/fc/5c/6afc5c43a5050054d7482202e3b75239.jpg"
                  alt="Cat"
                />
              </div>
              <PersonalInfo isEdit={isEdit} setIsEdit={setIsEdit} />
              <ShippingInfo isEdit={isEdit} setIsEdit={setIsEdit} />
              {isEdit && (
                <div className="border w-full col-span-2 flex justify-center items-center  px-4 ">
                  <button
                    type="submit"
                    className="transition-colors duration-500 p-4 px-10 sm:p-4 sm:px-16 font-semibold text-white rounded-xl bg-stone-500 hover:bg-stone-400"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
