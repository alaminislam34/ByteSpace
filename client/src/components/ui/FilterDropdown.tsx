"use client";

import { useEffect, useRef, useState, type FC, type ReactNode } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FilterOption {
  label: string;
  value: string;
}

export interface FilterDropdownProps {
  label: string;
  icon: ReactNode;
  options: FilterOption[];
  value: string;
  onChange: (value: string) => void;
  isActive?: boolean;
  align?: "left" | "right";
  className?: string;
}

export const FilterDropdown: FC<FilterDropdownProps> = ({
  label,
  icon,
  options,
  value,
  onChange,
  isActive = false,
  align = "left",
  className,
}) => {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handlePointer = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", handlePointer);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("pointerdown", handlePointer);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "inline-flex h-11 items-center gap-2 rounded-full border bg-white px-4 text-sm font-medium text-[#242528] transition-colors",
          isActive || open ? "border-[#242528]" : "border-[#DCDEE3] hover:border-[#9EA2AA]"
        )}
      >
        <span className="flex size-4 items-center justify-center" aria-hidden="true">
          {icon}
        </span>
        {label}
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={label}
          className={cn(
            "absolute top-full z-40 mt-2 max-h-72 min-w-52 overflow-y-auto rounded-2xl border border-[#ECEEF2] bg-white p-1.5 shadow-[0_16px_40px_rgba(15,23,42,0.12)]",
            align === "right" ? "right-0" : "left-0"
          )}
        >
          {options.map((option) => {
            const selected = option.value === value;
            return (
              <li key={option.value}>
                <button
                  type="button"
                  role="option"
                  aria-selected={selected}
                  onClick={() => {
                    onChange(option.value);
                    setOpen(false);
                  }}
                  className={cn(
                    "flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors",
                    selected ? "bg-[#F4FBD2] font-medium text-[#12141A]" : "text-[#4B4C53] hover:bg-[#F5F5F6]"
                  )}
                >
                  {option.label}
                  {selected && <Check className="size-4 text-[#12141A]" aria-hidden="true" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
