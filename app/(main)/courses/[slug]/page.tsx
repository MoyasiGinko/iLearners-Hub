"use client";
import { Metadata } from "next";
import React, { useMemo, useTransition, Suspense } from "react";
import { courseCategories } from "@/components/courses/course/courseData";
import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import Hero from "@/components/courses/hero";
import CTA from "@/components/courses/cta";
import CoursePage from "@/components/courses/course";

export const metadata: Metadata = {
  title: "Courses - iLearner's Hub | Student Learning Moments",
  description:
    "Explore our courses at iLearner's Hub! Choose from a variety of subjects and levels, from Primary to Advanced Highers. Join our interactive learning community today!",
};

// Create a simple loading component
const CoursesLoadingSkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
    {Array.from({ length: 6 }).map((_, i) => (
      <div key={i} className="rounded-2xl bg-gray-100 animate-pulse h-80" />
    ))}
  </div>
);

export default function Page() {
  const params = useParams();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  // Extract current category from URL params - single source of truth
  const currentSlug = (params?.slug as string) || "all-courses";

  // Memoize category mappings once
  const { categoryName, categoryToSlugMap } = useMemo(() => {
    const slugToName = new Map();
    const nameToSlug = new Map();

    slugToName.set("all-courses", "All Courses");
    nameToSlug.set("All Courses", "all-courses");

    courseCategories.forEach((cat) => {
      slugToName.set(cat.slug, cat.name);
      nameToSlug.set(cat.name, cat.slug);
    });

    return {
      categoryName: slugToName.get(currentSlug) || "All Courses",
      categoryToSlugMap: nameToSlug,
    };
  }, [currentSlug]);

  // Simple category handler with optimistic UI updates
  const handleCategorySelect = (categoryName: string) => {
    const targetSlug = categoryToSlugMap.get(categoryName) || "all-courses";

    if (currentSlug === targetSlug) return; // Already on this category

    // Use React's useTransition for smooth updates
    startTransition(() => {
      router.push(`/courses/${targetSlug}`, { scroll: false });
    });

    // Smooth scroll without blocking
    requestAnimationFrame(() => {
      const coursesContent = document.getElementById("courses-content");
      if (coursesContent) {
        const elementPosition = coursesContent.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - 100;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  };

  console.log(
    `🏠 Main component render - Category: ${categoryName}, isPending: ${isPending}`
  );

  return (
    <>
      <Hero />
      <section className="bg-transparent pt-20 min-h-screen">
        <div className="container mx-auto px-4 relative">
          <div className="mb-16 text-center">
            <h2 className="mb-4 leading-tight bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-3xl font-bold text-transparent md:text-5xl drop-shadow-lg">
              Explore Our Fun Courses!
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-indigo-700">
              Pick your favorite subject and start an amazing learning
              adventure!
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-10">
            {/* Sidebar with categories */}
            <div className="lg:w-1/4">
              <div className="sticky top-24 rounded-3xl bg-white p-6 shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-sm bg-opacity-80">
                <h3 className="mb-4 text-xl font-bold text-indigo-700">
                  Pick a Category!
                </h3>
                <ul className="space-y-3">
                  {courseCategories.map((category) => (
                    <motion.li
                      key={category.slug}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <button
                        className={`px-8 w-full inline-block py-3 rounded-full font-medium shadow-sm hover:shadow-md border-b-4
                        active:border-b-0 active:border-t-0 active:shadow-inner active:translate-y-1 transform transition-all duration-100 focus:outline-none ${
                          categoryName === category.name
                            ? "bg-indigo-500 border-indigo-600 text-white shadow-sm"
                            : "bg-indigo-100 border-indigo-300 text-indigo-700"
                        } ${isPending ? "opacity-70 pointer-events-none" : ""}`}
                        onClick={() => handleCategorySelect(category.name)}
                        disabled={isPending}
                      >
                        {category.name}
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Courses grid with Suspense */}
            <div id="courses-content" className="lg:w-3/4">
              <Suspense fallback={<CoursesLoadingSkeleton />}>
                <div
                  className={`transition-opacity duration-200 ${
                    isPending ? "opacity-70" : "opacity-100"
                  }`}
                >
                  <CoursePage selectedCategory={categoryName} />
                </div>
              </Suspense>
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
