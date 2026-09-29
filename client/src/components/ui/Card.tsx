import { type FC, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  bordered?: boolean;
}

export const Card: FC<CardProps> = ({
  children,
  className,
  hover = false,
  bordered = true,
}) => (
  <div
    className={cn(
      "rounded-2xl bg-surface-pure text-foreground p-6 shadow-sm",
      bordered && "border border-border",
      hover &&
        "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-shuttle-300",
      className
    )}
  >
    {children}
  </div>
);

export const CardHeader: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <div className={cn("flex flex-col gap-1.5 pb-4", className)}>{children}</div>
);

export const CardBody: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => <div className={cn("text-body-m text-muted-foreground", className)}>{children}</div>;

export const CardFooter: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <div className={cn("flex items-center pt-4 border-t border-border mt-4", className)}>
    {children}
  </div>
);
