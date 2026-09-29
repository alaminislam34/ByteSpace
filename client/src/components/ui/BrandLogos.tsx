import { type FC } from "react";
import { cn } from "@/lib/utils";

export const BrandLogos: FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-between gap-8 md:gap-12 py-10 opacity-70 grayscale hover:grayscale-0 transition-all",
        className
      )}
    >
      {/* Logo 1 - Wave */}
      <div className="flex items-center gap-2.5">
        <svg className="size-7 text-[#64748B]" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.8" />
          <path d="M6 11c2-2 4-2 6 0s4 2 6 0M6 15c2-2 4-2 6 0s4 2 6 0" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        </svg>
        <span className="font-title text-base sm:text-lg font-bold text-[#64748B]">Logoipsum</span>
      </div>

      {/* Logo 2 - Sunburst */}
      <div className="flex items-center gap-2.5">
        <svg className="size-7 text-[#64748B]" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1l2.1-2.1M17 7l2.1-2.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span className="font-title text-base sm:text-lg font-bold text-[#64748B]">Logoipsum</span>
      </div>

      {/* Logo 3 - Bolt */}
      <div className="flex items-center gap-2.5">
        <svg className="size-7 text-[#64748B]" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10" />
          <path d="M13 7l-4 6h4l-2 5 6-7h-4l2-4z" fill="#FFFFFF" />
        </svg>
        <span className="font-title text-base sm:text-lg font-bold text-[#64748B]">Logoipsum</span>
      </div>

      {/* Logo 4 - Clover */}
      <div className="flex items-center gap-2.5">
        <svg className="size-7 text-[#64748B]" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="8" r="3" />
          <circle cx="12" cy="16" r="3" />
          <circle cx="8" cy="12" r="3" />
          <circle cx="16" cy="12" r="3" />
        </svg>
        <span className="font-title text-base sm:text-lg font-bold text-[#64748B]">Logoipsum</span>
      </div>

      {/* Logo 5 - Target / Rings */}
      <div className="flex items-center gap-2.5">
        <svg className="size-7 text-[#64748B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="7" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
        <span className="font-title text-base sm:text-lg font-bold text-[#64748B]">Logoipsum</span>
      </div>
    </div>
  );
};
