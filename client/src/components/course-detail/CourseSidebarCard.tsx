import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Course } from "@/types";
import { getCreatorById } from "@/data/courses";
import { ROUTES } from "@/constants/routes";

interface CourseSidebarCardProps {
  course: Course;
}

const PREVIEW_LESSONS = [
  { id: "01", title: "Introduction to Digital\nAssets", duration: "12 mins" },
  { id: "02", title: "Design Principles for\nImpacts", duration: "21 mins" },
  { id: "03", title: "Advanced Techniques in\nDigital Creation", duration: "16 mins" },
];

export const CourseSidebarCard: FC<CourseSidebarCardProps> = ({ course }) => {
  const creator = getCreatorById(course.author);

  return (
    <div className="rounded-3xl border border-[#E6E8EC] bg-white p-7 sm:p-8 shadow-[0_20px_50px_rgba(15,23,42,0.06)] flex flex-col text-[#12141A]">
      <h3 className="font-poppins text-xl sm:text-[22px] font-bold tracking-tight text-[#12141A]">
        112 Lessons (24 hours)
      </h3>

      <div className="mt-5 sm:mt-6 flex flex-col gap-3.5 text-sm">
        {PREVIEW_LESSONS.map((lesson) => (
          <div key={lesson.id} className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-2.5 min-w-0">
              <span className="font-normal text-[#12141A] shrink-0 w-5">{lesson.id}</span>
              <span className="font-normal text-[#12141A] leading-snug whitespace-pre-line">
                {lesson.title}
              </span>
            </div>
            <span className="font-normal text-[#2454E6] shrink-0 text-right pt-0.5">
              {lesson.duration}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-4 text-sm font-normal text-[#6D7380]">
        99 more videos
      </p>

      <p className="mt-5 sm:mt-6 text-sm leading-relaxed text-[#5C6370] font-normal">
        Ready to Dive In? Enroll Now and Start Building Your Digital Future!
      </p>

      <div className="mt-6 flex items-baseline">
        <span className="font-poppins text-4xl sm:text-[42px] font-extrabold tracking-tight text-[#003BE2]">
          ${course.price || 25}
        </span>
        <span className="text-sm font-normal text-[#6D7380] ml-1">
          /lifetime
        </span>
      </div>

      <button
        type="button"
        className="mt-4 w-full rounded-full bg-primary py-3.5 sm:py-4 text-center text-base font-semibold text-[#0B0F19] transition-all hover:bg-[#BDEB00] shadow-sm active:scale-[0.98] cursor-pointer"
      >
        Enroll Now
      </button>

      <h4 className="font-poppins text-xl sm:text-[22px] font-bold text-[#12141A] mt-8 mb-5">
        This course include
      </h4>

      <div className="flex flex-col gap-4 text-sm sm:text-[15px] text-[#4B5160] font-normal">
        <div className="flex items-center gap-3.5">
          <svg
            className="size-5 shrink-0 text-[#003BE2]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 6.5A1.5 1.5 0 0 1 4.5 5h4.2c.4 0 .8.2 1 .5l1.6 2H20.5A1.5 1.5 0 0 1 22 9v10a1.5 1.5 0 0 1-1.5 1.5H4.5A1.5 1.5 0 0 1 3 19V6.5Z" />
            <line x1="7" y1="12" x2="17" y2="12" />
            <line x1="7" y1="16" x2="13" y2="16" />
          </svg>
          <span>Learning Resources</span>
        </div>

        <div className="flex items-center gap-3.5">
          <svg
            className="size-5 shrink-0 text-[#003BE2]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2.5" y="6" width="13" height="12" rx="2" />
            <path d="m15.5 10 5-3.5v11l-5-3.5v-4z" />
          </svg>
          <span>Quality Lesson Videos</span>
        </div>

        <div className="flex items-center gap-3.5">
          <svg
            className="size-5 shrink-0 text-[#003BE2]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9.5 4.5A1.5 1.5 0 0 1 11 3h2a1.5 1.5 0 0 1 1.5 1.5V6H9.5V4.5Z" />
            <rect x="3" y="6" width="18" height="14" rx="2" />
            <circle cx="7.5" cy="12" r="1.5" />
            <line x1="12" y1="10.5" x2="17" y2="10.5" />
            <line x1="12" y1="13.5" x2="17" y2="13.5" />
          </svg>
          <span>Certificate of Completion</span>
        </div>

        <div className="flex items-center gap-3.5">
          <svg
            className="size-5 shrink-0 text-[#003BE2]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <circle cx="5" cy="5" r="1.8" />
            <path d="M2 11.5c0-1.7 1.3-3 3-3h1.2l2.3-1.6c.6-.4 1.5 0 1.5.8v.2L7.6 9.8H5c-.6 0-1 .4-1 1v.7H2Z" />
            <path
              d="M9.5 9a6 6 0 0 1 4.5 4.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <path
              d="M12 6.5a9.5 9.5 0 0 1 7 7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <circle cx="19" cy="19" r="1.8" />
            <path d="M22 12.5c0 1.7-1.3 3-3 3h-1.2l-2.3 1.6c-.6.4-1.5 0-1.5-.8v-.2l2.4-1.9H19c.6 0 1-.4 1-1v-.7h2Z" />
          </svg>
          <span>Private Consultation</span>
        </div>
      </div>

      <hr className="border-0 border-t border-[#EAECEF] my-7" />

      <Link
        href={ROUTES.CREATOR_PROFILE(creator.id)}
        className="group/creator flex items-center gap-3.5 transition-opacity hover:opacity-90 cursor-pointer"
      >
        <div className="relative size-14 rounded-full overflow-hidden shrink-0 border border-[#E6E8EC]">
          <Image
            src={creator.avatar || "/images/creator-pearl.png"}
            alt={creator.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h5 className="text-[17px] font-bold text-[#12141A] leading-tight group-hover/creator:text-[#003BE2] transition-colors">
            {creator.name}
          </h5>
          <p className="text-sm text-[#6D7380] font-normal mt-0.5">
            {creator.badge || "Professional Creator"}
          </p>
        </div>
      </Link>

      <p className="mt-4 text-sm leading-relaxed text-[#5C6370] font-normal">
        Ready to Dive In? Enroll Now and Start Building Your Digital Future!
      </p>

      <div>
        <Link
          href={ROUTES.CREATOR_PROFILE(creator.id)}
          className="mt-4 inline-flex items-center justify-center rounded-full border border-[#D1D5DB] px-6 py-2.5 text-sm font-medium text-[#12141A] hover:bg-neutral-50 active:scale-95 transition-all cursor-pointer"
        >
          See Full Profile
        </Link>
      </div>
    </div>
  );
};
