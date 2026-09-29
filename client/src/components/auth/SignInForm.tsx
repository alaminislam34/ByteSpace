"use client";

import { type FormEvent, type FC } from "react";
import Link from "next/link";
import { FaFacebookF, FaGoogle } from "react-icons/fa";

const labelClass = "mb-2 block text-sm text-[#6B7280]";
const inputClass =
  "h-12 w-full rounded-xl border border-[#E6E8EE] bg-white px-4 text-sm text-[#12141A] outline-none placeholder:text-[#B0B4BC] focus:border-[#003BE2]";

export const SignInForm: FC = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section className="rounded-[28px] bg-white px-6 py-8 text-[#12141A] shadow-[0_24px_60px_rgba(3,18,70,0.22)] sm:px-10 sm:py-10">
      <form onSubmit={handleSubmit} className="flex min-h-136 flex-col">
        <p className="text-sm font-medium text-[#003BE2]">Sign In</p>
        <h2 className="mt-2 font-poppins text-[2rem] font-bold leading-[1.15] tracking-tight text-[#12141A] sm:text-4xl">
          Welcome Back
        </h2>

        <div className="mt-8 space-y-5">
          <label className="block">
            <span className={labelClass}>Email</span>
            <input
              type="email"
              name="email"
              required
              placeholder="designer@example.com"
              className={inputClass}
            />
          </label>
          <label className="block">
            <span className={labelClass}>Password</span>
            <input
              type="password"
              name="password"
              required
              placeholder="••••••••"
              className={inputClass}
            />
          </label>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            className="h-11 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
          >
            Sign In
          </button>
        </div>

        <div className="mt-8 flex items-center gap-4 text-sm text-[#B0B4BC]">
          <span className="h-px flex-1 bg-[#E6E8EE]" />
          or
          <span className="h-px flex-1 bg-[#E6E8EE]" />
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Continue with Facebook"
            className="flex size-12 items-center justify-center rounded-full border border-[#E4E6EC] text-[#12141A] transition-colors hover:bg-[#F6F7F9]"
          >
            <FaFacebookF className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Continue with Google"
            className="flex size-12 items-center justify-center rounded-full border border-[#E4E6EC] text-[#12141A] transition-colors hover:bg-[#F6F7F9]"
          >
            <FaGoogle className="size-4" />
          </button>
        </div>

        <p className="mt-auto pt-10 text-center text-sm text-[#8B919A]">
          New user?{" "}
          <Link href="/join" className="font-medium text-[#003BE2] hover:underline">
            Create an account
          </Link>
        </p>
      </form>
    </section>
  );
};
