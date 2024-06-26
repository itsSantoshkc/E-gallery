import { Separator } from "@/components/ui/separator";
import React from "react";
import { HiMiniMinusCircle, HiMiniPlusCircle } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Props = {
  ProductName: String;
  ProductPrice: number;
  ProductVariant?: String;
  ProductType?: String;
  productImage: string;
};

const CartItems = (props: Props) => {
  return (
    <>
      <div className="flex items-center h-full py-5 justify-evenly">
        <div className="flex flex-col mx-2 ">
          <div className="h-full p-2 border rounded-lg ">
            <img
              className="object-contain w-16 h-16 "
              src={props.productImage}
            />
          </div>
          <span className="py-1 font-bold">$ {props.ProductPrice}</span>
        </div>
        <div className="flex flex-col justify-center w-3/5 h-full ">
          <h3 className="mt-2 font-bold">{props.ProductName}</h3>
          <span className="flex items-center justify-start w-auto ">
            <span className="px-2 py-0.5 text-xs text-center bg-gray-300 border rounded-xl">
              {props.ProductVariant} | {props.ProductType}
            </span>
          </span>

          <div className="flex items-center justify-between w-full mt-2 ">
            <div className="flex items-center w-1/2 rounded-2xl">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="w-full text-2xl font-bold text-center rounded-sm cursor-pointer ">
                      <HiMiniMinusCircle className="w-full text-2xl font-bold text-center " />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Remove an Item</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <span className="w-full text-xl text-center border-b">0</span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="w-full text-2xl font-bold text-center rounded-sm cursor-pointer ">
                      <HiMiniPlusCircle className="w-full text-2xl font-bold text-center " />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Add an Item</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button>
                    <MdDelete className="text-2xl text-red-600 cursor-pointer" />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Delete Item</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
      <Separator />
    </>
  );
};

export default CartItems;
