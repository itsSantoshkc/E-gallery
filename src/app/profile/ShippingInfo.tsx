"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  isEdit: boolean;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
};

const ShippingInfo = (props: Props) => {
  const [state, setState] = useState<string>("Bagmati");
  const [address, setAddress] = useState<string>("Lalitpur - 22");
  const handleAddressChange = (e: any) => {
    setAddress(e.target?.value);
  };
  if (props.isEdit) {
    return (
      <>
        <h1 className="w-full text-2xl font-bold text-center md:text-3xl md:col-span-2">
          Shipping Address
        </h1>
        <div className="flex items-center col-span-2 md:col-span-1  mx-4 font-semibold transition-colors duration-500 bg-white cursor-pointer rounded-xl">
          <label className="w-1/5 px-2 text-center ">Province</label>
          <Select defaultValue={state} onValueChange={setState}>
            <SelectTrigger className="w-4/5 h-16 px-4 text-sm border-l border-stone-300 rounded-r-xl sm:text-base">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className=" *:text-sm rounded-xl sm:*:text-base">
                <SelectLabel>Province</SelectLabel>
                <SelectItem value="Province 1">Province 1</SelectItem>
                <SelectItem value="Madhesh Pradesh">Madhesh Pradesh</SelectItem>
                <SelectItem value="Bagmati">Bagmati</SelectItem>
                <SelectItem value="Gandaki">Gandaki</SelectItem>
                <SelectItem value="Lumbini">Lumbini</SelectItem>
                <SelectItem value="Karnali">Karnali</SelectItem>
                <SelectItem value="Sudurpaschim">Sudurpaschim</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center col-span-2 md:col-span-1  mx-4 font-semibold transition-colors duration-500 bg-white cursor-pointer rounded-xl">
          <label className="w-1/5 px-2 text-center ">Address</label>
          <input
            type="text"
            onChange={handleAddressChange}
            className="w-4/5 h-16 px-4 text-sm border-l border-stone-300 rounded-r-xl sm:text-base"
            value={address}
          />
        </div>
      </>
    );
  }
  return (
    <>
      <h1 className="w-full text-2xl font-bold text-center md:text-3xl md:col-span-2">
        Shipping Address
      </h1>

      <div className="flex items-center justify-between h-16 px-4 mx-4 font-semibold transition-colors duration-500 cursor-pointer bg-stone-300 hover:bg-stone-100 rounded-xl">
        <h1 className="text-base sm:text-lg">State</h1>
        <div className="flex items-center h-full text-sm sm:text-base ">
          <h2 className="mx-1">{state}</h2>
          <MdOutlineKeyboardArrowRight className="text-3xl" />
        </div>
      </div>
      <div className="flex items-center justify-between h-16 px-4 mx-4 font-semibold transition-colors duration-500 cursor-pointer bg-stone-300 md:col-span-1 hover:bg-stone-100 rounded-xl">
        <h1 className="text-base sm:text-lg">Address</h1>
        <div className="flex items-center h-full text-sm sm:text-base">
          <h2 className="mx-1">{address}</h2>
          <MdOutlineKeyboardArrowRight className="text-3xl" />
        </div>
      </div>
    </>
  );
};

export default ShippingInfo;
