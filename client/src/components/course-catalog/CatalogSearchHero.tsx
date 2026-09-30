import type { FC, FormEvent } from "react";
import { ChevronDown, Search } from "lucide-react";
import { Navbar } from "@/components/layout";
import { GridLines } from "@/components/ui";

interface CatalogSearchHeroProps {
  query: string;
  onQueryChange: (query: string) => void;
  scope: string;
  onScopeChange: (scope: string) => void;
}

export const CatalogSearchHero: FC<CatalogSearchHeroProps> = ({
  query,
  onQueryChange,
  scope,
  onScopeChange,
}) => {
  return (
    <section className="relative bg-hero-grid text-white">
      <GridLines rows={16} />
      <div className="relative z-10">
        <Navbar />
        <div className="mx-auto flex w-11/12 flex-col items-center gap-8 pt-4 pb-16 text-center sm:pb-20 lg:w-10/12 lg:pt-6 lg:pb-24">
          <h1 className="font-poppins text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[44px]">
            Find Your Next Course
          </h1>
          <form
            role="search"
            onSubmit={(event: FormEvent<HTMLFormElement>) => event.preventDefault()}
            className="flex w-full max-w-2xl items-center gap-2 sm:gap-3"
          >
            <label className="flex h-13 min-w-0 flex-1 items-center gap-2.5 sm:gap-3 rounded-full bg-white px-4 sm:px-5 focus-within:ring-2 focus-within:ring-primary/70">
              <Search className="size-5 shrink-0 text-[#82868E]" aria-hidden="true" />
              <span className="sr-only">Search</span>
              <input
                type="search"
                value={query}
                onChange={(event) => onQueryChange(event.target.value)}
                placeholder="Search"
                className="w-full bg-transparent text-sm sm:text-base text-[#12141A] outline-none placeholder:text-[#82868E]"
              />
            </label>
            <label className="relative shrink-0">
              <span className="sr-only">Search in</span>
              <select
                value={scope}
                onChange={(event) => onScopeChange(event.target.value)}
                className="h-13 cursor-pointer appearance-none rounded-full bg-primary pr-9 sm:pr-11 pl-4 sm:pl-7 text-xs sm:text-base font-semibold text-primary-foreground outline-none transition-colors hover:bg-primary-hover focus-visible:ring-2 focus-visible:ring-white/70"
              >
                <option value="courses">Courses</option>
                <option value="creators">Creators</option>
              </select>
              <ChevronDown
                className="pointer-events-none absolute top-1/2 right-3.5 sm:right-5 size-4 -translate-y-1/2 text-primary-foreground"
                aria-hidden="true"
              />
            </label>
          </form>
        </div>
      </div>
    </section>
  );
};
