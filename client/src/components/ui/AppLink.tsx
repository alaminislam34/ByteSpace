import { type FC, type ReactNode } from "react";
import NextLink, { type LinkProps } from "next/link";
import { cn } from "@/lib/utils";

type LinkVariant = "default" | "nav" | "button" | "underline";

export interface AppLinkProps extends Omit<LinkProps, "className"> {
  children: ReactNode;
  className?: string;
  isExternal?: boolean;
  variant?: LinkVariant;
}

const VARIANTS: Record<LinkVariant, string> = {
  default: "text-secondary hover:underline underline-offset-4 transition-colors",
  nav: "text-foreground/80 hover:text-foreground font-medium transition-colors",
  button:
    "inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 font-semibold text-primary-foreground hover:bg-primary-hover transition-all active:scale-[0.98]",
  underline: "underline underline-offset-4 hover:text-secondary transition-colors",
};

export const AppLink: FC<AppLinkProps> = ({
  children,
  className,
  isExternal = false,
  variant = "default",
  ...rest
}) => {
  const externalProps = isExternal
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <NextLink
      className={cn("cursor-pointer", VARIANTS[variant], className)}
      {...externalProps}
      {...rest}
    >
      {children}
    </NextLink>
  );
};
