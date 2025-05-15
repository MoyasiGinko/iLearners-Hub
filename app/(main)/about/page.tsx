import Hero from "@/components/about/hero";
import AboutSection from "@/components/about/about-us";
import Image from "next/image";
import WhyChooseUs from "@/components/about/why-us";
import OurTeam from "@/components/about/our-team";
import OurMission from "@/components/about/our-mission";
import OurTeachers from "@/components/about/our-teacher";
import AboutCTA from "@/components/about/cta";

export default function Page() {
  return (
    <>
      <Hero />
      <AboutSection />
      <WhyChooseUs />
      <OurTeam />
      <OurMission />
      <OurTeachers />
      <AboutCTA />
    </>
  );
}
