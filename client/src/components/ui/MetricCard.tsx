import { type FC, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ProgressBar } from "./ProgressBar";

export interface MetricCardProps {
  label: string;
  caption: string;
  value: string;
  progress?: number;
  badge?: ReactNode;
  className?: string;
}

export const MetricCard: FC<MetricCardProps> = ({
  label,
  caption,
  value,
  progress,
  badge,
  className,
}) => {
  return (
    <article className={cn("rounded-2xl bg-[#003BE2] p-4 text-white shadow-lg", className)}>
      <p className="text-[11px] font-medium leading-none text-white/80">{label}</p>
      <p className="mt-1 text-[11px] leading-none text-white/60">{caption}</p>
      <div className="mt-2 flex flex-col gap-2">
        <p className="font-poppins text-2xl font-semibold leading-none tracking-[-0.03em]">{value}</p>
        <span>{badge}</span>
      </div>
      {progress !== undefined && (
        <ProgressBar
          value={progress}
          className="mt-3 h-1.5 bg-white/25"
          colorClassName="bg-[#D4FB20]"
        />
      )}
    </article>
  );
};
