"use client";
import React, { lazy, Suspense, useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { MdDelete, MdRemoveShoppingCart } from "react-icons/md";
import { HiMiniMinusCircle, HiMiniPlusCircle } from "react-icons/hi2";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useSession } from "next-auth/react";
import { CheckoutItemSkeleton } from "@/components/Skeleton";
import { toast } from "sonner";

type Props = {};

type cartItem = {
  name: string;
  productId: string;
  userId: string;
  itemQuantity: number;
  itemPrice: number;
  productImages: string[];
};

const CheckoutItems = lazy(() => import("@/app/checkout/checkoutItems"));

const page = (props: Props) => {
  const { data: session } = useSession();
  const [cartItems, setcartItems] = useState<cartItem[] | []>([]);

  const [loading, setLoading] = useState<boolean>(true);
  const userId = session?.user.id;

  const getCartItems = async () => {
    const response = await fetch("http://localhost:3000/api/cart", {
      method: "post",
      body: JSON.stringify({
        userId: userId,
      }),
    });

    if (response.status === 200) {
      const responseData = await response.json();
      setLoading(false);
      return setcartItems(() => responseData);
    }
    setLoading(false);
    return setcartItems([]);
  };

  useEffect(() => {
    getCartItems();
  }, [userId]);

  let total = 0;
  for (let i = 0; i < cartItems.length; i++) {
    let item = cartItems[i];
    total += item.itemPrice * item.itemQuantity;
  }

  const handleCartItemDelete = async (productId: string) => {
    setLoading(true);
    const response = await fetch(
      "http://localhost:3000/api/cart/" + productId,
      {
        method: "delete",
      }
    );
    const { message } = await response.json();
    if (response.status === 200) {
      await getCartItems();
      setLoading(false);
      return toast.success(message);
    }
    setLoading(false);
    return toast.error(message);
  };

  const handleCartItemQuantity = async (
    productId: string,
    itemQuantity: number
  ) => {
    const response = await fetch(
      "http://localhost:3000/api/cart/" + productId,
      {
        method: "PATCH",
        body: JSON.stringify({
          itemQuantity: itemQuantity,
        }),
      }
    );
    if (response.status === 200) {
      await getCartItems();
      return setLoading(false);
    }
    const { message } = await response.json();
    return toast.error(message);
  };

  if (session === undefined) {
    return (
      <div className="h-full w-full overflow-hidden flex justify-center items-center">
        <div className="loader "></div>
      </div>
    );
  }

  return (
    <div>
      <div className="w-full flex justify-center items-center flex-col my-10">
        <h1 className="text-3xl text-center font-semibold my-5">
          Checkout Page
        </h1>
        <div className="md:w-5/6 w-full flex justify-center items-center px-2 md:px-5 lg:px-7">
          <Table className="text-xs w-full sm:text-sm md:text-lg">
            <TableHeader>
              <TableRow className="hover:bg-stone-600  bg-stone-600 *:hover:bg-stone-500 *:cursor-pointer *:text-white *:font-bold">
                <TableHead colSpan={2} className="text-center md:text-left">
                  Product
                </TableHead>

                <TableHead colSpan={1} className="text-center ">
                  Price
                </TableHead>
                <TableHead colSpan={1} className="text-center ">
                  Quantity
                </TableHead>
                <TableHead
                  colSpan={1}
                  className="text-center md:text-right "
                ></TableHead>
              </TableRow>
            </TableHeader>
            {loading ? (
              <TableBody>
                <TableRow>
                  <TableCell
                    colSpan={5}
                    className="h-[50vh] bg-stone-300 hover:bg-stone-300 "
                  >
                    <div className="flex items-center flex-col h-[50vh] py-5 justify-center">
                      <div className="border-gray-300 h-10 w-10 animate-spin rounded-full border-4 border-t-blue-600" />
                      <h1 className="text-stone-600 font-bold mt-4">
                        Please! Wait for a while
                      </h1>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            ) : (
              <TableBody>
                {cartItems.length >= 0 &&
                  cartItems?.map((item) => (
                    <Suspense
                      fallback={<CheckoutItemSkeleton />}
                      key={item.productId}
                    >
                      <CheckoutItems
                        productId={item.productId}
                        cartItemQuantity={handleCartItemQuantity}
                        cartItemDelete={handleCartItemDelete}
                        image={item.productImages[0]}
                        totalAmount={item.itemQuantity * item.itemPrice}
                        name={item.name}
                        itemQuantity={item.itemQuantity}
                      />
                    </Suspense>
                  ))}
                {!loading &&
                  (cartItems.length === undefined || cartItems.length <= 0) && (
                    <TableRow>
                      <TableCell
                        colSpan={5}
                        className="h-[50vh] bg-stone-300 hover:bg-stone-300 "
                      >
                        <h1 className="font-bold flex w-full justify-center items-center *:mx-3 text-stone-500 text-2xl">
                          Cart is empty
                          <MdRemoveShoppingCart />
                        </h1>
                      </TableCell>
                    </TableRow>
                  )}
              </TableBody>
            )}
            <TableFooter className="bg-stone-600 ">
              {cartItems.length !== undefined && cartItems.length >= 0 && (
                <TableRow className="rounded-b-full hover:bg-stone-600">
                  <TableCell
                    colSpan={2}
                    className="text-white text-left font-bold"
                  >
                    <h1 className="px-5 md:px-0">Total</h1>
                  </TableCell>

                  <TableCell
                    colSpan={1}
                    className="p-2  text-white text-center font-bold"
                  >
                    $ {total}
                  </TableCell>
                  <TableCell colSpan={2} className="text-right ">
                    <Button className="text-xs md:text-lg w-full md:w-3/4 text-stone-600 px-2 bg-stone-300 hover:bg-stone-200">
                      Proceed To Payment
                    </Button>
                  </TableCell>
                </TableRow>
              )}
              {(cartItems.length === undefined || cartItems.length <= 0) && (
                <TableRow>
                  <TableCell
                    colSpan={5}
                    className=" bg-stone-600 hover:bg-stone-600 "
                  ></TableCell>
                </TableRow>
              )}
            </TableFooter>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default page;
