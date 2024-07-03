import React from "react";
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

type Props = {};

const SideCart = (props: Props) => {
  const cartItems = [
    {
      ProductName: "Samsung Galaxy 24",
      ProductPrice: 999.99,
      ProductVariant: "8/256",
      ProductType: "White",
      productImage:
        "https://m.media-amazon.com/images/I/51d00nS-ufL._AC_SX679_.jpg",
    },
    {
      ProductName: "Iphone 15 Pro Max",
      ProductPrice: 999.99,
      ProductVariant: "8/256",
      ProductType: "White",
      productImage:
        "https://m.media-amazon.com/images/I/71x6vVEqy9L._AC_UF894,1000_QL80_FMwebp_.jpg",
    },
    {
      ProductName: "Samsung Galaxy 24",
      ProductPrice: 999.99,
      ProductVariant: "8/256",
      ProductType: "White",
      productImage:
        "https://m.media-amazon.com/images/I/51d00nS-ufL._AC_SX679_.jpg",
    },
    {
      ProductName: "Iphone 15 Pro Max",
      ProductPrice: 999.99,
      ProductVariant: "8/256",
      ProductType: "White",
      productImage:
        "https://m.media-amazon.com/images/I/71x6vVEqy9L._AC_UF894,1000_QL80_FMwebp_.jpg",
    },
    {
      ProductName: "Samsung Galaxy 24",
      ProductPrice: 999.99,
      ProductVariant: "8/256",
      ProductType: "White",
      productImage:
        "https://m.media-amazon.com/images/I/51d00nS-ufL._AC_SX679_.jpg",
    },
    {
      ProductName: "Iphone 15 Pro Max",
      ProductPrice: 999.99,
      ProductVariant: "8/256",
      ProductType: "White",
      productImage:
        "https://m.media-amazon.com/images/I/71x6vVEqy9L._AC_UF894,1000_QL80_FMwebp_.jpg",
    },
    {
      ProductName: "Samsung Galaxy 24",
      ProductPrice: 999.99,
      ProductVariant: "8/256",
      ProductType: "White",
      productImage:
        "https://m.media-amazon.com/images/I/51d00nS-ufL._AC_SX679_.jpg",
    },
    {
      ProductName: "Iphone 15 Pro Max",
      ProductPrice: 999.99,
      ProductVariant: "8/256",
      ProductType: "White",
      productImage:
        "https://m.media-amazon.com/images/I/71x6vVEqy9L._AC_UF894,1000_QL80_FMwebp_.jpg",
    },
    {
      ProductName: "Iphone 15 Pro Max",
      ProductPrice: 999.99,
      ProductVariant: "8/256",
      ProductType: "White",
      productImage:
        "https://m.media-amazon.com/images/I/71x6vVEqy9L._AC_UF894,1000_QL80_FMwebp_.jpg",
    },
    {
      ProductName: "Iphone 15 Pro Maxs",
      ProductPrice: 999.992,
      ProductVariant: "8/256",
      ProductType: "White",
      productImage:
        "https://m.media-amazon.com/images/I/71x6vVEqy9L._AC_UF894,1000_QL80_FMwebp_.jpg",
    },
    {
      ProductName: "Iphone 15 Pro Max",
      ProductPrice: 999.99,
      ProductVariant: "8/256",
      ProductType: "White",
      productImage:
        "https://m.media-amazon.com/images/I/71x6vVEqy9L._AC_UF894,1000_QL80_FMwebp_.jpg",
    },
    {
      ProductName: "Samsung Galaxy 24",
      ProductPrice: 999.99,
      ProductVariant: "8/256",
      ProductType: "White",
      productImage:
        "https://m.media-amazon.com/images/I/51d00nS-ufL._AC_SX679_.jpg",
    },
  ];
  return (
    <>
      <Sheet key={"right"}>
        <SheetTrigger>
          <IoCartOutline className="h-7 w-7 md:mr-6 " />
        </SheetTrigger>
        <SheetContent
          side={"right"}
          className="w-full z-[999] p-0 m-0 flex flex-col  overflow-y-hidden h-[100vh]"
        >
          <SheetHeader className="h-[7dvh] md:h-[10dvh]  border flex justify-center items-center ">
            <SheetTitle className="text-2xl  ">
              Items In Your Cart...
            </SheetTitle>
          </SheetHeader>
          <SheetDescription className="text-black">
            <ScrollArea className="h-[70dvh]  md:h-[75vh]">
              {cartItems.map((item, idx) => (
                <CartItems
                  key={idx}
                  ProductName={item.ProductName}
                  ProductPrice={item.ProductPrice}
                  ProductType={item.ProductType}
                  ProductVariant={item.ProductVariant}
                  productImage={item.productImage}
                />
              ))}
            </ScrollArea>
          </SheetDescription>
          <SheetFooter className="w-full   ">
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
              <Button className="p-4 h-10 md:mb-2 md:h-10 ">
                Proceed To Checkout
              </Button>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default SideCart;
