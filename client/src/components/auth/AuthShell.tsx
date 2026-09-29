import { type FC, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { AuthCollage } from "./AuthCollage";

interface AuthShellProps {
  title: string;
  description: string;
  children: ReactNode;
}

export const AuthShell: FC<AuthShellProps> = ({ title, description, children }) => {
  return (
    <main className="relative min-h-svh overflow-hidden bg-hero-grid text-white">
      <div className="relative z-10 mx-auto flex min-h-svh w-11/12 flex-col py-6 lg:w-10/12 lg:py-8">
        <Link href="/" className="inline-flex w-fit" aria-label="ByteSpace home">
        <Image
            src="/images/Vector.png"
            alt="ByteSpace logo"
            width={42}
            height={42}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        <div className="flex flex-1 flex-col items-center justify-center gap-10 py-8 lg:flex-row lg:items-center lg:justify-center lg:gap-14">
          <div className="w-full max-w-xl lg:self-center">
            <h1 className="font-poppins text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h1>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/80 sm:text-[15px]">{description}</p>
            <div className="mt-6 hidden lg:block">
              <AuthCollage />
            </div>
          </div>

          <div className="w-full max-w-136 shrink-0">{children}</div>
        </div>
      </div>
    </main>
  );
};
