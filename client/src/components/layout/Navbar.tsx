"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingBag, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu whenever pathname changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header className="relative z-50 w-full h-20 md:h-25 lg:h-30 flex items-center">
      <div className="mx-auto flex w-10/12 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 pb-3">
          <Image
            src="/images/Vector.png"
            alt="ByteSpace logo"
            width={42}
            height={42}
            className="h-10 w-auto object-contain"
            priority
          />
          <span className="font-title -mb-3.5 text-3xl font-bold tracking-tight text-white">
            ByteSpace
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-9 transition-colors">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn("text-sm hover:font-semibold duration-300 font-medium text-white/90 hover:text-white ", "")}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-7">
          <Link
            href="/signin"
            className="text-sm font-medium text-white/90 hover:text-white transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/join"
            className="text-sm font-medium text-white hover:text-white/80 transition-colors"
          >
            Join Us
          </Link>
          <button
            type="button"
            aria-label="Shopping Cart"
            className="text-white hover:text-white/80 transition-opacity"
          >
            <ShoppingBag className="size-5" strokeWidth={2} />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="relative md:hidden flex items-center justify-center size-10 rounded-xl text-white bg-white/5 hover:bg-white/10 active:scale-95 transition-all duration-200 border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 cursor-pointer"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation-menu"
        >
          <span className="sr-only">Toggle navigation menu</span>
          {mobileMenuOpen ? (
            <X className="size-5 transition-transform duration-200 rotate-90" />
          ) : (
            <Menu className="size-5 transition-transform duration-200" />
          )}
        </button>
      </div>

      {/* Mobile Menu Backdrop */}
      <div
        role="presentation"
        aria-hidden="true"
        onClick={() => setMobileMenuOpen(false)}
        className={cn(
          "fixed inset-0 z-40 bg-black/40 backdrop-blur-xs md:hidden transition-opacity duration-300",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      />

      <div
        id="mobile-navigation-menu"
        role="region"
        aria-label="Mobile Navigation Menu"
        className={cn(
          "absolute top-full inset-x-0 mx-auto w-11/12 z-50 md:hidden mt-2",
          "transition-all duration-300 ease-out origin-top transform",
          mobileMenuOpen
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
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "group flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all duration-200",
                    isActive
                      ? "bg-white/12 text-primary font-semibold shadow-xs"
                      : "text-white/85 hover:text-white hover:bg-white/8 active:bg-white/10"
                  )}
                >
                  <span>{item.label}</span>
                  <ChevronRight
                    className={cn(
                      "size-4 transition-transform duration-200",
                      isActive
                        ? "text-primary translate-x-0.5"
                        : "text-white/40 group-hover:text-white/80 group-hover:translate-x-0.5"
                    )}
                  />
                </Link>
              );
            })}

            {/* Bottom Actions Section */}
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
                  href="/signin"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center h-10 px-4 rounded-xl text-sm font-medium text-white bg-white/10 hover:bg-white/15 border border-white/10 active:scale-[0.98] transition-all"
                >
                  Sign In
                </Link>
                <Link
                  href="/join"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center h-10 px-4 rounded-xl text-sm font-semibold text-primary-foreground bg-primary hover:bg-primary-hover shadow-sm active:scale-[0.98] transition-all"
                >
                  Join Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
