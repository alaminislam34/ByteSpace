"use client";

import { useState, type FC } from "react";
import Link from "next/link";
import { SectionHeader, CategoryPill, CourseCard } from "@/components/ui";
import { courses, courseCategories as CATEGORIES } from "@/data/courses";

const MOBILE_CATEGORIES = CATEGORIES.slice(0, 5);

const CATEGORY_ROWS = [
  CATEGORIES.slice(0, 8),
  CATEGORIES.slice(8, 14),
  CATEGORIES.slice(14),
];

export const CoursesSection: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("Featured");
  const visibleCourses =
    selectedCategory === "Featured"
      ? courses.filter((course) => course.featured).slice(0, 6)
      : courses.filter((course) => course.category === selectedCategory);

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-18 text-foreground">
      <div className="mx-auto w-11/12 lg:w-10/12 flex flex-col gap-10.5">
        <SectionHeader
          title={"Discover Your Passion,\nBuild Your Skills"}
          description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
        />

        {/* Mobile View: Compact (Top 5 categories + More) */}
        <div className="flex md:hidden flex-wrap items-center justify-center gap-3 max-w-sm px-2 mx-auto">
          {MOBILE_CATEGORIES.map((cat) => (
            <CategoryPill
              key={cat}
              label={cat}
              isActive={selectedCategory === cat}
              onClick={() => setSelectedCategory(cat)}
            />
          ))}
          <Link
            href="/courses"
            className="text-secondary font-semibold text-xs sm:text-sm px-3 py-2 hover:underline cursor-pointer"
          >
            + More
          </Link>
        </div>

        <div className="hidden md:flex xl:hidden flex-wrap items-center justify-center gap-3.5 max-w-4xl px-2 mx-auto">
          {CATEGORIES.map((cat) => (
            <CategoryPill
              key={cat}
              label={cat}
              isActive={selectedCategory === cat}
              onClick={() => setSelectedCategory(cat)}
            />
          ))}
          <Link
            href="/courses"
            className="text-secondary font-semibold text-xs sm:text-sm px-3 py-2 hover:underline cursor-pointer"
          >
            + More
          </Link>
        </div>

        {/* Large Desktop (xl+) View: Exact 3 Rows as per Figma */}
        <div className="hidden xl:flex flex-col items-center gap-4 max-w-5xl px-2 mx-auto">
          {CATEGORY_ROWS.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              {row.map((cat) => (
                <CategoryPill
                  key={cat}
                  label={cat}
                  isActive={selectedCategory === cat}
                  onClick={() => setSelectedCategory(cat)}
                />
              ))}
              {rowIndex === CATEGORY_ROWS.length - 1 && (
                <Link
                  href="/courses"
                  className="text-secondary font-semibold text-xs sm:text-sm px-3 py-2 hover:underline cursor-pointer"
                >
                  + More
                </Link>
              )}
            </div>
          ))}
        </div>

        {visibleCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {visibleCourses.map((course) => (
              <CourseCard key={course.id} href={`/courses/${course.id}`} {...course} />
            ))}
          </div>
        ) : (
          <p className="pt-4 text-center text-[#82868E]">No courses in this category yet.</p>
        )}
      </div>
    </section>
  );
};
