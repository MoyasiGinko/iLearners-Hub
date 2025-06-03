"use client";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { courses, Course, courseCategories } from "./courseData";
import { motion } from "framer-motion";

const CourseDetailsPage = () => {
  const [course, setCourse] = useState<Course | undefined>(undefined);
  const [similarCourses, setSimilarCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Extract course ID from the URL path
    const pathParts = pathname?.split("/") || [];
    const idFromPath = pathParts[pathParts.length - 1];

    if (idFromPath) {
      const courseId = parseInt(idFromPath);
      const foundCourse = courses.find((c) => c.id === courseId);
      setCourse(foundCourse);

      // Find similar courses (same category, excluding current course)
      if (foundCourse) {
        const relatedCourses = courses.filter(
          (c) => c.category === foundCourse.category && c.id !== foundCourse.id
        );
        setSimilarCourses(relatedCourses);
      }
    }

    setLoading(false);
  }, [pathname]);

  if (loading) {
    return (
      <div className="min-h-screen bg-transparent py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-bounce">
            <span className="text-4xl">🎓</span>
          </div>
          <h2 className="text-3xl font-bold text-indigo-600 mb-6 mt-4">
            Loading Your Adventure...
          </h2>
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-transparent py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="text-7xl mb-4">😕</div>
          <h2 className="text-3xl font-bold text-indigo-600 mb-6">
            Oops! Course Not Found
          </h2>
          <p className="text-lg text-indigo-500 mb-8">
            Sorry, we couldn't find the learning adventure you're looking for.
          </p>{" "}
          <button
            onClick={() => router.push("/courses/all-courses")}
            className="bg-yellow-400 hover:bg-yellow-500 text-indigo-700 font-medium py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-md"
          >
            Explore Other Courses
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-transparent py-10 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8">
          {" "}
          <button
            onClick={() => router.push("/courses/all-courses")}
            className="flex items-center cursor-pointer text-indigo-600 hover:text-indigo-800 transition-colors font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to All Courses
          </button>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-indigo-100">
          {/* Course Header */}
          <div className="relative h-64 md:h-80 bg-gray-200">
            <img
              src="/images/courses/cover.jpg"
              alt={course.short_title}
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-indigo-600/80 to-transparent p-6">
              <div className="flex items-center space-x-2 mb-2">
                <span className="bg-yellow-400 text-indigo-700 px-4 py-1 rounded-full text-sm font-bold">
                  {course.category}
                </span>
                <span className="text-2xl">✨</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                {course.long_title}
              </h1>
            </div>
          </div>

          {/* Course Content */}
          <div className="p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Course Details */}
              <div className="md:col-span-2 space-y-8">
                <div className="bg-blue-50 p-6 rounded-2xl border-2 border-blue-100">
                  <h2 className="text-2xl font-bold text-indigo-700 mb-4 flex items-center">
                    <span className="mr-2">🚀</span> Course Overview
                  </h2>
                  <p className="text-indigo-600 text-lg">{course.overview}</p>
                </div>

                {course.subjects && (
                  <div className="bg-green-50 p-6 rounded-2xl border-2 border-green-100">
                    <h3 className="text-xl font-bold text-indigo-700 mb-4 flex items-center">
                      <span className="mr-2">📚</span> Topics We'll Explore
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {course.subjects.map((subject, index) => (
                        <span
                          key={index}
                          className="bg-white text-indigo-600 px-4 py-2 rounded-full font-medium border-2 border-green-200"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {course.includes && (
                  <div className="bg-purple-50 p-6 rounded-2xl border-2 border-purple-100">
                    <h3 className="text-xl font-bold text-indigo-700 mb-4 flex items-center">
                      <span className="mr-2">🎁</span> What's Included
                    </h3>
                    <ul className="space-y-3">
                      {course.includes.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-2 mt-1">✓</span>
                          <span className="text-indigo-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {(course.schedule || course.flexibility) && (
                  <div className="bg-yellow-50 p-6 rounded-2xl border-2 border-yellow-100">
                    <h3 className="text-xl font-bold text-indigo-700 mb-4 flex items-center">
                      <span className="mr-2">⏰</span> When We Meet
                    </h3>
                    {course.schedule && (
                      <p className="text-indigo-600 mb-3 flex items-center">
                        <span className="font-bold mr-2">Schedule:</span>
                        {course.schedule}
                      </p>
                    )}
                    {course.flexibility && (
                      <p className="text-indigo-600 flex items-center">
                        <span className="font-bold mr-2">Flexibility:</span>
                        {course.flexibility}
                      </p>
                    )}
                  </div>
                )}

                <div className="bg-blue-50 p-6 rounded-2xl border-2 border-blue-100">
                  <h2 className="text-2xl font-bold text-indigo-700 mb-4 flex items-center">
                    <span className="mr-2">👩‍🏫</span> Perfect For
                  </h2>
                  <p className="text-indigo-600 text-lg">{course.perfectFor}</p>
                </div>
              </div>

              {/* Pricing Card */}
              <div className="rounded-3xl bg-gradient-to-br from-indigo-50 to-pink-50 border-4 border-indigo-100 p-6 h-fit shadow-lg">
                <h3 className="text-2xl font-bold text-indigo-700 mb-6 text-center">
                  Join This Adventure!
                </h3>
                <div className="space-y-4 mb-8">
                  {/* <div className="flex justify-between items-center bg-white p-3 rounded-xl">
                    <span className="text-indigo-600 font-medium">Rate:</span>
                    <span className="font-bold text-indigo-700">
                      {course.rate}
                    </span>
                  </div> */}

                  {course.duration && (
                    <div className="flex justify-between items-center bg-white p-3 rounded-xl">
                      <span className="text-indigo-600 font-medium">
                        Duration:
                      </span>
                      <span className="font-bold text-indigo-700">
                        {course.duration}
                      </span>
                    </div>
                  )}

                  {course.sessions && (
                    <div className="flex justify-between items-start bg-white p-3 rounded-xl">
                      <span className="text-indigo-600 font-medium">
                        Sessions:
                      </span>
                      <span className="font-bold flex-wrap text-right text-indigo-700">
                        {course.sessions}
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between items-center bg-indigo-100 p-4 rounded-xl">
                    <span className="text-indigo-700 font-medium">Fee:</span>
                    <span className="font-bold text-2xl text-indigo-700">
                      {course.rate}
                    </span>
                  </div>

                  {course.discount && (
                    <div className="bg-yellow-100 text-indigo-700 p-4 rounded-xl text-center">
                      <span className="font-bold">Special Offer:</span>{" "}
                      {course.discount}
                    </div>
                  )}
                </div>

                <div className="pt-4">
                  <Link
                    href="/register"
                    className="inline-block  hover:shadow-xl border-b-4 active:border-b-0 active:border-t-0 active:shadow-inner
                    active:translate-y-1  duration-200 focus:outline-none w-full bg-indigo-500 hover:bg-indigo-600 border-indigo-700 text-white text-center font-bold py-4 px-6 rounded-full transition-all transform  shadow-md text-lg"
                  >
                    {course.action}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Courses Section */}
        {similarCourses.length > 0 && (
          <div className="mt-16">
            <div className="mb-10 text-center">
              <h2 className=" leading-tight bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-3xl font-bold text-transparent md:text-5xl drop-shadow-lg">
                More Fun Courses
              </h2>
              <p className="mx-auto max-w-3xl mt-2 text-lg text-indigo-700">
                Explore other exciting {course.category} courses
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {similarCourses.map((similarCourse, index) => (
                <motion.div
                  key={similarCourse.id}
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
                      src={similarCourse.Image}
                      alt={similarCourse.short_title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute top-0 right-0 bg-yellow-400 text-indigo-700 px-3 py-1 m-3 rounded-full text-sm font-bold">
                      {similarCourse.category}
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <p className="text-indigo-600">{similarCourse.rate}</p>
                    <h3 className="text-xl mb-4 leading-tight tracking-tight font-bold text-indigo-700">
                      {similarCourse.short_title}
                    </h3>
                    <div className="mt-auto flex  justify-between items-center">
                      <h3 className="inline-block text-left text-xl  text-indigo-600 font-bold rounded-full transition-all">
                        {similarCourse.fee}
                      </h3>
                      <Link
                        href={`/courses/${
                          courseCategories.find(
                            (cat) => cat.name === similarCourse.category
                          )?.slug || "all-courses"
                        }/${similarCourse.id}`}
                      >
                        <span className="inline-block text-lg bg-indigo-100 hover:bg-indigo-200 text-indigo-700 font-bold px-4 py-2 rounded-full transition-all">
                          Learn More
                        </span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* All Categories Section */}
        {similarCourses.length === 0 && (
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-indigo-700 mb-4">
              Discover Other Courses
            </h2>
            <p className="text-indigo-600 mb-8 text-lg">
              No other courses found in the {course.category} category right
              now. Let's explore different learning paths!
            </p>
            <Link href="/courses/all-courses">
              <span className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-md">
                See All Courses
              </span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default CourseDetailsPage;
