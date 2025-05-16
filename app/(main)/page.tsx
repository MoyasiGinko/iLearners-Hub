import CourseCategories from "@/components/main/courses";
import CTA from "@/components/main/cta";
import Featured from "@/components/main/feature";
import Hero from "@/components/main/hero";
import PrimarySection from "@/components/main/primary";
import ClientReview from "@/components/main/client-review";
import Testimonials from "@/components/main/testimonials";
import Image from "next/image";
import ContactSection from "@/components/main/contact";
import FAQSection from "@/components/main/faq/FAQ-Section";
import faqItems from "../../components/main/faq/homefaqData";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-blue-50/50 via-blue-50 to-pink-100/50">
      <Hero />
      <PrimarySection />
      <Testimonials />
      <ClientReview />
      <CourseCategories />
      <ContactSection />
      {/* <Featured /> */}
      <CTA />
      <FAQSection faqItems={faqItems} />
    </main>
  );
}
