"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import OrderTable from "./OrderTable";

type Props = {};

const page = (props: Props) => {
  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV008",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV009",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV010",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV011",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
  ];
  return (
    <>
      <div className=" min-h-screen max-w-screen">
        <div className="text-center text-2xl md:text-3xl lg:text-4xl font-bold p-5 py-16">
          <h1>A List Of Your Orders</h1>
        </div>
        <div className="px-3 my-8 pb-5 md:mx-20 md:w-3/4  2xl:w-2/4 lg:mx-auto ">
          <Table className="text-xs sm:text-sm md:text-lg">
            <TableHeader>
              <TableRow>
                <TableHead className="font-black text-black text-center md:text-left">
                  Order No
                </TableHead>
                <TableHead className="font-black text-black text-center">
                  Product Name
                </TableHead>
                <TableHead className="font-black text-black text-center">
                  Order Quantity
                </TableHead>
                <TableHead className="font-black text-black text-center">
                  Ordered At
                </TableHead>
                <TableHead className="text-center md:text-right font-black text-black ">
                  Paid Amount
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices !== null &&
                invoices?.map((invoice) => (
                  <OrderTable
                    id={invoice.invoice}
                    key={invoice.invoice}
                    paymentMethod={invoice.paymentMethod}
                    paymentStatus={invoice.paymentStatus}
                    totalAmount={invoice.totalAmount}
                  />
                ))}
            </TableBody>
            {invoices.length > 10 ? (
              <TableFooter>
                <TableRow className="rounded-b-full">
                  <TableCell colSpan={4}>
                    <div className="flex justify-between w-1/5 items-center">
                      <p className="border p-2 mx-2 rounded-lg w-10 font-bold text-gray-500 text-center ">
                        11
                      </p>
                      <p className=" p-2 text-center text-sms md:text-base font-bold  text-gray-500">
                        TO
                      </p>
                      <p className="border p-2 mx-2 rounded-lg w-10 font-bold text-gray-500 text-center">
                        20
                      </p>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button>Show More</Button>
                  </TableCell>
                </TableRow>
              </TableFooter>
            ) : (
              ""
            )}
          </Table>
        </div>
      </div>
    </>
  );
};

export default page;
