import CoursePage from "@/components/courses/course";
import Hero from "@/components/courses/hero";
import CTA from "@/components/main/cta";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <Hero />
      <CoursePage />
      <CTA />
    </>
  );
}
