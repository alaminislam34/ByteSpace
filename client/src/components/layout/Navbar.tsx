"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-30 w-full h-20 md:h-25 lg:h-30 flex items-center">
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

        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-1.5 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden mt-4 mx-auto w-11/12 rounded-2xl bg-[#002ea6]/95 backdrop-blur-md border border-white/10 p-5 shadow-2xl">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-white hover:text-primary transition-colors py-1"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <Link
                href="/signin"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-white"
              >
                Sign In
              </Link>
              <Link
                href="/join"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-white"
              >
                Join Us
              </Link>
              <button
                type="button"
                aria-label="Shopping Cart"
                className="text-white"
              >
                <ShoppingBag className="size-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
