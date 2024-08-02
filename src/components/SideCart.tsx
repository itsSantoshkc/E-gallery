"use client";
import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoCartOutline } from "react-icons/io5";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import CartItems from "./CartItems";
import Link from "next/link";
import { useSession } from "next-auth/react";

type Props = {};

type cartItem = {
  name: string;
  productId: string;
  userId: string;
  itemQuantity: number;
  itemPrice: number;
  productImages: string[];
};

const SideCart = (props: Props) => {
  const { data: session } = useSession();
  const [cartItems, setcartItems] = useState([]);

  const userId = session?.user.id;
  const getCartItems = async () => {
    const response = await fetch("http://localhost:3000/api/cart", {
      method: "post",
      body: JSON.stringify({
        userId: userId,
      }),
    });
    const responseData = await response.json();
    setcartItems(responseData);
  };

  useEffect(() => {
    getCartItems();
  }, []);

  console.log(cartItems[0]);

  return (
    <Sheet key={"right"}>
      <SheetTrigger>
        <IoCartOutline
          onClick={getCartItems}
          className="h-7 w-7 md:h-9 md:w-9 md:mr-6 "
        />
      </SheetTrigger>
      <SheetContent
        side={"right"}
        className="w-full z-[999] gap-0 p-0 m-0 flex flex-col  overflow-y-hidden h-[100vh]"
      >
        <SheetHeader className="h-[7dvh] md:h-[10dvh]   border-b flex justify-center items-center ">
          <SheetTitle className="text-2xl">Items In Your Cart...</SheetTitle>
        </SheetHeader>

        <ScrollArea className="h-[70dvh]  md:h-[75vh]">
          {cartItems.map((item: cartItem, idx) => (
            <CartItems
              key={item.productId}
              ProductName={item.name}
              ProductPrice={item.itemPrice}
              productImage={item.productImages[0]}
              itemQuantity={item.itemQuantity}
            />
          ))}
        </ScrollArea>
        <SheetFooter className="w-full">
          <div className="flex h-[10dvh] border-t md:h-[15vh] flex-col items-center justify-around w-full">
            <h1 className="w-full py-2 text-xl font-bold text-center md:text-2xl">
              Check Out
            </h1>
            <Separator className="w-3/4" />

            <div className="flex justify-center w-full my-2">
              <h1 className="mx-2 text-lg font-bold md:text-xl">Total :</h1>
              <h1 className="mx-2 text-lg font-bold md:text-xl">
                $1,000,000,000
              </h1>
            </div>
            <Link href={"/checkout"}>
              <Button className="p-4 bg-stone-500 hover:bg-stone-400 h-10 md:mb-2 md:h-10 ">
                Proceed To Checkout
              </Button>
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default SideCart;
