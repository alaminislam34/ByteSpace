import type { FC } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface AvatarGroupProps {
  avatars: readonly string[] | string[];
  max?: number;
  extra?: string;
  size?: "sm" | "md";
  className?: string;
}

export const AvatarGroup: FC<AvatarGroupProps> = ({
  avatars,
  max = 4,
  extra,
  size = "sm",
  className,
}) => {
  const visibleAvatars = avatars.slice(0, max);
  const isSm = size === "sm";

  return (
    <div className={cn("flex items-center", className)}>
      {visibleAvatars.map((src, index) => (
        <span
          key={`${src}-${index}`}
          className={cn(
            "relative overflow-hidden rounded-full",
            isSm
              ? "size-8 ring-2 ring-white"
              : "w-10.75 aspect-square",
            index > 0 && (isSm ? "-ml-2.5" : "-ml-4")
          )}
          style={{ zIndex: index + 1 }}
        >
          <Image
            src={src}
            alt=""
            width={isSm ? 32 : 100}
            height={isSm ? 32 : 100}
            className="size-full object-cover"
          />
        </span>
      ))}
      {extra && (
        <span
          className={cn(
            "relative z-10 flex items-center justify-center rounded-full bg-[#D4FB20] font-bold text-[#1A1C20]",
            isSm
              ? "-ml-2.5 size-8 ring-2 ring-white text-[11px]"
              : "-ml-4 w-10.75 aspect-square text-xs text-[#242528]"
          )}
        >
          {extra}
        </span>
      )}
    </div>
  );
};
