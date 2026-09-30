import type {
  CourseModule,
  CourseReview,
  RatingBreakdownItem,
  SneakPeekItem,
} from "./types";

export const SNEAK_PEEK_IMAGES: SneakPeekItem[] = [
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

export const KEY_POINTS: string[] = [
  "Foundational Concepts",
  "Design Principles Mastery",
  "Advanced Techniques in Digital Creation",
  "Project Showcase and Critique",
  "Optimizing for Various Platforms",
  "Digital Asset Management Best Practices",
  "Monetization Strategies",
  "Capstone Project: Building Your Portfolio",
];

export const MODULES: CourseModule[] = [
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

export const REVIEWS: CourseReview[] = [
  {
    id: "1",
    name: "PurePearl Studio",
    role: "UI/UX Designer",
    time: "a year ago",
    stars: 5,
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    text: "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!",
  },
  {
    id: "2",
    name: "Albert Flores",
    role: "UI/UX Designer",
    time: "a year ago",
    stars: 5,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    text: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
  },
  {
    id: "3",
    name: "Cody Fisher",
    role: "UI/UX Designer",
    time: "a year ago",
    stars: 5,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    text: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
  },
  {
    id: "4",
    name: "Brooklyn Simmons",
    role: "UI/UX Designer",
    time: "a year ago",
    stars: 5,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    text: "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
  },
];

export const RATING_BREAKDOWN: RatingBreakdownItem[] = [
  { stars: 5, pct: 85, count: 720 },
  { stars: 4, pct: 35, count: 120 },
  { stars: 3, pct: 15, count: 21 },
  { stars: 2, pct: 8, count: 12 },
  { stars: 1, pct: 5, count: 16 },
];
