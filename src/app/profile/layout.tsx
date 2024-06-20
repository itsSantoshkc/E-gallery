import React from "react";

type Props = {};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>Inside The layout</h1>
      <div>{children}</div>
    </>
  );
}
