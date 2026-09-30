import { type FC } from "react";
import Image from "next/image";
import { CourseCard, LearningProgressCard } from "@/components/ui";
import { type Course } from "@/types/course.types";

interface StudentGrowthShowcaseProps {
  course?: Course | null;
  className?: string;
}

export const StudentGrowthShowcase: FC<StudentGrowthShowcaseProps> = ({
  course,
  className = "",
}) => {
  return (
    <div
      className={`relative w-full h-110 xs:h-[480px] sm:h-130 lg:h-140 overflow-visible ${className}`}
    >
      {course && (
        <CourseCard
          {...course}
          href={`/courses/${course.id}`}
          className="absolute left-0 2xl:left-20 bottom-[14%] sm:bottom-[18%] lg:bottom-[20%] z-0 w-75 sm:w-72.5 lg:w-90 scale-[0.78] xs:scale-[0.85] sm:scale-95 lg:scale-100 origin-bottom-left shadow-lg transition-transform"
        />
      )}

      <Image
        src="/images/hero-image.png"
        alt="Student with a laptop and headset"
        width={900}
        height={642}
        priority
        className="pointer-events-none absolute 2xl:right-0 bottom-0 z-10 h-auto max-w-full  2xl:max-w-[85%] object-contain drop-shadow-[0_24px_40px_rgba(15,23,42,0.16)]"
      />

      <LearningProgressCard className="absolute right-2 sm:right-6 lg:w-60 lg:right-0 2xl:right-5 bottom-[24%] sm:bottom-[28%] lg:bottom-[33%] z-20 scale-[0.75] xs:scale-[0.82] sm:scale-95 lg:scale-100 origin-bottom-right shadow-[0_16px_36px_rgba(15,23,42,0.12)] transition-transform" />

      <Image
        src="/images/Frame(1).png"
        alt=""
        width={500}
        height={500}
        className="pointer-events-none absolute right-2 sm:right-6 lg:right-0 2xl:-right-3 bottom-[36%] sm:bottom-[40%] lg:bottom-[44%] z-25 h-auto w-20 sm:w-28 lg:w-50 -rotate-52"
      />
    </div>
  );
};
