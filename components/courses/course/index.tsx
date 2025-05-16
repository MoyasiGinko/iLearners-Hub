"use client";
import React, { useState, useEffect } from "react";
import { courses, courseCategories } from "./courseData";
import Link from "next/link";
import { motion } from "framer-motion";

const CoursePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Courses");
  // Remove mousePosition state and tilt calculation as it's causing issues

  const filteredCourses =
    selectedCategory === "All Courses"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  return (
    <section className="bg-transparent pt-20 min-h-screen">
      <div className="container mx-auto px-4 relative">
        <div className="mb-16 text-center">
          <h2 className="mb-4 leading-tight bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-3xl font-bold text-transparent md:text-5xl drop-shadow-lg">
            Explore Our Fun Courses!
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-indigo-700">
            Pick your favorite subject and start an amazing learning adventure!
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
                <motion.li
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <button
                    className={`px-8 w-full inline-block py-3 rounded-full font-medium shadow-sm hover:shadow-md border-b-4
                      active:border-b-0 active:border-t-0   active:shadow-inner active:translate-y-1 transform transition-all duration-200 focus:outline-none ${
                        selectedCategory === "All Courses"
                          ? "bg-indigo-500 border-indigo-600 text-white shadow-sm"
                          : "bg-indigo-100 border-indigo-300 text-indigo-700 "
                      }`}
                    onClick={() => setSelectedCategory("All Courses")}
                  >
                    All Courses
                  </button>
                </motion.li>
                {courseCategories.map((category) => (
                  <motion.li
                    key={category}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <button
                      className={`px-8 w-full inline-block py-3 rounded-full font-medium shadow-sm hover:shadow-md border-b-4
                      active:border-b-0 active:border-t-0   active:shadow-inner active:translate-y-1 transform transition-all duration-200 focus:outline-none ${
                        selectedCategory === category
                          ? "bg-indigo-500 border-indigo-600 text-white shadow-sm"
                          : "bg-indigo-100 border-indigo-300 text-indigo-700 "
                      }`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Courses grid */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  className="rounded-2xl bg-white shadow-xl overflow-hidden transition-all border-4 border-indigo-100 flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.01,
                    boxShadow:
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                >
                  <div className="relative h-48 bg-gray-200">
                    <img
                      src={course.Image}
                      alt={course.title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute top-0 right-0 bg-yellow-400 text-indigo-700 px-3 py-1 m-3 rounded-full text-sm font-bold">
                      {course.category}
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <p className="text-indigo-600">{course.rate}</p>
                    <h3 className="text-xl mb-4 leading-tight tracking-tight font-bold text-indigo-700">
                      {course.title}
                    </h3>
                    <div className="mt-auto flex  justify-between items-center">
                      <h3 className="inline-block text-left text-xl  text-indigo-600 font-bold rounded-full transition-all">
                        {course.fee}
                      </h3>
                      <Link href={`/courses/${course.id}`}>
                        <span className="inline-block text-lg bg-indigo-100 hover:bg-indigo-200 text-indigo-700 font-bold px-4 py-2 rounded-full transition-all">
                          Learn More
                        </span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            {filteredCourses.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-10 bg-white rounded-3xl mt-10 shadow-lg"
              >
                <p className="text-xl text-indigo-600 font-medium">
                  Oops! No courses here yet. Try another category!
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursePage;
