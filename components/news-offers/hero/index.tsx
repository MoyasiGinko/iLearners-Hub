"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";

const Hero: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Motion values for 3D rotation effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Transform motion values to rotation angles
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  // Animation controls for sequenced animations
  const controls = useAnimation();

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

  // Handle mouse movement for 3D effect
  useEffect(() => {
    if (isMobile) return; // Don't apply mouse effects on mobile

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate mouse position relative to center of container
      const newX = (e.clientX - centerX) / 5;
      const newY = (e.clientY - centerY) / 5;

      x.set(newX);
      y.set(newY);

      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Start animation sequence
    controls.start("visible");

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [controls, isMobile, x, y]);

  // Floating particles animation variants
  const particleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: 0.6,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
      },
    }),
    float: (i: number) => ({
      y: [0, -15, 0],
      x: [0, i % 2 === 0 ? 10 : -10, 0],
      transition: {
        duration: 3 + i,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }),
  };

  // Calendar image animation variants
  const calendarVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateZ: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateZ: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.3,
      },
    },
    hover: {
      scale: 1.05,
      rotateZ: 5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

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
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-400 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium hover:bg-orange-300 transition-all inline-block text-sm sm:text-base whitespace-nowrap"
              >
                Explore Courses
              </motion.span>
            </Link>
            <Link href="/offers">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-500 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium hover:bg-purple-400 transition-all inline-block text-sm sm:text-base whitespace-nowrap"
              >
                Special Offers
              </motion.span>
            </Link>
          </div>
        </motion.div>

        {/* Enhanced 3D Calendar Animation */}
        <div
          ref={containerRef}
          className={`absolute ${
            isMobile
              ? "inset-0 flex items-center justify-center w-full h-full z-0 opacity-80"
              : "right-0 top-1/2 transform -translate-y-1/2 md:right-8 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-64 lg:h-64 z-0"
          }`}
        >
          <motion.div
            style={isMobile ? {} : { rotateX, rotateY, z: 100 }}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={calendarVariants}
            className="relative w-full h-full flex items-center justify-center perspective-1000"
          >
            {/* 3D shadow effect */}
            <motion.div
              className="absolute inset-0 bg-indigo-900 rounded-lg opacity-20 blur-md"
              style={{
                rotateX,
                rotateY,
                translateZ: "-20px",
                translateX: "10px",
                translateY: "10px",
              }}
            />

            {/* Main Calendar Image with 3D transformation */}
            <div className="relative w-full h-full transform-style-preserve-3d">
              <motion.div
                className="w-full h-full"
                animate={{
                  rotateZ: [0, 2, 0, -2, 0],
                  transition: { repeat: Infinity, duration: 5 },
                }}
              >
                <Image
                  src="/images/calendar.gif"
                  alt="Calendar"
                  fill
                  className="object-contain drop-shadow-xl"
                  sizes={
                    isMobile
                      ? "160px"
                      : "(max-width: 640px) 96px, (max-width: 768px) 128px, (max-width: 1024px) 160px, 256px"
                  }
                  priority
                />
              </motion.div>
            </div>

            {/* Orbiting elements */}
            <AnimatePresence>
              {!isMobile && (
                <>
                  <motion.div
                    className="absolute top-0 right-0 w-6 h-6 rounded-full bg-yellow-300"
                    animate={{
                      rotate: [0, 360],
                      x: [0, 15, 0, -15, 0],
                      y: [0, 15, 30, 15, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 8,
                      ease: "linear",
                    }}
                  />
                  <motion.div
                    className="absolute bottom-8 left-8 w-4 h-4 rounded-full bg-pink-400"
                    animate={{
                      rotate: [360, 0],
                      x: [0, -20, 0, 20, 0],
                      y: [0, -10, -20, -10, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 6,
                      ease: "linear",
                    }}
                  />
                </>
              )}
            </AnimatePresence>

            {/* Glowing pulses */}
            <motion.div
              className="absolute inset-0 bg-blue-400 rounded-full opacity-0"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0, 0.2, 0],
              }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>

      {/* Enhanced floating particles */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={particleVariants}
          initial="hidden"
          animate={["visible", "float"]}
          className={`absolute rounded-full ${
            i % 3 === 0
              ? "bg-yellow-300 w-8 h-8 md:w-12 md:h-12"
              : i % 3 === 1
              ? "bg-pink-300 w-6 h-6 md:w-8 md:h-8"
              : "bg-blue-300 w-4 h-4 md:w-6 md:h-6"
          }`}
          style={{
            top: `${15 + ((i * 15) % 60)}%`,
            left: `${10 + ((i * 16) % 70)}%`,
            filter: "blur(1px)",
          }}
        />
      ))}

      {/* Light effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-5 pointer-events-none" />
    </section>
  );
};

export default Hero;
