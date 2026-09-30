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
      <CreatorBanner />
      <Testimonials />
    </main>
  );
};

export default HomePage;
