"use client";

import { useState, useMemo, type FC } from "react";
import { CourseCard } from "@/components/ui/CourseCard";
import {
  CreatorHeroHeader,
  CreatorCourseFilter,
} from "@/components/creator-profile";
import type { Course, Creator } from "@/data/courses";

interface CreatorProfileViewProps {
  creator: Creator;
  courses: Course[];
}

const LEVELS = ["Beginner", "Intermediate", "Advanced"];

export const CreatorProfileView: FC<CreatorProfileViewProps> = ({
  creator,
  courses,
}) => {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<"relevant" | "rating" | "price">("relevant");

  const categories = useMemo(() => {
    const set = new Set<string>();
    courses.forEach((c) => set.add(c.category));
    return Array.from(set);
  }, [courses]);

  const handleResetFilters = () => {
    setSelectedLevel(null);
    setSelectedCategory(null);
  };

  const handleToggleSort = () => {
    setSortBy((curr) =>
      curr === "relevant"
        ? "rating"
        : curr === "rating"
        ? "price"
        : "relevant"
    );
  };

  const filteredCourses = useMemo(() => {
    let result = [...courses];
    if (selectedLevel) {
      result = result.filter(
        (c) => c.level.toLowerCase() === selectedLevel.toLowerCase()
      );
    }
    if (selectedCategory) {
      result = result.filter(
        (c) => c.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }
    if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "price") {
      result.sort((a, b) => a.price - b.price);
    }
    return result;
  }, [courses, selectedLevel, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-white text-[#12141A]">
      <CreatorHeroHeader
        creator={creator}
        productsCount={courses.length}
      />

      <section className="bg-white text-[#12141A] pt-8 sm:pt-10 pb-20">
        <div className="mx-auto w-11/12 lg:w-10/12">
          <CreatorCourseFilter
            selectedLevel={selectedLevel}
            onSelectLevel={setSelectedLevel}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            levels={LEVELS}
            categories={categories}
            sortBy={sortBy}
            onToggleSort={handleToggleSort}
            onReset={handleResetFilters}
          />

          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {filteredCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  href={`/courses/${course.id}`}
                  image={course.image}
                  title={course.title}
                  author={course.author}
                  rating={course.rating}
                  lessons={course.lessons}
                  duration={course.duration}
                  comments={course.comments}
                  level={course.level}
                  price={course.price}
                />
              ))}
            </div>
          ) : (
            <div className="py-16 text-center">
              <p className="text-base font-medium text-[#4B5160]">
                No courses found matching selected filters.
              </p>
              <button
                type="button"
                onClick={handleResetFilters}
                className="mt-4 rounded-full bg-[#12141A] px-5 py-2 text-xs font-semibold text-white"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
