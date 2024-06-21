import { TableCell, TableRow } from "@/components/ui/table";
import React from "react";

type Props = {
  id: string;
  paymentStatus: string;
  paymentMethod: string;
  totalAmount: string;
};

const OrderTable = (props: Props) => {
  return (
    <TableRow className="text-center text-[11px] md:text-base" key={props.id}>
      <TableCell className="font-medium md:text-left ">{props.id}</TableCell>
      <TableCell>{props.paymentStatus}</TableCell>
      <TableCell>{props.paymentStatus}</TableCell>
      <TableCell>{props.paymentMethod}</TableCell>
      <TableCell className="md:text-right">{props.totalAmount}</TableCell>
    </TableRow>
  );
};

export default OrderTable;
