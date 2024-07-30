"use client";
import React, { FormEvent, useRef } from "react";
import { FaCamera } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import NewImage from "./newImage";

type Props = {};

const page = (props: Props) => {
  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formRef);
    if (formRef.current === null || formRef.current === undefined) {
      return;
    }

    console.log(formRef.current[0]);
    console.log(formRef.current[1]);
    console.log(formRef.current[2]);
    console.log(formRef.current[3]);
    console.log(formRef.current[4]);
    console.log(formRef.current[5]);
    console.log(formRef.current[6]);
    console.log(formRef.current[7]);
    console.log(formRef.current[8]);
    console.log(formRef.current[9]);
    // console.log(e.target?.form[1].value);
    console.log("Hello World");
  };

  return (
    <div className="min-h-[90vh] my-20 w-full  flex justify-center items-center">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="flex flex-col xl:flex-row w-full mx-4 md:w-3/4 lg:w-2/3 xl:w-[80%] bg-stone-300 rounded-xl xl:pb-8"
      >
        <div className="xl:w-1/2">
          <h1 className="px-3 py-3 pt-6 text-xl font-bold text-center xl:text-3xl xl:pt-10 ">
            File Upload
          </h1>
          <div className="grid grid-cols-3 gap-3 p-3 xl:px-8 *:cursor-pointer *:h-44 md:*:h-64 xl:*:h-80 *:rounded-xl items-center place-content-center ">
            <NewImage />
            <NewImage />
            <NewImage />
            <NewImage />
            <NewImage />
            <NewImage />
          </div>
        </div>
        <div className="xl:flex xl:flex-col xl:items-center xl:justify-center xl:*:w-[90%] xl:*:mx-8  xl:w-1/2 xl:min-h-full">
          <div className="grid grid-cols-1 mx-4 xl:mx-8 place-items-center">
            <h1 className="py-3 text-xl font-bold xl:text-3xl xl:py-6 ">
              Gallery Information
            </h1>
            <label
              className="w-full px-4 py-2 text-lg font-semibold"
              htmlFor="title"
            >
              Title
            </label>
            <input
              type="text"
              placeholder="Title"
              name="title"
              id="title"
              className="w-full p-2 px-4 font-semibold text-white rounded-lg md:p-3 xl:text-lg xl:p-4 focus:text-black bg-stone-400 focus:bg-stone-300 focus:placeholder:text-black placeholder:text-white placeholder:font-semibold"
            />
            <label
              className="w-full px-4 py-2 text-lg font-semibold"
              htmlFor="description"
            >
              Description
            </label>
            <input
              type="text"
              placeholder="Description"
              name="description"
              id="description"
              className="w-full p-2 px-4 font-semibold text-white rounded-lg md:p-3 xl:text-lg xl:p-4 focus:text-black bg-stone-400 focus:bg-stone-300 focus:placeholder:text-black placeholder:text-white placeholder:font-semibold"
            />
            <label
              className="w-full px-4 py-2 text-lg font-semibold"
              htmlFor="price"
            >
              Price
            </label>
            <input
              type="text"
              placeholder="Price"
              name="price"
              id="price"
              className="w-full p-2 px-4 font-semibold text-white rounded-lg md:p-3 xl:text-lg xl:p-4 focus:text-black bg-stone-400 focus:bg-stone-300 focus:placeholder:text-black placeholder:text-white placeholder:font-semibold"
            />
            <label
              className="w-full px-4 py-2 text-lg font-semibold"
              htmlFor="genre"
            >
              Genre
            </label>
            <input
              type="text"
              placeholder="Genre"
              name="genre"
              id="genre"
              className="w-full p-2 px-4 font-semibold text-white rounded-lg md:p-3 xl:text-lg xl:p-4 focus:text-black bg-stone-400 focus:bg-stone-300 focus:placeholder:text-black placeholder:text-white placeholder:font-semibold"
            />
            <input
              type="submit"
              value={"Submit"}
              onClick={handleSubmit}
              className="p-2 px-4 my-3 font-semibold text-white rounded-lg bg-stone-400 focus:bg-stone-300 focus:placeholder:text-black placeholder:text-white placeholder:font-semibold"
            />

            {/* description,title,price,genre */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default page;
