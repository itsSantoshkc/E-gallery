"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useRef } from "react";

type Props = {};

const page = (props: Props) => {
  const tabContainer = useRef<HTMLFormElement>(null);

  const handleNext = (index: number) => {
    console.log(tabContainer.current?.clientWidth);
    if (tabContainer.current) {
      tabContainer.current.style.transform = `translateX(-${
        tabContainer.current?.clientWidth * index
      }px)`;
    }
  };
  const handleBack = (index: number) => {
    console.log(tabContainer.current?.clientWidth);
    if (tabContainer.current) {
      tabContainer.current.style.transform = `translateX(-${
        tabContainer.current?.clientWidth * index
      }px)`;
    }
  };

  //Name,gender,phone,birth date,province,address
  return (
    <div className="h-full  overflow-hidden  w-full flex justify-center items-center">
      <div className=" flex overflow-x-hidden flex-col sm:w-3/4 sm:px-5 md:w-1/2 lg:w-1/3 xl:w-1/4   py-5 w-full  mx-4 rounded-xl bg-stone-200 ">
        <h1 className="w-full  text-3xl text-center mt-4 py-3 font-bold">
          User information
        </h1>

        <div className=" py-2">
          <h2 className="text-center font-semibold text-stone-600">
            Provide your valid information
          </h2>
        </div>
        <form
          ref={tabContainer}
          className="  w-full border-l-green-300  border   items-center transition-transform duration-300 flex"
        >
          <span className="min-w-full flex h-full items-center flex-col justify-center w-full ">
            <div>Item 1</div>
            <Button type="button" onClick={() => handleNext(1)}>
              Next
            </Button>
          </span>
          <span className=" min-w-full w-full  flex h-full items-center flex-col justify-center">
            <Button
              type="button"
              className="w-full"
              onClick={() => handleBack(0)}
            >
              Click Back
            </Button>
            <div>Item 2</div>

            <Button type="button" onClick={() => handleNext(2)}>
              Click Next
            </Button>
          </span>
          <span className="min-w-full  w-full flex h-full items-center flex-col justify-center ">
            <div>Item 3</div>
            <Button type="button" onClick={() => handleBack(1)}>
              Click Back Again
            </Button>
          </span>
        </form>
      </div>
    </div>
  );
};

export default page;
