import { ScrollArea } from "@/components/ui/scroll-area";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import React from "react";
import { Button } from "@/components/ui/button";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center py-5 mt-5">
          <h1 className="w-full mb-5 text-2xl font-bold text-center lg:text-4xl md:text-3xl">
            Profile Settings
          </h1>
          <div className="border bg-stone-200 rounded-xl w-[90%] flex flex-col overflow-hidden md:w-5/6 xl:w-4/6  2xl:w-1/2  max-h-[80vh]  px-2 mt-5">
            <ScrollArea className="h-[80vh]">
              <div className="grid content-center grid-cols-1 gap-5 pb-16 md:gap-10 md:grid-cols-2">
                <div className="flex flex-col items-center justify-center p-5 border md:col-start-2 md:col-span-1 md:row-span-4">
                  <img
                    className="object-cover w-48 h-48 rounded-full cursor-pointer hover:opacity-90"
                    src="https://i.pinimg.com/564x/6a/fc/5c/6afc5c43a5050054d7482202e3b75239.jpg"
                    alt="Cat"
                  />
                </div>
                <h1 className="p-2 my-5 text-2xl font-bold text-center md:text-3xl md:row-span-1">
                  Personal Information
                </h1>
                <div className="flex items-center justify-between h-16 px-4 mx-4 font-semibold transition-colors duration-500 cursor-pointer bg-stone-300 hover:bg-stone-100 rounded-xl">
                  <h1 className="text-base sm:text-lg ">Name</h1>
                  <div className="flex items-center h-full text-sm sm:text-base  ">
                    <h2 className="mx-1">Santosh K.C.</h2>
                    <MdOutlineKeyboardArrowRight className="text-3xl" />
                  </div>
                </div>

                <div className="flex items-center justify-between h-16 px-4 mx-4 font-semibold transition-colors duration-500 cursor-pointer bg-stone-300 hover:bg-stone-100 rounded-xl">
                  <h1 className="text-base sm:text-lg">Gender </h1>
                  <div className="flex items-center h-full text-sm sm:text-base ">
                    <h2 className="mx-1">Male</h2>
                    <MdOutlineKeyboardArrowRight className="text-3xl" />
                  </div>
                </div>
                <div className="flex items-center justify-between h-16 px-4 mx-4 font-semibold transition-colors duration-500 cursor-pointer bg-stone-300 md:col-span-1 hover:bg-stone-100 rounded-xl">
                  <h1 className="text-base sm:text-lg">Email</h1>
                  <div className="flex items-center  h-full text-sm sm:text-base ">
                    <h2 className="mx-1 ">sa******</h2>
                    <MdOutlineKeyboardArrowRight className="text-3xl" />
                  </div>
                </div>
                <div className="flex items-center justify-between h-16 px-4 mx-4 font-semibold transition-colors duration-500 cursor-pointer bg-stone-300 hover:bg-stone-100 rounded-xl">
                  <h1 className="text-base sm:text-lg">Birth Date </h1>
                  <div className="flex items-center h-full text-sm sm:text-base ">
                    <h2 className="mx-1">03/06/2002</h2>
                    <MdOutlineKeyboardArrowRight className="text-3xl" />
                  </div>
                </div>

                <div className="flex items-center justify-between h-16 px-4 mx-4 font-semibold transition-colors duration-500 cursor-pointer bg-stone-300 hover:bg-stone-100 rounded-xl">
                  <h1 className="text-base sm:text-lg">Change Password </h1>
                  <MdOutlineKeyboardArrowRight className="text-3xl" />
                </div>
                <div className="flex items-center justify-between h-16 px-4 mx-4 font-semibold transition-colors duration-500 cursor-pointer bg-stone-300 md:col-span-1 hover:bg-stone-100 rounded-xl">
                  <h1 className="text-base sm:text-lg">Phone</h1>
                  <div className="flex items-center h-full text-sm sm:text-base ">
                    <h2 className="mx-1">+977 9861421989</h2>
                    <MdOutlineKeyboardArrowRight className="text-3xl" />
                  </div>
                </div>
                <div className="flex items-center text-lg justify-around h-16 px-4 mx-4 my-5 md:col-span-2">
                  <Button className="sm:p-6  transition-colors duration-500 bg-stone-500 hover:bg-stone-400">
                    Deactivate
                  </Button>
                  <Button variant={"destructive"} className="sm:p-6 ">
                    Delete Account
                  </Button>
                </div>

                <h1 className="w-full text-2xl font-bold text-center md:text-3xl md:col-span-2">
                  Shipping Address
                </h1>
                <div className="flex items-center justify-between h-16 px-4 mx-4 font-semibold transition-colors duration-500 cursor-pointer bg-stone-300 hover:bg-stone-100 rounded-xl">
                  <h1 className="text-base sm:text-lg">Country</h1>
                  <div className="flex items-center h-full text-sm sm:text-base ">
                    <h2 className="mx-1">Nepal</h2>
                    <MdOutlineKeyboardArrowRight className="text-3xl" />
                  </div>
                </div>
                <div className="flex items-center justify-between h-16 px-4 mx-4 font-semibold transition-colors duration-500 cursor-pointer bg-stone-300 hover:bg-stone-100 rounded-xl">
                  <h1 className="text-base sm:text-lg">State</h1>
                  <div className="flex items-center h-full text-sm sm:text-base ">
                    <h2 className="mx-1">Bagmati</h2>
                    <MdOutlineKeyboardArrowRight className="text-3xl" />
                  </div>
                </div>
                <div className="flex items-center justify-between h-16 px-4 mx-4 font-semibold transition-colors duration-500 cursor-pointer bg-stone-300 md:col-span-2 hover:bg-stone-100 rounded-xl">
                  <h1 className="text-base sm:text-lg">Address</h1>
                  <div className="flex items-center h-full text-sm sm:text-base">
                    <h2 className="mx-1">Bungamati,Lalitpur - 22</h2>
                    <MdOutlineKeyboardArrowRight className="text-3xl" />
                  </div>
                </div>
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
