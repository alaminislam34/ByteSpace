"use client";

import { type FC } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
}) => {
  if (totalPages <= 1) return null;

  const pages: (number | "...")[] = [];
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    pages.push(1);
    if (currentPage > 3) {
      pages.push("...");
    }
    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    if (currentPage < totalPages - 2) {
      pages.push("...");
    }
    pages.push(totalPages);
  }

  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <nav
      aria-label="Pagination"
      className={cn("flex items-center justify-center gap-5 sm:gap-6 select-none", className)}
    >
      <button
        type="button"
        onClick={handlePrev}
        disabled={currentPage <= 1}
        aria-label="Previous page"
        className={cn(
          "flex size-10 items-center justify-center rounded-full border border-[#E6E8EC] bg-white text-[#12141A] transition-all",
          "hover:border-[#CED0D4] hover:bg-neutral-50 active:scale-95",
          "disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:border-[#E6E8EC] disabled:active:scale-100"
        )}
      >
        <ChevronLeft className="size-4.5" strokeWidth={1.8} />
      </button>

      <div className="flex items-center gap-4 sm:gap-5">
        {pages.map((page, idx) => {
          if (page === "...") {
            return (
              <span
                key={`ellipsis-${idx}`}
                className="px-1 text-sm font-semibold text-[#A0A4AD]"
              >
                …
              </span>
            );
          }

          const isActive = page === currentPage;
          return (
            <button
              key={page}
              type="button"
              onClick={() => onPageChange(page)}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "min-w-6 text-center text-sm font-semibold transition-colors sm:text-base",
                isActive
                  ? "cursor-default font-normal text-[#A0A4AD]"
                  : "cursor-pointer font-bold text-[#12141A] hover:text-[#003BE2]"
              )}
            >
              {page}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={handleNext}
        disabled={currentPage >= totalPages}
        aria-label="Next page"
        className={cn(
          "flex size-10 items-center justify-center rounded-full border border-[#E6E8EC] bg-white text-[#12141A] transition-all",
          "hover:border-[#CED0D4] hover:bg-neutral-50 active:scale-95",
          "disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:border-[#E6E8EC] disabled:active:scale-100"
        )}
      >
        <ChevronRight className="size-4.5" strokeWidth={1.8} />
      </button>
    </nav>
  );
};
