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

  return <></>;
};

export default ShippingInfo;
