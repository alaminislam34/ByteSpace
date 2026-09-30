import { type FC } from "react";
import { Navbar } from "@/components/layout";
import {
  CourseHighlightCard,
  GridLines,
  HappyStudentsCard,
  LearningProgressCard,
  SearchField,
} from "@/components/ui";
import Image from "next/image";

export const HeroSection: FC = () => {
  return (
    <section className="relative min-h-svh w-full overflow-hidden bg-hero-grid flex flex-col justify-between">
      <GridLines rows={32} />
      <Navbar />

      <div className="hidden md:flex absolute top-1/6 z-0 lg:top-1/3 -translate-y-1/3 min-h-10 w-full items-center justify-between pointer-events-none opacity-60 lg:opacity-100">
        <span className="hero-float inline-block -ml-16 lg:-ml-40" style={{ animationDuration: "12s" }}>
          <Image
            src={"/images/Frame(1).png"}
            alt=""
            width={500}
            height={500}
            className="w-36 lg:w-sm aspect-square object-contain"
          />
        </span>
        <span className="hero-float-alt inline-block -mr-16 lg:-mr-40" style={{ animationDuration: "14s", animationDelay: "-3s" }}>
          <Image
            src={"/images/Cone.png"}
            alt=""
            width={500}
            height={500}
            className="w-36 lg:w-sm aspect-square object-contain"
          />
        </span>
      </div>

      <div className="hidden md:flex absolute top-[55%] lg:top-3/5 -translate-y-3/5 min-h-10 w-11/12 md:w-10/12 lg:w-9/12 mx-auto left-1/2 -translate-x-1/2 items-center justify-between pointer-events-none opacity-60 lg:opacity-100">
        <span className="hero-float-alt inline-block" style={{ animationDuration: "15s", animationDelay: "-5s" }}>
          <Image
            src={"/images/fram(white).png"}
            alt=""
            width={500}
            height={500}
            className="w-16 lg:w-40 2xl:w-60 aspect-square object-contain"
          />
        </span>
        <span className="hero-float inline-block" style={{ animationDuration: "11s", animationDelay: "-2s" }}>
          <Image
            src={"/images/Mask Group(white).png"}
            alt=""
            width={500}
            height={500}
            className="w-16 lg:w-40 2xl:w-60 aspect-square object-contain"
          />
        </span>
      </div>

      <div className="hidden md:flex absolute bottom-40 lg:bottom-20 z-20 min-h-10 w-11/12 mx-auto left-1/2 -translate-x-1/2 items-center justify-between pointer-events-none opacity-60 lg:opacity-100">
        <span className="hero-float inline-block" style={{ animationDuration: "13s", animationDelay: "-6s" }}>
          <Image
            src={"/images/Cone(white).png"}
            alt=""
            width={500}
            height={500}
            className="w-16 lg:w-60 2xl:w-sm aspect-square object-contain"
          />
        </span>
        <span className="hero-float-alt inline-block" style={{ animationDuration: "16s", animationDelay: "-4s" }}>
          <Image
            src={"/images/Frame(white).png"}
            alt=""
            width={500}
            height={500}
            className="w-16 lg:w-60 2xl:w-sm aspect-square object-contain"
          />
        </span>
      </div>

      <div className="mx-auto relative z-40 flex h-full w-full max-w-11/12 flex-col items-center justify-center gap-0 md:gap-4 lg:gap-8 pt-12 md:pt-16 text-center md:max-w-10/12 lg:max-w-5xl pb-6 lg:py-14 space-y-6 md:space-y-10 lg:space-y-15">
        <div className="space-y-3 sm:space-y-4 lg:space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-poppins font-semibold leading-[120%] tracking-[-1%]">
            Get Access to Hundreds Courses Available
          </h1>
          <p className="text-sm sm:text-base lg:text-lg leading-[170%] lg:leading-[180%] text-[#E5E6E8] max-w-xl lg:max-w-2xl mx-auto">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>
        </div>
        <SearchField />
      </div>

      <div className="relative z-10 w-full flex-1 flex items-end justify-center min-h-50 sm:min-h-115 lg:min-h-140 mt-4 lg:mt-0 lg:pt-6">
        <div className="relative z-20 flex items-center justify-center">
          <LearningProgressCard className="pointer-events-auto absolute right-6 sm:right-3 lg:right-[6%] top-[34%] sm:top-[34%] lg:top-[35%] z-30 scale-[0.65] xs:scale-[0.72] sm:scale-85 md:scale-95 lg:scale-100 origin-top-right transition-transform" />

          <CourseHighlightCard className="pointer-events-auto absolute left-6 sm:left-3 lg:left-[2%] top-[20%] sm:top-[26%] lg:top-[35%] z-30 scale-[0.65] xs:scale-[0.72] sm:scale-85 md:scale-95 lg:scale-100 origin-top-left transition-transform" />

          <HappyStudentsCard className="pointer-events-auto absolute left-6 sm:left-2 lg:left-4 2xl:-left-8 bottom-3 sm:bottom-10 lg:bottom-28 z-30 scale-[0.65] xs:scale-[0.72] sm:scale-85 md:scale-95 lg:scale-100 origin-bottom-left transition-transform" />

          <Image
            src="/images/sele.png"
            alt="Hero Image"
            width={900}
            height={900}
            priority
            className="w-100 sm:w-110 md:w-140 lg:w-200 xl:w-215 max-w-none h-auto object-contain select-none pointer-events-none"
          />
        </div>
       
        <div className="absolute bottom-[-60%] lg:bottom-[-55%] 2xl:bottom-[-80%] z-10 shadow-lg flex items-center justify-center w-full h-full pointer-events-none">
          <div className="relative flex items-center justify-center rounded-full aspect-square border-320 md:border-380 lg:border-400 border-primary w-[78%] mx-auto overflow-hidden"></div>
        </div>
      </div>
    </section>
  );
};
