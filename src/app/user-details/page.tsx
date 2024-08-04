"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type Props = {};

const page = (props: Props) => {
  const [gender, setGender] = useState<string>("Male");
  const [state, setState] = useState<string>("");
  const tabContainer = useRef<HTMLFormElement>(null);

  //Swiping error can be fixed with fixed width in every media screen

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const userDetails = {
      name: e.target.form[0].value + " " + e.target.form[1].value,
      birthDate: e.target.form[2].value,
      gender: e.target.form[5].value,
      phone: e.target.form[6].value,
      province: e.target.form[9].value,
      address: e.target.form[10].value,
    };

    console.log(userDetails);
  };

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

  return (
    <div className="h-full max-w-[100vw] w-full flex text-stone-600 justify-center items-center">
      <div className=" flex overflow-hidden flex-col sm:w-3/4 sm:px-5 md:w-[768px] py-5 w-full  mx-4 rounded-xl bg-stone-200 ">
        <h1 className="w-full  text-3xl text-center  mt-4 pt-3 font-bold">
          User Details
        </h1>

        <div className="py-1">
          <h2 className="text-center font-semibold ">
            *Please provide your valid information
          </h2>
        </div>
        <form
          onSubmit={handleSubmit}
          method="post"
          ref={tabContainer}
          className="  w-full items-center transition-transform -translate-x-0  duration-300 flex"
        >
          <div className="min-w-full  flex h-full items-center flex-col justify-center w-full ">
            <h1 className="font-bold text-2xl mb-4">Basic Details</h1>
            <div className="flex justify-center items-center flex-col w-[80%] ">
              <div className="flex flex-col w-full">
                <label
                  className="px-3 pb-1 pt-3 lg:pb-2 lg:text-lg font-semibold"
                  htmlFor="first-name"
                >
                  First Name
                </label>
                <input
                  placeholder="Enter your first name"
                  type="text"
                  name="first-name"
                  id="first-name"
                  className="h-10 rounded-xl md:h-12 lg:h-14 px-3 font-semibold"
                />
              </div>
              <div className="flex flex-col w-full">
                <label
                  className="px-3 pb-1 pt-3  lg:pb-2 lg:text-lg font-semibold"
                  htmlFor="last-name"
                >
                  Last Name
                </label>
                <input
                  placeholder="Enter your last name"
                  type="text"
                  name="last-name"
                  id="last-name"
                  className="h-10 rounded-xl md:h-12 lg:h-14  px-3 font-semibold"
                />
              </div>
              <div className="flex flex-col w-full">
                <label
                  className="px-3 pb-1 pt-3 lg:pb-2 lg:text-lg font-semibold"
                  htmlFor="birth-date"
                >
                  Birth Date
                </label>
                <input
                  type="date"
                  name="birth-date"
                  id="birth-date"
                  className="h-10 rounded-xl md:h-12 lg:h-14  px-3 font-semibold"
                />
              </div>
              <div className="flex flex-col w-full py-4  justify-center items-center">
                <button
                  className="bg-stone-600 font-semibold flex items-center justify-center *:mx-2 lg:text-lg text-white h-12 px-3 py-3 rounded-xl w-1/2"
                  type="button"
                  onClick={() => handleNext(1)}
                >
                  Next <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
          <div className="min-w-full  border flex h-full items-center flex-col justify-center w-full ">
            <div className="flex items-center w-[80%] mb-2">
              <div
                className="flex  text-lg font-semibold cursor-pointer items-center hover:text-stone-500 justify-center *:mx-2 lg:text-lg"
                onClick={() => handleBack(0)}
              >
                <FaArrowLeft /> Back
              </div>
            </div>

            <div className="flex justify-center items-center flex-col w-[80%] ">
              <div className="flex flex-col w-full">
                <label
                  className="px-3 pb-1 pt-3 lg:pb-2 lg:text-lg font-semibold"
                  htmlFor=""
                >
                  Gender
                </label>
                <Select defaultValue={gender} onValueChange={setGender}>
                  <SelectTrigger className="h-10 rounded-xl md:h-12 lg:h-14  px-3 font-semibold">
                    <SelectValue placeholder="Select a Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup className=" rounded-xl ">
                      <SelectLabel>Gender</SelectLabel>
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                      <SelectItem value="Others">Other</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col w-full">
                <label
                  className="px-3 pb-1 pt-3 lg:pb-2 lg:text-lg font-semibold"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Enter your phone number"
                  className="h-10 rounded-xl md:h-12 lg:h-14  px-3 font-semibold"
                />
              </div>

              <div className="flex  flex-col w-full py-4  justify-center items-center">
                <button
                  type="button"
                  className="bg-stone-600 font-semibold flex items-center justify-center *:mx-2 lg:text-lg text-white h-12 px-3 py-3 rounded-xl w-1/2"
                  onClick={() => handleNext(2)}
                >
                  Next <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
          <div className="min-w-full  border flex h-full items-center flex-col justify-center w-full ">
            <div className="flex items-center w-[80%] mb-2">
              <div
                className="flex  text-lg font-semibold cursor-pointer items-center hover:text-stone-500 justify-center *:mx-2 lg:text-lg"
                onClick={() => handleBack(1)}
              >
                <FaArrowLeft /> Back
              </div>
            </div>

            <div className="flex justify-center items-center flex-col w-[80%] ">
              <div className="flex flex-col w-full">
                <label
                  className="px-3 pb-1 pt-3 lg:pb-2 lg:text-lg font-semibold"
                  htmlFor=""
                >
                  Province
                </label>
                <Select defaultValue={state} onValueChange={setState}>
                  <SelectTrigger className="h-10 rounded-xl md:h-12 lg:h-14  px-3 font-semibold">
                    <SelectValue placeholder="Select a Province" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup className="  rounded-xl ">
                      <SelectLabel>Province</SelectLabel>
                      <SelectItem value="Province 1">Province 1</SelectItem>
                      <SelectItem value="Madhesh Pradesh">
                        Madhesh Pradesh
                      </SelectItem>
                      <SelectItem value="Bagmati">Bagmati</SelectItem>
                      <SelectItem value="Gandaki">Gandaki</SelectItem>
                      <SelectItem value="Lumbini">Lumbini</SelectItem>
                      <SelectItem value="Karnali">Karnali</SelectItem>
                      <SelectItem value="Sudurpaschim">Sudurpaschim</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col w-full">
                <label
                  className="px-3 pb-1 pt-3 lg:pb-2 lg:text-lg font-semibold"
                  htmlFor="address"
                >
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Enter your address"
                  className="h-10 rounded-xl md:h-12 lg:h-14  px-3 font-semibold"
                />
              </div>
              <div className="flex flex-col w-full py-4  justify-center items-center">
                <button
                  className="bg-stone-600 font-semibold flex items-center justify-center *:mx-2 lg:text-lg text-white h-12 px-3 py-3 rounded-xl w-1/2"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
