import { Metadata } from "next";
import { notFound } from "next/navigation";
import { CreatorProfileView } from "@/components/sections";
import { creators, getCreatorById, getCoursesByAuthor } from "@/data/courses";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return creators.map((creator) => ({
    id: creator.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const creator = getCreatorById(id);

  if (!creator) {
    return {
      title: "Creator Not Found | ByteSpace",
    };
  }

  return {
    title: `${creator.name} - Creator Profile | ByteSpace`,
    description: creator.bio1,
  };
}

export default async function CreatorPage({ params }: PageProps) {
  const { id } = await params;
  const creator = getCreatorById(id);

  if (!creator) {
    notFound();
  }

  const creatorCourses = getCoursesByAuthor(creator.name);

  return <CreatorProfileView creator={creator} courses={creatorCourses} />;
}
