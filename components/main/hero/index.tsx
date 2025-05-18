"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Separate component for floating SVG elements
const FloatingElements = () => {
  return (
    <div className="absolute container inset-0 mx-auto flex items-center justify-center">
      {/* Improved Rocket animation with smoother motion */}
      <motion.div
        className="absolute inset-0 top-40 left-0 w-20 h-20 z-0 hidden md:block"
        animate={{
          x: [0, 500, 0], // Simplified path
          y: [0, -80, 0], // Smooth arc
          rotate: [0, 45, 180, 360], // Smooth rotation
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut", // Smooth transitions
          times: [0, 0.5, 1], // Control timing
        }}
      >
        <img src="/images/rocket.gif" alt="Rocket" className="w-full h-full" />
      </motion.div>

      {/* Animated Earth SVG */}
      <motion.div
        className="absolute top-26 right-14 w-20 h-20 md:w-24 md:h-24 z-0 hidden md:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <img
          src="/images/planet/planet3.svg"
          alt="Rocket"
          className="w-full h-full"
        />
      </motion.div>

      {/* Animated Chemistry Flask SVG */}
      <motion.div
        className="absolute bottom-20 right-6 w-20 h-20 z-0 hidden md:block"
        animate={{
          y: [0, -10, 0],
          rotate: [-5, 5, -5],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M40,20 L40,50 L30,70 Q30,85 50,85 Q70,85 70,70 L60,50 L60,20 Z"
            fill="#DDD6FE"
            stroke="#8B5CF6"
            strokeWidth="2"
          />
          <rect x="35" y="10" width="30" height="10" fill="#8B5CF6" rx="2" />
          <path
            d="M35,65 Q50,55 65,65"
            fill="none"
            stroke="#8B5CF6"
            strokeWidth="2"
          />
          <circle cx="45" cy="72" r="3" fill="#A78BFA" />
          <circle cx="55" cy="68" r="2" fill="#A78BFA" />
          <circle cx="50" cy="75" r="2.5" fill="#A78BFA" />
        </svg>
      </motion.div>

      {/* Animated Math Symbols SVG */}
      <motion.div
        className="absolute top-60 left-16 w-16 h-16 z-0 hidden lg:block"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 10, 0],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src="/images/math-elements/5070.svg"
          alt="Math Symbols"
          className="w-full h-full"
        />
      </motion.div>

      {/* Animated Lightbulb SVG */}
      <motion.div
        className="absolute top-20 left-1/2 transform -translate-x-1/2 w-16 h-16 z-0 hidden lg:block"
        animate={{
          opacity: [0.7, 1, 0.7],
          y: [-5, 5, -5],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M50,10 Q25,10 25,40 Q25,60 40,70 L40,85 L60,85 L60,70 Q75,60 75,40 Q75,10 50,10"
            fill="#FDE68A"
            stroke="#F59E0B"
            strokeWidth="2"
          />
          <rect x="40" y="85" width="20" height="5" fill="#F59E0B" rx="1" />
          <path
            d="M35,40 L65,40 M35,50 L65,50 M35,60 L65,60"
            stroke="#F59E0B"
            strokeWidth="2"
            strokeDasharray="2,2"
          />
          <path
            d="M30,30 L70,30"
            stroke="#FBBF24"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* Animated Math SYmbol SVG */}
      <motion.div
        className="absolute bottom-20 left-[47%] transform -translate-x-1/2 w-16 h-16 z-0 hidden lg:block"
        animate={{
          y: [0, -5, 0],
          rotate: [-3, 5, -6],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src="/images/math-elements/geometry.svg"
          alt="Math Symbols"
          className="w-full h-full"
        />
      </motion.div>

      {/* DNA Helix SVG Animation */}
      <motion.div
        className="absolute bottom-10 left-10 w-26 h-32 z-0 hidden md:block"
        animate={{
          rotateY: 360,
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      >
        <img
          src="/images/math-elements/dna-helix.svg"
          alt="Math Symbols"
          className="w-full h-full"
        />
      </motion.div>

      {/* Atom SVG Animation */}
      <motion.div
        className="absolute bottom-16 right-16 w-20 h-20 z-0 hidden lg:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <ellipse
            cx="50"
            cy="50"
            rx="45"
            ry="20"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="2"
          />
          <ellipse
            cx="50"
            cy="50"
            rx="45"
            ry="20"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="2"
            transform="rotate(60 50 50)"
          />
          <ellipse
            cx="50"
            cy="50"
            rx="45"
            ry="20"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="2"
            transform="rotate(120 50 50)"
          />
          <circle cx="50" cy="50" r="8" fill="#0EA5E9" />

          <motion.circle
            cx="95"
            cy="50"
            r="4"
            fill="#7DD3FC"
            animate={{
              cx: [95, 5, 95],
              cy: [50, 50, 50],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />

          <motion.circle
            cx="72"
            cy="85"
            r="4"
            fill="#7DD3FC"
            animate={{
              cx: [72, 28, 72],
              cy: [85, 15, 85],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />

          <motion.circle
            cx="28"
            cy="85"
            r="4"
            fill="#7DD3FC"
            animate={{
              cx: [28, 72, 28],
              cy: [85, 15, 85],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </motion.div>
    </div>
  );
};

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
    <div className="relative min-h-[670px] pt-20 md:pt-30 pb-4 md:pb-20 overflow-hidden bg-transparent">
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

      <div className="container mt-10 mx-auto px-6 py-12 flex flex-col lg:flex-row items-center">
        <FloatingElements />

        {/* Left side with images - kept as is */}
        <div className="relative w-full lg:w-1/2 mb-10 lg:mb-0 flex justify-center">
          <div className="relative z-10">
            {/* Main instructor with responsive sizing */}
            <div className="bg-orange-500 rounded-full p-1 sm:p-2 w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 relative flex items-center justify-center overflow-hidden">
              <Image
                src="/images/middle.png"
                alt="Main instructor"
                width={320}
                height={320}
                className="object-cover rounded-full w-full h-full"
              />
            </div>

            {/* Female student floating on the left side */}
            <div className="absolute -left-10 sm:-left-16 lg:-left-20 bottom-16 sm:bottom-20 bg-pink-400 rounded-full p-1 sm:p-2 w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 z-20 animate-orbit-left">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/images/left.png"
                  alt="Left view"
                  width={160}
                  height={160}
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Male student floating on the bottom right */}
            <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 lg:-bottom-10 lg:-right-10 bg-purple-300 rounded-full p-1 sm:p-2 w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 z-20 animate-orbit-right">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/images/right.png"
                  alt="Male student"
                  width={160}
                  height={160}
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute inset-0 animate-spin-slow -z-1">
              {/* Blue ring around the main instructor - scaled for responsiveness */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-500 -m-4 sm:-m-6 md:-m-7 lg:-m-8 -z-1"></div>

              {/* Decorative dots positioned precisely over the blue ring - scaled for responsiveness */}
              {/* Top dots */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6 sm:-translate-y-8 lg:-translate-y-10 w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full -z-1">
                <img
                  src="/images/planet/planet1.svg"
                  alt="planet1"
                  className="absolute inset-0 w-full h-full animate-spin-slow"
                />
              </div>

              {/* Right dots */}
              <div className="absolute top-1/2 right-0 transform translate-x-6 sm:translate-x-8 lg:translate-x-10 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-purple-500 rounded-full -z-1">
                <img
                  src="/images/planet/planet2.svg"
                  alt="planet2"
                  className="absolute inset-0 w-full h-full animate-spin-slow"
                />
              </div>

              {/* Bottom dots */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-6 sm:translate-y-8 lg:translate-y-10 w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full -z-1">
                <img
                  src="/images/planet/planet3.svg"
                  alt="planet3"
                  className="absolute inset-0 w-full h-full animate-spin-slow"
                />
              </div>

              {/* Left dots */}
              <div className="absolute top-1/2 left-0 transform -translate-x-6 sm:-translate-x-8 lg:-translate-x-10 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-purple-500 rounded-full -z-1">
                <img
                  src="/images/planet/planet4.svg"
                  alt="planet4"
                  className="absolute inset-0 w-full h-full animate-spin-slow"
                />
              </div>
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
