"use client";

import { useState, type FC } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChartNoAxesColumnIncreasing,
  Check,
  Clock,
  Play,
  Share2,
  Star,
  Users,
  Video,
  X,
} from "lucide-react";
import { Navbar } from "@/components/layout";
import { cn } from "@/lib/utils";
import type { Course } from "@/data/courses";

interface CourseDetailViewProps {
  course: Course;
}

type TabType = "about" | "lesson" | "reviews";

const SNEAK_PEEK_IMAGES = [
  {
    title: "Wireframing & Ideation",
    src: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Digital Design Studio",
    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Visual Assets & Colors",
    src: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Interactive Prototypes",
    src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=600&q=80",
  },
];

const KEY_POINTS = [
  "Foundational Concepts",
  "Design Principles Mastery",
  "Advanced Techniques in Digital Creation",
  "Project Showcase and Critique",
  "Optimizing for Various Platforms",
  "Digital Asset Management Best Practices",
  "Monetization Strategies",
  "Capstone Project: Building Your Portfolio",
];

const MODULES = [
  {
    number: "Module 1",
    title: "Introduction to Digital Assets",
    description:
      "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
  },
  {
    number: "Module 2",
    title: "Design Principles for Impact",
    description:
      "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
  },
  {
    number: "Module 4",
    title: "User-Centric Design Strategies",
    description:
      "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
  },
  {
    number: "Module 5",
    title: "Interactive Media and Engagement",
    description:
      "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
  },
  {
    number: "Module 6",
    title: "Project Showcase and Critique",
    description:
      "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
  },
  {
    number: "Module 7",
    title: "Optimizing Digital Assets for Various Platforms",
    description:
      "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
  },
];

const REVIEWS = [
  {
    id: "1",
    name: "PurePearl Studio",
    role: "UI/UX Designer",
    time: "a year ago",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    text: "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!",
  },
  {
    id: "2",
    name: "Albert Flores",
    role: "UI/UX Designer",
    time: "a year ago",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    text: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
  },
  {
    id: "3",
    name: "Cody Fisher",
    role: "UI/UX Designer",
    time: "a year ago",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    text: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
  },
  {
    id: "4",
    name: "Brooklyn Simmons",
    role: "UI/UX Designer",
    time: "a year ago",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    text: "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
  },
];

const SidebarCard: FC<{ course: Course }> = ({ course }) => {
  return (
    <div className="rounded-3xl border border-[#E6E8EC] bg-white p-7 sm:p-8 shadow-[0_20px_50px_rgba(15,23,42,0.06)] flex flex-col text-[#12141A]">
      {/* 1. Header */}
      <h3 className="font-poppins text-xl sm:text-[22px] font-bold tracking-tight text-[#12141A]">
        112 Lessons (24 hours)
      </h3>

      {/* 2. Three preview lessons */}
      <div className="mt-5 sm:mt-6 flex flex-col gap-3.5 text-sm">
        {/* Lesson 1 */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-2.5 min-w-0">
            <span className="font-normal text-[#12141A] shrink-0 w-5">01</span>
            <span className="font-normal text-[#12141A] leading-snug">
              Introduction to Digital<br />Assets
            </span>
          </div>
          <span className="font-normal text-[#2454E6] shrink-0 text-right pt-0.5">
            12 mins
          </span>
        </div>

        {/* Lesson 2 */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-2.5 min-w-0">
            <span className="font-normal text-[#12141A] shrink-0 w-5">02</span>
            <span className="font-normal text-[#12141A] leading-snug">
              Design Principles for<br />Impacts
            </span>
          </div>
          <span className="font-normal text-[#2454E6] shrink-0 text-right pt-0.5">
            21 mins
          </span>
        </div>

        {/* Lesson 3 */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-2.5 min-w-0">
            <span className="font-normal text-[#12141A] shrink-0 w-5">03</span>
            <span className="font-normal text-[#12141A] leading-snug">
              Advanced Techniques in<br />Digital Creation
            </span>
          </div>
          <span className="font-normal text-[#2454E6] shrink-0 text-right pt-0.5">
            16 mins
          </span>
        </div>
      </div>

      {/* 99 more videos */}
      <p className="mt-4 text-sm font-normal text-[#6D7380]">
        99 more videos
      </p>

      {/* 3. Pitch */}
      <p className="mt-5 sm:mt-6 text-sm leading-relaxed text-[#5C6370] font-normal">
        Ready to Dive In? Enroll Now and Start Building Your Digital Future!
      </p>

      {/* 4. Price & CTA Button */}
      <div className="mt-6 flex items-baseline">
        <span className="font-poppins text-4xl sm:text-[42px] font-extrabold tracking-tight text-[#003BE2]">
          ${course.price || 25}
        </span>
        <span className="text-sm font-normal text-[#6D7380] ml-1">
          /lifetime
        </span>
      </div>

      <button
        type="button"
        className="mt-4 w-full rounded-full bg-primary py-3.5 sm:py-4 text-center text-base font-semibold text-[#0B0F19] transition-all hover:bg-[#BDEB00] shadow-sm active:scale-[0.98] cursor-pointer"
      >
        Enroll Now
      </button>

      {/* 5. "This course include" */}
      <h4 className="font-poppins text-xl sm:text-[22px] font-bold text-[#12141A] mt-8 mb-5">
        This course include
      </h4>

      <div className="flex flex-col gap-4 text-sm sm:text-[15px] text-[#4B5160] font-normal">
        {/* Learning Resources */}
        <div className="flex items-center gap-3.5">
          <svg
            className="size-5 shrink-0 text-[#003BE2]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 6.5A1.5 1.5 0 0 1 4.5 5h4.2c.4 0 .8.2 1 .5l1.6 2H20.5A1.5 1.5 0 0 1 22 9v10a1.5 1.5 0 0 1-1.5 1.5H4.5A1.5 1.5 0 0 1 3 19V6.5Z" />
            <line x1="7" y1="12" x2="17" y2="12" />
            <line x1="7" y1="16" x2="13" y2="16" />
          </svg>
          <span>Learning Resources</span>
        </div>

        {/* Quality Lesson Videos */}
        <div className="flex items-center gap-3.5">
          <svg
            className="size-5 shrink-0 text-[#003BE2]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2.5" y="6" width="13" height="12" rx="2" />
            <path d="m15.5 10 5-3.5v11l-5-3.5v-4z" />
          </svg>
          <span>Quality Lesson Videos</span>
        </div>

        {/* Certificate of Completion */}
        <div className="flex items-center gap-3.5">
          <svg
            className="size-5 shrink-0 text-[#003BE2]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9.5 4.5A1.5 1.5 0 0 1 11 3h2a1.5 1.5 0 0 1 1.5 1.5V6H9.5V4.5Z" />
            <rect x="3" y="6" width="18" height="14" rx="2" />
            <circle cx="7.5" cy="12" r="1.5" />
            <line x1="12" y1="10.5" x2="17" y2="10.5" />
            <line x1="12" y1="13.5" x2="17" y2="13.5" />
          </svg>
          <span>Certificate of Completion</span>
        </div>

        {/* Private Consultation */}
        <div className="flex items-center gap-3.5">
          <svg
            className="size-5 shrink-0 text-[#003BE2]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <circle cx="5" cy="5" r="1.8" />
            <path d="M2 11.5c0-1.7 1.3-3 3-3h1.2l2.3-1.6c.6-.4 1.5 0 1.5.8v.2L7.6 9.8H5c-.6 0-1 .4-1 1v.7H2Z" />
            <path
              d="M9.5 9a6 6 0 0 1 4.5 4.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <path
              d="M12 6.5a9.5 9.5 0 0 1 7 7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <circle cx="19" cy="19" r="1.8" />
            <path d="M22 12.5c0 1.7-1.3 3-3 3h-1.2l-2.3 1.6c-.6.4-1.5 0-1.5-.8v-.2l2.4-1.9H19c.6 0 1-.4 1-1v-.7h2Z" />
          </svg>
          <span>Private Consultation</span>
        </div>
      </div>

      {/* 6. Divider */}
      <hr className="border-0 border-t border-[#EAECEF] my-7" />

      {/* 7. Creator */}
      <Link
        href="/creators/purepearl-studio"
        className="group/creator flex items-center gap-3.5 transition-opacity hover:opacity-90 cursor-pointer"
      >
        <div className="relative size-14 rounded-full overflow-hidden shrink-0 border border-[#E6E8EC]">
          <Image
            src="/images/creator-purepearl.png"
            alt="PurePearl Studio"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h5 className="text-[17px] font-bold text-[#12141A] leading-tight group-hover/creator:text-[#003BE2] transition-colors">
            PurePearl Studio
          </h5>
          <p className="text-sm text-[#6D7380] font-normal mt-0.5">
            Professional Creator
          </p>
        </div>
      </Link>

      <p className="mt-4 text-sm leading-relaxed text-[#5C6370] font-normal">
        Ready to Dive In? Enroll Now and Start Building Your Digital Future!
      </p>

      <div>
        <Link
          href="/creators/purepearl-studio"
          className="mt-4 inline-flex items-center justify-center rounded-full border border-[#D1D5DB] px-6 py-2.5 text-sm font-medium text-[#12141A] hover:bg-neutral-50 active:scale-95 transition-all cursor-pointer"
        >
          See Full Profile
        </Link>
      </div>
    </div>
  );
};

export const CourseDetailView: FC<CourseDetailViewProps> = ({ course }) => {
  const [activeTab, setActiveTab] = useState<TabType>("about");
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const displayTitle =
    course.title.includes("Comprehensive") || course.title.includes("Guide")
      ? course.title
      : `${course.title}: A Comprehensive Guide`;

  const handleShare = async () => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const filteredReviews = selectedRating
    ? REVIEWS.filter((r) => r.stars === selectedRating)
    : REVIEWS;

  return (
    <div className="min-h-screen bg-white text-[#12141A]">
      {/* Hero Section */}
      <section className="bg-hero-grid text-white pb-24">
        <Navbar />

        <div className="mx-auto w-11/12 lg:w-10/12 pt-6 sm:pt-8 lg:pt-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between text-white">
            <div className="max-w-3xl">
              <h1 className="font-poppins text-2xl font-bold tracking-tight sm:text-3xl lg:text-[40px] lg:leading-[1.2]">
                {displayTitle}
              </h1>
              <p className="mt-2.5 text-sm sm:text-base font-normal text-white/90">
                Unlock the Power of Digital Creation with Expert Guidance
              </p>
              <p className="mt-3 text-sm text-white/80">
                by{" "}
                <Link
                  href="/creators/purepearl-studio"
                  className="font-semibold text-primary underline underline-offset-4 transition-colors hover:text-primary-hover cursor-pointer"
                >
                  {course.author}
                </Link>
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-2.5 sm:gap-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#12141A] shadow-sm">
                  <ChartNoAxesColumnIncreasing className="size-3.5 text-[#003BE2]" />
                  <span>{course.level || "Intermediate"}</span>
                </div>

                <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#12141A] shadow-sm">
                  <Star className="size-3.5 fill-[#003BE2] text-[#003BE2]" />
                  <span>
                    {course.rating.toFixed(1)} ({course.comments * 2 || 172} reviews)
                  </span>
                </div>

                <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#12141A] shadow-sm">
                  <Users className="size-3.5 text-[#003BE2]" />
                  <span>{course.comments * 2 + 27 || 199} Students</span>
                </div>
              </div>
            </div>

            <div className="shrink-0 self-start lg:pt-1">
              <button
                type="button"
                onClick={handleShare}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs sm:text-sm font-bold text-[#0B0F19] transition-all hover:bg-primary-hover shadow-sm active:scale-95 cursor-pointer"
              >
                <Share2 className="size-3.5" />
                <span>{copied ? "Link Copied!" : "Share"}</span>
              </button>
            </div>
          </div>

          {/* Video Preview & Sidebar Row - DIRECTLY INSIDE HERO SECTION */}
          <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_370px] xl:grid-cols-[minmax(0,1fr)_390px] gap-8 lg:gap-10 items-start">
            <div className="group relative aspect-video w-full overflow-hidden rounded-3xl">
              <Image
                src="/images/larki.png"
                alt={course.title}
                fill
                priority
                className="object-cover "
                sizes="(max-width: 1024px) 100vw, 750px"
              />

              <button
                type="button"
                onClick={() => setIsVideoModalOpen(true)}
                aria-label="Play course preview video"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[22px] sm:rounded-3xl bg-[#4A3B32]/45 backdrop-blur-md border border-white/25 p-2.5 sm:p-3.5 shadow-2xl transition-all duration-300 group-hover:scale-105 cursor-pointer"
              >
                <div className="flex size-14 sm:size-16 items-center justify-center rounded-full bg-white shadow-lg transition-transform duration-300 group-hover:scale-105">
                  <Play className="size-6 sm:size-7 fill-[#003BE2] text-[#003BE2] translate-x-0.5" />
                </div>
              </button>
            </div>

            <div className="hidden lg:block relative z-30">
              <div className="absolute top-0 left-0 w-full">
                <SidebarCard course={course} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pt-8 sm:pt-10 pb-20">
        <div className="mx-auto w-11/12 lg:w-10/12">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_370px] xl:grid-cols-[minmax(0,1fr)_390px] gap-8 lg:gap-10 items-start">
            <div className="flex flex-col gap-8 sm:gap-10 min-w-0">
              <div className="lg:hidden">
                <SidebarCard course={course} />
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setActiveTab("about")}
                  className={cn(
                    "rounded-full px-5 py-2.5 text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer",
                    activeTab === "about"
                      ? "bg-primary text-[#0B0F19] font-bold shadow-sm"
                      : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-[#EAEAEA] hover:text-[#12141A]"
                  )}
                >
                  About
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("lesson")}
                  className={cn(
                    "rounded-full px-5 py-2.5 text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer",
                    activeTab === "lesson"
                      ? "bg-primary text-[#0B0F19] font-bold shadow-sm"
                      : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-[#EAEAEA] hover:text-[#12141A]"
                  )}
                >
                  Lesson
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("reviews")}
                  className={cn(
                    "rounded-full px-5 py-2.5 text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer",
                    activeTab === "reviews"
                      ? "bg-primary text-[#0B0F19] font-bold shadow-sm"
                      : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-[#EAEAEA] hover:text-[#12141A]"
                  )}
                >
                  Reviews
                </button>
              </div>

              {activeTab === "about" && (
                <div className="flex flex-col gap-8 pt-1">
                  <div>
                    <h2 className="font-poppins text-lg font-bold text-[#12141A] sm:text-xl">
                      Description
                    </h2>
                    <div className="mt-3 flex flex-col gap-4 text-xs sm:text-sm leading-relaxed text-[#5C6370]">
                      <p>
                        Embark on an enlightening exploration into the world of digital creation with our
                        comprehensive course, &ldquo;{displayTitle}.&rdquo; This transformative learning
                        experience invites you to delve deep into the intricacies of crafting impactful
                        digital content. From laying the groundwork with foundational concepts to mastering
                        advanced techniques, this guide is meticulously curated to empower you with the skills
                        essential for navigating the dynamic landscape of digital asset creation.
                      </p>
                      <p>
                        In the initial modules, you&apos;ll establish a solid foundation by immersing yourself
                        in the foundational concepts that form the backbone of digital asset creation.
                        Understand the fundamental elements that constitute compelling digital content and
                        gain proficiency in leveraging these elements to communicate effectively in the
                        digital realm.
                      </p>
                      <p>
                        As you progress through the course, you&apos;ll ascend to higher levels of
                        expertise, delving into the nuances of design principles that drive impactful
                        creations. Uncover the secrets behind effective visual communication, exploring color
                        theory, typography, and layout strategies that elevate your digital assets to new
                        heights. Engage in hands-on exercises that reinforce your understanding, allowing you
                        to apply these principles in practical scenarios.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-poppins text-base font-bold text-[#12141A] sm:text-lg">
                      Sneak Peak
                    </h3>
                    <div className="mt-3.5 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5">
                      {SNEAK_PEEK_IMAGES.map((img, i) => (
                        <div
                          key={i}
                          className="group relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-neutral-100 shadow-sm border border-[#E6E8EC]"
                        >
                          <Image
                            src={img.src}
                            alt={img.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="(max-width: 640px) 50vw, 200px"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-poppins text-base font-bold text-[#12141A] sm:text-lg">
                      Key Points
                    </h3>
                    <div className="mt-3.5 flex flex-col gap-3">
                      {KEY_POINTS.map((point) => (
                        <div key={point} className="flex items-center gap-3">
                          <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#003BE2] text-white">
                            <Check className="size-3" strokeWidth={3} />
                          </div>
                          <span className="text-xs sm:text-sm font-medium text-[#12141A]">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "lesson" && (
                <div className="flex flex-col gap-8 pt-1">
                  <div>
                    <h2 className="font-poppins text-lg font-bold text-[#12141A] sm:text-xl">
                      Explore the Modules
                    </h2>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#5C6370]">
                      Immerse yourself in the course content as we break down each module into
                      comprehensive lessons, providing practical insights and hands-on experiences.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-poppins text-base font-bold text-[#12141A]">
                      Lesson List
                    </h3>
                    <div className="mt-4 flex flex-col gap-4">
                      {MODULES.map((mod) => (
                        <div
                          key={mod.number}
                          className="flex items-start gap-4 rounded-2xl border border-transparent p-2 transition-colors hover:bg-neutral-50/80"
                        >
                          <div className="flex size-11 sm:size-12 shrink-0 items-center justify-center rounded-[18px] bg-primary text-[#12141A]">
                            <Video className="size-5" />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-[#12141A]">
                              {mod.number}: {mod.title}
                            </h4>
                            <p className="mt-1 text-xs leading-relaxed text-[#5C6370]">
                              {mod.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-poppins text-base font-bold text-[#12141A]">
                      Lesson Content
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#5C6370]">
                      Engage with each lesson through captivating video content, detailed textual
                      explanations, and interactive elements. Download resources, complete assignments,
                      and test your understanding with quizzes.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-poppins text-base font-bold text-[#12141A]">
                      Lesson Progress Tracking
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#5C6370]">
                      Witness your growth as you complete lessons, with an intuitive progress tracking
                      feature guiding you through your learning journey.
                    </p>

                    <div className="mt-4 rounded-2xl border border-[#E6E8EC] bg-white p-5 sm:p-6 shadow-sm">
                      <span className="text-xs font-medium text-[#8A9099]">Learning Progress</span>
                      <p className="mt-1 font-poppins text-3xl font-bold tracking-tight text-[#12141A]">
                        55%
                      </p>
                      <div className="mt-3.5 h-2.5 w-full overflow-hidden rounded-full bg-[#EAECEF]">
                        <div className="h-full w-[55%] rounded-full bg-primary transition-all duration-700" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "reviews" && (
                <div className="flex flex-col gap-8 pt-1">
                  <div>
                    <h2 className="font-poppins text-lg font-bold text-[#12141A] sm:text-xl">
                      What Learners Are Saying
                    </h2>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#5C6370]">
                      Discover what our learners have to say about their experience with &ldquo;{displayTitle}.&rdquo; Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 rounded-2xl border border-[#E6E8EC] bg-white p-6 shadow-sm">
                    <div className="flex size-28 shrink-0 flex-col items-center justify-center rounded-2xl bg-primary text-[#12141A]">
                      <span className="text-xs font-medium text-[#12141A]/70">Ratings</span>
                      <span className="font-poppins text-3xl font-bold tracking-tight">4.7</span>
                    </div>

                    <div className="flex w-full flex-col gap-2">
                      {[
                        { stars: 5, pct: 85, count: 720 },
                        { stars: 4, pct: 35, count: 120 },
                        { stars: 3, pct: 15, count: 21 },
                        { stars: 2, pct: 8, count: 12 },
                        { stars: 1, pct: 5, count: 16 },
                      ].map((row) => (
                        <div key={row.stars} className="flex items-center gap-3 text-xs text-[#6D7380]">
                          <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#EAECEF]">
                            <div
                              className="h-full rounded-full bg-primary"
                              style={{ width: `${row.pct}%` }}
                            />
                          </div>
                          <div className="flex items-center gap-0.5 text-[#12141A]">
                            {Array.from({ length: 5 }).map((_, idx) => (
                              <Star
                                key={idx}
                                className={cn(
                                  "size-3",
                                  idx < row.stars
                                    ? "fill-[#2B2D33] text-[#2B2D33]"
                                    : "fill-neutral-200 text-neutral-200"
                                )}
                              />
                            ))}
                          </div>
                          <span className="w-8 text-right font-medium text-[#12141A]">{row.count}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-poppins text-base font-bold text-[#12141A]">
                      Individual Reviews:
                    </h3>
                    <div className="mt-3.5 flex flex-wrap items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedRating(null)}
                        className={cn(
                          "rounded-full px-4 py-1.5 text-xs font-semibold transition-all cursor-pointer",
                          selectedRating === null
                            ? "bg-primary text-[#0B0F19]"
                            : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-[#EAEAEA]"
                        )}
                      >
                        All rating
                      </button>
                      {[5, 4, 3, 2, 1].map((r) => (
                        <button
                          key={r}
                          type="button"
                          onClick={() => setSelectedRating(r)}
                          className={cn(
                            "inline-flex items-center gap-1 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all cursor-pointer",
                            selectedRating === r
                              ? "bg-primary text-[#0B0F19] font-bold"
                              : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-[#EAEAEA]"
                          )}
                        >
                          <Star className="size-3 fill-current" />
                          <span>{r}</span>
                        </button>
                      ))}
                    </div>

                    <div className="mt-5 flex flex-col gap-4">
                      {filteredReviews.map((rev) => (
                        <div
                          key={rev.id}
                          className="rounded-2xl border border-[#E6E8EC] bg-white p-5 sm:p-6 shadow-sm transition-shadow hover:shadow-md"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="relative size-10 overflow-hidden rounded-full border border-[#E6E8EC]">
                                <Image src={rev.avatar} alt={rev.name} fill className="object-cover" />
                              </div>
                              <div>
                                <h4 className="text-sm font-bold text-[#12141A]">{rev.name}</h4>
                                <p className="text-xs text-[#8A9099]">{rev.role}</p>
                              </div>
                            </div>
                            <span className="text-xs text-[#8A9099]">{rev.time}</span>
                          </div>

                          <div className="mt-3 flex items-center gap-1">
                            {Array.from({ length: 5 }).map((_, idx) => (
                              <Star
                                key={idx}
                                className={cn(
                                  "size-3.5",
                                  idx < rev.stars
                                    ? "fill-[#2B2D33] text-[#2B2D33]"
                                    : "fill-neutral-200 text-neutral-200"
                                )}
                              />
                            ))}
                          </div>

                          <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#5C6370]">
                            &ldquo;{rev.text}&rdquo;
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right column spacer for desktop layout to maintain grid alignment */}
            <div className="hidden lg:block min-h-[750px]" aria-hidden="true" />
          </div>
        </div>
      </section>

      {isVideoModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-3xl bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsVideoModalOpen(false)}
              aria-label="Close video"
              className="absolute top-4 right-4 z-20 flex size-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-colors hover:bg-white/40"
            >
              <X className="size-5" />
            </button>
            <iframe
              src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Course Preview Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full border-0"
            />
          </div>
        </div>
      )}
    </div>
  );
};
