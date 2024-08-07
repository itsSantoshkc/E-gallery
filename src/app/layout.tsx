import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "E-Gallery",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="h-[5vh]">
          <Navbar />
        </div>
        <div className="h-[95vh]">{children}</div>
      </body>
    </html>
  );
}
