"use client";
import React, { useState, useEffect, useRef } from "react";
import { courseCategories } from "@/components/courses/course/courseData";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import Hero from "@/components/courses/hero";
import CTA from "@/components/courses/cta";
import CoursePage from "@/components/courses/course";

export default function Page() {
  const pathname = usePathname();
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [displayedCategory, setDisplayedCategory] = useState<string | null>(
    null
  ); // For UI highlighting
  const isUserNavigation = useRef(false);
  const pendingCategoryRef = useRef<string | null>(null);

  // Initialize state based on URL on mount
  useEffect(() => {
    const pathSegments = pathname.split("/").filter(Boolean);

    // Check if we're on a category page (/courses/[slug])
    if (pathSegments.length >= 2 && pathSegments[0] === "courses") {
      const categorySlug = pathSegments[1];

      // Handle "all-course" slug for "All Courses"
      if (categorySlug === "all-course") {
        setSelectedCategory("All Courses");
        setDisplayedCategory("All Courses");
        return;
      }

      // Find matching category by slug
      const matchingCategory = courseCategories.find(
        (category) => category.slug === categorySlug
      );

      if (matchingCategory) {
        setSelectedCategory(matchingCategory.name);
        setDisplayedCategory(matchingCategory.name);
      } else {
        // If no matching category found, redirect to all courses
        router.replace("/courses/all-course");
      }
    } else if (pathSegments.length === 1 && pathSegments[0] === "courses") {
      // Base courses page - redirect to all-course
      router.replace("/courses/all-course");
    }
  }, [pathname, router]);

  // Function to handle category selection with URL navigation
  const handleCategorySelect = (categoryName: string) => {
    // Don't allow navigation if we're still loading
    if (selectedCategory === null) return;

    // Prevent any interference from useEffect
    isUserNavigation.current = true;

    // Store the pending category to avoid conflicts
    pendingCategoryRef.current = categoryName;

    // Update data state immediately for instant course filtering
    setSelectedCategory(categoryName);
    // Don't update displayedCategory yet - wait for render completion

    // Find the slug for the selected category
    const categorySlug =
      categoryName === "All Courses"
        ? "all-course"
        : courseCategories.find((cat) => cat.name === categoryName)?.slug ||
          "all-course";

    // Navigate to the new URL with shallow routing to avoid full page reload
    router.push(`/courses/${categorySlug}`, { scroll: false });

    // Reset navigation flag after navigation is complete
    setTimeout(() => {
      isUserNavigation.current = false;
      pendingCategoryRef.current = null;
    }, 100);

    // Smooth scroll to courses content after state update
    setTimeout(() => {
      const coursesContent = document.getElementById("courses-content");
      if (coursesContent) {
        const elementPosition = coursesContent.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - 100;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 50);
  };

  // Callback when CoursePage rendering is complete
  const handleRenderComplete = () => {
    // Update the displayed category for UI highlighting only after rendering is done
    if (selectedCategory !== null) {
      setDisplayedCategory(selectedCategory);
    }
  };

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
            {/* Sidebar with categories - Now truly sticky */}
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
                          displayedCategory === category.name
                            ? "bg-indigo-500 border-indigo-600 text-white shadow-sm"
                            : "bg-indigo-100 border-indigo-300 text-indigo-700 "
                        }`}
                        onClick={() => handleCategorySelect(category.name)}
                        disabled={selectedCategory === null} // Disable during loading
                      >
                        {category.name}
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Courses grid - Dynamic content that updates smoothly */}
            <div id="courses-content" className="lg:w-3/4">
              <CoursePage selectedCategory={selectedCategory} />
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
