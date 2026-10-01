import type { FC } from "react";
import {
  ArrowDownNarrowWide,
  ArrowDownWideNarrow,
  ChartNoAxesColumnIncreasing,
  Funnel,
  ListFilter,
  Shapes,
  Star,
} from "lucide-react";
import { FilterDropdown, type FilterOption } from "@/components/ui";

interface CatalogFilterBarProps {
  price: string;
  onPriceChange: (value: string) => void;
  priceOptions: FilterOption[];
  level: string;
  onLevelChange: (value: string) => void;
  levelOptions: FilterOption[];
  category: string;
  onCategoryChange: (value: string) => void;
  categoryOptions: FilterOption[];
  sort: string;
  onSortChange: (value: string) => void;
  sortOptions: FilterOption[];
  sortLabel: string;
}

const getSortIcon = (sortValue: string) => {
  switch (sortValue) {
    case "price-asc":
      return <ArrowDownNarrowWide className="size-4" />;
    case "price-desc":
      return <ArrowDownWideNarrow className="size-4" />;
    case "rating":
      return <Star className="size-4 fill-current" />;
    case "relevant":
    default:
      return <ListFilter className="size-4" />;
  }
};

export const CatalogFilterBar: FC<CatalogFilterBarProps> = ({
  price,
  onPriceChange,
  priceOptions,
  level,
  onLevelChange,
  levelOptions,
  category,
  onCategoryChange,
  categoryOptions,
  sort,
  onSortChange,
  sortOptions,
  sortLabel,
}) => {
  const selectedPrice = priceOptions.find((opt) => opt.value === price);
  const selectedLevel = levelOptions.find((opt) => opt.value === level);

  const priceLabel =
    price !== "all" && selectedPrice ? `Price: ${selectedPrice.label}` : "Price";
  const levelLabel =
    level !== "all" && selectedLevel ? `Level: ${selectedLevel.label}` : "Level";
  const categoryLabel =
    category !== "Featured" ? `Category: ${category}` : "Category";

  const hasActiveFilters =
    price !== "all" || level !== "all" || category !== "Featured";

  return (
    <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-3">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <FilterDropdown
            label={priceLabel}
            icon={<Funnel className="size-4" />}
            options={priceOptions}
            value={price}
            onChange={onPriceChange}
            isActive={price !== "all"}
            onClear={() => onPriceChange("all")}
          />
          <FilterDropdown
            label={levelLabel}
            icon={<ChartNoAxesColumnIncreasing className="size-4" />}
            options={levelOptions}
            value={level}
            onChange={onLevelChange}
            isActive={level !== "all"}
            onClear={() => onLevelChange("all")}
          />
          <FilterDropdown
            label={categoryLabel}
            icon={<Shapes className="size-4" />}
            options={categoryOptions}
            value={category}
            onChange={onCategoryChange}
            isActive={category !== "Featured"}
            onClear={() => onCategoryChange("Featured")}
          />
        {hasActiveFilters && (
          <button
            type="button"
            onClick={() => {
              onPriceChange("all");
              onLevelChange("all");
              onCategoryChange("Featured");
            }}
            className="text-xs sm:text-sm font-medium text-[#6D7380] hover:text-[#12141A] transition-colors cursor-pointer px-1.5 py-1"
          >
            Clear all
          </button>
        )}
      </div>
      <FilterDropdown
        label={sortLabel}
        icon={getSortIcon(sort)}
        options={sortOptions}
        value={sort}
        onChange={onSortChange}
        align="right"
      />
    </div>
  );
};
