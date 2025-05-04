"use client";
import React, { useState } from "react";
import { courses, courseCategories } from "./courseData";
import Link from "next/link";

const CoursePage = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<string>("All Courses");

  const filteredCourses =
    selectedCategory === "All Courses"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  return (
    <section className="bg-gradient-to-b from-slate-50 to-slate-100 py-10">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 bg-gradient-to-r from-sky-500 to-sky-800 bg-clip-text text-3xl font-bold text-transparent md:text-5xl">
            Explore Our Courses
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-600">
            Choose from a variety of categories and find the perfect course for
            your needs.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar with categories */}
          <div className="lg:w-1/4">
            <div className="sticky top-24 rounded-xl bg-white p-4 shadow-lg">
              <h3 className="mb-4 text-lg font-bold text-slate-800">
                Categories
              </h3>
              <ul className="space-y-2">
                <li>
                  <button
                    className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                      selectedCategory === "All Courses"
                        ? "bg-sky-500 text-white"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                    onClick={() => setSelectedCategory("All Courses")}
                  >
                    All Courses
                  </button>
                </li>
                {courseCategories.map((category) => (
                  <li key={category}>
                    <button
                      className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                        selectedCategory === category
                          ? "bg-sky-500 text-white"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Courses grid */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="flex flex-col rounded-lg bg-white shadow-lg overflow-hidden transition-transform hover:scale-105 h-full"
                >
                  <div className="relative h-40 w-full overflow-hidden">
                    <img
                      src={course.Image}
                      alt={course.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col flex-grow p-4">
                    <h3 className="text-lg font-bold text-slate-800 line-clamp-2 h-14">
                      {course.title}
                    </h3>
                    <p className="text-slate-600 mt-2 mb-4 flex-grow line-clamp-2">
                      {course.rate}
                    </p>
                    <div className="mt-auto flex justify-between items-center gap-2">
                      <Link href={`/courses/${course.id}`} className="flex-1">
                        <span className="inline-block w-full text-center bg-blue-100 hover:bg-blue-200 text-blue-700 font-medium px-3 py-2 rounded-full transition-colors duration-200">
                          Learn More
                        </span>
                      </Link>
                      <Link href={`/register`} className="flex-1">
                        <span className="inline-block w-full text-center bg-blue-500 hover:bg-blue-600 text-gray-50 font-medium px-3 py-2 rounded-full transition-colors duration-200">
                          {course.action}
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {filteredCourses.length === 0 && (
              <p className="text-center text-slate-600 mt-10">
                No courses available in this category.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursePage;
