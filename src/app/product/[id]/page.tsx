"use client";
import { useSession } from "next-auth/react";
import React, { Suspense, useEffect, useState } from "react";

type productDetails = {
  id: string;
  name: string | null;
  price: number;
  description: string | null;
  availableQuantity: number | null;
  OwnerId: string;
  productImages?: (string | undefined)[];
};

const page = ({ params }: { params: { id: string } }) => {
  const [productDetails, setProductDetails] = useState<productDetails | null>(
    null
  );
  const [itemQuantity, setItemQuantity] = useState<number>(0);
  const { data: session } = useSession();
  const userId = session?.user.id === undefined ? null : session?.user.id;

  useEffect(() => {
    const product = async () => {
      const response = await fetch(
        "http://localhost:3000/api/product/" + params.id,
        {
          method: "get",
        }
      );
      setProductDetails(await response.json());
    };
    product();
  }, []);

  const AddItemInCart = async () => {
    const respose = await fetch("api/cart/" + params.id, {
      method: "post",
      body: JSON.stringify({
        userId: userId,
      }),
    });
    console.log(await respose.json());
  };

  const handleIncrementItemQuantity = () => {
    setItemQuantity(itemQuantity + 1);
  };
  const handleDecrementItemQuantity = () => {
    if (itemQuantity !== 0) {
      return setItemQuantity(itemQuantity - 1);
    }
    return setItemQuantity(0);
  };

  return (
    <Suspense fallback={<h1>Loading</h1>}>
      {productDetails !== null && (
        <div className="relative   overflow-hidden flex   justify-center items-center">
          <div className=" md:w-[80%]  xl:w-3/4 flex  flex-col justify-center items-center">
            <div className="flex items-center justify-center flex-col   ">
              {productDetails.productImages !== null &&
                productDetails.productImages !== undefined &&
                productDetails.productImages?.map((image) => (
                  <img
                    key={image}
                    className="max-h-screen w-screen"
                    src={image}
                  />
                ))}
            </div>
            <div className="bg-white  border flex justify-start items-center group flex-col fixed rounded-t-2xl bottom-0 duration-500 transition-all translate-y-[90%]   hover:translate-y-0 md:w-2/3 lg:w-[70%] xl:w-3/5 2xl:w-3/5 w-[90%]">
              <div className="bg-black my-4 cursor-pointer h-2 w-44 animate-bounce rounded-full"></div>
              <div className="flex h-full flex-col justify-center items-center px-4 lg:px-8 xl:px-12">
                <h1 className="w-full font-bold text-3xl lg:text-4xl lg:mt-4 mt-2">
                  {productDetails.name}
                </h1>
                <h2 className="w-full font-semibold my-1 lg:my-3 lg:text-xl text-stone-800">
                  By : Harry Styles
                </h2>
                <p className="text-justify xl:text-xl my-2 xl:my-4 ">
                  {productDetails.description}
                </p>
                <div className="w-full flex *:mr-2 *:p *:px-2 lg:my-4 my-2 *:border *:rounded-xl">
                  <div>Badge 1</div>
                  <div>Badge 2</div>
                  <div>Badge 3</div>
                </div>
                <div className="flex justify-between w-full items-center my-6">
                  <div className="*:mr-4">
                    <span
                      onClick={handleDecrementItemQuantity}
                      className=" text-2xl transition-colors duration-300 bg-stone-500 hover:border-stone-400 border-stone-500 hover:bg-stone-400 text-white cursor-pointer border  rounded-xl px-4  p-1 "
                    >
                      -
                    </span>
                    <span className=" px-2  p-1 border-b text-2xl">
                      {itemQuantity}
                    </span>
                    <span
                      onClick={handleIncrementItemQuantity}
                      className="text-2xl border cursor-pointer rounded-xl px-4 bg-stone-500 hover:border-stone-400 border-stone-500 hover:bg-stone-400 text-white  p-1 "
                    >
                      +
                    </span>
                  </div>
                  <button className="text-xl p-4 bg-stone-500 hover:bg-stone-400">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Suspense>
  );
};

export default page;
