import { Metadata } from "next";

import GalleryPage from "@/components/gallery/galleries";
import Hero from "@/components/gallery/hero";
import CTA from "@/components/main/cta";

export const metadata: Metadata = {
  title: "Gallery - iLearner's Hub | Student Learning Moments",
  description:
    "Explore our gallery showcasing happy students, interactive classrooms, learning activities, and memorable moments at iLearner's Hub. See our vibrant learning community in action!",
};

export default function Page() {
  return (
    <>
      <Hero />
      <GalleryPage />
      <CTA />
    </>
  );
}
