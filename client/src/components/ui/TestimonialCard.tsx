import { type FC } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  avatar: string;
  className?: string;
}

export const TestimonialCard: FC<TestimonialCardProps> = ({
  name,
  role,
  quote,
  avatar,
  className,
}) => {
  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-[24px] border border-[#ECEEF2] bg-white p-6 shadow-[0_8px_28px_rgba(15,23,42,0.05)] sm:p-7",
        className
      )}
    >
      <Image
        src={avatar}
        alt=""
        width={80}
        height={80}
        className="size-16 rounded-full object-cover"
      />
      <h3 className="mt-5 font-poppins text-[17px] font-semibold leading-tight text-[#12141A]">{name}</h3>
      <p className="mt-1.5 text-[15px] font-medium leading-snug text-[#003BE2]">{role}</p>
      <p className="mt-4 text-[15px] leading-[1.7] text-[#5C6570]">&ldquo;{quote}&rdquo;</p>
    </article>
  );
};
