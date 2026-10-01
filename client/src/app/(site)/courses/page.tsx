import { Suspense } from "react";
import type { Metadata } from "next";
import { CourseCatalog } from "@/components/sections";

export const metadata: Metadata = {
  title: "Courses - ByteSpace",
  description: "Find your next course on ByteSpace.",
};

export default function CoursesPage() {
  return (
    <main>
      <Suspense fallback={<div className="min-h-screen bg-[#003be2]" />}>
        <CourseCatalog />
      </Suspense>
    </main>
  );
}
