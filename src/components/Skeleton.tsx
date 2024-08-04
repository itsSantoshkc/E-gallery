import React from "react";
import { TableCell, TableRow } from "./ui/table";

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

export const CheckoutItemSkeleton = () => {
  return (
    <TableRow>
      <TableCell
        colSpan={5}
        className=" bg-gray-300 hover:bg-gray-300 md:text-base animate-pulse"
      >
        <div className="text-center text-[11px] w-full h-full bg-gray-300 hover:bg-gray-300 md:text-base animate-pulse">
          <div className="p-4 w-full h-full border-b border-gray-200 grid grid-cols-5 text-center">
            <div className="col-span-2 flex items-center space-x-3 md:text-center">
              <div className="h-28 w-24 bg-gray-200 rounded-xl"></div>
              <div className="h-full w-36 flex flex-col justify-around ">
                <div className="bg-gray-200 w-full h-4 rounded-xl"></div>
                <div className="bg-gray-200 w-full h-4 rounded-xl"></div>
                <div className="bg-gray-200 w-full h-4 rounded-xl"></div>
              </div>
            </div>

            <div className="col-span-1">
              <div className="h-6 bg-gray-200 rounded w-24"></div>
            </div>

            <div className="col-span-1 md:text-right">
              <div className="h-6 w-6 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </TableCell>
    </TableRow>
  );
};
