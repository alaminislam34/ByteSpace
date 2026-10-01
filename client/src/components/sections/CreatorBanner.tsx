import { type FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import { SectionTitle, SectionDescription, GridLines } from "@/components/ui";
import { cn } from "@/lib/utils";

const SHAPES = [
  {
    src: "/images/Frame(1).png",
    className: "hero-float absolute -top-6 -left-6 sm:-top-[6%] sm:-left-[6%] lg:-top-[8%] lg:-left-[7%] w-20 sm:w-44 lg:w-[320px] 2xl:w-[400px] opacity-70 sm:opacity-80 lg:opacity-100 z-0",
    imgClassName: "h-auto w-full object-contain",
    duration: "13s",
    delay: "-2s",
  },
  {
    src: "/images/Frame.png",
    className: "hero-float-alt hidden lg:inline-block absolute lg:top-[7%] lg:left-[15%] lg:w-[120px] 2xl:w-[200px] opacity-80 lg:opacity-100 z-0",
    imgClassName: "h-auto w-full object-contain",
    duration: "15s",
    delay: "-4s",
  },
  {
    src: "/images/Cone(3).png",
    className: "hero-float hidden lg:inline-block absolute lg:top-[4%] lg:right-[15%] lg:w-[120px] 2xl:w-[200px] opacity-80 lg:opacity-100 z-0",
    imgClassName: "h-auto w-full object-contain",
    duration: "12s",
    delay: "-6s",
  },
  {
    src: "/images/Cone.png",
    className: "hero-float-alt absolute -top-6 -right-6 sm:top-[2%] sm:-right-[8%] lg:top-[2%] lg:-right-[10%] w-20 sm:w-44 lg:w-[320px] 2xl:w-[400px] opacity-70 sm:opacity-80 lg:opacity-100 z-0",
    imgClassName: "h-auto w-full object-contain [filter:grayscale(1)_brightness(1.85)_contrast(0.8)]",
    duration: "16s",
    delay: "-3s",
  },
  {
    src: "/images/Mask Group(white).png",
    className: "hero-float hidden lg:inline-block absolute lg:top-[46%] lg:-left-[3%] lg:w-[120px] 2xl:w-[200px] -rotate-30 opacity-80 lg:opacity-100 z-0",
    imgClassName: "h-auto w-full object-contain",
    duration: "14s",
    delay: "-5s",
  },
  {
    src: "/images/Cone(2).png",
    className: "hero-float-alt absolute -bottom-6 -left-6 sm:-bottom-[16%] sm:left-[2%] lg:-bottom-[22%] lg:left-[4%] w-24 sm:w-52 lg:w-[270px] 2xl:w-[400px] opacity-70 sm:opacity-80 lg:opacity-100 z-0",
    imgClassName: "h-auto w-full object-contain",
    duration: "15s",
    delay: "-1s",
  },
  {
    src: "/images/Frame(1).png",
    className: "hero-float absolute -bottom-6 -right-6 sm:bottom-[1%] md:-bottom-10 sm:right-[1%] lg:right-[1%] lg:-bottom-[23%] w-24 sm:w-52 lg:w-[270px] 2xl:w-[400px] -rotate-45 opacity-70 sm:opacity-80 lg:opacity-100 z-0",
    imgClassName: "h-auto w-full object-contain",
    duration: "13s",
    delay: "-7s",
  },
] as const;

export const CreatorBanner: FC = () => {
  return (
    <section className="relative overflow-hidden bg-hero-grid">
      <GridLines rows={18} />
      {SHAPES.map((shape) => (
        <span
          key={`${shape.src}-${shape.className}`}
          className={cn("pointer-events-none", shape.className)}
          style={{ animationDuration: shape.duration, animationDelay: shape.delay }}
        >
          <Image
            src={shape.src}
            alt=""
            width={480}
            height={480}
            className={shape.imgClassName}
          />
        </span>
      ))}

      <div className="relative z-10 mx-auto flex min-h-100 w-full flex-col items-center justify-center px-4 py-14 text-center sm:min-h-104 sm:px-8 sm:py-16 lg:min-h-[34vw] lg:py-18 space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10">
        <SectionTitle
          align="center"
          className="text-[#F5F5F6] tracking-[-0.1%] text-2xl sm:text-3xl lg:text-[44px]"
        >
          Unlock Your Potential as a
          <br className="hidden sm:inline" />
          {" "}Creator with ByteSpace
        </SectionTitle>
        <SectionDescription
          align="center"
          maxWidth="max-w-5xl"
          className="text-[#F5F5F6] leading-[160%] text-xs sm:text-sm md:text-base lg:text-lg px-2 sm:px-0"
        >
          Experience the collaboration of numerous creators and an expanding selection of courses.
          Register now and become a part of a community comprising over 10,000 local and
          international creators. Utilize our Course Editor, and showcase your expertise by
          publishing your finest course on the ByteSpace Course Library.
        </SectionDescription>
        <Link
          href={ROUTES.JOIN}
          className="mt-4 sm:mt-6 inline-flex h-10 items-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover sm:h-11 sm:px-6"
        >
          Join as Creator
        </Link>
      </div>
    </section>
  );
};
