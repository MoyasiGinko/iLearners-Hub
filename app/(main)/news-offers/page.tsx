import Hero from "@/components/news-offers/hero";
import NewsAndEvents from "@/components/news-offers/news";
import CtaNews from "@/components/news-offers/news/cta-news";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <Hero />
      <NewsAndEvents />
      <CtaNews />
    </>
  );
}
