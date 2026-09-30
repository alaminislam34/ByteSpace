"use client";

import { type FormEvent, type FC } from "react";
import Link from "next/link";
import { InputField } from "@/components/ui";
import { AuthHeader } from "./AuthHeader";

export const RegisterForm: FC = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section className="rounded-[28px] bg-white px-6 py-8 text-[#12141A] shadow-[0_24px_60px_rgba(3,18,70,0.22)] sm:px-10 sm:py-10">
      <form onSubmit={handleSubmit} className="flex min-h-136 flex-col">
        <AuthHeader
          subtitle="Create an Account"
          title={
            <>
              Welcome to
              <br />
              ByteSpace
            </>
          }
        />

        <div className="mt-8 space-y-5">
          <InputField
            label="Full Name"
            type="text"
            name="name"
            required
            placeholder="Jamie Davis"
          />
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
            minLength={8}
            placeholder="••••••••"
          />
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
