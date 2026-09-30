import Link from "next/link";
import { Navbar, Footer } from "@/components/layout";
import { ROUTES } from "@/constants/routes";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#003be2]">
      <section className="relative overflow-hidden bg-hero-grid flex flex-col flex-1 pb-16 sm:pb-24 lg:pb-32">
        <Navbar />

        <div className="relative z-10 mx-auto flex w-11/12 flex-1 flex-col items-center justify-center text-center pt-8 sm:pt-12 lg:pt-16">
          <div className="relative flex flex-col items-center justify-center w-full">
            <span
              className="font-poppins font-semibold tracking-[-0.04em] leading-none select-none text-[200px] md:text-[310px] lg:text-[380px] xl:text-[480px] text-transparent bg-clip-text bg-linear-to-b from-primary from-10% via-[#78cc48] to-[#003be2]/50 to-90% py-12"
              aria-hidden="true"
            >
              404
            </span>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl px-4">
              <h1 className="font-poppins text-3xl md:text-5xl lg:text-[72px] font-semibold text-white tracking-[-1%] leading-[120%]">
                The page you are looking
                <br />
                for doesn&apos;t exist
              </h1>
            </div>
          </div>

          <p className="mt-4 sm:mt-6 text-sm md:text-base font-normal text-white/80 max-w-xl">
            Try to use a correct url or go back to homepage to start again
          </p>

          <Link
            href={ROUTES.HOME}
            className="mt-6 sm:mt-8 inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm sm:text-base font-semibold text-[#12141A] transition-all hover:bg-primary-hover active:scale-95 shadow-sm cursor-pointer"
          >
            Back to Home
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
