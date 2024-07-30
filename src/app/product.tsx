"use client";
import GalleryImage from "@/components/GalleryImage";
import React, { lazy, Suspense, useEffect, useRef, useState } from "react";
import Skeleton from "@/components/Skeleton";

type productData = {
  id: string;
  name: string;
  price: number;
  description: string;
  availableQuantity: number;
  OwnerId: string;
  image: string;
  ownerName: string;
};

const ImageComponent = lazy(() => import("@/components/GalleryImage"));

const Product = () => {
  const [productData, setProductData] = useState<[productData] | []>([]);
  const mainContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch("/api/product", {
        method: "get",
      });
      const responsData = await response.json();
      setProductData(responsData);
    };
    getProduct();
  }, []);

  const getContainerHeight = () => {
    const br = mainContainer.current?.getBoundingClientRect();
    console.log(br?.height);
  };
  return (
    <div ref={mainContainer} className="flex justify-center w-full">
      <div className="grid w-full grid-cols-1 gap-6 m-6 md:grid-cols-2 lg:w-5/6 2xl:grid-cols-4">
        {productData !== null &&
          productData !== undefined &&
          productData?.map((product) => (
            <div key={product.id} className="w-full *:rounded-xl h-96 ">
              <Suspense fallback={<Skeleton />}>
                <ImageComponent
                  description={product.description}
                  name={product.name}
                  image={product.image}
                  id={product.id}
                  ownerName={product.ownerName}
                />
              </Suspense>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Product;
