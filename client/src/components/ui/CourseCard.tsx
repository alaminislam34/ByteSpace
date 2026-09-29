import { type FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { FaStar } from "react-icons/fa";

const STUDENT_AVATARS = [
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=96&h=96&q=80",
  "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=96&h=96&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=96&h=96&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=96&h=96&q=80",
];

export interface CourseCardProps {
  href: string;
  image: string;
  title: string;
  author: string;
  rating: number;
  lessons: number;
  duration: string;
  comments: number;
  level?: string;
  studentAvatars?: string[];
  extraStudentsCount?: string;
  price: number;
  className?: string;
  starClassName?: string;
  statClassName?: string;
}

const LevelIcon: FC = () => (
  <svg viewBox="0 0 16 16" className="size-3.5 shrink-0" aria-hidden="true">
    <rect x="1.5" y="9" width="2.4" height="5" rx="0.6" fill="currentColor" />
    <rect x="6.8" y="6" width="2.4" height="8" rx="0.6" fill="currentColor" />
    <rect x="12.1" y="2.5" width="2.4" height="11.5" rx="0.6" fill="currentColor" />
  </svg>
);

export const CourseCard: FC<CourseCardProps> = ({
  href,
  image,
  title,
  author,
  rating,
  lessons,
  duration,
  comments,
  level = "Beginner",
  studentAvatars = STUDENT_AVATARS,
  extraStudentsCount = "26+",
  price,
  className,
  starClassName = "text-[#CED0D3]",
  statClassName,
}) => {
  const stats = [`${lessons} Lessons`, duration, `${comments} Comments`];

  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col rounded-3xl border border-[#E6E7EA] bg-white p-3.5",
        "transition-shadow duration-300 hover:shadow-[0_12px_32px_rgba(11,15,25,0.08)]",
        className
      )}
    >
      <div className="relative aspect-16/10 w-full overflow-hidden rounded-[18px] bg-[#F3F4F6]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
        <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-2">
          {stats.map((stat) => (
            <span
              key={stat}
              title={stat}
              className={cn(
                "rounded-full truncate bg-[#F6F6F6]/60 backdrop-blur-sm px-3 py-1.5 text-[12px] font-medium leading-none text-[#4F4F4F]",
                statClassName
              )}
            >
              {stat}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col px-1.5 pt-4 pb-2 space-y-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-poppins text-lg font-semibold leading-7 tracking-[-1%] text-[#000000]">
            {title}
          </h3>
          <div className="flex shrink-0 items-center gap-1 text-lg font-medium leading-[160%] text-[#4F4F4F]">
            <span>{rating.toFixed(1)}</span>
            <FaStar className={cn("size-5", starClassName)} />
          </div>
        </div>

        <p className="text-xs leading-[160%] text-[#4F4F4F]">
          by <span className="text-[#003BE2]">{author}</span>
        </p>

        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F2F3F5] px-3 py-1.5 text-[14px] font-medium text-[#4B5160]">
            <LevelIcon />
            {level}
          </span>

          <div className="flex items-center">
            {studentAvatars.slice(0, 4).map((src, index) => (
              <span
                key={src}
                className={cn(
                  "relative size-8 overflow-hidden rounded-full ring-2 ring-white",
                  index > 0 && "-ml-2.5"
                )}
                style={{ zIndex: index + 1 }}
              >
                <Image src={src} alt="" width={32} height={32} className="size-full object-cover" />
              </span>
            ))}
            <span className="relative z-10 -ml-2.5 flex size-8 items-center justify-center rounded-full bg-[#D4FB20] text-[11px] font-bold text-[#1A1C20] ring-2 ring-white">
              {extraStudentsCount}
            </span>
          </div>
        </div>

        <p className="">
          <span className="text-xl font-poppins font-semibold text-[#003BE2]">${price}</span>
          <span className="text-xs leading-[160%] text-[#4F4F4F]">/lifetime</span>
        </p>
      </div>
    </Link>
  );
};
