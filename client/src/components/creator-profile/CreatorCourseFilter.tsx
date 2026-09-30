import { useState, type FC } from "react";
import { ArrowUpDown, BarChart2, Shapes, SlidersHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

interface CreatorCourseFilterProps {
  selectedLevel: string | null;
  onSelectLevel: (level: string | null) => void;
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
  levels: string[];
  categories: string[];
  sortBy: "relevant" | "rating" | "price";
  onToggleSort: () => void;
  onReset: () => void;
}

export const CreatorCourseFilter: FC<CreatorCourseFilterProps> = ({
  selectedLevel,
  onSelectLevel,
  selectedCategory,
  onSelectCategory,
  levels,
  categories,
  sortBy,
  onToggleSort,
  onReset,
}) => {
  const [showLevelMenu, setShowLevelMenu] = useState(false);
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 pb-6">
      <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
        <button
          type="button"
          onClick={onReset}
          className={cn(
            "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition-all cursor-pointer",
            !selectedLevel && !selectedCategory
              ? "border-[#12141A] bg-[#12141A] text-white"
              : "border-[#E6E8EC] bg-white text-[#12141A] hover:bg-neutral-50"
          )}
        >
          <SlidersHorizontal className="size-3.5" />
          <span>Filter</span>
        </button>

        <div className="relative">
          <button
            type="button"
            onClick={() => {
              setShowLevelMenu((v) => !v);
              setShowCategoryMenu(false);
            }}
            className={cn(
              "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition-all cursor-pointer",
              selectedLevel
                ? "border-[#003BE2] bg-[#003BE2]/5 text-[#003BE2]"
                : "border-[#E6E8EC] bg-white text-[#12141A] hover:bg-neutral-50"
            )}
          >
            <BarChart2 className="size-3.5" />
            <span>{selectedLevel ? `Level: ${selectedLevel}` : "Level"}</span>
          </button>

          {showLevelMenu && (
            <div className="absolute top-full left-0 mt-2 z-20 w-44 rounded-2xl border border-[#E6E8EC] bg-white p-2 shadow-xl">
              <button
                type="button"
                onClick={() => {
                  onSelectLevel(null);
                  setShowLevelMenu(false);
                }}
                className="w-full text-left px-3 py-1.5 text-xs rounded-lg hover:bg-neutral-100 font-medium text-[#12141A]"
              >
                All Levels
              </button>
              {levels.map((lvl) => (
                <button
                  key={lvl}
                  type="button"
                  onClick={() => {
                    onSelectLevel(lvl);
                    setShowLevelMenu(false);
                  }}
                  className={cn(
                    "w-full text-left px-3 py-1.5 text-xs rounded-lg hover:bg-neutral-100 font-medium",
                    selectedLevel === lvl
                      ? "text-[#003BE2] font-bold bg-[#003BE2]/5"
                      : "text-[#4B5160]"
                  )}
                >
                  {lvl}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => {
              setShowCategoryMenu((v) => !v);
              setShowLevelMenu(false);
            }}
            className={cn(
              "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition-all cursor-pointer",
              selectedCategory
                ? "border-[#003BE2] bg-[#003BE2]/5 text-[#003BE2]"
                : "border-[#E6E8EC] bg-white text-[#12141A] hover:bg-neutral-50"
            )}
          >
            <Shapes className="size-3.5" />
            <span>
              {selectedCategory ? `Category: ${selectedCategory}` : "Category"}
            </span>
          </button>

          {showCategoryMenu && (
            <div className="absolute top-full left-0 mt-2 z-20 w-48 rounded-2xl border border-[#E6E8EC] bg-white p-2 shadow-xl">
              <button
                type="button"
                onClick={() => {
                  onSelectCategory(null);
                  setShowCategoryMenu(false);
                }}
                className="w-full text-left px-3 py-1.5 text-xs rounded-lg hover:bg-neutral-100 font-medium text-[#12141A]"
              >
                All Categories
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    onSelectCategory(cat);
                    setShowCategoryMenu(false);
                  }}
                  className={cn(
                    "w-full text-left px-3 py-1.5 text-xs rounded-lg hover:bg-neutral-100 font-medium",
                    selectedCategory === cat
                      ? "text-[#003BE2] font-bold bg-[#003BE2]/5"
                      : "text-[#4B5160]"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="relative">
        <button
          type="button"
          onClick={onToggleSort}
          className="inline-flex items-center gap-2 rounded-full border border-[#E6E8EC] bg-white px-4 py-2 text-xs font-semibold text-[#12141A] hover:bg-neutral-50 transition-colors cursor-pointer"
        >
          <ArrowUpDown className="size-3.5" />
          <span>
            {sortBy === "relevant"
              ? "Most relevant"
              : sortBy === "rating"
              ? "Highest rated"
              : "Lowest price"}
          </span>
        </button>
      </div>
    </div>
  );
};
