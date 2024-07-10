"use client";
import React, { useEffect, useState } from "react";
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
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import SideCart from "./SideCart";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {};

const Navbar = (props: Props) => {
  const [showSearch, setShowSearch] = useState<boolean>(false);

  const user = false;
  return (
    <div className="w-full fixed z-[999]    bg-white  h-16">
      <div className="w-full h-16 border-b">
        {/* Add this later sticky top-0 and add feature that nava bar
    changes color when scrolled if hero is dark coloured   */}
        <ul className="flex items-center justify-between h-full mx-5 text-black md:mx-7 md:justify-between ">
          <li className="flex items-center justify-center w-auto h-full text-2xl font-bold cursor-pointer md:m-5 lg:m-10">
            <Link href={"/"}>E-gallery</Link>
          </li>
          <li className="items-center justify-center hidden w-1/2 md:h-2/4 lg:h-2/3 xl:w-2/6 md:flex">
            <input
              type="search"
              placeholder="Search Artworks"
              className="items-center w-full h-full p-2 border border-r-0 border-black rounded-l-full xl:p-5 focus:border-none "
            />
            <IoSearch className="w-16 h-full p-1 mr-6 transition-colors duration-500 border border-black rounded-r-full cursor-pointer hover:text-white hover:bg-slate-800 " />
          </li>
          <li className="flex flex-row items-center justify-around h-full w-36 md:m-10">
            {!user && (
              <div className="flex items-center md:mr-2 h-1/2 ">
                <Link href={"/Login"}>
                  <Button className="m-0 bg-stone-500 hover:bg-stone-400 rounded-xl md:mr-2">
                    Log In
                  </Button>
                </Link>
                <Link href={"/Sign-up"}>
                  <Button className="hidden md:mr-2 bg-stone-500 hover:bg-stone-400 rounded-xl md:block">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
            {user && (
              <>
                <SideCart />
                <IoSearch
                  onClick={() => setShowSearch(!showSearch)}
                  className="w-8 h-10 px-1 rounded-lg cursor-pointer md:hidden hover:border hover:scale-105"
                />
                <Popover>
                  <PopoverTrigger>
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    {/* {user ? (
                    <img
                      src="./pfp2.jpg"
                      className="hidden rounded-full md:block h-9 w-9"
                    />
                  ) : (
                    ""
                  )} */}
                  </PopoverTrigger>
                  <PopoverContent className="flex justify-center mr-2 md:mr-5 w-52 ">
                    <div className="flex flex-col items-center justify-center w-full m-auto ">
                      <h4 className="text-xl font-semibold">
                        Profile Settings
                      </h4>
                      <Separator className="my-2" />
                      <div className="w-full py-2 my-1 font-medium text-center transition-colors duration-500 hover:bg-stone-500 text-md hover:text-white">
                        <Link href={"/profile"}>Manage Profile</Link>
                      </div>
                      <div className="w-full py-2 my-1 font-medium text-center transition-colors duration-500 text-md hover:bg-stone-500 hover:text-white">
                        <Link href={"/orders"}>Manage Orders</Link>
                      </div>
                      <div className="w-full py-2 my-1 font-medium text-center transition-colors duration-500 cursor-pointer text-md hover:bg-stone-500 hover:text-white">
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

      <div
        onClick={() => {
          setShowSearch(!showSearch);
        }}
        className={` md:hidden fixed  z-[9999] min-w-[100vw] max-w-[100vw]  min-h-screen max-h-screen  flex justify-center transition-bg-opacity  duration-200 items-center  bg-black  ${
          showSearch ? "left-0 bg-opacity-50 " : "-left-full bg-opacity-0"
        } `}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex items-center justify-center w-5/6 "
        >
          <input
            type="search"
            className={` h-16  z-[999]  w-5/6 p-5 transition-all border  duration-200 ease-in-out bg-white  rounded-l-xl ${
              showSearch
                ? "-translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            } `}
            placeholder="Search Artworks"
          />
          <Button
            className={`h-full p-3 rounded-l-none transition-all   duration-200   hover:bg-gray-200 border-l rounded-r-2xl bg-white text-black ${
              showSearch
                ? "-translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            } }`}
          >
            <IoSearch className="h-10 text-2xl text-black" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
