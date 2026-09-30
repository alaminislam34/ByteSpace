"use client";

import { useState, useMemo, type FC } from "react";
import Image from "next/image";
import {
  SlidersHorizontal,
  BarChart2,
  Shapes,
  ArrowUpDown,
  Check,
} from "lucide-react";
import { Navbar, Footer } from "@/components/layout";
import { CourseCard } from "@/components/ui/CourseCard";
import { cn } from "@/lib/utils";
import type { Course, Creator } from "@/data/courses";

interface CreatorProfileViewProps {
  creator: Creator;
  courses: Course[];
}

export const CreatorProfileView: FC<CreatorProfileViewProps> = ({
  creator,
  courses,
}) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followersCount, setFollowersCount] = useState(creator.followersCount);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showLevelMenu, setShowLevelMenu] = useState(false);
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  const [sortBy, setSortBy] = useState<"relevant" | "rating" | "price">("relevant");

  const handleFollowToggle = () => {
    setIsFollowing((prev) => {
      const next = !prev;
      setFollowersCount((count) => (next ? count + 1 : count - 1));
      return next;
    });
  };

  const categories = useMemo(() => {
    const set = new Set<string>();
    courses.forEach((c) => set.add(c.category));
    return Array.from(set);
  }, [courses]);

  const levels = ["Beginner", "Intermediate", "Advanced"];

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
      {/* Hero Section */}
      <section className="bg-hero-grid text-white pb-14 sm:pb-16 lg:pb-20">
        <Navbar />

        <div className="mx-auto w-11/12 lg:w-10/12 pt-8 sm:pt-10 lg:pt-12">
          {/* Creator Profile Header */}
          <div className="flex flex-col gap-6">
            {/* Avatar & Info Row */}
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="relative size-18 sm:size-22 rounded-2xl overflow-hidden shrink-0 border border-white/20 shadow-lg bg-[#F8A5A5]">
                <Image
                  src={creator.avatar || "/images/creator-pearl.png"}
                  alt={creator.name}
                  fill
                  priority
                  className="object-cover object-center"
                />
              </div>

              <div>
                <div className="flex items-center gap-3">
                  <h1 className="font-poppins text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                    {creator.name}
                  </h1>
                  <span className="inline-flex items-center rounded-full bg-primary px-3.5 py-1 text-xs font-bold text-[#0B0F19] shadow-sm">
                    {creator.badge || "Creator"}
                  </span>
                </div>
                <p className="mt-1 text-sm sm:text-base font-normal text-white/90">
                  {creator.role}
                </p>
              </div>
            </div>

            {/* Bio Paragraphs */}
            <div className="max-w-4xl text-xs sm:text-sm text-white/85 leading-relaxed flex flex-col gap-2.5 font-normal">
              <p>{creator.bio1}</p>
              <p>{creator.bio2}</p>
            </div>

            {/* Badges & Follow Button */}
            <div className="mt-2 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#12141A] shadow-sm">
                  <span className="font-extrabold">{courses.length}</span>
                  <span>Products</span>
                </div>

                <div className="inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#12141A] shadow-sm">
                  <span className="font-extrabold">{followersCount}</span>
                  <span>Followers</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleFollowToggle}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-7 py-2.5 text-xs sm:text-sm font-bold transition-all shadow-sm active:scale-95 cursor-pointer",
                  isFollowing
                    ? "bg-white text-[#0B0F19] hover:bg-white/90"
                    : "bg-primary text-[#0B0F19] hover:bg-[#BDEB00]"
                )}
              >
                {isFollowing ? (
                  <>
                    <Check className="size-4" />
                    <span>Following</span>
                  </>
                ) : (
                  <span>Follow</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Course Catalog by this Creator */}
      <section className="bg-white text-[#12141A] pt-8 sm:pt-10 pb-20">
        <div className="mx-auto w-11/12 lg:w-10/12">
          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6">
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              {/* Filter Reset / Toggle */}
              <button
                type="button"
                onClick={() => {
                  setSelectedLevel(null);
                  setSelectedCategory(null);
                }}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition-all cursor-pointer",
                  !selectedLevel && !selectedCategory
                    ? "border-[#12141A] bg-[#12141A] text-white"
                    : "border-[#E6E8EC] bg-white text-[#12141A] hover:bg-neutral-50"
                )}
              >
                <SlidersHorizontal className="size-3.5" />
                <span>Filter</span>
              </button>

              {/* Level Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowLevelMenu((v) => !v)}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition-all cursor-pointer",
                    selectedLevel
                      ? "border-[#003BE2] bg-[#003BE2]/5 text-[#003BE2]"
                      : "border-[#E6E8EC] bg-white text-[#12141A] hover:bg-neutral-50"
                  )}
                >
                  <BarChart2 className="size-3.5" />
                  <span>{selectedLevel ? `Level: ${selectedLevel}` : "Level"}</span>
                </button>

                {showLevelMenu && (
                  <div className="absolute top-full left-0 mt-2 z-20 w-44 rounded-2xl border border-[#E6E8EC] bg-white p-2 shadow-xl">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedLevel(null);
                        setShowLevelMenu(false);
                      }}
                      className="w-full text-left px-3 py-1.5 text-xs rounded-lg hover:bg-neutral-100 font-medium text-[#12141A]"
                    >
                      All Levels
                    </button>
                    {levels.map((lvl) => (
                      <button
                        key={lvl}
                        type="button"
                        onClick={() => {
                          setSelectedLevel(lvl);
                          setShowLevelMenu(false);
                        }}
                        className={cn(
                          "w-full text-left px-3 py-1.5 text-xs rounded-lg hover:bg-neutral-100 font-medium",
                          selectedLevel === lvl
                            ? "text-[#003BE2] font-bold bg-[#003BE2]/5"
                            : "text-[#4B5160]"
                        )}
                      >
                        {lvl}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Category Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowCategoryMenu((v) => !v)}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition-all cursor-pointer",
                    selectedCategory
                      ? "border-[#003BE2] bg-[#003BE2]/5 text-[#003BE2]"
                      : "border-[#E6E8EC] bg-white text-[#12141A] hover:bg-neutral-50"
                  )}
                >
                  <Shapes className="size-3.5" />
                  <span>
                    {selectedCategory
                      ? `Category: ${selectedCategory}`
                      : "Category"}
                  </span>
                </button>

                {showCategoryMenu && (
                  <div className="absolute top-full left-0 mt-2 z-20 w-48 rounded-2xl border border-[#E6E8EC] bg-white p-2 shadow-xl">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedCategory(null);
                        setShowCategoryMenu(false);
                      }}
                      className="w-full text-left px-3 py-1.5 text-xs rounded-lg hover:bg-neutral-100 font-medium text-[#12141A]"
                    >
                      All Categories
                    </button>
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => {
                          setSelectedCategory(cat);
                          setShowCategoryMenu(false);
                        }}
                        className={cn(
                          "w-full text-left px-3 py-1.5 text-xs rounded-lg hover:bg-neutral-100 font-medium",
                          selectedCategory === cat
                            ? "text-[#003BE2] font-bold bg-[#003BE2]/5"
                            : "text-[#4B5160]"
                        )}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Sort */}
            <div className="relative">
              <button
                type="button"
                onClick={() =>
                  setSortBy((curr) =>
                    curr === "relevant"
                      ? "rating"
                      : curr === "rating"
                      ? "price"
                      : "relevant"
                  )
                }
                className="inline-flex items-center gap-2 rounded-full border border-[#E6E8EC] bg-white px-4 py-2 text-xs font-semibold text-[#12141A] hover:bg-neutral-50 transition-colors cursor-pointer"
              >
                <ArrowUpDown className="size-3.5" />
                <span>
                  {sortBy === "relevant"
                    ? "Most relevant"
                    : sortBy === "rating"
                    ? "Highest rated"
                    : "Lowest price"}
                </span>
              </button>
            </div>
          </div>

          {/* Courses Grid */}
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
                onClick={() => {
                  setSelectedLevel(null);
                  setSelectedCategory(null);
                }}
                className="mt-4 rounded-full bg-[#12141A] px-5 py-2 text-xs font-semibold text-white"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};
