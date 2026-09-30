import { type ButtonHTMLAttributes, type FC, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Spinner } from "./Spinner";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-primary-foreground font-semibold hover:bg-primary-hover shadow-sm active:scale-[0.98]",
  secondary:
    "bg-secondary text-secondary-foreground font-medium hover:bg-secondary-hover shadow-sm active:scale-[0.98]",
  outline:
    "border-2 border-secondary text-secondary hover:bg-secondary/10 font-medium active:scale-[0.98]",
  ghost:
    "text-foreground hover:bg-shuttle-100 font-medium active:scale-[0.98]",
  danger:
    "bg-red-600 text-white hover:bg-red-700 font-medium shadow-sm active:scale-[0.98]",
};

const SIZE_STYLES: Record<ButtonSize, string> = {
  sm: "h-9 px-3.5 text-xs gap-1.5 rounded-lg",
  md: "h-11 px-5 text-sm gap-2 rounded-xl",
  lg: "h-13 px-7 text-base gap-2.5 rounded-xl font-semibold",
};

export const Button: FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  isLoading = false,
  leftIcon,
  rightIcon,
  children,
  className,
  disabled,
  ...rest
}) => {
  const isDisabled = disabled || isLoading;

  return (
    <button
      disabled={isDisabled}
      className={cn(
        "inline-flex items-center justify-center transition-all duration-200 cursor-pointer",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/50",
        "disabled:pointer-events-none disabled:opacity-50 select-none",
        VARIANT_STYLES[variant],
        SIZE_STYLES[size],
        className
      )}
      {...rest}
    >
      {isLoading ? <Spinner size="sm" /> : leftIcon}
      {children}
      {!isLoading && rightIcon}
    </button>
  );
};
