import type { FC } from "react";
import { cn } from "@/lib/utils";

interface GridLinesProps {
  rows?: number;
  className?: string;
}

export const GridLines: FC<GridLinesProps> = ({ rows = 28, className }) => {
  const totalCells = 12 * rows;

  return (
    <div
      aria-hidden="true"
      className={cn(
        "absolute inset-0 pointer-events-none overflow-hidden select-none z-0",
        className
      )}
    >
      <div className="grid grid-cols-12 w-full border-t border-l border-white/12">
        {Array.from({ length: totalCells }).map((_, i) => (
          <div
            key={i}
            className="aspect-square border-r border-b border-white/12"
          />
        ))}
      </div>
    </div>
  );
};
