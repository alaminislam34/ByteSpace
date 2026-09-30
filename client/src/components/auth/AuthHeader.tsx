import { type FC, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface AuthHeaderProps {
  subtitle: ReactNode;
  title: ReactNode;
  className?: string;
  subtitleClassName?: string;
  titleClassName?: string;
}

export const AuthHeader: FC<AuthHeaderProps> = ({
  subtitle,
  title,
  className,
  subtitleClassName,
  titleClassName,
}) => {
  return (
    <div className={cn("flex flex-col gap-1 sm:gap-2", className)}>
      <p className={cn("text-base lg:text-lg font-medium text-[#003BE2]", subtitleClassName)}>
        {subtitle}
      </p>
      <h2
        className={cn(
          "font-poppins text-3xl md:text-4xl lg:text-[44px] font-semibold leading-[1.15] tracking-tight text-[#242528] whitespace-pre-line",
          titleClassName
        )}
      >
        {title}
      </h2>
    </div>
  );
};
