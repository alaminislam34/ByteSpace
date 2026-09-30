import type { FC } from "react";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";

import { ROUTES } from "@/constants/routes";

interface NavItem {
  label: string;
  href: string;
}

interface MobileNavMenuProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
  navItems: readonly NavItem[] | NavItem[];
}

export const MobileNavMenu: FC<MobileNavMenuProps> = ({
  isOpen,
  onClose,
  pathname,
  navItems,
}) => {
  return (
    <>
      <div
        role="presentation"
        aria-hidden="true"
        onClick={onClose}
        className={cn(
          "fixed inset-0 z-40 bg-black/40 backdrop-blur-xs md:hidden transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      />

      <div
        id="mobile-navigation-menu"
        role="region"
        aria-label="Mobile Navigation Menu"
        className={cn(
          "fixed top-20 inset-x-0 mx-auto w-11/12 z-50 md:hidden mt-2",
          "max-h-[calc(100svh-6rem)] overflow-y-auto",
          "transition-all duration-300 ease-out origin-top transform",
          isOpen
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        )}
      >
        <div className="relative overflow-hidden rounded-2xl bg-[#002ea6]/95 backdrop-blur-xl border border-white/15 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.35)] ring-1 ring-white/10">
          <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

          <div className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    "group flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all duration-200",
                    isActive
                      ? "bg-white/12 text-primary font-semibold shadow-xs"
                      : "text-white/85 hover:text-white hover:bg-white/8 active:bg-white/10"
                  )}
                >
                  <span>{item.label}</span>
                </Link>
              );
            })}

            <div className="mt-2 pt-4 border-t border-white/10 flex flex-col gap-3">
              <div className="flex items-center justify-between px-1">
                <span className="text-xs uppercase font-semibold tracking-wider text-white/50">
                  Account & Cart
                </span>
                <button
                  type="button"
                  aria-label="Shopping Cart"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white/90 hover:text-white text-xs font-medium transition-all active:scale-95 cursor-pointer"
                >
                  <ShoppingBag className="size-3.5 text-primary" />
                  <span>Cart</span>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <Link
                  href={ROUTES.SIGN_IN}
                  onClick={onClose}
                  className="flex items-center justify-center h-10 px-4 rounded-xl text-sm font-medium text-white bg-white/10 hover:bg-white/15 border border-white/10 active:scale-[0.98] transition-all"
                >
                  Sign In
                </Link>
                <Link
                  href={ROUTES.JOIN}
                  onClick={onClose}
                  className="flex items-center justify-center h-10 px-4 rounded-xl text-sm font-semibold text-primary-foreground bg-primary hover:bg-primary-hover shadow-sm active:scale-[0.98] transition-all"
                >
                  Join Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
