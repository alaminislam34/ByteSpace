import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { courses, getCourseById } from "@/data/courses";
import { CourseDetailView } from "@/components/sections";

interface CoursePageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return courses.map((course) => ({ id: course.id }));
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const { id } = await params;
  const course = getCourseById(id);
  return {
    title: course ? `${course.title} - ByteSpace` : "Course - ByteSpace",
    description: course ? `Learn ${course.title} on ByteSpace` : "Course details on ByteSpace",
  };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { id } = await params;
  const course = getCourseById(id);
  if (!course) notFound();

  return (
    <main>
      <CourseDetailView course={course} />
    </main>
  );
}
