import { type ReactNode } from "react";
import { Footer } from "@/components/layout";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
