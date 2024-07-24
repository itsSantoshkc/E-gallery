"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { FaEdit } from "react-icons/fa";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Props = {
  isEdit: boolean;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
};

const PersonalInfo = (props: Props) => {
  //Get user data using useEffect and store them
  //Use ref instead of use state so the value doesn't change on refresh

  //Change user email and password with modal

  const [name, setName] = useState<string>("Santosh");
  const [phone, setPhone] = useState<string>("9861421989");
  const [gender, setGender] = useState<string>("Male");
  const [birthDate, setBirthDate] = useState<any>("2069-03-06");
  const [oldPassword, setOldPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [prevEmail, setprevEmail] = useState<string>("");
  const [newEmail, setNewEmail] = useState<string>("");

  if (props.isEdit) {
    return (
      <>
        <h1 className="p-2 my-5 text-2xl font-bold text-center md:text-3xl col-span-2 lg:col-span-1 md:row-span-1">
          Personal Information
        </h1>

        <div className="flex  items-center mx-4 font-semibold col-span-2 md:col-span-1 transition-colors duration-500 bg-white cursor-pointer rounded-xl">
          <label className="w-1/5 px-2   text-center md:text-base text-sm ">
            Name
          </label>
          <input
            type="text"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setName(e.target?.value)
            }
            className="w-4/5 h-16 px-4 text-sm border-l border-stone-300 rounded-r-xl sm:text-base"
            value={name}
          />
        </div>

        <div className="flex items-center mx-4  col-span-2 md:col-span-1 font-semibold transition-colors duration-500 bg-white cursor-pointer rounded-xl">
          <label className="w-1/5 px-2 text-center md:text-base text-sm ">
            Gender
          </label>
          <Select defaultValue={gender} onValueChange={setGender}>
            <SelectTrigger className="w-4/5 h-16 px-4 text-sm border-l border-stone-300 rounded-r-xl sm:text-base">
              <SelectValue placeholder="Select a Gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className=" *:text-sm rounded-xl sm:*:text-base">
                <SelectLabel>Gender</SelectLabel>
                <SelectItem value="Male">Male</SelectItem>
                <SelectItem value="Female">Female</SelectItem>
                <SelectItem value="Others">Other</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex  items-center justify-between col-span-2  h-16 px-4 mx-4 font-semibold transition-colors duration-500 cursor-pointer bg-stone-300 md:col-span-1 hover:bg-stone-100 rounded-xl">
          <h1 className="md:text-base text-sm">Email</h1>
          <div className="flex items-center h-full text-sm sm:text-base ">
            <h2 className="mx-1 ">sa******</h2>
            <MdOutlineKeyboardArrowRight className="text-3xl" />
          </div>
        </div>
        <div className="flex items-center mx-4 font-semibold transition-colors col-span-2 md:col-span-1 duration-500 bg-white cursor-pointer rounded-xl">
          <label className="w-1/5 px-1 md:px-2  text-center md:text-base text-sm  ">
            Birth
          </label>
          <input
            type="date"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setBirthDate(e.target.value);
            }}
            className="w-4/5 h-16 px-4 text-sm border-l border-stone-300 rounded-r-xl sm:text-base"
            value={birthDate}
          />
        </div>

        <div className="flex items-center justify-between h-16 col-span-2 md:col-span-1 px-4 mx-4 font-semibold transition-colors duration-500 cursor-pointer bg-stone-300 hover:bg-stone-100 rounded-xl">
          <h1 className="md:text-base text-sm">Change Password </h1>
          <MdOutlineKeyboardArrowRight className="text-3xl " />
        </div>

        <div className="flex  items-center mx-4 font-semibold col-span-2 md:col-span-1 transition-colors duration-500 bg-white cursor-pointer rounded-xl">
          <label className="w-1/5 px-1 md:px-2  text-center md:text-base text-sm ">
            Phone
          </label>
          <input
            type="text"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPhone(e.target.value)
            }
            className="w-4/5 h-16 px-4 text-sm border-l border-stone-300 rounded-r-xl sm:text-base"
            value={phone}
          />
        </div>
      </>
    );
  }
  return (
    <>
      <h1 className="p-2 my-5 text-2xl font-bold text-center md:text-3xl  md:row-span-2">
        Personal Information
      </h1>
      <div className="flex items-center justify-between h-16 px-4 mx-4 font-semibold transition-colors duration-500 cursor-pointer bg-stone-300 hover:bg-stone-100 rounded-xl">
        <h1 className="text-base sm:text-lg ">Name</h1>
        <div className="flex items-center h-full text-sm sm:text-base ">
          <h2 className="mx-1">{name}</h2>
          <MdOutlineKeyboardArrowRight className="text-3xl" />
        </div>
      </div>

      <div className="flex items-center justify-between h-16 px-4 mx-4 font-semibold transition-colors duration-500 cursor-pointer bg-stone-300 hover:bg-stone-100 rounded-xl">
        <h1 className="text-base sm:text-lg">Gender </h1>
        <div className="flex items-center h-full text-sm sm:text-base ">
          <h2 className="mx-1">{gender}</h2>
          <MdOutlineKeyboardArrowRight className="text-3xl" />
        </div>
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <div className="flex items-center justify-between h-16 px-4 mx-4  font-semibold transition-colors duration-500 cursor-pointer bg-stone-300 md:col-span-1 hover:bg-stone-100 rounded-xl">
            <h1 className="text-base sm:text-lg">Email</h1>
            <div className="flex items-center h-full text-sm sm:text-base ">
              <h2 className="mx-1 ">sa******</h2>
              <MdOutlineKeyboardArrowRight className="text-3xl" />
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px] sm:h-[400px] bg-stone-300 text-stone-800">
          <DialogHeader>
            <DialogTitle>Change Email</DialogTitle>
            <DialogDescription className="text-stone-700">
              Make changes to your Email here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-2  py-2">
            <div className="grid grid-cols-4 items-center ">
              <label
                htmlFor="curretn-email"
                className="text-bg px-2 col-span-4 font-semibold"
              >
                Current Email Address
              </label>
              <input
                placeholder="Enter your current email address"
                id="current-email"
                value={prevEmail}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setprevEmail(e.target.value)
                }
                className="col-span-4 px-4 border  rounded-xl h-12"
              />
            </div>
            <div className="grid grid-cols-4 items-center ">
              <label
                id="new-email"
                className="text-bg px-2 font-semibold col-span-4"
              >
                New Email Address
              </label>
              <input
                id="new-email"
                placeholder="Enter your new email address"
                value={newEmail}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setNewEmail(e.target.value)
                }
                className="col-span-4 px-4 border  rounded-xl h-12  "
              />
            </div>
          </div>
          <DialogFooter>
            <button
              className="bg-stone-500 rounded-xl py-4 sm:py-0 px-2 text-white font-semibold hover:bg-stone-400 transition-colors duration-300"
              type="submit"
            >
              Save changes
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="flex items-center justify-between h-16 px-4 mx-4 font-semibold transition-colors duration-500 cursor-pointer bg-stone-300 hover:bg-stone-100 rounded-xl">
        <h1 className="text-base sm:text-lg">Birth Date </h1>
        <div className="flex items-center h-full text-sm sm:text-base ">
          <h2 className="mx-1">{birthDate}</h2>
          <MdOutlineKeyboardArrowRight className="text-3xl" />
        </div>
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <div className="flex items-center justify-between h-16 px-4 mx-4 font-semibold transition-colors duration-500 cursor-pointer bg-stone-300 hover:bg-stone-100 rounded-xl">
            <h1 className="text-base sm:text-lg">Change Password </h1>
            <MdOutlineKeyboardArrowRight className="text-3xl" />
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px] sm:h-[400px] bg-stone-300 text-stone-800">
          <DialogHeader>
            <DialogTitle>Change Password</DialogTitle>
            <DialogDescription className="text-stone-700">
              Make changes to your password here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-2  py-2">
            <div className="grid grid-cols-4 items-center ">
              <label
                htmlFor="old-password"
                className="text-bg px-2 col-span-4 font-semibold"
              >
                Current password
              </label>
              <input
                placeholder="Enter your old password"
                id="old-password"
                type="password"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setOldPassword(e.target.value)
                }
                value={oldPassword}
                className="col-span-4 px-4 border  rounded-xl h-12"
              />
            </div>
            <div className="grid grid-cols-4 items-center ">
              <label
                htmlFor="new-password"
                className="text-bg px-2 font-semibold col-span-4"
              >
                New Password
              </label>
              <input
                type="password"
                id="new-password"
                placeholder="Enter your new password "
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setNewPassword(e.target.value)
                }
                value={newPassword}
                className="col-span-4 px-4 border  rounded-xl h-12  "
              />
            </div>
          </div>
          <DialogFooter>
            <button
              className="bg-stone-500 rounded-xl py-4 sm:py-0 px-2 text-white font-semibold hover:bg-stone-400 transition-colors duration-300"
              type="submit"
            >
              Save changes
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="flex items-center justify-between h-16 px-4 mx-4 font-semibold transition-colors duration-500 cursor-pointer bg-stone-300 md:col-span-1 hover:bg-stone-100 rounded-xl">
        <h1 className="text-base sm:text-lg">Phone</h1>
        <div className="flex items-center h-full text-sm sm:text-base ">
          <h2 className="mx-1">+977 {phone}</h2>
          <MdOutlineKeyboardArrowRight className="text-3xl" />
        </div>
      </div>
      <div className="flex items-center justify-around h-16 px-4 mx-4 my-5 text-lg md:col-span-2">
        <Button className="transition-colors duration-500 sm:p-6 bg-stone-500 hover:bg-stone-400">
          Deactivate
        </Button>
        <Button variant={"destructive"} className="sm:p-6 ">
          Delete Account
        </Button>
      </div>
    </>
  );
};

export default PersonalInfo;
