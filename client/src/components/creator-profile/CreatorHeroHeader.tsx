import { useState, type FC } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { Navbar } from "@/components/layout";
import { cn } from "@/lib/utils";
import type { Creator } from "@/data/courses";

interface CreatorHeroHeaderProps {
  creator: Creator;
  productsCount: number;
}

export const CreatorHeroHeader: FC<CreatorHeroHeaderProps> = ({
  creator,
  productsCount,
}) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followersCount, setFollowersCount] = useState(creator.followersCount);

  const handleFollowToggle = () => {
    setIsFollowing((prev) => {
      const next = !prev;
      setFollowersCount((count) => (next ? count + 1 : count - 1));
      return next;
    });
  };

  return (
    <section className="bg-hero-grid text-white pb-14 sm:pb-16 lg:pb-20">
      <Navbar />

      <div className="mx-auto w-11/12 lg:w-10/12 pt-8 sm:pt-10 lg:pt-12">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="relative size-18 sm:size-22 rounded-2xl overflow-hidden shrink-0 ">
              <Image
                src={creator.avatar || "/images/creator-pearl.png"}
                alt={creator.name}
                width={500}
                height={500}
                priority
                className="object-cover object-center"
              />
            </div>

            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <h1 className="font-poppins text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                  {creator.name}
                </h1>
                <span className="inline-flex items-center rounded-full bg-primary px-3 sm:px-3.5 py-0.5 sm:py-1 text-xs font-bold text-[#0B0F19] shadow-sm">
                  {creator.badge || "Creator"}
                </span>
              </div>
              <p className="mt-1 text-sm sm:text-base font-normal text-white/90">
                {creator.role}
              </p>
            </div>
          </div>

          <div className="max-w-4xl text-xs sm:text-sm text-white/85 leading-relaxed flex flex-col gap-2.5 font-normal">
            <p>{creator.bio1}</p>
            <p>{creator.bio2}</p>
          </div>

          <div className="mt-2 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-[#12141A] shadow-sm">
                <span className="font-extrabold">{productsCount}</span>
                <span>Products</span>
              </div>

              <div className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-[#12141A] shadow-sm">
                <span className="font-extrabold">{followersCount}</span>
                <span>Followers</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleFollowToggle}
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-7 py-2.5 text-xs sm:text-sm font-bold transition-all shadow-sm active:scale-95 cursor-pointer",
                isFollowing
                  ? "bg-white text-[#0B0F19] hover:bg-white/90"
                  : "bg-primary text-[#0B0F19] hover:bg-[#BDEB00]"
              )}
            >
              {isFollowing ? (
                <>
                  <Check className="size-4" />
                  <span>Following</span>
                </>
              ) : (
                <span>Follow</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
