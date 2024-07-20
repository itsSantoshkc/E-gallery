"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";

type Props = {};

const SessionWrapper = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default SessionWrapper;
