import { type FC } from "react";
import {
  HeroSection,
  BrandLogosSection,
  CoursesSection,
} from "@/components/sections";

const HomePage: FC = () => {
  return (
    <main>
      <HeroSection />
      <BrandLogosSection />
      <CoursesSection />
    </main>
  );
};

export default HomePage;
