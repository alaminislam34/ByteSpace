import { type FC } from "react";
import Image from "next/image";
import { Star, BarChart2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CourseCardProps {
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
}

export const CourseCard: FC<CourseCardProps> = ({
  image,
  title,
  author,
  rating,
  lessons,
  duration,
  comments,
  level = "Beginner",
  extraStudentsCount = "26+",
  price,
  className,
}) => {
  return (
    <article
      className={cn(
        "group flex flex-col rounded-3xl bg-surface-pure p-4 border border-border/80 shadow-xs",
        "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-shuttle-200",
        className
      )}
    >
      <div className="relative aspect-16/10 w-full overflow-hidden rounded-2xl bg-shuttle-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-1.5 text-[11px] font-medium text-white">
          <span className="rounded-full bg-black/45 backdrop-blur-md px-2.5 py-1">
            {lessons} Lessons
          </span>
          <span className="rounded-full bg-black/45 backdrop-blur-md px-2.5 py-1">
            {duration}
          </span>
          <span className="rounded-full bg-black/45 backdrop-blur-md px-2.5 py-1">
            {comments} Comments
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3 pt-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-title text-lg font-bold text-[#0B0F19] tracking-tight group-hover:text-secondary transition-colors line-clamp-1">
            {title}
          </h3>
          <div className="flex items-center gap-1 text-sm font-semibold text-[#0B0F19]">
            <span>{rating.toFixed(1)}</span>
            <Star className="size-3.5 fill-amber-400 text-amber-400" />
          </div>
        </div>

        <p className="text-xs text-secondary font-medium">
          by <span className="hover:underline">{author}</span>
        </p>

        <div className="flex items-center justify-between pt-1">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-surface-light px-2.5 py-1 text-xs font-medium text-foreground/80">
            <BarChart2 className="size-3.5 text-shuttle-400" />
            <span>{level}</span>
          </div>

          <div className="flex items-center -space-x-1.5">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="size-6 rounded-full border-2 border-white bg-shuttle-200 overflow-hidden relative"
              >
                <div className="size-full bg-linear-to-tr from-slate-400 to-slate-200" />
              </div>
            ))}
            <span className="flex size-6 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground border-2 border-white">
              {extraStudentsCount}
            </span>
          </div>
        </div>

        <div className="pt-2 border-t border-border/70 flex items-baseline gap-1">
          <span className="font-title text-xl font-bold text-secondary">
            ${price}
          </span>
          <span className="text-xs text-shuttle-400 font-normal">/lifetime</span>
        </div>
      </div>
    </article>
  );
};
