import { type FC } from "react";
import Image from "next/image";
import { SectionHeader } from "@/components/ui";

const PATHS = [
  { label: "Design", icon: "/icons/Frame(1).png" },
  { label: "Development", icon: "/icons/Style=Filled.png" },
  { label: "IT & Software", icon: "/icons/Style=Filled(1).png" },
  { label: "Business", icon: "/icons/Style=Round.png" },
  { label: "Marketing", icon: "/icons/Style=Outlined.png" },
  { label: "Photography", icon: "/icons/Style=Outlined(1).png" },
];

export const LearningPath: FC = () => {
  return (
    <section className="w-full bg-white py-20 lg:py-28">
      <div className="mx-auto flex w-11/12 flex-col items-center gap-14 lg:w-10/12 ">
        <SectionHeader
          title="Explore Diverse Learning Paths at Bytespace"
          titleClassName="text-3xl lg:text-[36px]"
          description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
        />

        <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-5">
          {PATHS.map(({ label, icon }) => (
            <div
              key={label}
              className="flex aspect-square flex-col items-center justify-center gap-2.5 sm:gap-4 rounded-[22px] border border-[#E6E7EB] bg-white p-2.5 sm:px-3"
            >
              <span className="flex size-11 sm:size-14 items-center justify-center rounded-full bg-[#D4FB20]">
                <Image src={icon} alt="" width={36} height={36} className="size-7 sm:size-9" />
              </span>
              <span className="text-center font-poppins text-xs sm:text-[15px] font-medium leading-none text-[#1C1E24]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
