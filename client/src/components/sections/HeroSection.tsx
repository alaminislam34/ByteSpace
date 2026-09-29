import { type FC } from "react";
import { Navbar } from "@/components/layout";
import {
  CourseHighlightCard,
  HappyStudentsCard,
  LearningProgressCard,
  SearchField,
} from "@/components/ui";
import Image from "next/image";

const GRID_CELLS = 12 * 26;

export const HeroSection: FC = () => {
  return (
    <section className="relative min-h-svh w-full overflow-hidden bg-[#003be2] flex flex-col justify-between">
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="grid grid-cols-12 w-full border-t border-l border-white/12">
          {Array.from({ length: GRID_CELLS }).map((_, i) => (
            <div
              key={i}
              className="aspect-square border-r border-b border-white/12"
            />
          ))}
        </div>
      </div>

      <Navbar />

      <div className="absolute top-1/3 -translate-y-1/3 min-h-10 w-full flex items-center justify-between pointer-events-none">
        <span className="hero-float inline-block -ml-40" style={{ animationDuration: "12s" }}>
          <Image
            src={"/images/Frame(1).png"}
            alt=""
            width={500}
            height={500}
            className="w-sm aspect-square object-contain"
          />
        </span>
        <span className="hero-float-alt inline-block -mr-40" style={{ animationDuration: "14s", animationDelay: "-3s" }}>
          <Image
            src={"/images/Cone.png"}
            alt=""
            width={500}
            height={500}
            className="w-sm aspect-square object-contain"
          />
        </span>
      </div>

      <div className="absolute top-3/5 -translate-y-3/5 min-h-10 w-11/12 md:w-10/12 lg:w-9/12 mx-auto left-1/2 -translate-x-1/2 flex items-center justify-between pointer-events-none">
        <span className="hero-float-alt inline-block" style={{ animationDuration: "15s", animationDelay: "-5s" }}>
          <Image
            src={"/images/fram(white).png"}
            alt=""
            width={500}
            height={500}
            className="w-43.75 lg:w-60 aspect-square object-contain"
          />
        </span>
        <span className="hero-float inline-block" style={{ animationDuration: "11s", animationDelay: "-2s" }}>
          <Image
            src={"/images/Mask Group(white).png"}
            alt=""
            width={500}
            height={500}
            className="w-43.75 lg:w-60 aspect-square object-contain"
          />
        </span>
      </div>

      <div className="absolute bottom-20 z-20 min-h-10 w-11/12 px-4 mx-auto left-1/2 -translate-x-1/2 flex items-center justify-between pointer-events-none">
        <span className="hero-float inline-block" style={{ animationDuration: "13s", animationDelay: "-6s" }}>
          <Image
            src={"/images/Cone(white).png"}
            alt=""
            width={500}
            height={500}
            className="w-xs lg:w-sm aspect-square object-contain"
          />
        </span>
        <span className="hero-float-alt inline-block" style={{ animationDuration: "16s", animationDelay: "-4s" }}>
          <Image
            src={"/images/Frame(white).png"}
            alt=""
            width={500}
            height={500}
            className="w-xs lg:w-sm aspect-square object-contain"
          />
        </span>
      </div>

      {/* Hero Content */}
      <div className="mx-auto z-50 flex h-full w-full max-w-11/12 flex-col items-center justify-center gap-8 pt-20 text-center md:max-w-10/12 lg:max-w-5xl py-14 space-y-15">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-[72px] font-poppins font-semibold leading-[120%] tracking-[-1%]">
            Get Access to Hundreds Courses Available
          </h1>
          <p className="lg:text-lg leading-[180%] text-[#E5E6E8]">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>
        </div>
        <SearchField />
      </div>

      <div className="relative z-10 w-full flex-1 flex items-end justify-center min-h-160">
        <div className="relative z-20 shadow-lg flex items-center justify-center">
          <LearningProgressCard className="pointer-events-auto absolute right-[6%] top-[35%] z-30 " />
          <CourseHighlightCard className="pointer-events-auto absolute left-[2%] top-[35%] z-30 " />
          <HappyStudentsCard className="pointer-events-auto absolute -left-8 bottom-28 z-30 " />
          <Image
            src="/images/hero.png"
            alt="Hero Image"
            width={900}
            height={900}
            className="min-w-145 h-auto object-contain"
          />
        </div>
       
        <div className="absolute -bottom-4/6 z-10 shadow-lg flex items-center justify-center w-full h-full">
          <div className="relative flex items-center justify-center rounded-full aspect-square border-340 border-primary w-9/12 mx-auto overflow-hidden"></div>
        </div>
      </div>
    </section>
  );
};
