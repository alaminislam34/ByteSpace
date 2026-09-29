import type { Metadata } from "next";
import { type ReactNode } from "react";
import { poppins } from "./fonts";
import { Providers } from "@/providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "ByteSpace - Get Access to Hundreds Courses Available",
  description: "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full font-body bg-[#003be2] text-white">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
