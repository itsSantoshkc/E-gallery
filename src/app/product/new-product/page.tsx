"use client";
import React, { FormEvent } from "react";
import { FaCamera } from "react-icons/fa";

type Props = {};

const page = (props: Props) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(e);
    // console.log(e.target?.form[1].values);
    console.log("Hello World");
  };

  const handleFileChange = (e: any) => {
    // console.log(e.target.disbaled);
    // console.log(e.target.files[0]);
    // console.log(e.target?.previousElementSibling.disbaled);
    console.log(e);
  };

  return (
    <div className="min-h-[90vh] my-20 w-full  flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="flex flex-col xl:flex-row w-full mx-4 md:w-3/4 lg:w-2/3 xl:w-[80%] bg-stone-300 rounded-xl xl:pb-8"
      >
        <div className="xl:w-1/2">
          <h1 className="px-3 py-3 pt-6 text-xl font-bold text-center xl:text-3xl xl:pt-10 ">
            File Upload
          </h1>
          <div className="grid grid-cols-3 gap-3 p-3 xl:px-8 *:cursor-pointer *:h-44 md:*:h-64 xl:*:h-80 *:rounded-xl items-center place-content-center ">
            <label className="flex items-center justify-center text-5xl transition-colors duration-300 border border-dashed hover:bg-stone-400 hover:text-stone-300 text-stone-600 border-stone-500">
              <img
                className="object-cover w-full h-full rounded-xl"
                src="sd"
                hidden
              />
              <input
                id="image-1"
                onChange={handleFileChange}
                type="file"
                hidden
              />
              <FaCamera />
            </label>
            <label className="flex items-center justify-center text-5xl transition-colors duration-300 border border-dashed border-stone-500 hover:bg-stone-400 text-stone-600 hover:text-stone-300">
              <FaCamera />
              <input
                id="image-2"
                type="file"
                hidden
                onChange={handleFileChange}
              />
            </label>
            <label className="flex items-center justify-center text-5xl transition-colors duration-300 border border-dashed border-stone-500 hover:bg-stone-400 text-stone-600 hover:text-stone-300">
              <input
                onChange={handleFileChange}
                id="image-3"
                type="file"
                hidden
              />
              <FaCamera />
            </label>
            <label className="flex items-center justify-center text-5xl transition-colors duration-300 border border-dashed border-stone-500 hover:bg-stone-400 text-stone-600 hover:text-stone-300">
              <input
                onChange={handleFileChange}
                id="image-4"
                type="file"
                hidden
              />
              <FaCamera />
            </label>
            <label className="flex items-center justify-center text-5xl transition-colors duration-300 border border-dashed border-stone-500 hover:bg-stone-400 text-stone-600 hover:text-stone-300">
              <input
                onChange={handleFileChange}
                id="image-5"
                type="file"
                hidden
              />
              <FaCamera />
            </label>
            <label className="flex items-center justify-center text-5xl transition-colors duration-300 border border-dashed border-stone-500 hover:bg-stone-400 text-stone-600 hover:text-stone-300">
              <input
                onChange={handleFileChange}
                id="image-6"
                type="file"
                hidden
              />
              <FaCamera />
            </label>
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
