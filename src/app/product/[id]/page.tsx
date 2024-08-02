"use client";
import { addItemsToCart } from "@/data/cart";
import { useSession } from "next-auth/react";
import React, { Suspense, useEffect, useState } from "react";
import ProductDetails from "./productDetails";

type productDetails = {
  id: string;
  name: string | null;
  price: number;
  description: string | null;
  availableQuantity: number | null;
  OwnerId: string;
  ownerName: string;
  productImages?: (string | undefined)[];
};

const page = ({ params }: { params: { id: string } }) => {
  const [productDetails, setProductDetails] = useState<productDetails | null>(
    null
  );

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

  console.log(productDetails);

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
            <ProductDetails
              id={productDetails.id}
              name={productDetails.name}
              description={productDetails.description}
              price={productDetails.price}
              OwnerId={productDetails.OwnerId}
              availableQuantity={productDetails.availableQuantity}
              userId={userId}
              paramId={params.id}
              OwnerName={productDetails.ownerName}
            />
          </div>
        </div>
      )}
    </Suspense>
  );
};

export default page;
