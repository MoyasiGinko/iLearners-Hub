import Hero from "@/components/news-offers/hero";
import NewsAndEvents from "@/components/news-offers/news";
import CtaNews from "@/components/news-offers/news/cta-news";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Offers - iLearner's Hub | Latest Updates & Special Deals",
  description:
    "Stay updated with the latest news, events, and special offers from iLearner's Hub. Discover new courses, educational events, and exclusive deals for students.",
};

export default function Page() {
  return (
    <>
      <Hero />
      <NewsAndEvents />
      <CtaNews />
    </>
  );
}
