import { type FC } from "react";
import { TestimonialCard, SectionTitle, SectionDescription } from "@/components/ui";

const TESTIMONIALS = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=240&h=240&q=80",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar:
      "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?auto=format&fit=crop&w=240&h=240&q=80",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar:
      "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&w=240&h=240&q=80",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export const Testimonials: FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#F7F8FB] py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute -top-16 right-0 h-144 w-[78%] bg-[radial-gradient(ellipse_at_80%_8%,#E4F78A_0%,#EEF8B8_32%,transparent_68%)]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-[42%] bg-[radial-gradient(ellipse_at_0%_100%,#E4E9F8_0%,transparent_72%)]" />

      <div className="relative mx-auto flex w-11/12 flex-col gap-12 lg:w-10/12 lg:gap-16">
        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-16">
          <SectionTitle>
            Discover What Our
            <br />
            Community Is Saying
          </SectionTitle>
          <SectionDescription className="lg:pt-1">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we
            do. Hear directly from those who have experienced the transformative journey of learning
            and creating on our platform. Explore testimonials that reflect the diverse perspectives
            of enthusiastic learners and accomplished creators.
          </SectionDescription>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};
