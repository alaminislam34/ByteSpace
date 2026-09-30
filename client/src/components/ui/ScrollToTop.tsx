"use client";

import { useEffect, useState, type FC } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export const ScrollToTop: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={cn(
        "group fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 flex size-11 sm:size-12 items-center justify-center rounded-full border border-white/20 bg-[#003BE2] text-white shadow-[0_10px_30px_rgba(0,59,226,0.45)] backdrop-blur-md transition-all duration-300 cursor-pointer",
        "hover:bg-[#D4FB20] hover:text-[#0B0F19] hover:border-[#D4FB20] hover:scale-110 hover:shadow-[0_10px_30px_rgba(212,251,32,0.35)] active:scale-95",
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      )}
    >
      <ArrowUp className="size-5 transition-transform duration-300 group-hover:-translate-y-0.5 stroke-[2.5]" />
    </button>
  );
};
