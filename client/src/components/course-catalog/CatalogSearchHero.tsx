"use client";

import {
  useEffect,
  useRef,
  useState,
  type FC,
  type FormEvent,
} from "react";
import { BookOpen, Check, ChevronDown, Search, Users, X } from "lucide-react";
import { Navbar } from "@/components/layout";
import { GridLines } from "@/components/ui";

interface CatalogSearchHeroProps {
  query: string;
  onQueryChange: (query: string) => void;
  scope: string;
  onScopeChange: (scope: string) => void;
  onSearchSubmit?: () => void;
}

const SCOPE_OPTIONS = [
  {
    value: "courses",
    label: "Courses",
    description: "Search by course title, topic, or category",
    icon: BookOpen,
  },
  {
    value: "creators",
    label: "Creators",
    description: "Search by creator or instructor name",
    icon: Users,
  },
] as const;

export const CatalogSearchHero: FC<CatalogSearchHeroProps> = ({
  query,
  onQueryChange,
  scope,
  onScopeChange,
  onSearchSubmit,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Close dropdown on outside click or escape
  useEffect(() => {
    if (!isDropdownOpen) return;

    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isDropdownOpen]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsDropdownOpen(false);
    onSearchSubmit?.();
  };

  const handleSelectScope = (newScope: string) => {
    onScopeChange(newScope);
    setIsDropdownOpen(false);
    inputRef.current?.focus();
  };

  const currentScopeOption =
    SCOPE_OPTIONS.find((opt) => opt.value === scope) ?? SCOPE_OPTIONS[0];

  return (
    <section className="relative z-30 bg-hero-grid text-white">
      <GridLines rows={16} />
      <Navbar />
      <div className="relative z-10 mx-auto flex w-11/12 flex-col items-center gap-8 pt-4 pb-16 text-center sm:pb-20 lg:w-10/12 lg:pt-6 lg:pb-24">
        <h1 className="font-poppins text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[44px]">
          Find Your Next Course
        </h1>

        <form
          role="search"
          onSubmit={handleSubmit}
          className="flex w-full max-w-2xl items-center gap-2 sm:gap-3"
        >
          {/* Search Input Bar */}
          <div className="flex h-13 min-w-0 flex-1 items-center gap-2 sm:gap-2.5 rounded-full bg-white px-4 sm:px-5 focus-within:ring-2 focus-within:ring-primary/70 shadow-sm transition-all">
            <button
              type="submit"
              aria-label="Submit search"
              className="cursor-pointer text-[#82868E] hover:text-[#12141A] transition-colors shrink-0"
            >
              <Search className="size-5" aria-hidden="true" />
            </button>
            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={(event) => onQueryChange(event.target.value)}
              placeholder={
                scope === "creators"
                  ? "Search by creator (e.g. PurePearl, Northlane)..."
                  : "Search courses, topics..."
              }
              className="w-full bg-transparent text-sm sm:text-base text-[#12141A] outline-none placeholder:text-[#82868E]"
            />
            {query.trim().length > 0 && (
              <button
                type="button"
                onClick={() => {
                  onQueryChange("");
                  inputRef.current?.focus();
                }}
                aria-label="Clear search input"
                className="cursor-pointer rounded-full p-1 text-[#82868E] hover:bg-neutral-100 hover:text-[#12141A] transition-colors shrink-0"
              >
                <X className="size-4" aria-hidden="true" />
              </button>
            )}
          </div>

          {/* Scope Dropdown (Courses / Creators) */}
          <div ref={dropdownRef} className="relative shrink-0">
            <button
              type="button"
              id="search-scope-button"
              aria-haspopup="listbox"
              aria-expanded={isDropdownOpen}
              aria-label="Select search scope: Courses or Creators"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className="flex h-13 items-center justify-center gap-1.5 sm:gap-2 cursor-pointer rounded-full bg-primary px-4 sm:px-6 text-xs sm:text-base font-semibold text-primary-foreground shadow-sm outline-none transition-all hover:bg-primary-hover active:scale-95 focus-visible:ring-2 focus-visible:ring-white/70"
            >
              <span>{currentScopeOption.label}</span>
              <ChevronDown
                className={`size-4 transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>

            {isDropdownOpen && (
              <div
                role="listbox"
                aria-labelledby="search-scope-button"
                className="absolute right-0 top-full mt-2 w-64 sm:w-72 rounded-2xl border border-[#E6E7EA] bg-white p-1.5 shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-150 text-left"
              >
                <div className="px-3 py-2 text-[11px] font-semibold uppercase tracking-wider text-[#82868E]">
                  Search In
                </div>
                {SCOPE_OPTIONS.map((option) => {
                  const isSelected = scope === option.value;
                  const Icon = option.icon;
                  return (
                    <button
                      key={option.value}
                      type="button"
                      role="option"
                      aria-selected={isSelected}
                      onClick={() => handleSelectScope(option.value)}
                      className={`flex w-full items-start gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors cursor-pointer ${
                        isSelected
                          ? "bg-primary/20 text-[#12141A] font-medium"
                          : "text-[#4B5162] hover:bg-[#F5F6F8] hover:text-[#12141A]"
                      }`}
                    >
                      <div
                        className={`mt-0.5 flex size-7 items-center justify-center rounded-lg shrink-0 ${
                          isSelected
                            ? "bg-primary text-[#12141A]"
                            : "bg-[#F0F1F3] text-[#6D7380]"
                        }`}
                      >
                        <Icon className="size-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-sm text-[#12141A]">
                            {option.label}
                          </span>
                          {isSelected && (
                            <Check className="size-4 text-[#12141A] shrink-0" />
                          )}
                        </div>
                        <p className="text-xs text-[#82868E] leading-snug">
                          {option.description}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};
