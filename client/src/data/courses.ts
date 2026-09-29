export interface Course {
  id: string;
  title: string;
  author: string;
  rating: number;
  lessons: number;
  duration: string;
  comments: number;
  level: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
}

export const courses: Course[] = [
  {
    id: "figma-basic",
    title: "Learn Figma from Basic",
    author: "purepearl studio",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    price: 25,
    category: "UI/UX Design",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "digital-asset",
    title: "Build Digital Asset",
    author: "purepearl studio",
    rating: 4.7,
    lessons: 22,
    duration: "3 hours 40 mins",
    comments: 84,
    level: "Beginner",
    price: 32,
    category: "Graphic Design",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "power-big-data",
    title: "The Power of Big Data",
    author: "purepearl studio",
    rating: 4.6,
    lessons: 28,
    duration: "5 hours 10 mins",
    comments: 112,
    level: "Intermediate",
    price: 49,
    category: "Data Science",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "acoustic-guitar",
    title: "Acoustic Guitar Basics",
    author: "northlane audio",
    rating: 4.8,
    lessons: 19,
    duration: "4 hours 05 mins",
    comments: 73,
    level: "Beginner",
    price: 29,
    category: "Music",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "watercolor-start",
    title: "Watercolor for Beginners",
    author: "studio marigold",
    rating: 4.4,
    lessons: 14,
    duration: "2 hours 50 mins",
    comments: 41,
    level: "Beginner",
    price: 22,
    category: "Drawing & Painting",
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "brand-strategy",
    title: "Brand Strategy Sprint",
    author: "halo & co",
    rating: 4.9,
    lessons: 12,
    duration: "1 hour 45 mins",
    comments: 96,
    level: "Intermediate",
    price: 39,
    category: "Marketing",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "motion-after-effects",
    title: "Motion Design Essentials",
    author: "frame theory",
    rating: 4.6,
    lessons: 24,
    duration: "6 hours 20 mins",
    comments: 67,
    level: "Intermediate",
    price: 45,
    category: "Animation",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "instagram-growth",
    title: "Instagram Growth Lab",
    author: "social north",
    rating: 4.3,
    lessons: 16,
    duration: "2 hours 30 mins",
    comments: 128,
    level: "Beginner",
    price: 27,
    category: "Social Media",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "campaign-ideas",
    title: "Creative Campaign Ideas",
    author: "halo & co",
    rating: 4.5,
    lessons: 11,
    duration: "1 hour 55 mins",
    comments: 38,
    level: "Beginner",
    price: 24,
    category: "Creative Marketing",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "digital-illustration",
    title: "Digital Illustration Studio",
    author: "studio marigold",
    rating: 4.8,
    lessons: 21,
    duration: "4 hours 35 mins",
    comments: 55,
    level: "Intermediate",
    price: 36,
    category: "Digital Illustration",
    image:
      "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "short-film-edit",
    title: "Edit Your First Short Film",
    author: "reel house",
    rating: 4.7,
    lessons: 18,
    duration: "3 hours 15 mins",
    comments: 44,
    level: "Beginner",
    price: 34,
    category: "Film & Video",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "paper-crafts",
    title: "Paper Crafts at Home",
    author: "maker monday",
    rating: 4.2,
    lessons: 9,
    duration: "1 hour 20 mins",
    comments: 27,
    level: "Beginner",
    price: 18,
    category: "Crafts",
    image:
      "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "freelance-pricing",
    title: "Freelance Pricing Playbook",
    author: "purepearl studio",
    rating: 4.6,
    lessons: 13,
    duration: "2 hours 05 mins",
    comments: 91,
    level: "Beginner",
    price: 28,
    category: "Freelance & Entrepreneurship",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "product-photo",
    title: "Product Photography",
    author: "lens & light",
    rating: 4.4,
    lessons: 15,
    duration: "2 hours 40 mins",
    comments: 33,
    level: "Beginner",
    price: 31,
    category: "Photography",
    image:
      "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "focus-systems",
    title: "Focus Systems for Creators",
    author: "north desk",
    rating: 4.5,
    lessons: 10,
    duration: "1 hour 30 mins",
    comments: 62,
    level: "Beginner",
    price: 19,
    category: "Productivity",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "react-for-designers",
    title: "React for Designers",
    author: "byte lab",
    rating: 4.7,
    lessons: 26,
    duration: "5 hours 45 mins",
    comments: 77,
    level: "Intermediate",
    price: 42,
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "weeknight-cooking",
    title: "Weeknight Cooking",
    author: "kitchen table",
    rating: 4.8,
    lessons: 20,
    duration: "3 hours 00 mins",
    comments: 140,
    level: "Beginner",
    price: 26,
    category: "Cooking",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
  },
];

export function getCourseById(id: string) {
  return courses.find((course) => course.id === id);
}
