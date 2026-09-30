import type { FC } from "react";
import { Video } from "lucide-react";
import { ProgressBar } from "@/components/ui";
import { MODULES } from "../constants";

export const LessonTab: FC = () => {
  return (
    <div className="flex flex-col gap-8 pt-1">
      <div>
        <h2 className="font-poppins text-lg font-bold text-[#12141A] sm:text-xl">
          Explore the Modules
        </h2>
        <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#5C6370]">
          Immerse yourself in the course content as we break down each module into
          comprehensive lessons, providing practical insights and hands-on experiences.
        </p>
      </div>

      <div>
        <h3 className="font-poppins text-base font-bold text-[#12141A]">
          Lesson List
        </h3>
        <div className="mt-4 flex flex-col gap-4">
          {MODULES.map((mod) => (
            <div
              key={mod.number}
              className="flex items-start gap-4 rounded-2xl border border-transparent p-2 transition-colors hover:bg-neutral-50/80"
            >
              <div className="flex size-11 sm:size-12 shrink-0 items-center justify-center rounded-[18px] bg-primary text-[#12141A]">
                <Video className="size-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#12141A]">
                  {mod.number}: {mod.title}
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-[#5C6370]">
                  {mod.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-poppins text-base font-bold text-[#12141A]">
          Lesson Content
        </h3>
        <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#5C6370]">
          Engage with each lesson through captivating video content, detailed textual
          explanations, and interactive elements. Download resources, complete assignments,
          and test your understanding with quizzes.
        </p>
      </div>

      <div>
        <h3 className="font-poppins text-base font-bold text-[#12141A]">
          Lesson Progress Tracking
        </h3>
        <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#5C6370]">
          Witness your growth as you complete lessons, with an intuitive progress tracking
          feature guiding you through your learning journey.
        </p>

        <div className="mt-4 rounded-2xl border border-[#E6E8EC] bg-white p-5 sm:p-6 shadow-sm">
          <span className="text-xs font-medium text-[#8A9099]">Learning Progress</span>
          <p className="mt-1 font-poppins text-3xl font-bold tracking-tight text-[#12141A]">
            55%
          </p>
          <ProgressBar
            value={55}
            className="mt-3.5 h-2.5 bg-[#EAECEF]"
            colorClassName="bg-primary"
            aria-label="Learning Progress"
          />
        </div>
      </div>
    </div>
  );
};
