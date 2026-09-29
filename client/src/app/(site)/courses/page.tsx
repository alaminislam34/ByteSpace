import type { Metadata } from "next";
import { CourseCatalog } from "@/components/sections";

export const metadata: Metadata = {
  title: "Courses - ByteSpace",
  description: "Find your next course on ByteSpace.",
};

export default function CoursesPage() {
  return (
    <main>
      <CourseCatalog />
    </main>
  );
}
