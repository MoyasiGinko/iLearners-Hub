"use client";
import React, { useState, useEffect } from "react";
import { courseCategories } from "@/components/courses/course/courseData";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Hero from "@/components/courses/hero";
import CTA from "@/components/courses/cta";
import CoursePage from "@/components/courses/course";

export default function Page() {
  const pathname = usePathname();
  const [selectedCategory, setSelectedCategory] = useState("All Courses");

  // Only set initial category from URL on mount, don't react to pathname changes
  useEffect(() => {
    // Get the path segments and filter out empty strings
    const pathSegments = pathname.split("/").filter(Boolean);

    // Check if we're on the base courses page
    if (pathSegments.length === 1 && pathSegments[0] === "courses") {
      setSelectedCategory("All Courses");
      return;
    }

    // Check if we're on a category page (/courses/[slug]) or course detail page (/courses/[slug]/[id])
    if (pathSegments.length >= 2 && pathSegments[0] === "courses") {
      const categorySlug = pathSegments[1];

      // Find matching category by slug
      const matchingCategory = courseCategories.find(
        (category) => category.slug === categorySlug
      );

      if (matchingCategory) {
        setSelectedCategory(matchingCategory.name);
      } else {
        // If no matching category found, default to "All Courses"
        setSelectedCategory("All Courses");
      }
    }
  }, []); // Remove pathname dependency to prevent re-renders
  // Function to handle category selection without URL navigation
  const handleCategorySelect = (categoryName: string) => {
    setSelectedCategory(categoryName);

    // Smooth scroll to a position slightly above the courses content area
    const coursesContent = document.getElementById("courses-content");
    if (coursesContent) {
      // Get the element's position
      const elementPosition = coursesContent.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - 100; // 100px offset from the top

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
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
                  <motion.li
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <button
                      className={`px-8 w-full inline-block py-3 rounded-full font-medium shadow-sm hover:shadow-md border-b-4
                        active:border-b-0 active:border-t-0 active:shadow-inner active:translate-y-1 transform transition-all duration-200 focus:outline-none ${
                          selectedCategory === "All Courses"
                            ? "bg-indigo-500 border-indigo-600 text-white shadow-sm"
                            : "bg-indigo-100 border-indigo-300 text-indigo-700 "
                        }`}
                      onClick={() => handleCategorySelect("All Courses")}
                    >
                      All Courses
                    </button>
                  </motion.li>
                  {courseCategories.map((category) => (
                    <motion.li
                      key={category.slug}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <button
                        className={`px-8 w-full inline-block py-3 rounded-full font-medium shadow-sm hover:shadow-md border-b-4
                        active:border-b-0 active:border-t-0 active:shadow-inner active:translate-y-1 transform transition-all duration-200 focus:outline-none ${
                          selectedCategory === category.name
                            ? "bg-indigo-500 border-indigo-600 text-white shadow-sm"
                            : "bg-indigo-100 border-indigo-300 text-indigo-700 "
                        }`}
                        onClick={() => handleCategorySelect(category.name)}
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
