"use client";

import { useState, type FC } from "react";
import type { Course } from "@/data/courses";
import {
  AboutTab,
  CourseDetailHero,
  CourseDetailTabs,
  CourseSidebarCard,
  LessonTab,
  ReviewsTab,
  VideoModal,
  type TabType,
} from "@/components/course-detail";

interface CourseDetailViewProps {
  course: Course;
}

export const CourseDetailView: FC<CourseDetailViewProps> = ({ course }) => {
  const [activeTab, setActiveTab] = useState<TabType>("about");
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const displayTitle =
    course.title.includes("Comprehensive") || course.title.includes("Guide")
      ? course.title
      : `${course.title}: A Comprehensive Guide`;

  return (
    <div className="min-h-screen bg-white text-[#12141A]">
      <CourseDetailHero
        course={course}
        onOpenVideo={() => setIsVideoModalOpen(true)}
      />

      <section className="bg-white pt-8 sm:pt-10 pb-20">
        <div className="mx-auto w-11/12 lg:w-10/12">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_370px] xl:grid-cols-[minmax(0,1fr)_390px] gap-8 lg:gap-10 items-start">
            <div className="flex flex-col gap-8 sm:gap-10 min-w-0">
              <div className="lg:hidden">
                <CourseSidebarCard course={course} />
              </div>

              <CourseDetailTabs
                activeTab={activeTab}
                onTabChange={setActiveTab}
              />

              {activeTab === "about" && (
                <AboutTab displayTitle={displayTitle} />
              )}
              {activeTab === "lesson" && <LessonTab />}
              {activeTab === "reviews" && (
                <ReviewsTab displayTitle={displayTitle} />
              )}
            </div>

            <div className="hidden lg:block min-h-187.5" aria-hidden="true" />
          </div>
        </div>
      </section>

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </div>
  );
};
