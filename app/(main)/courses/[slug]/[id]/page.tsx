import { Metadata } from "next";
import CourseDetailsPage from "@/components/courses/course/CourseDetails";
import Hero from "@/components/courses/hero";
import CTA from "@/components/main/cta";

type Props = {
  params: Promise<{ slug: string; id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, id } = await params;

  // You can fetch course data here if needed
  // For now, we'll create a generic title based on the slug and id
  const categoryName = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  return {
    title: `Course Details - ${categoryName} | iLearner's Hub`,
    description: `Detailed information about this ${categoryName} course at iLearner's Hub. Learn about course content, duration, requirements, and how to enroll.`,
  };
}

export default function Page() {
  return (
    <>
      <Hero />
      <CourseDetailsPage />
      <CTA />
    </>
  );
}
