import { type FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import { SectionTitle, SectionDescription } from "@/components/ui";

const SHAPES = [
  {
    src: "/images/Frame(1).png",
    className: "hero-float absolute -top-[8%] -left-[7%] w-[400px]",
    imgClassName: "h-auto w-full object-contain",
    duration: "13s",
    delay: "-2s",
  },
  {
    src: "/images/Frame.png",
    className: "hero-float-alt absolute top-[7%] left-[15%] w-[200px]",
    imgClassName: "h-auto w-full object-contain",
    duration: "15s",
    delay: "-4s",
  },
  {
    src: "/images/Cone(3).png",
    className: "hero-float absolute top-[4%] right-[15%] w-[200px]",
    imgClassName: "h-auto w-full object-contain",
    duration: "12s",
    delay: "-6s",
  },
  {
    src: "/images/Cone.png",
    className: "hero-float-alt absolute top-[2%] -right-[10%] w-[400px]",
    imgClassName: "h-auto w-full object-contain [filter:grayscale(1)_brightness(1.85)_contrast(0.8)]",
    duration: "16s",
    delay: "-3s",
  },
  {
    src: "/images/Mask Group(white).png",
    className: "hero-float absolute top-[46%] -left-[3%] w-[200px] -rotate-30",
    imgClassName: "h-auto w-full object-contain",
    duration: "14s",
    delay: "-5s",
  },
  {
    src: "/images/Cone(2).png",
    className: "hero-float-alt absolute -bottom-[22%] left-[4%] w-[400px]",
    imgClassName: "h-auto w-full object-contain",
    duration: "15s",
    delay: "-1s",
  },
  {
    src: "/images/Frame(1).png",
    className: "hero-float absolute right-[1%] -bottom-[12%] w-[400px] -rotate-45",
    imgClassName: "h-auto w-full object-contain",
    duration: "13s",
    delay: "-7s",
  },
] as const;

export const CreatorBanner: FC = () => {
  return (
    <section className="relative overflow-hidden bg-hero-grid">
      {SHAPES.map((shape) => (
        <span
          key={`${shape.src}-${shape.className}`}
          className={`pointer-events-none inline-block ${shape.className}`}
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

      <div className="relative z-10 mx-auto flex min-h-128 w-full flex-col items-center justify-center px-5 py-16 text-center sm:min-h-104 sm:px-8 lg:min-h-[34vw] lg:py-20 space-y-6 md:space-y-8 lg:space-y-10">
        <SectionTitle align="center" className="text-[#F5F5F6] tracking-[-0.1%]">
          Unlock Your Potential as a
          <br />
          Creator with ByteSpace
        </SectionTitle>
        <SectionDescription align="center" maxWidth="max-w-5xl" className="text-[#F5F5F6] leading-[160%]">
          Experience the collaboration of numerous creators and an expanding selection of courses.
          Register now and become a part of a community comprising over 10,000 local and
          international creators. Utilize our Course Editor, and showcase your expertise by
          publishing your finest course on the ByteSpace Course Library.
        </SectionDescription>
        <Link
          href={ROUTES.JOIN}
          className="mt-6 inline-flex h-10 items-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover sm:mt-8 sm:h-11 sm:px-6"
        >
          Join as Creator
        </Link>
      </div>
    </section>
  );
};
