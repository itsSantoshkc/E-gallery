import React from "react";
import LogInForm from "./LogInForm";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/authOptions";
import { redirect } from "next/navigation";

type Props = {};

const page = async (props: Props) => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }
  return (
    <div className="h-full  overflow-y-hidden w-screen flex justify-center items-center">
      <LogInForm />
    </div>
  );
};

export default page;
