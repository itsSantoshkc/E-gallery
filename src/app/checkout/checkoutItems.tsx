import { TableCell, TableRow } from "@/components/ui/table";
import React, { useState } from "react";
import { HiMiniMinusCircle, HiMiniPlusCircle } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";

type Props = {
  name: string;
  productId: string;
  totalAmount: number;
  image: string;
  itemQuantity: number;
  cartItemDelete: any;
  cartItemQuantity: any;
};

const CheckoutItems = (props: Props) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleIncrementItemQuantity = async () => {
    setLoading(true);
    await props.cartItemQuantity(props.productId, 1);
    setLoading(false);
  };
  const handleDecrementItemQuantity = async () => {
    setLoading(true);
    await props.cartItemQuantity(props.productId, -1);
    setLoading(false);
  };
  return (
    <>
      {loading && (
        <TableRow className="text-center text-[11px]  bg-stone-300 hover:bg-stone-300 md:text-base">
          <TableCell colSpan={5}>
            <div className="flex items-center h-32 py-5 justify-center w-full bg-stone-300">
              <div className="border-gray-300 h-10 w-10 animate-spin rounded-full border-4 border-t-blue-600" />
            </div>
          </TableCell>
        </TableRow>
      )}
      {!loading && (
        <TableRow className="text-center text-[11px]  bg-stone-300 hover:bg-stone-300 md:text-base">
          <TableCell colSpan={2} className="font-medium   md:text-center ">
            <div className="w-full flex  items-center">
              <img className="w-24 h-28 rounded-xl" src={props.image} />
              <h1 className="ml-3 text-base lg:text-xl"> - {props.name}</h1>
            </div>
          </TableCell>

          <TableCell
            colSpan={1}
            className="text-sm md:text-base lg:text-xl font-semibold"
          >
            $ {props.totalAmount}
          </TableCell>
          <TableCell colSpan={1} className="text-center ">
            <div className="flex justify-center items-center ">
              <div className="flex justify-center text-xl items-center w-3/4 xl:w-1/3">
                <button
                  onClick={handleIncrementItemQuantity}
                  className="w-full text-2xl mx-1 lg:mx-0 font-bold text-center rounded-sm cursor-pointer "
                >
                  <HiMiniPlusCircle className="w-full text-2xl font-bold text-center " />
                </button>

                {props.itemQuantity}

                <button
                  onClick={handleDecrementItemQuantity}
                  className="w-full text-2xl mx-1 lg:mx-0  font-bold text-center rounded-sm cursor-pointer "
                >
                  <HiMiniMinusCircle className="w-full text-2xl font-bold text-center " />
                </button>
              </div>
            </div>
          </TableCell>
          <TableCell
            colSpan={1}
            className="md:text-right text-red-500 text-2xl"
          >
            <MdDelete
              onClick={() => props.cartItemDelete(props.productId)}
              className="cursor-pointer"
            />
          </TableCell>
        </TableRow>
      )}
    </>
  );
};

export default CheckoutItems;
