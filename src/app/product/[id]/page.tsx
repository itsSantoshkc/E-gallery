import { Button } from "@/components/ui/button";
import { IoChevronUp } from "react-icons/io5";

import React, { Suspense } from "react";

type Props = {};

const page = ({ params }: { params: { id: string } }) => {
  const images: string[] = [
    "https://plus.unsplash.com/premium_photo-1721317368393-09204f05aab5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1692972352252-efbafe289672?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1721269139566-bd31c81b3978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1720986073399-f5c24e020ca1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <div className="relative   overflow-hidden flex   justify-center items-center">
        <div className=" md:w-[80%]  xl:w-3/4 flex  flex-col justify-center items-center">
          <div className="flex items-center justify-center flex-col   ">
            <img className="max-h-screen w-screen" src={images[0]} />
            <img className="max-h-screen w-screen" src={images[1]} />
            <img className="max-h-screen w-screen" src={images[2]} />
            <img className="max-h-screen w-screen" src={images[3]} />
            <img className="max-h-screen w-screen" src={images[0]} />
            <img className="max-h-screen w-screen" src={images[1]} />
            <img className="max-h-screen w-screen" src={images[2]} />
            <img className="max-h-screen w-screen" src={images[3]} />
          </div>
          <div className="bg-white  border flex justify-start items-center group flex-col fixed rounded-t-2xl bottom-0 duration-500 transition-all translate-y-[93%]  hover:translate-y-0 md:w-2/3 lg:w-[70%] xl:w-3/5 2xl:w-3/5 w-[90%]">
            <div className="bg-stone-300 my-4 cursor-pointer h-2 w-44 animate-bounce rounded-full"></div>
            <div className="flex h-full flex-col justify-center items-center px-4 lg:px-8 xl:px-12">
              <h1 className="w-full font-bold text-3xl lg:text-4xl lg:mt-4 mt-2">
                Product name
              </h1>
              <h2 className="w-full font-semibold my-1 lg:my-3 lg:text-xl text-stone-800">
                By : Harry Styles
              </h2>
              <p className="text-justify xl:text-xl my-2 xl:my-4 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                neque, perspiciatis at optio eveniet commodi quidem nobis
                expedita cupiditate pariatur itaque provident dolore assumenda
                numquam voluptas quo enim? Culpa, in? neque, perspiciatis at
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                neque, perspiciatis at optio eveniet commodi quidem nobis
                expedita cupiditate pariatur itaque provident dolore assumenda
                numquam voluptas quo enim? Culpa, in? neque, perspiciatis at
              </p>
              <div className="w-full flex *:mr-2 *:p *:px-2 lg:my-4 my-2 *:border *:rounded-xl">
                <div>Badge 1</div>
                <div>Badge 2</div>
                <div>Badge 3</div>
              </div>
              <div className="flex justify-between w-full items-center my-6">
                <div className="*:mr-4">
                  <span className="text-2xl transition-colors duration-300 bg-stone-500 hover:border-stone-400 border-stone-500 hover:bg-stone-400 text-white cursor-pointer border  rounded-xl px-4  p-1 ">
                    +
                  </span>
                  <span className=" px-2  p-1 border-b text-2xl">0</span>
                  <span className="text-2xl border cursor-pointer rounded-xl px-4 bg-stone-500 hover:border-stone-400 border-stone-500 hover:bg-stone-400 text-white  p-1 ">
                    -
                  </span>
                </div>
                <Button className="bg-stone-500  text-xl p-4  hover:bg-stone-400">
                  Add To cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default page;
