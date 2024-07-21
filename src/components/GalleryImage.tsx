"use client";
import React, { Suspense } from "react";
import { Button } from "./ui/button";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

type Props = {
  image: string;
  id: number;
};

const GalleryImage = (props: Props) => {
  const text =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias eligendi minima quae rerum ipsam voluptas, quod dolores quibusdam dolore in facere libero provident, das";
  return (
    <div className="relative w-full h-full overflow-hidden cursor-pointer rounded-xl group ">
      <div className="w-full h-full ">
        <img
          className="object-cover w-full h-full transition-all duration-300 group-hover:bg-blend-multiply group-hover:blur-sm rounded-xl group-hover:scale-110 "
          src={props.image}
        />
      </div>
      <div className="absolute bottom-0 flex flex-col items-center justify-center w-full transition-all duration-300 translate-y-full bg-black bg-opacity-50 text-white border-0 opacity-0 rounded-xl h-1/2 group-hover:translate-y-0 group-hover:opacity-100">
        <div className="flex items-center w-full ">
          <Link href={`http://localhost:3000/product/${props.id}`}>
            <h1 className="flex items-center p-2 px-3 text-xl font-bold transition-colors duration-300 group-card hover:text-indigo-400 ">
              Product Name
              <FaExternalLinkAlt className="mx-2 text-sm" />
            </h1>
          </Link>
        </div>
        <p className="p-2 px-3 text-sm text-justify">{text}</p>

        <div className="flex items-center justify-between w-full px-3">
          <h3 className="font-bold">By : Harry Styles</h3>
          <Button className="bg-stone-500">Add to cart</Button>
        </div>
      </div>
    </div>
  );
};

export default GalleryImage;
