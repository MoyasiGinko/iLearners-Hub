"use client";
import React from "react";
import Image from "next/image";
import { Search, ChevronDown } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[670px] pt-20 md:pt-40 overflow-hidden bg-white">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-orange-100">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="20" r="20" fill="currentColor" />
        </svg>
      </div>

      <div className="absolute bottom-20 left-10">
        <svg
          width="80"
          height="20"
          viewBox="0 0 80 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 10C20 -5 60 25 80 10" stroke="#3B82F6" strokeWidth="2" />
          <path d="M0 15C20 0 60 30 80 15" stroke="#3B82F6" strokeWidth="2" />
          <path d="M0 20C20 5 60 35 80 20" stroke="#3B82F6" strokeWidth="2" />
        </svg>
      </div>

      <div className="absolute top-20 right-40">
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="10" cy="10" r="2" fill="#8B5CF6" />
          <circle cx="10" cy="22" r="2" fill="#8B5CF6" />
          <circle cx="10" cy="34" r="2" fill="#8B5CF6" />
          <circle cx="10" cy="46" r="2" fill="#8B5CF6" />
          <circle cx="10" cy="58" r="2" fill="#8B5CF6" />
          <circle cx="22" cy="10" r="2" fill="#8B5CF6" />
          <circle cx="22" cy="22" r="2" fill="#8B5CF6" />
          <circle cx="22" cy="34" r="2" fill="#8B5CF6" />
          <circle cx="22" cy="46" r="2" fill="#8B5CF6" />
          <circle cx="22" cy="58" r="2" fill="#8B5CF6" />
          <circle cx="34" cy="10" r="2" fill="#8B5CF6" />
          <circle cx="34" cy="22" r="2" fill="#8B5CF6" />
          <circle cx="34" cy="34" r="2" fill="#8B5CF6" />
          <circle cx="34" cy="46" r="2" fill="#8B5CF6" />
          <circle cx="34" cy="58" r="2" fill="#8B5CF6" />
          <circle cx="46" cy="10" r="2" fill="#8B5CF6" />
          <circle cx="46" cy="22" r="2" fill="#8B5CF6" />
          <circle cx="46" cy="34" r="2" fill="#8B5CF6" />
          <circle cx="46" cy="46" r="2" fill="#8B5CF6" />
          <circle cx="46" cy="58" r="2" fill="#8B5CF6" />
          <circle cx="58" cy="10" r="2" fill="#8B5CF6" />
          <circle cx="58" cy="22" r="2" fill="#8B5CF6" />
          <circle cx="58" cy="34" r="2" fill="#8B5CF6" />
          <circle cx="58" cy="46" r="2" fill="#8B5CF6" />
          <circle cx="58" cy="58" r="2" fill="#8B5CF6" />
        </svg>
      </div>

      <div className="absolute top-32 right-16">
        <svg
          width="100"
          height="80"
          viewBox="0 0 100 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 40C30 10 70 70 90 40"
            stroke="#F97316"
            strokeWidth="2"
            strokeDasharray="5 5"
          />
        </svg>
      </div>

      <div className="absolute bottom-40 right-10">
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M30 10L10 50H50L30 10Z" stroke="#F97316" strokeWidth="2" />
        </svg>
      </div>

      <div className="container mx-auto px-6 py-12 flex flex-col lg:flex-row items-center">
        {/* Left side with images */}
        <div className="relative w-full lg:w-1/2 mb-10 lg:mb-0 flex justify-center">
          <div className="relative z-10">
            {/* Main instructor with bigger image and better fit */}
            <div className="bg-orange-500 rounded-full p-2 w-80 h-80 relative animate-float">
              <div className="absolute inset-0 flex items-end justify-center pb-0">
                <Image
                  src="/images/instructor.png"
                  alt="Main instructor"
                  width={320}
                  height={320}
                  className="object-contain rounded-full"
                />
              </div>
            </div>

            {/* Female student floating on the left side, positioned more up */}
            <div className="absolute -left-20 bottom-20 bg-pink-400 rounded-full p-2 w-40 h-40 z-20 animate-orbit-left">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/images/female-student.png"
                  alt="Female student"
                  width={160}
                  height={160}
                  className="object-contain rounded-full w-full h-full"
                />
              </div>
            </div>

            {/* Male student floating on the bottom right overlapping the instructor */}
            <div className="absolute -bottom-10 -right-10 bg-purple-300 rounded-full p-2 w-40 h-40 z-20 animate-orbit-right">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/images/male-student.png"
                  alt="Male student"
                  width={160}
                  height={160}
                  className="object-contain rounded-full w-full h-full"
                />
              </div>
            </div>
            <div className="absolute inset-0 animate-spin-slow -z-1">
              {/* Blue ring around the main instructor */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-500 -m-8 -z-1"></div>

              {/* Decorative dots positioned precisely over the blue ring */}
              {/* Top dots */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-10 w-4 h-4 bg-red-500 rounded-full -z-1"></div>

              {/* Right dots */}
              <div className="absolute top-1/2 right-0 transform translate-x-10 -translate-y-1/2 w-4 h-4 bg-purple-500 rounded-full -z-1"></div>

              {/* Bottom dots */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-10 w-4 h-4 bg-red-500 rounded-full -z-1"></div>

              {/* Left dots */}
              <div className="absolute top-1/2 left-0 transform -translate-x-10 -translate-y-1/2 w-4 h-4 bg-purple-500 rounded-full -z-1"></div>
            </div>
          </div>
        </div>

        {/* Right side with text and search */}
        <div className="w-full lg:w-1/2 lg:pl-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Learn Everyday & Any <br />
            New Skills Online with <br />
            <span className="relative">
              Top Instructors.
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-orange-500"></span>
            </span>
          </h1>

          <p className="text-gray-600 mb-8">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>

          <div className="relative mb-8">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-r-full transition-colors">
              Search Now
            </button>
          </div>

          <p className="text-orange-500 font-semibold">
            #1 Worldwide Online Learning & Skills Development Platform
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
