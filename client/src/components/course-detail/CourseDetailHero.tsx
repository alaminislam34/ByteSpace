import { useState, type FC } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChartNoAxesColumnIncreasing,
  Play,
  Share2,
  Star,
  Users,
} from "lucide-react";
import { Navbar } from "@/components/layout";
import type { Course } from "@/types";
import { getCreatorById } from "@/data/courses";
import { ROUTES } from "@/constants/routes";
import { GridLines } from "@/components/ui";
import { CourseSidebarCard } from "./CourseSidebarCard";

interface CourseDetailHeroProps {
  course: Course;
  onOpenVideo: () => void;
}

export const CourseDetailHero: FC<CourseDetailHeroProps> = ({
  course,
  onOpenVideo,
}) => {
  const [copied, setCopied] = useState(false);
  const creator = getCreatorById(course.author);

  const displayTitle =
    course.title.includes("Comprehensive") || course.title.includes("Guide")
      ? course.title
      : `${course.title}: A Comprehensive Guide`;

  const handleShare = async () => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <section className="relative overflow-hidden bg-hero-grid text-white pb-24">
      <GridLines rows={22} />
      <Navbar />

      <div className="mx-auto w-11/12 lg:w-10/12 pt-6 sm:pt-8 lg:pt-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between text-white">
          <div className="max-w-3xl">
            <h1 className="font-poppins text-2xl font-bold tracking-tight sm:text-3xl lg:text-[40px] lg:leading-[1.2]">
              {displayTitle}
            </h1>
            <p className="mt-2.5 text-sm sm:text-base font-normal text-white/90">
              Unlock the Power of Digital Creation with Expert Guidance
            </p>
            <p className="mt-3 text-sm text-white/80 font-medium">
              by{" "}
              <Link
                href={ROUTES.CREATOR_PROFILE(creator.id)}
                className="text-primary cursor-pointer"
              >
                {course.author}
              </Link>
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2 sm:gap-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs font-semibold text-[#12141A] shadow-sm">
                <ChartNoAxesColumnIncreasing className="size-3.5 text-[#003BE2]" />
                <span>{course.level || "Intermediate"}</span>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#12141A] shadow-sm">
                <Star className="size-3.5 fill-[#003BE2] text-[#003BE2]" />
                <span>
                  {course.rating.toFixed(1)} ({course.comments * 2 || 172} reviews)
                </span>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#12141A] shadow-sm">
                <Users className="size-3.5 text-[#003BE2]" />
                <span>{course.comments * 2 + 27 || 199} Students</span>
              </div>
            </div>
          </div>

          <div className="shrink-0 self-start lg:pt-1">
            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs sm:text-sm font-bold text-[#0B0F19] transition-all hover:bg-primary-hover shadow-sm active:scale-95 cursor-pointer"
            >
              <Share2 className="size-3.5" />
              <span>{copied ? "Link Copied!" : "Share"}</span>
            </button>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_370px] xl:grid-cols-[minmax(0,1fr)_390px] gap-8 lg:gap-10 items-start">
          <div className="group relative aspect-video w-full overflow-hidden rounded-3xl">
            <Image
              src="/images/larki.png"
              alt={course.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 750px"
            />

            <button
              type="button"
              onClick={onOpenVideo}
              aria-label="Play course preview video"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[22px] sm:rounded-3xl bg-[#4A3B32]/45 backdrop-blur-md border border-white/25 p-2.5 sm:p-3.5 shadow-2xl transition-all duration-300 group-hover:scale-105 cursor-pointer"
            >
              <div className="flex size-14 sm:size-16 items-center justify-center rounded-full bg-white shadow-lg transition-transform duration-300 group-hover:scale-105">
                <Play className="size-6 sm:size-7 fill-[#003BE2] text-[#003BE2] translate-x-0.5" />
              </div>
            </button>
          </div>

          <div className="hidden lg:block relative z-30">
            <div className="absolute top-0 left-0 w-full">
              <CourseSidebarCard course={course} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
