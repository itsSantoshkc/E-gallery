import React from "react";

type Props = {};

const page = ({ params }: { params: { id: string } }) => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      My Post: {params.id}
    </div>
  );
};

export default page;
