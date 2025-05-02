"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

const Testimonials: React.FC = () => {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left side with images - exact original structure */}
          <div className="w-full lg:pl-16 lg:w-1/2 relative">
            <div className="relative items-center justify-center max-w-full mx-auto">
              {/* Blue background rectangle */}
              <div className="absolute left-0 top-[5%] w-12 bg-blue-600 rounded-l-lg h-[90%] z-0"></div>

              {/* Main image container */}
              <div className="ml-2 sm:ml-6 relative max-w-[540px] h-auto rounded-lg overflow-hidden">
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
                <div className="absolute right-0 bottom-4 bg-white rounded-lg shadow-lg p-3 sm:p-4 flex items-center max-w-[180px] sm:max-w-none lg:bottom-6">
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
                    <p className="font-bold text-gray-900 text-sm sm:text-base">
                      8,800 customers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side with text and features */}
          <div className="w-full lg:w-1/2">
            <div className="text-blue-600 font-medium mb-2">
              About Zilom Company
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Welcome To The Online Learning Center
            </h2>

            <p className="text-gray-600 mb-8">
              There are many variations of passages of lorem ipsum available but
              the majority have suffered alteration in some form by injected
              humour or randomised words which don't look.
            </p>

            <div className="space-y-4 mb-8">
              {/* Feature 1 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3 bg-blue-100 rounded-full p-1">
                  <Check className="h-5 w-5 text-blue-600" />
                </div>
                <span className="text-gray-700">
                  Get unlimited access to 66000+ of our top courses
                </span>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3 bg-blue-100 rounded-full p-1">
                  <Check className="h-5 w-5 text-blue-600" />
                </div>
                <span className="text-gray-700">
                  Explore a variety of fresh educational topics
                </span>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3 bg-blue-100 rounded-full p-1">
                  <Check className="h-5 w-5 text-blue-600" />
                </div>
                <span className="text-gray-700">
                  Find the best qualified teacher for you
                </span>
              </div>
            </div>

            <Link href="/courses">
              <span className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg uppercase tracking-wide transition-colors duration-300">
                View All Courses
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
