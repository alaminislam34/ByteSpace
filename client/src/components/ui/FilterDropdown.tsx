"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FC,
  type ReactNode,
} from "react";
import { Check, X } from "lucide-react";
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
  onClear?: () => void;
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
  onClear,
}) => {
  const [open, setOpen] = useState(false);
  const [effectiveAlign, setEffectiveAlign] = useState<"left" | "right">(align);
  const [openUpwards, setOpenUpwards] = useState(false);
  const [shiftX, setShiftX] = useState(0);
  const [dynamicMaxHeight, setDynamicMaxHeight] = useState<number | undefined>(
    undefined
  );

  const rootRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);

  const updatePosition = useCallback(() => {
    if (!rootRef.current) return;

    const rootRect = rootRef.current.getBoundingClientRect();
    const viewportWidth =
      window.innerWidth || document.documentElement.clientWidth;
    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const margin = 12; 

    const menuEl = menuRef.current;
    const menuWidth = menuEl ? menuEl.offsetWidth : 216;

    const spaceBelow = viewportHeight - rootRect.bottom;
    const spaceAbove = rootRect.top;
    const shouldOpenUp = spaceBelow < 220 && spaceAbove > spaceBelow;
    setOpenUpwards(shouldOpenUp);

    const availableVertical = shouldOpenUp
      ? spaceAbove - margin
      : spaceBelow - margin;
    setDynamicMaxHeight(
      Math.max(160, Math.min(320, Math.floor(availableVertical)))
    );

    const spaceOnRight = viewportWidth - rootRect.left - margin;
    const spaceOnLeft = rootRect.right - margin;

    let targetAlign: "left" | "right" = align;

    if (align === "right") {
      if (spaceOnLeft < menuWidth && spaceOnRight > spaceOnLeft) {
        targetAlign = "left";
      }
    } else {
      if (spaceOnRight < menuWidth && spaceOnLeft > spaceOnRight) {
        targetAlign = "right";
      }
    }
    setEffectiveAlign(targetAlign);

    const calculatedLeft =
      targetAlign === "left" ? rootRect.left : rootRect.right - menuWidth;
    const calculatedRight = calculatedLeft + menuWidth;

    let nudge = 0;
    if (calculatedRight > viewportWidth - margin) {
      nudge = viewportWidth - margin - calculatedRight;
    } else if (calculatedLeft < margin) {
      nudge = margin - calculatedLeft;
    }

    setShiftX(nudge);
  }, [align]);

  useEffect(() => {
    if (!open) return;

    updatePosition();

    window.addEventListener("resize", updatePosition, { passive: true });
    window.addEventListener("scroll", updatePosition, { passive: true });

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition);
    };
  }, [open, updatePosition]);

  useEffect(() => {
    if (!open) return;

    const handleOutside = (event: Event) => {
      const target = event.target as Node | null;
      if (!target) return;
      if (rootRef.current && !rootRef.current.contains(target)) {
        setOpen(false);
      }
    };

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleOutside, true);
    document.addEventListener("touchstart", handleOutside, true);
    document.addEventListener("click", handleOutside, true);
    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("mousedown", handleOutside, true);
      document.removeEventListener("touchstart", handleOutside, true);
      document.removeEventListener("click", handleOutside, true);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className={cn("relative", open ? "z-30" : "z-0", className)}
    >
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "inline-flex h-10 sm:h-11 items-center gap-2 rounded-full border px-3.5 sm:px-4 text-xs sm:text-sm font-medium transition-colors cursor-pointer select-none outline-none [-webkit-tap-highlight-color:transparent] focus-visible:ring-2 focus-visible:ring-primary/60",
          isActive
            ? "border-primary bg-primary text-[#12141A] font-semibold"
            : open
            ? "border-[#B0B4BC] bg-[#F9FAFB] text-[#12141A]"
            : "border-[#DCDEE3] bg-white text-[#242528] [@media(hover:hover)]:hover:border-[#B0B4BC] [@media(hover:hover)]:hover:bg-[#F9FAFB]"
        )}
      >
        <span
          className="flex size-4 shrink-0 items-center justify-center"
          aria-hidden="true"
        >
          {icon}
        </span>
        <span className="truncate">{label}</span>
        {isActive && onClear && (
          <span
            role="button"
            tabIndex={0}
            aria-label={`Clear ${label}`}
            onClick={(e) => {
              e.stopPropagation();
              onClear();
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.stopPropagation();
                onClear();
              }
            }}
            className="ml-0.5 flex size-4 shrink-0 items-center justify-center rounded-full hover:bg-black/10 active:bg-black/20 transition-colors"
          >
            <X className="size-3 text-[#12141A]" />
          </span>
        )}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-30 sm:hidden"
          aria-hidden="true"
          onClick={() => setOpen(false)}
        />
      )}

      {open && (
        <ul
          ref={menuRef}
          role="listbox"
          aria-label={label}
          style={{
            transform: shiftX !== 0 ? `translateX(${shiftX}px)` : undefined,
            maxHeight: dynamicMaxHeight ? `${dynamicMaxHeight}px` : undefined,
          }}
          className={cn(
            "absolute z-40 max-h-[60vh] w-max min-w-48 sm:min-w-52 max-w-[calc(100vw-1.5rem)] overflow-y-auto overscroll-contain rounded-2xl border border-[#ECEEF2] bg-white p-1.5 shadow-[0_16px_40px_rgba(15,23,42,0.12)] transition-all",
            openUpwards ? "bottom-full mb-2" : "top-full mt-2",
            effectiveAlign === "right" ? "right-0" : "left-0"
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
                    "flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2 sm:py-2.5 text-left text-xs sm:text-sm transition-colors cursor-pointer",
                    selected
                      ? "bg-[#F4FBD2] font-medium text-[#12141A]"
                      : "text-[#4B4C53] hover:bg-[#F5F5F6]"
                  )}
                >
                  <span className="truncate">{option.label}</span>
                  {selected && (
                    <Check
                      className="size-4 shrink-0 text-[#12141A]"
                      aria-hidden="true"
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
