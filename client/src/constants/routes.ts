export const ROUTES = {
  HOME: "/",
  COURSES: "/courses",
  CREATORS: "/creators",
  SIGN_IN: "/signin",
  JOIN: "/join",
  COURSE_DETAIL: (id: string) => `/courses/${id}`,
  CREATOR_PROFILE: (id: string) => `/creators/${id}`,
} as const;

export const NAV_LINKS = [
  { label: "Home", href: ROUTES.HOME },
  { label: "Courses", href: ROUTES.COURSES },
  { label: "Creators", href: ROUTES.CREATORS },
] as const;
