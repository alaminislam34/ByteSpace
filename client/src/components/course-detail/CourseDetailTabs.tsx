import type { FC } from "react";
import { cn } from "@/lib/utils";
import type { TabType } from "./types";

interface CourseDetailTabsProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const TABS: { id: TabType; label: string }[] = [
  { id: "about", label: "About" },
  { id: "lesson", label: "Lesson" },
  { id: "reviews", label: "Reviews" },
];

export const CourseDetailTabs: FC<CourseDetailTabsProps> = ({
  activeTab,
  onTabChange,
}) => {
  return (
    <div className="flex items-center gap-3">
      {TABS.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onTabChange(tab.id)}
          className={cn(
            "rounded-full px-5 py-2.5 text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer",
            activeTab === tab.id
              ? "bg-primary text-[#0B0F19] font-bold shadow-sm"
              : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-[#EAEAEA] hover:text-[#12141A]"
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};
