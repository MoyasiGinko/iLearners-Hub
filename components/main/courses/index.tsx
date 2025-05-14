"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { courseCategories } from "@/components/courses/course/courseData";
import { courses } from "@/components/courses/course/courseData";

// Fun animal icons for each category
const CategoryIcons = {
  Intensive: () => (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 8L7 12H10V16H14V12H17L12 8Z"
        fill="#FF6B6B"
        stroke="#FF6B6B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="#FF6B6B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Higher: () => (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 6V18M12 6L7 10M12 6L17 10"
        stroke="#4ECDC4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="#4ECDC4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Revision: () => (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
      <path
        d="M15 4V8M15 8H11M15 8L7 16"
        stroke="#FFD166"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="#FFD166"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Secondary: () => (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
      <path
        d="M8 13V8M8 8H13M8 8L16 16"
        stroke="#06D6A0"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="#06D6A0"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Primary: () => (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 7V9M12 13V15M9 12H7M17 12H15"
        stroke="#118AB2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="#118AB2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

// Subject icons
const SubjectIcons = {
  Mathematics: (
    <svg
      className="w-4 h-4 mr-1"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M7 20l10-10M17 20L7 10"></path>
    </svg>
  ),
  English: (
    <svg
      className="w-4 h-4 mr-1"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M4 7h16M4 12h10M4 17h6"></path>
    </svg>
  ),
  Science: (
    <svg
      className="w-4 h-4 mr-1"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M10 2v4m4 0V2M8 16l4 4 4-4M12 12v8m6-12a6 6 0 00-12 0c0 3.09 2.34 5.6 5.35 5.95"></path>
    </svg>
  ),
  Physics: (
    <svg
      className="w-4 h-4 mr-1"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M12 5v2m0 10v2M5 12h2m10 0h2M6.34 6.34l1.42 1.42m8.48 8.48l1.42 1.42m0-11.32l-1.42 1.42m-8.48 8.48l-1.42 1.42"></path>
    </svg>
  ),
};

// Custom hook for animation
interface UseAnimatedCounterProps {
  value: number;
  duration?: number;
}

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
};

const MiniCourseTablet = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  interface Course {
    id: number; // Match the type from courseData
    title: string;
    category: string;
    subjects?: string[];
    rate?: string;
    duration?: string;
    sessions?: string;
    fee?: string;
    discount?: string;
    action?: string;
  }

  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
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

  const totalStudents = useAnimatedCounter(5000);

  const handleCategoryChange = (category: string): void => {
    setSelectedCategory(category);
    setActiveTab(courseCategories.indexOf(category) + 1);
  };

  return (
    <div className="w-full bg-transparent py-12 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
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
              <span>Top-rated courses</span>
            </div>
            <span>•</span>
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
              <span>100+ happy students</span>
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

            {courseCategories.map((category, index) => (
              <motion.button
                key={index}
                // whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 mr-3 mb-3 rounded-full font-bold transition transform ${
                  activeTab === index + 1
                    ? `bg-gradient-to-b ${
                        categoryColors[category as keyof typeof categoryColors]
                          .accent
                      } text-white shadow-lg translate-y-1`
                    : `bg-${
                        categoryColors[category as keyof typeof categoryColors]
                          .bg
                      } text-${
                        categoryColors[category as keyof typeof categoryColors]
                          .text
                      } shadow-md hover:shadow-lg hover:translate-y-0.5`
                }`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Course cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          {filteredCourses.map((course) => (
            <motion.div
              key={course.id}
              className={`flex flex-col justify-between h-full rounded-xl overflow-hidden border-2 ${
                categoryColors[course.category as keyof typeof categoryColors]
                  .border
              } ${
                categoryColors[course.category as keyof typeof categoryColors]
                  .bg
              } relative`}
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
                className={`absolute top-4 right-0 py-1 px-3 rounded-l-full font-bold text-white text-sm shadow-md bg-gradient-to-r ${
                  categoryColors[course.category as keyof typeof categoryColors]
                    .accent
                }`}
              >
                {course.category}
              </div>

              {/* Fun category icon */}
              {/* <div className="absolute top-3 left-3">
                {CategoryIcons[course.category as keyof typeof CategoryIcons] &&
                  CategoryIcons[
                    course.category as keyof typeof CategoryIcons
                  ]()}
              </div> */}

              {/* Card content */}
              <div className="p-6 pt-10 pb-0 flex-grow">
                <h3 className="text-lg font-bold mb-2 pr-20">{course.title}</h3>

                {/* Subject badges */}
                {/* {course.subjects && (
                  <div className="flex flex-wrap mb-3">
                    {course.subjects.map((subject, i) => (
                      <span
                        key={i}
                        className="flex items-center text-xs bg-white rounded-full px-2 py-1 mr-2 mb-1 text-gray-700 border border-gray-200"
                      >
                        {SubjectIcons[subject as keyof typeof SubjectIcons]}
                        {subject}
                      </span>
                    ))}
                  </div>
                )} */}

                {/* Course details */}
                {/* <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-700">
                    <svg
                      className="w-4 h-4 mr-2 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="font-medium">{course.rate}</span>
                  </div>

                  {course.duration && (
                    <div className="flex items-center text-gray-700">
                      <svg
                        className="w-4 h-4 mr-2 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{course.duration}</span>
                    </div>
                  )}

                  {course.sessions && (
                    <div className="flex items-center text-gray-700">
                      <svg
                        className="w-4 h-4 mr-2 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                        />
                      </svg>
                      <span>{course.sessions}</span>
                    </div>
                  )}
                </div> */}
              </div>

              {/* Price and action button */}
              <div className="p-6 ">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500">Course Fee</span>
                    <span className="text-2xl font-bold">{course.fee}</span>
                    {course.discount && (
                      <span className="text-xs text-green-600 font-medium">
                        {course.discount}
                      </span>
                    )}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-full text-white font-medium shadow-md ${
                      categoryColors[
                        course.category as keyof typeof categoryColors
                      ].button
                    }`}
                  >
                    {course.action}
                  </motion.button>
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
          ))}
        </div>

        {/* Browse all button with fun animation */}
        {/* Call to action */}
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

        {/* Fun bottom decorations */}
        <div className="flex justify-center mt-16 opacity-20">
          <motion.div
            animate={{
              rotate: [0, 360],
              y: [0, -5, 0],
            }}
            transition={{
              rotate: {
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              },
              y: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
            className="w-24 h-24 rounded-full border-4 border-dashed border-purple-500"
          />
          <motion.div
            animate={{
              rotate: [360, 0],
              y: [0, 5, 0],
            }}
            transition={{
              rotate: {
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              },
              y: {
                duration: 2.5,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
            className="w-16 h-16 -ml-8 rounded-full border-4 border-dashed border-teal-500"
          />
          <motion.div
            animate={{
              rotate: [0, 360],
              y: [0, -3, 0],
            }}
            transition={{
              rotate: {
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              },
              y: {
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
            className="w-12 h-12 -ml-6 rounded-full border-4 border-dashed border-yellow-500"
          />
        </div>
      </div>
    </div>
  );
};

export default MiniCourseTablet;
