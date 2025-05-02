import CourseCategories from "@/components/main/courses";
import CTA from "@/components/main/cta";
import Featured from "@/components/main/feature";
import Hero from "@/components/main/hero";
import PrimarySection from "@/components/main/primary";
import ClientReview from "@/components/main/client-review";
import Testimonials from "@/components/main/testimonials";
import Image from "next/image";
import ContactSection from "@/components/main/contact";

export default function Home() {
  return (
    <main className="bg-transparent">
      <Hero />
      <PrimarySection />
      <Testimonials />
      <ClientReview />
      <CourseCategories />
      <ContactSection />
      {/* <Featured /> */}
      <CTA />
    </main>
  );
}
