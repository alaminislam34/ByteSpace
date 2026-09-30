import { type FC } from "react";
import { cn } from "@/lib/utils";

interface CategoryPillProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

export const CategoryPill: FC<CategoryPillProps> = ({
  label,
  isActive = false,
  onClick,
  className,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-4 py-3 text-xs sm:text-sm transition-all duration-200 cursor-pointer select-none leading-[120%] tracking-[0%]",
        isActive
          ? "bg-primary text-[#242528] font-medium"
          : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-primary hover:text-[#242528] font-medium",
        className
      )}
    >
      {label}
    </button>
  );
};
