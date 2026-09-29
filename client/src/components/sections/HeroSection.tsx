import { type FC } from "react";
import { Navbar } from "@/components/layout";

const GRID_CELLS = 12 * 26;

export const HeroSection: FC = () => {
  return (
    <section className="relative min-h-svh w-full overflow-hidden bg-[#003be2] flex flex-col justify-between">
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="grid grid-cols-12 w-full border-t border-l border-white/12">
          {Array.from({ length: GRID_CELLS }).map((_, i) => (
            <div
              key={i}
              className="aspect-square border-r border-b border-white/12"
            />
          ))}
        </div>
      </div>

      <Navbar />
          <div className="border-3 mx-auto max-w-11/12 md:max-w-10/12 lg:max-w-5xl text-center pt-20">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-[72px] font-poppins font-semibold leading-[120%]">
              Get Access to Hundreds Courses Available
            </h1>
          </div>
          </div>
      <div className="relative z-10 w-full flex-1 flex items-end justify-center pointer-events-none select-none">
        <div className="absolute -bottom-5/6 shadow-lg flex items-center justify-center w-full h-full">
          <div className="relative flex items-center justify-center rounded-full aspect-square bg-primary w-8/12 mx-auto overflow-hidden">
              
            </div>
        </div>
      </div>
    </section>
  );
};
