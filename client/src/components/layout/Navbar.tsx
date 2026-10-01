"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { MobileNavMenu } from "./MobileNavMenu";

import { ROUTES, NAV_LINKS } from "@/constants/routes";

export const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

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
      <div className="mx-auto flex w-11/12 lg:w-10/12 items-center justify-between">
        <Link href={ROUTES.HOME} className="flex items-center gap-2.5 pb-3">
          <Image
            src="/images/Vector.png"
            alt="ByteSpace logo"
            width={42}
            height={42}
            className="h-8 sm:h-10 w-auto object-contain"
            priority
          />
          <span className="font-title -mb-3.5 text-2xl sm:text-3xl font-bold tracking-tight text-white">
            ByteSpace
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-9 transition-colors">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn("text-sm hover:font-semibold duration-300 font-medium text-white/90 hover:text-white")}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-7">
          <Link
            href={ROUTES.SIGN_IN}
            className="text-sm font-medium text-white/90 hover:text-white transition-colors"
          >
            Sign In
          </Link>
          <Link
            href={ROUTES.JOIN}
            className="text-sm font-medium text-white hover:text-white/80 transition-colors"
          >
            Join Us
          </Link>
          <button
            type="button"
            aria-label="Shopping Cart"
            className="text-white hover:text-white/80 transition-opacity cursor-pointer"
          >
            <ShoppingBag className="size-5" strokeWidth={2} />
          </button>
        </div>

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

      <MobileNavMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        pathname={pathname}
        navItems={NAV_LINKS}
      />
    </header>
  );
};
