import { type FC } from "react";
import { Check } from "lucide-react";
import { getCourseById } from "@/data/courses";
import { SectionTitle, SectionDescription } from "@/components/ui";
import { StudentGrowthShowcase } from "./StudentGrowthShowcase";
import { CreatorGrowthShowcase } from "./CreatorGrowthShowcase";

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
            <SectionTitle className="text-[#242528] tracking-[-0.1%]">
              Your Path to Professional Growth Starts Here!
            </SectionTitle>
            <SectionDescription className="lg:text-lg leading-[160%] text-[#4B4C53]">
              Explore our curated selection of courses tailored to enhance your capabilities and
              accelerate your career journey. Whether you are looking to sharpen specific skills,
              gain industry expertise, or embark on a new career path entirely, we have the
              resources you need.
            </SectionDescription>
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

          <StudentGrowthShowcase course={figmaCourse} />
        </div>

        <div className="grid items-center lg:grid-cols-2 lg:gap-16 relative">
          <CreatorGrowthShowcase />

          <div className="order-1 max-w-xl space-y-6 lg:order-2">
            <SectionTitle className="text-[#242528] tracking-[-0.1%]">
              Create & Manage
              <br />
              Courses Easily.
            </SectionTitle>
            <SectionDescription className="text-base leading-[160%] text-[#4B4C53] lg:text-lg">
              <span className="font-semibold text-[#242528]">ByteSpace</span> supports individuals
              or entities in the creation, publication, and administration of educational courses.
            </SectionDescription>
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
