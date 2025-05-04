"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive state based on window size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative flex items-center bg-gradient-to-r from-blue-400 via-green-300 to-yellow-300 text-white rounded-b-3xl overflow-hidden py-12 md:py-20 lg:py-24 min-h-[60vh] md:min-h-[50vh]">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl md:max-w-2xl lg:max-w-3xl"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-indigo-900 drop-shadow-md leading-tight">
            News, Events & Offers!
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-indigo-800 drop-shadow-sm max-w-md md:max-w-lg lg:max-w-xl">
            Stay updated with our latest activities, special events, and
            exciting offers designed especially for our young learners!
          </p>
          <div className="flex flex-wrap gap-3 md:gap-4">
            <Link href="/courses">
              <span className="bg-orange-400 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium hover:bg-orange-300 transition-all inline-block text-sm sm:text-base whitespace-nowrap">
                Explore Courses
              </span>
            </Link>
            <Link href="/offers">
              <span className="bg-purple-500 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium hover:bg-purple-400 transition-all inline-block text-sm sm:text-base whitespace-nowrap">
                Special Offers
              </span>
            </Link>
          </div>
        </motion.div>

        {/* Decorative elements with responsive sizing and positioning */}
        <div
          className={`absolute ${
            isMobile
              ? "inset-0 flex items-center justify-center w-full h-full z-0 opacity-30"
              : "right-0 top-1/2 transform -translate-y-1/2 md:right-8 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-64 lg:h-64 z-0"
          }`}
        >
          {isMobile ? (
            <div className="relative w-40 h-40">
              <Image
                src="/images/calendar.gif"
                alt="Calendar"
                fill
                className="object-contain"
                sizes="160px"
                priority
              />
            </div>
          ) : (
            <Image
              src="/images/calendar.gif"
              alt="Calendar"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, (max-width: 1024px) 160px, 256px"
              priority
            />
          )}
        </div>
      </div>

      <motion.div
        className="absolute -top-8 -right-8 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 rounded-full bg-yellow-300 opacity-60"
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      />
      <motion.div
        className="absolute top-16 left-4 sm:left-6 md:left-10 w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 rounded-full bg-pink-300 opacity-60"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
    </section>
  );
};

export default Hero;
