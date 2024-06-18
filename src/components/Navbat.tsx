"use client";
import React from "react";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import SideCart from "./SideCart";
import { Button } from "@/components/ui/button";

type Props = {};

const Navbar = (props: Props) => {
  const user = false;
  return (
    <div className="w-full  h-16">
      {" "}
      {/* Add this later sticky top-0 and add feature that nava bar
    changes color when scrolled if hero is dark coloured   */}
      <ul className="flex items-center justify-between h-full mx-5 md:mx-7 text-black md:justify-between ">
        <li className="flex items-center w-20 h-full md:hidden">
          <Sheet key={"left"}>
            <SheetTrigger>
              <HiOutlineBars3BottomLeft className=" md:hidden h-7 w-7" />
            </SheetTrigger>
            <SheetContent side={"left"}>
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi voluptatem perferendis, officiis optio eius earum
                  distinctio adipisci temporibus deserunt nesciunt incidunt odio
                  fuga sed velit, ratione voluptate modi. Illo, officia.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </li>

        <li className="flex items-center justify-center w-auto h-full text-2xl font-bold md:m-10">
          E-gallery
        </li>
        <li className="items-center justify-center hidden w-1/2 md:h-2/4 lg:h-2/3 xl:w-2/6 md:flex">
          <input
            type="search"
            placeholder="Search Artworks"
            className="items-center w-full h-full p-2 border border-r-0 border-black rounded-l-full  xl:p-5 focus:border-none "
          />
          <IoSearch className="w-16 h-full p-1 mr-6 transition-colors duration-500 border border-black rounded-r-full cursor-pointer hover:text-white hover:bg-slate-800 " />
        </li>
        <li className="flex flex-row items-center justify-around w-36 h-full md:m-10">
          {!user && (
            <div className="flex md:mr-2 h-1/2 items-center ">
              <Button className="m-0 md:mr-2">Log In</Button>
              <Button className="md:mr-2 hidden md:block">Sign In</Button>
            </div>
          )}
          {user && (
            <>
              <SideCart />
              <IoSearch className="w-8 h-10 px-1 rounded-lg cursor-pointer md:hidden hover:border hover:scale-105" />
              <Popover>
                <PopoverTrigger>
                  <img
                    src="./pfp2.jpg"
                    className="hidden rounded-full md:block h-9 w-9"
                  />
                </PopoverTrigger>
                <PopoverContent className="flex justify-center w-52">
                  <div className="flex flex-col items-center justify-center w-full m-auto ">
                    <h4 className="text-xl font-semibold">Profile Settings</h4>
                    <Separator className="my-2" />
                    <div className="flex justify-center w-full p-2 m-auto my-1 font-medium transition-colors duration-500 text-md hover:bg-slate-800 hover:text-white">
                      Manage Profile
                    </div>
                    <div className="flex justify-center w-full p-2 m-auto my-1 font-medium transition-colors duration-500 text-md hover:bg-slate-800 hover:text-white">
                      Manage Orders
                    </div>
                    <div className="flex justify-center w-full p-2 m-auto my-1 font-medium transition-colors duration-500 text-md hover:bg-slate-800 hover:text-white">
                      Log Out
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
