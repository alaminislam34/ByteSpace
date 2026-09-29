import { Metadata } from "next";
import { CreatorProfileView } from "@/components/sections";
import { getCreatorById, getCoursesByAuthor } from "@/data/courses";

export const metadata: Metadata = {
  title: "PurePearl Studio - Creator Profile | ByteSpace",
  description:
    "Explore courses, tutorials, and digital assets by PurePearl Studio on ByteSpace.",
};

export default function CreatorsPage() {
  const creator = getCreatorById("purepearl-studio");
  const creatorCourses = getCoursesByAuthor(creator.name);

  return <CreatorProfileView creator={creator} courses={creatorCourses} />;
}
