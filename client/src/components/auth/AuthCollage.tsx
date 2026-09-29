import { type FC } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { CourseCard } from "@/components/ui";
import { cn } from "@/lib/utils";

const AVATARS = [
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=96&h=96&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=96&h=96&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=96&h=96&q=80",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=96&h=96&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=96&h=96&q=80",
];

const FRONT_COURSE = {
  href: "/courses/power-big-data",
  image:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
  title: "the Power of Big Data",
  author: "purepearl studio",
  rating: 4.5,
  lessons: 17,
  duration: "2 hours 16 mins",
  comments: 59,
  level: "Beginner",
  price: 49,
};

const BACK_COURSE = {
  href: "/courses/digital-asset",
  image:
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80",
  title: "Build Digital Asset",
  author: "purepearl studio",
  rating: 4.7,
  lessons: 22,
  duration: "3 hours 40 mins",
  comments: 84,
  level: "Beginner",
  price: 25,
};

export const AuthCollage: FC = () => {
  return (
    <div inert className="relative mx-auto h-140 w-full max-w-xl" aria-hidden="true">
      <CourseCard
        {...BACK_COURSE}
        starClassName="text-[#D4FB20]"
        statClassName="px-2 text-[10px]"
        className="pointer-events-none absolute top-25 left-0 w-74 border border-[#CED0D3] shadow-[0_18px_40px_rgba(4,16,70,0.22)]"
      />
      <CourseCard
        {...FRONT_COURSE}
        starClassName="text-[#D4FB20]"
        statClassName="px-2 text-[10px]"
        className="pointer-events-none absolute top-0 left-25 z-10 w-88 border border-[#CED0D3] shadow-[0_22px_50px_rgba(4,16,70,0.28)]"
      />

      <Image
        src="/images/Cone(2).png"
        alt=""
        width={160}
        height={160}
        className="pointer-events-none absolute top-10 left-10 z-20 w-30 object-contain"
      />
      <Image
        src="/images/Cone(3).png"
        alt=""
        width={180}
        height={180}
        className="pointer-events-none absolute bottom-0 -left-1 z-20 w-24 object-contain"
      />
      <Image
        src="/images/Frame(white).png"
        alt=""
        width={140}
        height={140}
        className="pointer-events-none absolute bottom-[10%] left-80 z-20 w-32 object-contain"
      />

      <article className="absolute bottom-0 right-40 z-10 w-60 rounded-2xl bg-[#D6FB3A] p-3.5 text-[#16181D] shadow-[0_16px_36px_rgba(4,16,70,0.2)]">
        <h3 className="text-sm font-semibold leading-tight">Happy Students</h3>
        <p className="mt-1 flex items-center gap-1 text-xs text-[#3A3D44]">
          <span className="font-medium text-[#16181D]">4.5</span>
          (240)
          <Star className="size-3.5 fill-[#003BE2] text-[#003BE2]" aria-hidden="true" />
        </p>
        <div className="mt-2.5 flex items-center">
          {AVATARS.map((src, index) => (
            <span
              key={src}
              className={cn(
                "relative size-8 overflow-hidden rounded-full ring-2 ring-[#D6FB3A]",
                index > 0 && "-ml-2.5"
              )}
              style={{ zIndex: index + 1 }}
            >
              <Image src={src} alt="" width={32} height={32} className="size-full object-cover" />
            </span>
          ))}
          <span className="relative z-10 -ml-2.5 flex size-8 items-center justify-center rounded-full bg-[#12141A] text-[10px] font-bold text-white ring-2 ring-[#D6FB3A]">
            2K+
          </span>
        </div>
      </article>
    </div>
  );
};
