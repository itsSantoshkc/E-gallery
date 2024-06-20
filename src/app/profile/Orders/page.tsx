import React from "react";

import OrdersTable from "./OrdersTable";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <div className=" min-h-screen max-w-screen">
        <div className="text-center text-2xl md:text-3xl lg:text-4xl font-bold p-5 py-16">
          <h1>A List Of Your Orders</h1>
        </div>
        <div className="px-3 my-8 pb-5 md:mx-20 md:w-3/4  2xl:w-2/4 lg:mx-auto ">
          <OrdersTable />
        </div>
      </div>
    </>
  );
};

export default page;
