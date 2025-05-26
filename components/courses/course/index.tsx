"use client";
import React, { useMemo } from "react";
import { courses, courseCategories } from "./courseData";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface CoursePageProps {
  selectedCategory: string;
}

const CoursePage: React.FC<CoursePageProps> = ({ selectedCategory }) => {
  // Use useMemo to prevent unnecessary recalculations
  const filteredCourses = useMemo(() => {
    return selectedCategory === "All Courses"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={selectedCategory} // This ensures animation triggers on category change
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8"
      >
        {filteredCourses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.3 }} // Reduced stagger for smoother feel
            className="rounded-2xl bg-white hover:scale-101 shadow-xl overflow-hidden transition-all border-4 border-indigo-100 flex flex-col"
          >
            <Link
              href={`/courses/${
                courseCategories.find((cat) => cat.name === course.category)
                  ?.slug || "general"
              }/${course.id}`}
              className="flex flex-col h-full"
            >
              <div className="relative h-48 bg-gray-200">
                <img
                  src={course.Image}
                  alt={course.short_title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-0 right-0 bg-yellow-400 text-indigo-700 px-3 py-1 m-3 rounded-full text-sm font-bold">
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
    </AnimatePresence>
  );
};

export default CoursePage;
