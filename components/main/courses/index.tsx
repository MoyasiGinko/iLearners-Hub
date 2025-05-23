"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { courseCategories } from "@/components/courses/course/courseData";
import { courses } from "@/components/courses/course/courseData";

// Kid-friendly background SVG elements
const BackgroundElements = {
  // Pencil SVG
  Pencil: () => (
    <img
      className="w-16 h-16"
      src="/images/math-elements/xygraph.svg"
      alt="Paintbrush"
      style={{ filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3))" }}
    />
  ),

  // Book SVG
  Book: () => (
    <img
      className="w-16 h-16"
      src="/images/math-elements/function.svg"
      alt="Paintbrush"
      style={{ filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3))" }}
    />
  ),

  // Atom SVG
  Atom: () => (
    <img
      className="w-16 h-16"
      src="/images/math-elements/triangle.svg"
      alt="Paintbrush"
      style={{ filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3))" }}
    />
  ),

  // Math Symbols SVG
  MathSymbols: () => (
    <img
      className="w-16 h-16"
      src="/images/math-elements/plus.svg"
      alt="Paintbrush"
      style={{ filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3))" }}
    />
  ),

  // Paintbrush SVG
  Paintbrush: () => (
    <img
      className="w-16 h-16"
      src="/images/math-elements/e.svg"
      alt="Paintbrush"
      style={{ filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3))" }}
    />
  ),

  // Globe SVG
  Globe: () => (
    <img
      className="w-16 h-16"
      src="/images/study-materials/basketball.svg"
      alt="Paintbrush"
      style={{ filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3))" }}
    />
  ),

  // Stars SVG
  Star: () => (
    <img
      className="w-16 h-16"
      src="/images/study-materials/book.svg"
      alt="Paintbrush"
      style={{ filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3))" }}
    />
  ),

  // Calculator SVG
  Calculator: () => (
    <img
      className="w-14 h-14"
      src="/images/math-elements/root.svg"
      alt="Paintbrush"
      style={{ filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3))" }}
    />
  ),
};

const useAnimatedCounter = (value: number, duration: number = 2000): number => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let start: number = 0;
    const end: number = parseInt(value.toString());
    const incrementTime: number = duration / end;

    let timer: NodeJS.Timeout = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => {
      clearInterval(timer);
    };
  }, [value, duration]);

  return count;
};

// Color mapping for categories
const categoryColors = {
  Intensive: {
    bg: "bg-red-100",
    text: "text-red-600",
    border: "border-red-300",
    button: "bg-red-500 hover:bg-red-600",
    accent: "from-red-400 to-pink-500",
  },
  Higher: {
    bg: "bg-teal-100",
    text: "text-teal-600",
    border: "border-teal-300",
    button: "bg-teal-500 hover:bg-teal-600",
    accent: "from-teal-400 to-blue-500",
  },
  Revision: {
    bg: "bg-yellow-100",
    text: "text-yellow-600",
    border: "border-yellow-300",
    button: "bg-yellow-500 hover:bg-yellow-600",
    accent: "from-yellow-400 to-orange-500",
  },
  Secondary: {
    bg: "bg-green-100",
    text: "text-green-600",
    border: "border-green-300",
    button: "bg-green-500 hover:bg-green-600",
    accent: "from-green-400 to-teal-500",
  },
  Primary: {
    bg: "bg-blue-100",
    text: "text-blue-600",
    border: "border-blue-300",
    button: "bg-blue-500 hover:bg-blue-600",
    accent: "from-blue-400 to-indigo-500",
  },
  // Add a default color scheme for any category that might not be explicitly defined
  default: {
    bg: "bg-gray-100",
    text: "text-gray-600",
    border: "border-gray-300",
    button: "bg-gray-500 hover:bg-gray-600",
    accent: "from-gray-400 to-gray-500",
  },
};

const MiniCourseTablet = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  // Use the Course type imported from courseData rather than defining a local interface
  const [filteredCourses, setFilteredCourses] = useState<(typeof courses)[0][]>(
    []
  );
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    // Show all courses initially or filter by category
    if (selectedCategory === "All") {
      setFilteredCourses(courses.slice(0, 6)); // Show only 6 courses initially
    } else {
      setFilteredCourses(
        courses
          .filter((course) => course.category === selectedCategory)
          .slice(0, 6)
      );
    }
  }, [selectedCategory]);

  const handleCategoryChange = (category: string): void => {
    setSelectedCategory(category);
    setActiveTab(courseCategories.indexOf(category) + 1);
  };

  // Helper function to safely get color scheme
  const getColorScheme = (category: string) => {
    // Check if the category exists in categoryColors
    if (categoryColors[category as keyof typeof categoryColors]) {
      return categoryColors[category as keyof typeof categoryColors];
    }
    // Return the default color scheme if category doesn't exist
    return categoryColors.default;
  };

  return (
    <div className="w-full bg-transparent py-20 px-4 overflow-hidden relative">
      {/* Background Educational Elements - Top Left */}
      <motion.div
        className="absolute top-10 left-10 opacity-20 z-0"
        animate={{
          rotate: [0, 10, -10, 0],
          y: [0, -8, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <BackgroundElements.Book />
      </motion.div>

      {/* Background Educational Elements - Top Right */}
      <motion.div
        className="absolute top-16 right-16 opacity-20 z-0"
        animate={{
          rotate: [0, -15, 15, 0],
          y: [0, 8, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <BackgroundElements.Atom />
      </motion.div>

      {/* Background Educational Elements - Bottom Left */}
      <motion.div
        className="absolute bottom-20 left-24 opacity-20 z-0"
        animate={{
          rotate: [0, 20, -5, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <BackgroundElements.Pencil />
      </motion.div>

      {/* Background Educational Elements - Bottom Right */}
      <motion.div
        className="absolute bottom-24 right-10 opacity-20 z-0"
        animate={{
          rotate: [0, -10, 10, 0],
          x: [0, -5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <BackgroundElements.MathSymbols />
      </motion.div>

      {/* Background Educational Elements - Middle Left */}
      <motion.div
        className="absolute top-1/2 left-5 opacity-20 z-0"
        animate={{
          rotate: [0, 15, -5, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <BackgroundElements.Paintbrush />
      </motion.div>

      {/* Background Educational Elements - Middle Right */}
      <motion.div
        className="absolute top-1/4 right-12 opacity-20 z-0"
        animate={{
          rotate: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <BackgroundElements.Globe />
      </motion.div>

      {/* Background Educational Elements - Stars scattered */}
      <motion.div
        className="absolute top-1/3 left-1/4 opacity-20 z-0"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <BackgroundElements.Star />
      </motion.div>

      <motion.div
        className="absolute top-2/3 right-1/4 opacity-20 z-0"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <BackgroundElements.Star />
      </motion.div>

      {/* Background Educational Elements - Calculator */}
      <motion.div
        className="absolute bottom-1/3 right-1/3 opacity-20 z-0"
        animate={{
          rotate: [0, 5, -5, 0],
          y: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <BackgroundElements.Calculator />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Fun header with animated elements */}
        <div className="text-center mb-8 relative">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-400 leading-tight mb-6"
            style={{ textShadow: "2px 2px 4px rgba(0,105,255,0.2)" }}
          >
            Explore Fun Learning Adventures!
          </h2>

          <div className="flex justify-center items-center space-x-2 text-gray-700 mb-6">
            <div className="flex items-center">
              <span
                className="text-gray-700 font-bold"
                style={{
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                }}
              >
                Top-rated courses
              </span>
            </div>
            <div className="flex items-center">
              <svg
                className="w-5 h-5 text-blue-500 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              <span
                className="text-gray-700 font-bold"
                style={{
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                }}
              >
                100+ happy students
              </span>
            </div>
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap justify-center mb-8 border-b border-gray-200">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 mr-3 mb-3 rounded-full font-bold transition transform ${
                activeTab === 0
                  ? "bg-gradient-to-b from-purple-400 to-purple-600 text-white shadow-lg translate-y-1"
                  : "bg-purple-100 text-purple-700 shadow-md hover:shadow-lg hover:translate-y-0.5"
              }`}
              onClick={() => {
                setSelectedCategory("All");
                setActiveTab(0);
              }}
            >
              All Courses
            </motion.button>

            {courseCategories.map((category, index) => {
              // Safely get color scheme for each category
              const colorScheme = getColorScheme(category);

              return (
                <motion.button
                  key={index}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 mr-3 mb-3 rounded-full font-bold transition transform ${
                    activeTab === index + 1
                      ? `bg-gradient-to-b ${colorScheme.accent} text-white shadow-lg translate-y-1`
                      : `${colorScheme.bg} ${colorScheme.text} shadow-md hover:shadow-lg hover:translate-y-0.5`
                  }`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Course cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => {
              // Safely get color scheme for each courses
              const colorScheme = getColorScheme(course.category);

              return (
                <motion.div
                  key={course.id}
                  className={`flex flex-col justify-between h-full rounded-xl overflow-hidden border-2 ${colorScheme.border} ${colorScheme.bg} relative`}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{
                    y: -5,
                    boxShadow:
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                >
                  {/* Category ribbon */}
                  <div
                    className={`absolute top-4 right-0 py-1 px-3 rounded-l-full font-bold text-white text-sm shadow-md bg-gradient-to-r ${colorScheme.accent}`}
                  >
                    {course.category}
                  </div>

                  {/* Card content */}
                  <div className="p-6 pt-10 pb-0 flex-grow">
                    <h3 className="text-lg font-bold mb-2 pr-20">
                      {course.short_title}
                    </h3>
                  </div>

                  {/* Course details - Subject list */}
                  <div className="p-6 pt-2 pb-1 flex-grow">
                    <div className="flex flex-wrap gap-2">
                      {course.subjects?.map((subject, idx) => (
                        <span
                          key={idx}
                          className={`text-xs px-2 py-1 rounded-full ${colorScheme.bg} ${colorScheme.text} border ${colorScheme.border}`}
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price and action button */}
                  <div className="p-6 ">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-sm text-gray-500">
                          Course Fee
                        </span>
                        <span className="text-2xl font-bold">{course.fee}</span>
                        {course.discount && (
                          <span className="text-xs text-green-600 font-medium">
                            {course.discount}
                          </span>
                        )}
                      </div>

                      <motion.a
                        href={`/courses/${course.id}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-4 py-2 rounded-full text-white font-medium shadow-md ${colorScheme.button}`}
                      >
                        Learn More
                      </motion.a>
                    </div>
                  </div>

                  {/* Fun decorative elements */}
                  <div className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 opacity-5">
                    <svg
                      className="w-16 h-16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" />
                    </svg>
                  </div>
                </motion.div>
              );
            })
          ) : (
            <div className="text-center col-span-full text-gray-500 font-medium">
              No courses yet
            </div>
          )}
        </div>

        {/* Call to action */}
        {selectedCategory === "All" && courses.length > 6 ? (
          <div className="text-center">
            <a
              href="/courses"
              className="px-8 inline-block py-3 rounded-full
      bg-gradient-to-r from-teal-400 to-blue-500 text-white font-medium
      shadow-lg hover:shadow-xl
      border-b-4 border-teal-600
      active:border-b-0 active:border-t-0 active:shadow-inner
      active:translate-y-1 hover:-translate-y-1
      transform transition-all duration-200
      focus:outline-none "
            >
              Browse All Courses
            </a>
          </div>
        ) : (
          selectedCategory !== "All" &&
          courses.filter((course) => course.category === selectedCategory)
            .length > 6 && (
            <div className="text-center">
              <a
                href={`/courses?category=${selectedCategory}`}
                className="px-8 inline-block py-3 rounded-full
        bg-gradient-to-r from-teal-400 to-blue-500 text-white font-medium
        shadow-lg hover:shadow-xl
        border-b-4 border-teal-600
        active:border-b-0 active:border-t-0 active:shadow-inner
        active:translate-y-1 hover:-translate-y-1
        transform transition-all duration-200
        focus:outline-none "
              >
                Browse All {selectedCategory} Courses
              </a>
            </div>
          )
        )}

        {/* Fun bottom decorations */}
        <div className="flex justify-center mt-16 opacity-20">
          <motion.div
            className="w-16 h-16"
            animate={{
              rotate: [0, 10, -10, 0],
              y: [0, -8, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <BackgroundElements.Calculator />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MiniCourseTablet;
