"use client";

import { type FormEvent, type FC } from "react";
import Link from "next/link";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { InputField } from "@/components/ui";
import { AuthHeader } from "./AuthHeader";

export const SignInForm: FC = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section className="rounded-[28px] bg-white px-6 py-8 text-[#12141A] shadow-[0_24px_60px_rgba(3,18,70,0.22)] sm:px-10 sm:py-10">
      <form onSubmit={handleSubmit} className="flex min-h-136 flex-col">
        <AuthHeader subtitle="Sign In" title="Welcome Back" />

        <div className="mt-8 space-y-5">
          <InputField
            label="Email"
            type="email"
            name="email"
            required
            placeholder="designer@example.com"
          />
          <InputField
            label="Password"
            type="password"
            name="password"
            required
            placeholder="••••••••"
          />
        </div>

        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            className="h-11 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover cursor-pointer"
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
            className="flex size-12 items-center justify-center rounded-full border border-[#E4E6EC] text-[#12141A] transition-colors hover:bg-primary cursor-pointer"
          >
            <FaFacebookF className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Continue with Google"
            className="flex size-12 items-center justify-center rounded-full border border-[#E4E6EC] text-[#12141A] transition-colors hover:bg-primary cursor-pointer"
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
