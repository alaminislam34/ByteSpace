"use client";

import { useMemo, useState, type FC, type FormEvent } from "react";
import {
  ChartNoAxesColumnIncreasing,
  ChevronDown,
  Funnel,
  ListFilter,
  Search,
  Shapes,
} from "lucide-react";
import { Navbar } from "@/components/layout";
import { CategoryPill, CourseCard, FilterDropdown, type FilterOption } from "@/components/ui";
import { courses, courseCategories } from "@/data/courses";

const PRICE_OPTIONS: FilterOption[] = [
  { label: "All prices", value: "all" },
  { label: "Under $30", value: "under-30" },
  { label: "$30 – $50", value: "30-50" },
  { label: "Over $50", value: "over-50" },
];

const LEVEL_OPTIONS: FilterOption[] = [
  { label: "All levels", value: "all" },
  { label: "Beginner", value: "Beginner" },
  { label: "Intermediate", value: "Intermediate" },
  { label: "Advanced", value: "Advanced" },
];

const CATEGORY_OPTIONS: FilterOption[] = courseCategories.map((category) => ({
  label: category,
  value: category,
}));

const SORT_OPTIONS: FilterOption[] = [
  { label: "Most relevant", value: "relevant" },
  { label: "Highest rated", value: "rating" },
  { label: "Price: low to high", value: "price-asc" },
  { label: "Price: high to low", value: "price-desc" },
];

const matchesPrice = (price: number, range: string) => {
  if (range === "under-30") return price < 30;
  if (range === "30-50") return price >= 30 && price <= 50;
  if (range === "over-50") return price > 50;
  return true;
};

export const CourseCatalog: FC = () => {
  const [query, setQuery] = useState("");
  const [scope, setScope] = useState("courses");
  const [price, setPrice] = useState("all");
  const [level, setLevel] = useState("all");
  const [category, setCategory] = useState("Featured");
  const [sort, setSort] = useState("relevant");

  const visibleCourses = useMemo(() => {
    const term = query.trim().toLowerCase();
    const filtered = courses.filter((course) => {
      const inCategory =
        category === "Featured" ? Boolean(term) || course.featured : course.category === category;
      const inSearch =
        !term ||
        (scope === "creators"
          ? course.author.toLowerCase().includes(term)
          : `${course.title} ${course.category}`.toLowerCase().includes(term));
      return (
        inCategory &&
        inSearch &&
        (level === "all" || course.level === level) &&
        matchesPrice(course.price, price)
      );
    });

    if (sort === "rating") return [...filtered].sort((a, b) => b.rating - a.rating);
    if (sort === "price-asc") return [...filtered].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") return [...filtered].sort((a, b) => b.price - a.price);
    return filtered;
  }, [query, scope, price, level, category, sort]);

  const sortLabel = SORT_OPTIONS.find((option) => option.value === sort)?.label ?? "Most relevant";

  const resetFilters = () => {
    setQuery("");
    setPrice("all");
    setLevel("all");
    setCategory("Featured");
    setSort("relevant");
  };

  return (
    <>
      <section className="bg-hero-grid text-white">
        <div className="relative z-10">
          <Navbar />
          <div className="mx-auto flex w-11/12 flex-col items-center gap-8 pt-4 pb-16 text-center sm:pb-20 lg:w-10/12 lg:pt-6 lg:pb-24">
            <h1 className="font-poppins text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[44px]">
              Find Your Next Course
            </h1>
            <form
              role="search"
              onSubmit={(event: FormEvent<HTMLFormElement>) => event.preventDefault()}
              className="flex w-full max-w-2xl items-center gap-3"
            >
              <label className="flex h-13 min-w-0 flex-1 items-center gap-3 rounded-full bg-white px-5 focus-within:ring-2 focus-within:ring-primary/70">
                <Search className="size-5 shrink-0 text-[#82868E]" aria-hidden="true" />
                <span className="sr-only">Search</span>
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search"
                  className="w-full bg-transparent text-base text-[#12141A] outline-none placeholder:text-[#82868E]"
                />
              </label>
              <label className="relative shrink-0">
                <span className="sr-only">Search in</span>
                <select
                  value={scope}
                  onChange={(event) => setScope(event.target.value)}
                  className="h-13 cursor-pointer appearance-none rounded-full bg-primary pr-11 pl-6 text-sm font-semibold text-primary-foreground outline-none transition-colors hover:bg-primary-hover focus-visible:ring-2 focus-visible:ring-white/70 sm:pl-7 sm:text-base"
                >
                  <option value="courses">Courses</option>
                  <option value="creators">Creators</option>
                </select>
                <ChevronDown
                  className="pointer-events-none absolute top-1/2 right-5 size-4 -translate-y-1/2 text-primary-foreground"
                  aria-hidden="true"
                />
              </label>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 text-[#12141A] lg:py-16">
        <div className="mx-auto flex w-11/12 flex-col gap-6 lg:w-10/12">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-3">
              <FilterDropdown
                label="Filter"
                icon={<Funnel className="size-4" />}
                options={PRICE_OPTIONS}
                value={price}
                onChange={setPrice}
                isActive={price !== "all"}
              />
              <FilterDropdown
                label="Level"
                icon={<ChartNoAxesColumnIncreasing className="size-4" />}
                options={LEVEL_OPTIONS}
                value={level}
                onChange={setLevel}
                isActive={level !== "all"}
              />
              <FilterDropdown
                label="Category"
                icon={<Shapes className="size-4" />}
                options={CATEGORY_OPTIONS}
                value={category}
                onChange={setCategory}
                isActive={category !== "Featured"}
              />
            </div>
            <FilterDropdown
              label={sortLabel}
              icon={<ListFilter className="size-4" />}
              options={SORT_OPTIONS}
              value={sort}
              onChange={setSort}
              align="right"
            />
          </div>

          <div className="-mx-1 flex gap-3 overflow-x-auto px-1 pb-2 scrollbar-none [&::-webkit-scrollbar]:hidden">
            {courseCategories.map((item) => (
              <CategoryPill
                key={item}
                label={item}
                isActive={category === item}
                onClick={() => setCategory(item)}
                className="shrink-0 whitespace-nowrap px-4 py-2.5"
              />
            ))}
          </div>

          {visibleCourses.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 pt-6 md:grid-cols-2 lg:grid-cols-3">
              {visibleCourses.map((course) => (
                <CourseCard key={course.id} href={`/courses/${course.id}`} {...course} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4 py-20 text-center">
              <p className="text-[#6D7380]">No courses match these filters.</p>
              <button
                type="button"
                onClick={resetFilters}
                className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-hover"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
