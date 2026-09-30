import type { FC } from "react";
import {
  ChartNoAxesColumnIncreasing,
  Funnel,
  ListFilter,
  Shapes,
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
  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div className="flex flex-wrap items-center gap-3">
        <FilterDropdown
          label="Filter"
          icon={<Funnel className="size-4" />}
          options={priceOptions}
          value={price}
          onChange={onPriceChange}
          isActive={price !== "all"}
        />
        <FilterDropdown
          label="Level"
          icon={<ChartNoAxesColumnIncreasing className="size-4" />}
          options={levelOptions}
          value={level}
          onChange={onLevelChange}
          isActive={level !== "all"}
        />
        <FilterDropdown
          label="Category"
          icon={<Shapes className="size-4" />}
          options={categoryOptions}
          value={category}
          onChange={onCategoryChange}
          isActive={category !== "Featured"}
        />
      </div>
      <FilterDropdown
        label={sortLabel}
        icon={<ListFilter className="size-4" />}
        options={sortOptions}
        value={sort}
        onChange={onSortChange}
        align="right"
      />
    </div>
  );
};
