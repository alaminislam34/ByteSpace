export type CourseLevel = "Beginner" | "Intermediate" | "Advanced" | string;

export interface Course {
  id: string;
  title: string;
  author: string;
  rating: number;
  lessons: number;
  duration: string;
  comments: number;
  level: CourseLevel;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
}

export interface CourseModule {
  number: string;
  title: string;
  description: string;
}

export interface CourseReview {
  id: string;
  name: string;
  role: string;
  time: string;
  stars: number;
  avatar: string;
  text: string;
}

export interface RatingBreakdownItem {
  stars: number;
  pct: number;
  count: number;
}

export interface SneakPeekItem {
  title: string;
  src: string;
}
