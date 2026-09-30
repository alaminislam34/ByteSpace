export const APP_CONFIG = {
  name: "ByteSpace",
  description: "Get Access to Hundreds of Courses Available.",
  apiUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api",
  contactEmail: "support@bytespace.com",
} as const;
