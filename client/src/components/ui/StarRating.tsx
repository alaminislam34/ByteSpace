import type { FC } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  maxStars?: number;
  className?: string;
  starClassName?: string;
  activeColor?: string;
  inactiveColor?: string;
}

export const StarRating: FC<StarRatingProps> = ({
  rating,
  maxStars = 5,
  className,
  starClassName = "size-3.5",
  activeColor = "fill-[#2B2D33] text-[#2B2D33]",
  inactiveColor = "fill-neutral-200 text-neutral-200",
}) => {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      {Array.from({ length: maxStars }).map((_, idx) => (
        <Star
          key={idx}
          className={cn(
            starClassName,
            idx < rating ? activeColor : inactiveColor
          )}
        />
      ))}
    </div>
  );
};
