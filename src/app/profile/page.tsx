"use client";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";

type Props = {};

type responseData = {
  name: string;
  email: string;
  gender: string;
  image: string;
  phone: string;
  birthDate: any;
};

const page = (props: Props) => {
  const { data: session } = useSession();
  const userId = session?.user.id;
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [birthDate, setBirthDate] = useState<any>("");
  const [oldPassword, setOldPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [prevEmail, setprevEmail] = useState<string>("");
  const [newEmail, setNewEmail] = useState<string>("");

  const handleSubmit = (e: any | FormEvent) => {
    //post the data
    // check if email ,password and everything
    e.preventDefault();
    setIsEdit(!isEdit);
    console.log(e.target?.form[6].value);
  };
  const [state, setState] = useState<string>("Bagmati");
  const [address, setAddress] = useState<string>("Lalitpur - 22");
  const handleAddressChange = (e: any) => {
    setAddress(e.target?.value);
  };

  const getUserData = async () => {
    console.log("user id : " + userId);
    if (userId === undefined || userId === null) {
      return;
    }
    const response = await fetch("/api/user", {
      method: "post",
      body: JSON.stringify({ id: userId }),
    });
    // console.log(await response.json());
    const { name, email, gender, image, phone, birthDate }: responseData =
      await response.json();
    setName(name);
    setprevEmail(email);
    setGender(gender);
    setPhone(phone);
    setBirthDate(birthDate.slice(0, 10));
    setAvatar(image);
  };
  useEffect(() => {
    getUserData();
  }, [userId]);

  if (session === undefined) {
    return (
      <div className="h-full w-full overflow-hidden flex justify-center items-center">
        <div className="loader "></div>
      </div>
    );
  }

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
              <div className="flex flex-col items-center justify-center p-5  md:col-start-2 md:col-span-1 md:row-span-5">
                <img
                  className="object-cover w-48 h-48 border rounded-full cursor-pointer hover:opacity-90"
                  src={avatar}
                  alt={name}
                />
              </div>
              {isEdit && (
                <>
                  <h1 className="p-2 my-5 text-2xl font-bold text-center md:text-3xl col-span-2 lg:col-span-1 md:row-span-2">
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
                  <div className="flex  items-center justify-between col-span-2  h-16 px-4 mx-4 font-semibold transition-colors duration-500 cursor-pointer bg-stone-300 md:col-span-1 hover:bg-stone-100 rounded-xl">
                    <h1 className="md:text-base text-sm">Email</h1>
                    <div className="flex items-center h-full text-sm sm:text-base ">
                      <h2 className="mx-1 ">{prevEmail}</h2>
                      <MdOutlineKeyboardArrowRight className="text-3xl" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between h-16 col-span-2 md:col-span-1 px-4 mx-4 font-semibold transition-colors duration-500 cursor-pointer bg-stone-300 hover:bg-stone-100 rounded-xl">
                    <h1 className="md:text-base text-sm">Change Password </h1>
                    <MdOutlineKeyboardArrowRight className="text-3xl " />
                  </div>
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
                          <SelectItem value="Madhesh Pradesh">
                            Madhesh Pradesh
                          </SelectItem>
                          <SelectItem value="Bagmati">Bagmati</SelectItem>
                          <SelectItem value="Gandaki">Gandaki</SelectItem>
                          <SelectItem value="Lumbini">Lumbini</SelectItem>
                          <SelectItem value="Karnali">Karnali</SelectItem>
                          <SelectItem value="Sudurpaschim">
                            Sudurpaschim
                          </SelectItem>
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
              )}
              {!isEdit && (
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

                  <div className="flex items-center justify-between h-16 px-4 mx-4 font-semibold transition-colors duration-500 cursor-pointer bg-stone-300 hover:bg-stone-100 rounded-xl">
                    <h1 className="text-base sm:text-lg">Birth Date </h1>
                    <div className="flex items-center h-full text-sm sm:text-base ">
                      <h2 className="mx-1">{birthDate}</h2>
                      <MdOutlineKeyboardArrowRight className="text-3xl" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between h-16 px-4 mx-4 font-semibold transition-colors duration-500 cursor-pointer bg-stone-300 md:col-span-1 hover:bg-stone-100 rounded-xl">
                    <h1 className="text-base sm:text-lg">Phone</h1>
                    <div className="flex items-center h-full text-sm sm:text-base ">
                      <h2 className="mx-1">+977 {phone}</h2>
                      <MdOutlineKeyboardArrowRight className="text-3xl" />
                    </div>
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="flex items-center justify-between h-16 px-4 mx-4  font-semibold transition-colors duration-500 cursor-pointer bg-stone-300 md:col-span-1 hover:bg-stone-100 rounded-xl">
                        <h1 className="text-base sm:text-lg">Email</h1>
                        <div className="flex items-center h-full text-sm sm:text-base ">
                          <h2 className="mx-1 ">{prevEmail}</h2>
                          <MdOutlineKeyboardArrowRight className="text-3xl" />
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[500px] sm:h-[400px] bg-stone-300 text-stone-800">
                      <DialogHeader>
                        <DialogTitle>Change Email</DialogTitle>
                        <DialogDescription className="text-stone-700">
                          Make changes to your Email here. Click save when
                          you're done.
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
                            type="email"
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
                            type="email"
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

                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="flex items-center justify-between h-16 px-4 mx-4 font-semibold transition-colors duration-500 cursor-pointer bg-stone-300 hover:bg-stone-100 rounded-xl">
                        <h1 className="text-base sm:text-lg">
                          Change Password
                        </h1>
                        <MdOutlineKeyboardArrowRight className="text-3xl" />
                      </div>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[500px] sm:h-[400px] bg-stone-300 text-stone-800">
                      <DialogHeader>
                        <DialogTitle>Change Password</DialogTitle>
                        <DialogDescription className="text-stone-700">
                          Make changes to your password here. Click save when
                          you're done.
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

                  <div className="flex items-center justify-around h-16 px-4 mx-4 my-5 text-lg md:col-span-2">
                    <Button className="transition-colors duration-500 sm:p-6 bg-stone-500 hover:bg-stone-400">
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
              )}

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
