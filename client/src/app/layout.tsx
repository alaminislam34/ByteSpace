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

const clashDisplayHref =
  "https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap";
const satoshiHref =
  "https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap";

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="" />
        <link rel="stylesheet" href={clashDisplayHref} />
        <link rel="stylesheet" href={satoshiHref} />
      </head>
      <body suppressHydrationWarning className="min-h-full font-body bg-[#003be2] text-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
