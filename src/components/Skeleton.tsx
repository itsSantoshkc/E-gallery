import React from "react";

type Props = {};

export const CardSkeleton = (props: Props) => {
  return <div className="w-full h-full bg-gray-300 animate-pulse"></div>;
};

export const CartItemSkeleton = () => {
  return (
    <div className="flex items-center h-full py-5 justify-evenly animate-pulse">
      <div className="flex flex-col mx-2 ">
        <div className="h-full p-2   ">
          <div className="object-fill rounded-xl w-16 h-16 bg-gray-200"></div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full md:w-4/5 h-full ">
        <div className="mt-1 h-3 rounded-xl bg-gray-200 w-5/6 md:w-4/5 block"></div>
        <div className="mt-2 h-3 rounded-xl bg-gray-200 w-5/6 md:w-4/5 block"></div>
        <div className="mt-2 h-3 rounded-xl bg-gray-200 w-5/6 md:w-4/5 block"></div>
        <span className="flex items-center justify-start w-auto "></span>
      </div>
    </div>
  );
};
