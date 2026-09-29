"use client";

import { type FormEvent, type FC } from "react";
import Link from "next/link";

const labelClass = "mb-2 block text-sm text-[#6B7280]";
const inputClass =
  "h-12 w-full rounded-xl border border-[#E6E8EE] bg-white px-4 text-sm text-[#12141A] outline-none placeholder:text-[#B0B4BC] focus:border-[#003BE2]";

export const RegisterForm: FC = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section className="rounded-[28px] bg-white px-6 py-8 text-[#12141A] shadow-[0_24px_60px_rgba(3,18,70,0.22)] sm:px-10 sm:py-10">
      <form onSubmit={handleSubmit} className="flex min-h-136 flex-col">
        <p className="text-sm font-medium text-[#003BE2]">Create an Account</p>
        <h2 className="mt-2 font-poppins text-[2rem] font-bold leading-[1.15] tracking-tight text-[#12141A] sm:text-4xl">
          Welcome to
          <br />
          ByteSpace
        </h2>

        <div className="mt-8 space-y-5">
          <label className="block">
            <span className={labelClass}>Full Name</span>
            <input type="text" name="name" required placeholder="Jamie Davis" className={inputClass} />
          </label>
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
              minLength={8}
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
            Continue
          </button>
        </div>

        <p className="mt-auto pt-16 text-center text-sm text-[#8B919A]">
          Already have an account?{" "}
          <Link href="/signin" className="font-medium text-[#003BE2] hover:underline">
            Login
          </Link>
        </p>
      </form>
    </section>
  );
};
