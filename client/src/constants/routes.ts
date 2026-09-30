export const ROUTES = {
  HOME: "/",
  ABOUT: "/#about",
  SERVICES: "/#services",
  PORTFOLIO: "/#portfolio",
  CONTACT: "/#contact",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: ROUTES.HOME },
  { label: "About", href: ROUTES.ABOUT },
  { label: "Services", href: ROUTES.SERVICES },
  { label: "Portfolio", href: ROUTES.PORTFOLIO },
  { label: "Contact", href: ROUTES.CONTACT },
] as const;
