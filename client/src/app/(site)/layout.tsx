import { type ReactNode } from "react";
import { Footer } from "@/components/layout";
import { ScrollToTop } from "@/components/ui";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <Footer />
      <ScrollToTop />
    </>
  );
}
