"use client";
import React, { useMemo, memo } from "react";
import { courses, courseCategories } from "./courseData";
import Link from "next/link";
import { motion } from "framer-motion";

interface CoursePageProps {
  selectedCategory: string;
}

const CoursePage: React.FC<CoursePageProps> = memo(({ selectedCategory }) => {
  console.log(`🔍 CoursePage render - Category: ${selectedCategory}`);

  // Single memoized filter - no state, no effects, no complex transitions
  const filteredCourses = useMemo(() => {
    console.log(`🏗️ Filtering courses for: ${selectedCategory}`);

    if (selectedCategory === "All Courses") {
      return courses;
    }

    return courses.filter((course) => course.category === selectedCategory);
  }, [selectedCategory]);

  // Memoize category slug mapping once
  const categorySlugMap = useMemo(() => {
    const map = new Map();
    courseCategories.forEach((cat) => {
      map.set(cat.name, cat.slug);
    });
    return map;
  }, []);

  console.log(
    `📊 Displaying ${filteredCourses.length} courses for ${selectedCategory}`
  );

  return (
    <motion.div
      key={selectedCategory} // Key ensures proper re-animation when category changes
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8"
    >
      {filteredCourses.map((course, index) => (
        <motion.div
          key={course.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.05, // Slightly slower stagger for smoother feel
            duration: 0.4,
            ease: "easeOut",
          }}
          className="rounded-2xl bg-white hover:scale-[1.02] shadow-xl overflow-hidden transition-all duration-300 border-4 border-indigo-100 flex flex-col"
        >
          <Link
            href={`/courses/${
              categorySlugMap.get(course.category) || "all-courses"
            }/${course.id}`}
            className="flex flex-col h-full"
          >
            <div className="relative h-48 bg-gray-200">
              <img
                src={course.Image}
                alt={course.short_title}
                className="object-cover w-full h-full"
                loading="lazy"
              />
              <div className="absolute top-0 right-0 bg-indigo-100 text-indigo-700 px-3 py-1 m-3 rounded-full text-sm font-bold">
                {course.category}
              </div>
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-xl mb-4 leading-tight tracking-tight font-bold text-indigo-700">
                {course.short_title}
              </h3>
              <div className="mt-auto flex justify-between items-center">
                <h3 className="inline-block text-left text-lg text-indigo-600 font-bold rounded-full transition-all">
                  {course.rate}
                </h3>
                <span className="inline-block text-lg bg-indigo-100 hover:bg-indigo-200 text-indigo-700 font-bold px-3 py-1 rounded-full transition-all">
                  Learn More
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}

      {filteredCourses.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center py-10 bg-white rounded-3xl mt-10 shadow-lg col-span-full"
        >
          <p className="text-xl text-indigo-600 font-medium">
            Oops! No courses here yet. Try another category!
          </p>
        </motion.div>
      )}
    </motion.div>
  );
});

CoursePage.displayName = "CoursePage";

export default CoursePage;
