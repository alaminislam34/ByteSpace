import { type FC } from "react";
import {
  HeroSection,
  BrandLogosSection,
  CoursesSection,
  LearningPath,
  ProfessionalGrowth,
  CreatorBanner,
  Testimonials,
} from "@/components/sections";

const HomePage: FC = () => {
  return (
    <main>
      <HeroSection />
      <BrandLogosSection />
      <CoursesSection />
      <LearningPath />
      <ProfessionalGrowth />
      <Testimonials />
      <CreatorBanner />
    </main>
  );
};

export default HomePage;
