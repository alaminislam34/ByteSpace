import type { FC } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { KEY_POINTS, SNEAK_PEEK_IMAGES } from "../constants";

interface AboutTabProps {
  displayTitle: string;
}

export const AboutTab: FC<AboutTabProps> = ({ displayTitle }) => {
  return (
    <div className="flex flex-col gap-8 pt-1">
      <div>
        <h2 className="font-poppins text-lg font-bold text-[#12141A] sm:text-xl">
          Description
        </h2>
        <div className="mt-3 flex flex-col gap-4 text-xs sm:text-sm leading-relaxed text-[#5C6370]">
          <p>
            Embark on an enlightening exploration into the world of digital creation with our
            comprehensive course, &ldquo;{displayTitle}.&rdquo; This transformative learning
            experience invites you to delve deep into the intricacies of crafting impactful
            digital content. From laying the groundwork with foundational concepts to mastering
            advanced techniques, this guide is meticulously curated to empower you with the skills
            essential for navigating the dynamic landscape of digital asset creation.
          </p>
          <p>
            In the initial modules, you&apos;ll establish a solid foundation by immersing yourself
            in the foundational concepts that form the backbone of digital asset creation.
            Understand the fundamental elements that constitute compelling digital content and
            gain proficiency in leveraging these elements to communicate effectively in the
            digital realm.
          </p>
          <p>
            As you progress through the course, you&apos;ll ascend to higher levels of
            expertise, delving into the nuances of design principles that drive impactful
            creations. Uncover the secrets behind effective visual communication, exploring color
            theory, typography, and layout strategies that elevate your digital assets to new
            heights. Engage in hands-on exercises that reinforce your understanding, allowing you
            to apply these principles in practical scenarios.
          </p>
        </div>
      </div>

      <div>
        <h3 className="font-poppins text-base font-bold text-[#12141A] sm:text-lg">
          Sneak Peak
        </h3>
        <div className="mt-3.5 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5">
          {SNEAK_PEEK_IMAGES.map((img, i) => (
            <div
              key={i}
              className="group relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-neutral-100 shadow-sm border border-[#E6E8EC]"
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, 200px"
              />
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-poppins text-base font-bold text-[#12141A] sm:text-lg">
          Key Points
        </h3>
        <div className="mt-3.5 flex flex-col gap-3">
          {KEY_POINTS.map((point) => (
            <div key={point} className="flex items-center gap-3">
              <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#003BE2] text-white">
                <Check className="size-3" strokeWidth={3} />
              </div>
              <span className="text-xs sm:text-sm font-medium text-[#12141A]">
                {point}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
