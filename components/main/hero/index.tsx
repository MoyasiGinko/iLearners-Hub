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
        <div className="relative w-full lg:w-1/2 mb-10 lg:mb-0">
          <div className="relative z-10">
            <div className="bg-orange-500 rounded-full p-8 w-64 h-64 mx-auto relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/images/instructor.png"
                  alt="Main instructor"
                  width={250}
                  height={250}
                  className="object-cover"
                />
              </div>
            </div>

            <div className="absolute -bottom-10 -left-10 bg-pink-400 rounded-full p-4 w-32 h-32">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/images/student-female.png"
                  alt="Female student"
                  width={120}
                  height={120}
                  className="object-cover"
                />
              </div>
            </div>

            <div className="absolute -bottom-8 -right-8 bg-purple-300 rounded-full p-4 w-36 h-36">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/images/student-male.png"
                  alt="Male student"
                  width={130}
                  height={130}
                  className="object-cover"
                />
              </div>
            </div>

            <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-red-500 rounded-full"></div>
            <div className="absolute bottom-0 left-1/4 w-4 h-4 bg-orange-400 rounded-full"></div>
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
            <div className="flex">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Search size={20} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Find Courses"
                  className="w-full pl-10 pr-3 py-3 rounded-l-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div className="relative">
                <select className="h-full appearance-none bg-white border-y border-r border-gray-200 py-3 pl-4 pr-10 rounded-none focus:outline-none focus:ring-2 focus:ring-orange-500">
                  <option>Categories</option>
                  <option>Programming</option>
                  <option>Design</option>
                  <option>Business</option>
                  <option>Marketing</option>
                </select>
                <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                  <ChevronDown size={20} className="text-gray-400" />
                </div>
              </div>

              <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-r-full transition-colors">
                Search Now
              </button>
            </div>
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
