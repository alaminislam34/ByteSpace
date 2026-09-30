"use client";

import { type FormEvent, type FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { SearchField } from "../ui";

const LINK_COLUMNS = [
  [
    { label: "Featured Courses", href: "/courses" },
    { label: "Featured Categories", href: "/courses" },
    { label: "Business", href: "/courses" },
    { label: "IT", href: "/courses" },
    { label: "Design", href: "/courses" },
  ],
  [
    { label: "Development", href: "/courses" },
    { label: "Marketing", href: "/courses" },
    { label: "Photography", href: "/courses" },
    { label: "Finance", href: "/courses" },
    { label: "Sport", href: "/courses" },
  ],
  [
    { label: "Become a Creator", href: "/join" },
    { label: "Affiliate Program", href: "/affiliate" },
    { label: "Contact", href: "/contact" },
    { label: "Help", href: "/help" },
    { label: "About", href: "/about" },
  ],
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookies Settings", href: "/cookies" },
];

export const Footer: FC = () => {
  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <footer className="border-t border-[#E6E8EC] bg-white text-[#12141A]">
      <div className="mx-auto w-11/12 py-14 lg:w-10/12 lg:py-18">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(34rem,1.05fr)] lg:gap-12">
          <div>
            <Link href="/" className="inline-flex items-center gap-2">
              <Image
                src="/images/Vector.png"
                alt=""
                width={42}
                height={42}
                className="h-9 w-auto object-contain"
              />
              <span className="font-title text-[1.7rem] font-bold leading-none tracking-tight text-[#12141A]">
                ByteSpace
              </span>
            </Link>

            <p className="mt-5 text-sm leading-relaxed text-[#5C6370]">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

           <div className="flex justify-start py-2 items-start">
            <SearchField
              placeholder="Enter your email"
              buttonLabel="Subscribe"
              inputWrapperClassName="border-[#CED0D3]"
            />
           </div>

            <p className="mt-5 text-[13px] leading-relaxed text-[#8A9099]">
              By subscribing, you agree to our{" "}
              <Link href="/privacy" className="underline underline-offset-2">
                Privacy Policy
              </Link>{" "}
              and consent to receive updates from our company.
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:pt-1">
            {LINK_COLUMNS.map((column) => (
              <ul key={column[0].label} className="flex flex-col gap-5">
                {column.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="whitespace-nowrap text-[15px] font-medium text-[#1A1C21] transition-colors hover:text-[#003BE2]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-[#E6E8EC] pt-6 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[#6D7380]">© 2023 ByteSpace. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-[#6D7380] transition-colors hover:text-[#12141A]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
