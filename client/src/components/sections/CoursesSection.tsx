"use client";

import { useState, type FC } from "react";
import { SectionHeader, CategoryPill, CourseCard } from "@/components/ui";
import { courses, courseCategories as CATEGORIES } from "@/data/courses";

export const CoursesSection: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("Featured");
  const visibleCourses =
    selectedCategory === "Featured"
      ? courses.filter((course) => course.featured)
      : courses.filter((course) => course.category === selectedCategory);

  return (
    <section className="w-full bg-white py-20 lg:py-28 text-foreground">
      <div className="mx-auto w-11/12 lg:w-10/12 flex flex-col gap-10.5">
        <SectionHeader
          title={"Discover Your Passion,\nBuild Your Skills"}
          description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
        />

        <div className="flex flex-wrap items-center justify-center gap-4 max-w-5xl px-2 mx-auto">
          {CATEGORIES.map((cat) => (
            <CategoryPill
              key={cat}
              label={cat}
              isActive={selectedCategory === cat}
              onClick={() => setSelectedCategory(cat)}
            />
          ))}
          <button
            type="button"
            className="text-secondary font-semibold text-xs sm:text-sm px-3 py-2 hover:underline"
          >
            + More
          </button>
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
