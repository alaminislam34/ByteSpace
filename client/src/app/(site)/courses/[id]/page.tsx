import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { courses, getCourseById } from "@/data/courses";

interface CoursePageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return courses.map((course) => ({ id: course.id }));
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const { id } = await params;
  const course = getCourseById(id);
  return { title: course ? `${course.title} - ByteSpace` : "Course - ByteSpace" };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { id } = await params;
  const course = getCourseById(id);
  if (!course) notFound();

  return (
    <main className="min-h-svh bg-white px-6 py-16 text-[#16181D]">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
        <Link href="/" className="text-sm font-medium text-[#2454E6]">
          Back to courses
        </Link>
        <div className="relative aspect-16/10 overflow-hidden rounded-[24px]">
          <Image src={course.image} alt={course.title} fill className="object-cover" sizes="768px" />
        </div>
        <h1 className="font-poppins text-4xl font-bold leading-[120%]">{course.title}</h1>
        <p className="text-[#9AA0A8]">
          by <span className="font-medium text-[#2454E6]">{course.author}</span>
        </p>
        <p className="text-[#4B5160]">
          {course.lessons} Lessons · {course.duration} · {course.comments} Comments · {course.level}
        </p>
        <p className="font-poppins text-2xl font-bold text-[#2454E6]">${course.price}/lifetime</p>
      </div>
    </main>
  );
}
