"use client";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { courses, Course } from "./courseData";

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
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            Loading Course...
          </h2>
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            Course Not Found
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Sorry, the course you are looking for does not exist.
          </p>
          <button
            onClick={() => router.push("/courses")}
            className="bg-sky-500 hover:bg-sky-600 text-white font-medium py-2 px-6 rounded-lg transition-colors"
          >
            Return to Courses
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-gradient-to-b from-slate-50 to-slate-100 py-10 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <button
            onClick={() => router.push("/courses")}
            className="flex items-center text-sky-600 hover:text-sky-800 transition-colors"
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
            Back to Courses
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          {/* Course Header */}
          <div className="relative h-64 md:h-80 bg-gray-200">
            <img
              src={course.Image}
              alt={course.title}
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                {course.title}
              </h1>
              <div className="flex items-center mt-2">
                <span className="bg-sky-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {course.category}
                </span>
              </div>
            </div>
          </div>

          {/* Course Content */}
          <div className="p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Course Details */}
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-4">
                    Course Overview
                  </h2>
                  <p className="text-slate-600">
                    {course.title} is designed to help students excel in their
                    academic journey through focused instruction and
                    personalized attention.
                  </p>
                </div>

                {course.subjects && (
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-3">
                      Subjects Covered
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {course.subjects.map((subject, index) => (
                        <span
                          key={index}
                          className="bg-slate-100 text-slate-700 px-3 py-1 rounded-lg"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {course.includes && (
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-3">
                      What's Included
                    </h3>
                    <ul className="list-disc list-inside text-slate-600 space-y-2">
                      {course.includes.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {(course.schedule || course.flexibility) && (
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-3">
                      Schedule & Flexibility
                    </h3>
                    {course.schedule && (
                      <p className="text-slate-600 mb-2">
                        <span className="font-medium">Schedule:</span>{" "}
                        {course.schedule}
                      </p>
                    )}
                    {course.flexibility && (
                      <p className="text-slate-600">
                        <span className="font-medium">Flexibility:</span>{" "}
                        {course.flexibility}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Pricing Card */}
              <div className="rounded-xl bg-slate-50 border border-slate-200 p-6 h-fit">
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  Course Details
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Rate:</span>
                    <span className="font-semibold text-slate-800">
                      {course.rate}
                    </span>
                  </div>

                  {course.duration && (
                    <div className="flex justify-between">
                      <span className="text-slate-600">Duration:</span>
                      <span className="font-semibold text-slate-800">
                        {course.duration}
                      </span>
                    </div>
                  )}

                  {course.sessions && (
                    <div className="flex justify-between">
                      <span className="text-slate-600">Sessions:</span>
                      <span className="font-semibold text-slate-800">
                        {course.sessions}
                      </span>
                    </div>
                  )}

                  <div className="border-t border-slate-200 pt-3">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Fee:</span>
                      <span className="font-bold text-slate-800">
                        {course.fee}
                      </span>
                    </div>
                  </div>

                  {course.discount && (
                    <div className="bg-green-50 text-green-700 p-3 rounded-lg text-sm">
                      <span className="font-bold">Special Offer:</span>{" "}
                      {course.discount}
                    </div>
                  )}
                </div>

                <div className="pt-4">
                  <Link
                    href="/register"
                    className="block w-full bg-sky-500 hover:bg-sky-600 text-white text-center font-medium py-3 px-6 rounded-lg transition-colors"
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
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                More {course.category} Courses
              </h2>
              <p className="text-slate-600 mt-2">
                Explore other courses in the same category
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarCourses.map((similarCourse) => (
                <div
                  key={similarCourse.id}
                  className="rounded-lg bg-white shadow-lg overflow-hidden transition-transform hover:scale-105"
                >
                  <div className="relative h-40 bg-gray-200">
                    <img
                      src={similarCourse.Image}
                      alt={similarCourse.title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute top-0 right-0 bg-sky-500 text-white px-3 py-1 m-2 rounded-full text-xs font-medium">
                      {similarCourse.category}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-slate-800">
                      {similarCourse.title}
                    </h3>
                    <p className="text-slate-600 mt-2">{similarCourse.rate}</p>
                    <div className="mt-4 flex justify-between items-center">
                      <Link href={`/courses/${similarCourse.id}`}>
                        <span className="inline-block hover:bg-blue-200 text-blue-700 font-medium px-4 py-2 rounded-full transition-colors duration-200">
                          Learn More
                        </span>
                      </Link>
                      <Link href={`/courses/${similarCourse.id}/register`}>
                        <span className="inline-block bg-blue-100 hover:bg-blue-200 text-blue-700 font-medium px-4 py-2 rounded-full transition-colors duration-200">
                          {similarCourse.action}
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Categories Section */}
        {similarCourses.length === 0 && (
          <div className="mt-16 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
              Explore Other Categories
            </h2>
            <p className="text-slate-600 mb-8">
              No other courses found in the {course.category} category. Check
              out our other course categories.
            </p>
            <Link href="/courses">
              <span className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-medium py-2 px-6 rounded-lg transition-colors">
                Browse All Courses
              </span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default CourseDetailsPage;
