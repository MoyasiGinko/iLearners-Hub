"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText =
    "Join thousands of happy learners on exciting adventures! Learn at your own pace with fun activities that make learning feel like playtime.";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50); // Speed of typing

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="relative min-h-[670px] pt-20 md:pt-30 overflow-hidden bg-transparent">
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

      <div className="container mx-auto px-6 py-12 flex flex-col lg:flex-row items-center">
        {/* Left side with images - kept as is */}
        <div className="relative w-full lg:w-1/2 mb-10 lg:mb-0 flex justify-center">
          <div className="relative z-10">
            {/* Main instructor with responsive sizing */}
            <div className="bg-orange-500 rounded-full p-1 sm:p-2 w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 relative animate-float">
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

            {/* Female student floating on the left side */}
            <div className="absolute -left-10 sm:-left-16 lg:-left-20 bottom-16 sm:bottom-20 bg-pink-400 rounded-full p-1 sm:p-2 w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 z-20 animate-orbit-left">
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

            {/* Male student floating on the bottom right */}
            <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 lg:-bottom-10 lg:-right-10 bg-purple-300 rounded-full p-1 sm:p-2 w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 z-20 animate-orbit-right">
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
              {/* Blue ring around the main instructor - scaled for responsiveness */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-500 -m-4 sm:-m-6 md:-m-7 lg:-m-8 -z-1"></div>

              {/* Decorative dots positioned precisely over the blue ring - scaled for responsiveness */}
              {/* Top dots */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6 sm:-translate-y-8 lg:-translate-y-10 w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full -z-1"></div>

              {/* Right dots */}
              <div className="absolute top-1/2 right-0 transform translate-x-6 sm:translate-x-8 lg:translate-x-10 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-purple-500 rounded-full -z-1"></div>

              {/* Bottom dots */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-6 sm:translate-y-8 lg:translate-y-10 w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full -z-1"></div>

              {/* Left dots */}
              <div className="absolute top-1/2 left-0 transform -translate-x-6 sm:-translate-x-8 lg:-translate-x-10 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-purple-500 rounded-full -z-1"></div>
            </div>
          </div>
        </div>

        {/* Right side with text and buttons - modified for kid-friendly design */}
        <div className="w-full lg:w-1/2 lg:pl-12 space-y-6">
          <motion.h1
            className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-600 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.3)]">
              Learn, Play & Grow
            </span>
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)]">
              Everyday
            </span>{" "}
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.3)]">
              with
            </span>
            <span className="relative inline-block ml-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-orange-400 to-orange-600 drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.3)]">
                Awesome Teachers!
              </span>
            </span>
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-radial from-blue-300 to-blue-200 rounded-full opacity-60 blur-xl -z-10"></div>
            <div className="absolute top-12 -left-6 w-16 h-16 bg-gradient-radial from-orange-300 to-orange-200 rounded-full opacity-60 blur-xl -z-10"></div>
          </motion.h1>

          <motion.p
            className="text-lg text-gray-600 max-w-xl leading-relaxed rounded-xl bg-blue-50 p-4 border-2 border-dashed border-blue-200 min-h-[123px] overflow-y-auto"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          >
            {text}
            <motion.span
              className="inline-block w-1 h-5 bg-gray-500 ml-1"
              animate={{ opacity: [0, 1] }}
              transition={{ repeat: Infinity, duration: 0.7 }}
            />
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="/courses"
              className="w-full sm:w-auto relative bg-gradient-to-br from-orange-400 to-red-500 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-[0_8px_0_rgb(217,119,6)] hover:shadow-[0_4px_0px_rgb(217,119,6)] ease-in-out hover:translate-y-1 active:translate-y-2 active:shadow-none text-lg overflow-hidden"
            >
              <span className="relative z-10">Explore Courses</span>
              <span className="absolute inset-0 bg-gradient-to-tr from-orange-500/40 to-transparent rounded-full"></span>
            </a>
            <a
              href="/gallery"
              className="w-full sm:w-auto relative bg-gradient-to-br from-blue-400 to-indigo-500 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-[0_8px_0_rgb(37,99,235)] hover:shadow-[0_4px_0px_rgb(37,99,235)] ease-in-out hover:translate-y-1 active:translate-y-2 active:shadow-none text-lg overflow-hidden"
            >
              <span className="relative z-10">View Gallery</span>
              <span className="absolute inset-0 bg-gradient-to-tr from-blue-500/40 to-transparent rounded-full"></span>
            </a>
          </div>

          <div className="pt-4 flex items-center">
            <span className="text-yellow-500 text-2xl mr-2">⭐</span>
            <p className="text-indigo-500 font-semibold text-lg">
              Where Learning is Always an Adventure!
            </p>
            <span className="text-yellow-500 text-2xl ml-2">⭐</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
