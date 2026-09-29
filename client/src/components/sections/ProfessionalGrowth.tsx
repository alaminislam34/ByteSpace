import { type FC } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import {
  CourseCard,
  HappyStudentsCard,
  LearningProgressCard,
  MetricCard,
} from "@/components/ui";
import { getCourseById } from "@/data/courses";

const STATS = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const FEATURES = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

const figmaCourse = getCourseById("figma-basic");

export const ProfessionalGrowth: FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#F6F7FB] py-20">
      <div className="pointer-events-none absolute left-35 -top-10 size-100 rounded-full bg-[#E8F9A8] blur-[100px]" />
      <div className="pointer-events-none absolute -left-10 bottom-0 size-72 rounded-full bg-[#DDF58A] blur-[100px]" />
      <div className="pointer-events-none absolute z-10 -right-10 -bottom-10 rounded-full blur-[300px] size-100 aspect-square bg-[#003BE2]/20 border border-black" />
      <div className="relative mx-auto flex w-11/12 flex-col gap-24 @container lg:w-10/12 lg:gap-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl space-y-10">
            <h2 className="font-poppins text-4xl lg:text-[44px] font-semibold leading-[120%] tracking-[-0.1%] text-[#242528]">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="lg:text-lg leading-[160%] text-[#4B4C53]">
              Explore our curated selection of courses tailored to enhance your capabilities and
              accelerate your career journey. Whether you are looking to sharpen specific skills,
              gain industry expertise, or embark on a new career path entirely, we have the
              resources you need.
            </p>
            <dl className="mt-10 flex gap-10">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-poppins text-3xl lg:text-4xl font-semibold leading-10 text-[#003BE2]">
                    {stat.value}
                  </dt>
                  <dd className="lg:text-lg leading-[160%] text-[#4B4C53]">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative w-full md:h-150 lg:h-170">
            {figmaCourse && (
              <CourseCard
                {...figmaCourse}
                href={`/courses/${figmaCourse.id}`}
                className="relative z-0 md:absolute md:bottom-[20%] md:left-0"
              />
            )}
            <div className="relative h-72 w-full sm:h-96 md:absolute md:inset-0  md:h-full">
              <Image
                src="/images/Frame(1).png"
                alt=""
                width={1000}
                height={1000}
                className="pointer-events-none absolute bottom-[38%] right-0 z-25 h-auto w-32 sm:w-40 -rotate-52"
              />
              <Image
                src="/images/Image.png"
                alt="Student with a laptop and headset"
                width={900}
                height={642}
                className="pointer-events-none absolute right-0 bottom-0 z-10 h-auto w-[78%] drop-shadow-[0_24px_40px_rgba(15,23,42,0.16)] sm:w-[70%] lg:w-full"
              />
              <LearningProgressCard className="absolute bottom-[30%] right-0 z-20 max-w-[70%] shadow-[0_16px_36px_rgba(15,23,42,0.12)] sm:max-w-none" />
            </div>
          </div>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 relative">
          <div className="relative order-2 mx-auto min-h-150 lg:min-h-180 h-full w-full lg:order-1">
            <Image
              src="/images/Image(1).png"
              alt="Creator with a tablet and headset"
              width={700}
              height={700}
              className="pointer-events-none absolute top-0 left-90 z-20 -translate-x-1/2 object-contain"
            />
            <MetricCard
              label="Total Revenue"
              caption="July 1-28"
              value="$120.29"
              progress={78}
              className="absolute top-[10%] left-0 z-10 min-w-58"
            />
            <MetricCard
              label="Year to Date"
              caption="2025"
              value="$1,200.38"
              badge={
                <span className="rounded-full bg-[#D4FB20] px-1.5 py-0.5 text-[10px] font-bold text-[#16320A]">
                  +12%
                </span>
              }
              className="absolute left-0 z-10 top-[30%]"
            />
            <Image
              src="/images/Frame(1).png"
              alt=""
              width={180}
              height={180}
              className="pointer-events-none absolute top-[22%] right-20 z-20 h-auto w-20 sm:w-60"
            />
            <HappyStudentsCard className="absolute bottom-20 right-0 z-20 shadow-[0_16px_36px_rgba(15,23,42,0.12)] sm:right-auto sm:left-[36%]" />
          </div>

          <div className="order-1 max-w-xl space-y-6 lg:order-2">
            <h2 className="font-poppins text-4xl font-semibold leading-[120%] tracking-[-0.1%] text-[#242528] lg:text-[44px]">
              Create & Manage
              <br />
              Courses Easily.
            </h2>
            <p className="text-base leading-[160%] text-[#4B4C53] lg:text-lg">
              <span className="font-semibold text-[#242528]">ByteSpace</span> supports individuals
              or entities in the creation, publication, and administration of educational courses.
            </p>
            <ul className="flex flex-col gap-4">
              {FEATURES.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-base text-[#4B4C53] lg:text-lg">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#003BE2] text-white">
                    <Check className="size-3" strokeWidth={3} />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
