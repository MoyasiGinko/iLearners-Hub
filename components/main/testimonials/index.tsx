"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

const Testimonials: React.FC = () => {
  return (
    <div className="bg-transparent py-20 rounded-3xl">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left side with images - exact original structure */}
          <div className="w-full lg:pl-16 lg:w-1/2 relative">
            <div className="relative items-center justify-center max-w-full mx-auto">
              {/* Colorful background rectangle */}
              <div className="absolute left-0 top-[5%] w-12 bg-yellow-400 rounded-l-lg h-[90%] z-0"></div>

              {/* Main image container */}
              <div className="ml-2 sm:ml-6 relative max-w-[540px] h-auto rounded-2xl overflow-hidden">
                <div className="relative aspect-square max-w-[500px] w-[90%]">
                  <Image
                    src="/images/students-learning.png"
                    alt="Students learning together"
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover rounded-lg"
                    priority
                  />
                </div>
                {/* Trusted by badge */}
                <div className="absolute right-0 bottom-4 bg-white rounded-full shadow-lg p-3 sm:p-4 flex items-center max-w-[180px] sm:max-w-none lg:bottom-6 border-2 border-green-300">
                  <div className="mr-2 sm:mr-3 flex-shrink-0">
                    <Image
                      src="/images/trust-icon.png"
                      alt="Trust icon"
                      width={50}
                      height={50}
                      className="w-8 h-8 sm:w-12 sm:h-12"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 text-xs sm:text-base">
                      Trusted by
                    </p>
                    <p className="font-bold text-purple-600 text-sm sm:text-base">
                      8,800 students
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side with text and features */}
          <div className="w-full lg:w-1/2">
            <div className="text-purple-600 font-medium mb-2">
              About iLearners Hub
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-indigo-700 leading-tight mb-6">
              Join Our Fun Learning Adventure!
            </h2>

            <p className="text-gray-600 mb-8 text-lg rounded-lg bg-white p-4 border-2 border-dashed border-pink-300">
              Come explore our colorful world of learning where every day brings
              new discoveries! Learn, play, and grow with friends in a safe and
              exciting environment.
            </p>

            <div className="space-y-4 mb-8">
              {/* Feature 1 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3 bg-yellow-200 rounded-full p-1">
                  <Check className="h-5 w-5 text-orange-500" />
                </div>
                <span className="text-gray-700 font-medium">
                  Explore fun activities with thousands of cool lessons
                </span>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3 bg-green-200 rounded-full p-1">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <span className="text-gray-700 font-medium">
                  Discover exciting new topics in your favorite subjects
                </span>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3 bg-pink-200 rounded-full p-1">
                  <Check className="h-5 w-5 text-pink-500" />
                </div>
                <span className="text-gray-700 font-medium">
                  Learn with friendly teachers who make learning fun
                </span>
              </div>
            </div>

            <Link href="/courses">
              <span className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-bold px-8 py-3 rounded-full uppercase tracking-wide transition-colors duration-300 shadow-md">
                Start Your Adventure!
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
