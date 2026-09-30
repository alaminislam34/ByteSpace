import { useState, type FC } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { StarRating, ProgressBar } from "@/components/ui";
import { cn } from "@/lib/utils";
import { RATING_BREAKDOWN, REVIEWS } from "../constants";

interface ReviewsTabProps {
  displayTitle: string;
}

export const ReviewsTab: FC<ReviewsTabProps> = ({ displayTitle }) => {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const filteredReviews = selectedRating
    ? REVIEWS.filter((r) => r.stars === selectedRating)
    : REVIEWS;

  return (
    <div className="flex flex-col gap-8 pt-1">
      <div>
        <h2 className="font-poppins text-lg font-bold text-[#12141A] sm:text-xl">
          What Learners Are Saying
        </h2>
        <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#5C6370]">
          Discover what our learners have to say about their experience with &ldquo;{displayTitle}.&rdquo; Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 rounded-2xl border border-[#E6E8EC] bg-white p-6 shadow-sm">
        <div className="flex size-28 shrink-0 flex-col items-center justify-center rounded-2xl bg-primary text-[#12141A]">
          <span className="text-xs font-medium text-[#12141A]/70">Ratings</span>
          <span className="font-poppins text-3xl font-bold tracking-tight">4.7</span>
        </div>

        <div className="flex w-full flex-col gap-2">
          {RATING_BREAKDOWN.map((row) => (
            <div key={row.stars} className="flex items-center gap-3 text-xs text-[#6D7380]">
              <ProgressBar
                value={row.pct}
                className="h-2 flex-1 bg-[#EAECEF]"
                colorClassName="bg-primary"
                aria-label={`${row.stars} star ratings`}
              />
              <StarRating
                rating={row.stars}
                starClassName="size-3"
                className="gap-0.5"
              />
              <span className="w-8 text-right font-medium text-[#12141A]">{row.count}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-poppins text-base font-bold text-[#12141A]">
          Individual Reviews:
        </h3>
        <div className="mt-3.5 flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setSelectedRating(null)}
            className={cn(
              "rounded-full px-4 py-1.5 text-xs font-semibold transition-all cursor-pointer",
              selectedRating === null
                ? "bg-primary text-[#0B0F19]"
                : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-[#EAEAEA]"
            )}
          >
            All rating
          </button>
          {[5, 4, 3, 2, 1].map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setSelectedRating(r)}
              className={cn(
                "inline-flex items-center gap-1 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all cursor-pointer",
                selectedRating === r
                  ? "bg-primary text-[#0B0F19] font-bold"
                  : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-[#EAEAEA]"
              )}
            >
              <Star className="size-3 fill-current" />
              <span>{r}</span>
            </button>
          ))}
        </div>

        <div className="mt-5 flex flex-col gap-4">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="rounded-2xl border border-[#E6E8EC] bg-white p-5 sm:p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative size-10 overflow-hidden rounded-full border border-[#E6E8EC]">
                    <Image src={rev.avatar} alt={rev.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#12141A]">{rev.name}</h4>
                    <p className="text-xs text-[#8A9099]">{rev.role}</p>
                  </div>
                </div>
                <span className="text-xs text-[#8A9099]">{rev.time}</span>
              </div>

              <StarRating
                rating={rev.stars}
                starClassName="size-3.5"
                className="mt-3 gap-1"
              />

              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#5C6370]">
                &ldquo;{rev.text}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
