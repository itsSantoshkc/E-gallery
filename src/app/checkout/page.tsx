import React from "react";
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
import { MdDelete } from "react-icons/md";

type Props = {};

const page = (props: Props) => {
  const invoices = [
    {
      invoice: "INV001",
      image:
        "https://i.pinimg.com/564x/4f/78/a2/4f78a2ac80a385cc2c40e2d633439df7.jpg",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      image:
        "https://i.pinimg.com/564x/4f/78/a2/4f78a2ac80a385cc2c40e2d633439df7.jpg",
      paymentStatus: "Pending",

      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      image:
        "https://i.pinimg.com/564x/4f/78/a2/4f78a2ac80a385cc2c40e2d633439df7.jpg",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      image:
        "https://i.pinimg.com/564x/4f/78/a2/4f78a2ac80a385cc2c40e2d633439df7.jpg",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      image:
        "https://i.pinimg.com/564x/4f/78/a2/4f78a2ac80a385cc2c40e2d633439df7.jpg",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      image:
        "https://i.pinimg.com/564x/4f/78/a2/4f78a2ac80a385cc2c40e2d633439df7.jpg",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      image:
        "https://i.pinimg.com/564x/4f/78/a2/4f78a2ac80a385cc2c40e2d633439df7.jpg",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV001",
      image:
        "https://i.pinimg.com/564x/4f/78/a2/4f78a2ac80a385cc2c40e2d633439df7.jpg",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      image:
        "https://i.pinimg.com/564x/4f/78/a2/4f78a2ac80a385cc2c40e2d633439df7.jpg",
      paymentStatus: "Pending",

      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      image:
        "https://i.pinimg.com/564x/4f/78/a2/4f78a2ac80a385cc2c40e2d633439df7.jpg",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      image:
        "https://i.pinimg.com/564x/4f/78/a2/4f78a2ac80a385cc2c40e2d633439df7.jpg",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      image:
        "https://i.pinimg.com/564x/4f/78/a2/4f78a2ac80a385cc2c40e2d633439df7.jpg",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      image:
        "https://i.pinimg.com/564x/4f/78/a2/4f78a2ac80a385cc2c40e2d633439df7.jpg",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      image:
        "https://i.pinimg.com/564x/4f/78/a2/4f78a2ac80a385cc2c40e2d633439df7.jpg",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ];
  return (
    <div className=" border border-red-500  ">
      <div className="w-full flex justify-center items-center flex-col my-10">
        <h1 className="text-3xl text-center font-semibold my-5">
          Checkout Page
        </h1>
        <div className="w-5/6 flex justify-center items-center px-7">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Product</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Delete</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.invoice}>
                  <TableCell className="font-medium">
                    <img className="rounded-xl" src={invoice.image} />
                  </TableCell>
                  <TableCell>{invoice.paymentStatus}</TableCell>
                  <TableCell>{invoice.paymentMethod}</TableCell>
                  <TableCell>{invoice.totalAmount}</TableCell>
                  <TableCell>
                    <TableCell>
                      <MdDelete className="xl:text-2xl text-red-600" />
                    </TableCell>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell>$2,500.00</TableCell>
                <TableCell>
                  <Button>Payment</Button>
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default page;
