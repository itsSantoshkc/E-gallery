import React from "react";
import LogInForm from "./LogInForm";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="h-full  overflow-y-hidden w-screen flex justify-center items-center">
      <LogInForm />
    </div>
  );
};

export default page;
