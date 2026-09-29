import { type FC } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const CARD_BG = "bg-white text-[#242528]";
const CARD_RADIUS = "rounded-[24px]";

const STUDENT_AVATARS = [
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&h=200&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&h=200&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&h=200&q=80",
  "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&h=200&q=80",
];

export const LearningProgressCard: FC<{ className?: string; value?: number }> = ({
  className,
  value = 55,
}) => (
  <article className={cn("relative p-4 rounded-2xl bg-white backdrop-blur-lg w-40 min-w-48 space-y-2", CARD_RADIUS, CARD_BG, className)}>
    <p className="text-xs lg:text-sm font-medium leading-[120%]">Learning Progress</p>
    <p className="font-poppins text-[30px] lg:text-[48px] font-semibold leading-[120%] tracking-[-1%]">{value}%</p>
    <div
      className="h-2 overflow-hidden rounded-full bg-[#F6F6F6]"
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Learning progress"
    >
      <div className="h-full rounded-full bg-[#D4FB20]" style={{ width: `${value}%` }} />
    </div>
  </article>
);

export const CourseHighlightCard: FC<{ className?: string }> = ({ className }) => (
  <article className={cn("p-4 rounded-2xl bg-white backdrop-blur-lg min-w-58 space-y-1", CARD_RADIUS, CARD_BG, className)}>
    <h3 className="font-poppins font-medium leading-[120%]">UI/UX Design</h3>
    <p className="font-poppins text-xs leading-[120%] text-[#82868E]">
      200 Courses <span aria-hidden="true">•</span> 1000+ Students
    </p>
  </article>
);

export const HappyStudentsCard: FC<{ className?: string }> = ({ className }) => (
  <article className={cn("p-4 rounded-2xl bg-white backdrop-blur-lg min-w-58 space-y-2", CARD_RADIUS, CARD_BG, className)}>
    <div className="space-y-1">
    <h3 className="font-medium leading-[120%] text-[#242528]">Happy Students</h3>
    <p className="flex items-center gap-1.5 text-xs leading-4.25 text-[#82868E]">
      <span className="text-[#242528]">4.5</span>(240)
      <Star className="size-4 fill-[#D4FB20] text-[#D4FB20]" aria-hidden="true" />
    </p>
    </div>
    <div className="flex items-center gap-2">
      {STUDENT_AVATARS.map((src, index) => (
        <div
          key={src}
          className={cn(
            "relative overflow-hidden w-10.75 aspect-square rounded-full",
            index > 0 && "-ml-4"
          )}
          style={{ zIndex: index + 1 }}
        >
          <Image src={src} alt="" width={100} height={100} className="w-full h-full object-cover" />
        </div>
      ))}
      <div
        className="relative z-10 -ml-4 flex w-10.75 aspect-square items-center justify-center rounded-full bg-[#D4FB20] text-xs font-bold text-[#242528]"
      >
        2K+
      </div>
    </div>
  </article>
);
