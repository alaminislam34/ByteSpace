"use client";

import { useEffect, useMemo, useRef, useState, type FC } from "react";
import { useSearchParams } from "next/navigation";
import {
  CategoryPill,
  CourseCard,
  Pagination,
  type FilterOption,
} from "@/components/ui";
import {
  CatalogSearchHero,
  CatalogFilterBar,
} from "@/components/course-catalog";
import { courses, courseCategories } from "@/data/courses";
import { useDebounce } from "@/hooks";

const ITEMS_PER_PAGE = 6;

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
  const searchParams = useSearchParams();
  const urlQuery = searchParams.get("q") ?? searchParams.get("search") ?? "";
  const [query, setQuery] = useState(urlQuery);
  const [prevUrlQuery, setPrevUrlQuery] = useState(urlQuery);
  const debouncedQuery = useDebounce(query, 300);

  if (urlQuery !== prevUrlQuery) {
    setPrevUrlQuery(urlQuery);
    setQuery(urlQuery);
  }

  const [scope, setScope] = useState("courses");
  const [price, setPrice] = useState("all");
  const [level, setLevel] = useState("all");
  const [category, setCategory] = useState("Featured");
  const [sort, setSort] = useState("relevant");

  const [currentPage, setCurrentPage] = useState(1);
  const catalogSectionRef = useRef<HTMLElement | null>(null);
  const categoryScrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!categoryScrollRef.current) return;
    const container = categoryScrollRef.current;
    const activePill = container.querySelector<HTMLElement>('[data-active="true"]');
    if (!activePill) return;

    const containerWidth = container.clientWidth;
    const pillOffsetLeft = activePill.offsetLeft;
    const pillWidth = activePill.offsetWidth;

    const targetScrollLeft = pillOffsetLeft - containerWidth / 2 + pillWidth / 2;

    container.scrollTo({
      left: Math.max(0, targetScrollLeft),
      behavior: "smooth",
    });
  }, [category]);

  const visibleCourses = useMemo(() => {
    const term = debouncedQuery.trim().toLowerCase();
    const normalizedTerm = term.replace(/[^a-z0-9]/g, "");

    const filtered = courses.filter((course) => {
      const inCategory =
        category === "Featured" ? Boolean(term) || course.featured : course.category === category;
      const authorText = course.author.toLowerCase();
      const inSearch =
        !term ||
        (scope === "creators"
          ? authorText.includes(term) ||
            authorText.replace(/[^a-z0-9]/g, "").includes(normalizedTerm)
          : `${course.title} ${course.category} ${course.level ?? ""}`
              .toLowerCase()
              .includes(term));
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
  }, [debouncedQuery, scope, price, level, category, sort]);

  const filterKey = `${debouncedQuery}-${scope}-${price}-${level}-${category}-${sort}`;
  const [prevFilterKey, setPrevFilterKey] = useState(filterKey);
  if (filterKey !== prevFilterKey) {
    setPrevFilterKey(filterKey);
    setCurrentPage(1);
  }

  const totalPages = Math.max(1, Math.ceil(visibleCourses.length / ITEMS_PER_PAGE));
  const safeCurrentPage = Math.min(Math.max(1, currentPage), totalPages);

  const paginatedCourses = useMemo(() => {
    const start = (safeCurrentPage - 1) * ITEMS_PER_PAGE;
    return visibleCourses.slice(start, start + ITEMS_PER_PAGE);
  }, [visibleCourses, safeCurrentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    catalogSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const sortLabel = SORT_OPTIONS.find((option) => option.value === sort)?.label ?? "Most relevant";

  const resetFilters = () => {
    setQuery("");
    setScope("courses");
    setPrice("all");
    setLevel("all");
    setCategory("Featured");
    setSort("relevant");
    setCurrentPage(1);
  };

  return (
    <>
      <CatalogSearchHero
        query={query}
        onQueryChange={setQuery}
        scope={scope}
        onScopeChange={setScope}
        onSearchSubmit={() => {
          if (query.trim() && category !== "Featured") {
            setCategory("Featured");
          }
          catalogSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
      />

      <section ref={catalogSectionRef} className="bg-white py-12 text-[#12141A] lg:py-18">
        <div className="mx-auto flex w-11/12 flex-col gap-6 lg:w-10/12">
          <CatalogFilterBar
            price={price}
            onPriceChange={setPrice}
            priceOptions={PRICE_OPTIONS}
            level={level}
            onLevelChange={setLevel}
            levelOptions={LEVEL_OPTIONS}
            category={category}
            onCategoryChange={setCategory}
            categoryOptions={CATEGORY_OPTIONS}
            sort={sort}
            onSortChange={setSort}
            sortOptions={SORT_OPTIONS}
            sortLabel={sortLabel}
          />

          <div
            ref={categoryScrollRef}
            className="-mx-1 relative flex gap-3 overflow-x-auto px-1 pb-2 scrollbar-none [&::-webkit-scrollbar]:hidden scroll-smooth"
          >
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
            <>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {paginatedCourses.map((course) => (
                  <CourseCard key={course.id} href={`/courses/${course.id}`} {...course} />
                ))}
              </div>

              {totalPages > 1 && (
                <div className="pt-10 sm:pt-14">
                  <Pagination
                    currentPage={safeCurrentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                </div>
              )}
            </>
          ) : (
            <div className="flex flex-col items-center gap-4 py-20 text-center">
              <p className="text-[#6D7380]">
                {debouncedQuery.trim()
                  ? scope === "creators"
                    ? `No courses found for creator "${debouncedQuery.trim()}".`
                    : `No courses found matching "${debouncedQuery.trim()}".`
                  : "No courses match these filters."}
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-hover cursor-pointer"
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
