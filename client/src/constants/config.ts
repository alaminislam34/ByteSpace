export const APP_CONFIG = {
  name: "Agency Portfolio",
  description: "High-performance digital products and experiences.",
  apiUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api",
  contactEmail: "hello@agency.com",
} as const;
