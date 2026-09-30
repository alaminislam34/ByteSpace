import { type ReactNode } from "react";

export type Variant = "primary" | "secondary" | "outline" | "ghost" | "danger";
export type Size = "sm" | "md" | "lg";

export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
}

export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}
