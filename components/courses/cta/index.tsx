"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-transparent relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Large circle outline */}
        <motion.div
          className="absolute -top-20 -left-20 w-72 h-72 border-2 border-blue-200 rounded-full opacity-30"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 0.3,
            rotate: 360,
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />

        {/* Animated line top right */}
        <svg
          className="absolute top-0 right-0 w-1/3 h-1/3 text-blue-100"
          viewBox="0 0 200 200"
        >
          <motion.path
            d="M 0,50 Q 50,0 100,50 T 200,50"
            stroke="currentColor"
            strokeWidth="2"
            fill="transparent"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        </svg>

        {/* Animated Book Being Drawn */}
        <svg
          className="absolute top-10 left-1/4 w-24 h-24 text-blue-300 opacity-50"
          viewBox="0 0 100 100"
        >
          <motion.path
            d="M20 20 L80 20 L80 80 L20 80 Z M20 20 L30 10 L90 10 L90 70 L80 80"
            stroke="currentColor"
            strokeWidth="2"
            fill="transparent"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
          <motion.line
            x1="30"
            y1="35"
            x2="70"
            y2="35"
            stroke="currentColor"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              delay: 1,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
          <motion.line
            x1="30"
            y1="45"
            x2="65"
            y2="45"
            stroke="currentColor"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              delay: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        </svg>

        {/* Animated Pencil Path */}
        <svg
          className="absolute top-1/3 right-1/4 w-32 h-32 text-yellow-400 opacity-50"
          viewBox="0 0 120 120"
        >
          <motion.path
            d="M20 100 L30 90 L90 30 L100 20 L110 30 L100 40 L40 100 Z"
            stroke="currentColor"
            strokeWidth="2"
            fill="transparent"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
          <motion.circle
            cx="105"
            cy="25"
            r="8"
            stroke="currentColor"
            strokeWidth="2"
            fill="transparent"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1,
              delay: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        </svg>

        {/* Learning ABC Letters Being Written */}
        <svg
          className="absolute bottom-1/3 left-10 w-40 h-20 text-green-400 opacity-50"
          viewBox="0 0 150 60"
        >
          <motion.path
            d="M10 50 L20 10 L30 50 M15 35 L25 35"
            stroke="currentColor"
            strokeWidth="3"
            fill="transparent"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M40 10 L40 50 M40 10 C50 10 55 15 55 25 C55 35 50 40 40 40 M40 30 C50 30 55 35 55 45 C55 55 50 50 40 50"
            stroke="currentColor"
            strokeWidth="3"
            fill="transparent"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              delay: 0.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M70 50 C70 30 80 10 100 10 C120 10 130 30 130 50"
            stroke="currentColor"
            strokeWidth="3"
            fill="transparent"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              delay: 1,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        </svg>

        {/* Animated Mathematical Symbols */}
        <svg
          className="absolute top-2/3 right-10 w-20 h-20 text-purple-400 opacity-50"
          viewBox="0 0 80 80"
        >
          <motion.path
            d="M20 40 L60 40 M40 20 L40 60"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        </svg>

        {/* Paper Airplane Path */}
        <svg
          className="absolute top-1/2 left-1/3 w-48 h-24 text-cyan-400 opacity-50"
          viewBox="0 0 200 100"
        >
          <motion.path
            d="M10 50 Q50 20 100 50 Q150 80 190 50"
            stroke="currentColor"
            strokeWidth="2"
            fill="transparent"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M10 50 L20 45 L25 50 L20 55 Z"
            stroke="currentColor"
            strokeWidth="1"
            fill="currentColor"
            initial={{ pathLength: 0, x: 0 }}
            animate={{
              pathLength: 1,
              x: [0, 180],
            }}
            transition={{
              pathLength: { duration: 1 },
              x: {
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              },
            }}
          />
        </svg>

        {/* Animated Stars */}
        <div className="absolute top-20 right-1/3">
          {[...Array(3)].map((_, i) => (
            <motion.svg
              key={i}
              className="absolute text-yellow-300 opacity-50"
              width="16"
              height="16"
              viewBox="0 0 20 20"
              style={{
                left: `${i * 30}px`,
                top: `${i * 15}px`,
              }}
            >
              <motion.path
                d="M10 2 L12 8 L18 8 L13.5 12 L15.5 18 L10 14 L4.5 18 L6.5 12 L2 8 L8 8 Z"
                stroke="currentColor"
                strokeWidth="1"
                fill="transparent"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 2,
                  delay: i * 0.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              />
            </motion.svg>
          ))}
        </div>

        {/* Animated Light Bulb (Learning/Ideas) */}
        <svg
          className="absolute bottom-20 right-1/3 w-16 h-20 text-orange-400 opacity-50"
          viewBox="0 0 60 80"
        >
          <motion.circle
            cx="30"
            cy="25"
            r="15"
            stroke="currentColor"
            strokeWidth="2"
            fill="transparent"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M20 45 L40 45 M22 50 L38 50 M24 55 L36 55"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1.5,
              delay: 1,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
          {/* Light rays */}
          <motion.path
            d="M30 5 L30 0 M45 25 L50 25 M15 25 L10 25 M42 12 L46 8 M18 12 L14 8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1,
              delay: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        </svg>

        {/* Animated dots pattern */}
        <div className="absolute bottom-10 left-10 grid grid-cols-5 gap-5">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-blue-300 rounded-full"
              initial={{ opacity: 0.1 }}
              animate={{
                opacity: [0.1, 0.5, 0.1],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Curved line bottom */}
        <svg
          className="absolute bottom-0 right-0 w-full h-24 text-blue-100"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,100 C300,0 600,200 1200,100 L1200,200 L0,200 Z"
            fill="currentColor"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.07 }}
            transition={{ duration: 2 }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-blue-800 drop-shadow-[0_5px_5px_rgba(59,130,246,0.3)]"
          style={{
            textShadow: "0 4px 6px rgba(59, 130, 246, 0.2)",
          }}
        >
          Start Your Journey Today at iLearner's Hub
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-sm"
        >
          Join our community of learners and educators. Expand your knowledge,
          enhance your skills, and explore new opportunities at iLearner's Hub -
          your gateway to a world of learning!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <Link href="/news-offers">
            <motion.span
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{
                scale: 0.95,
                y: 2,
                boxShadow: "0 0 0 rgba(59, 130, 246, 0.5)",
              }}
              className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-4 rounded-full
                       font-medium transition-all duration-300
                       border border-blue-400 shadow-[0_6px_0_rgb(37,99,235)] hover:shadow-[0_4px_0px_rgb(37,99,235)]
                       hover:translate-y-[2px] active:translate-y-[6px] active:shadow-none"
            >
              Explore Offers
            </motion.span>
          </Link>

          <Link href="/register">
            <motion.span
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{
                scale: 0.95,
                y: 2,
                boxShadow: "0 0 0 rgba(59, 130, 246, 0.5)",
              }}
              className="inline-block bg-white text-blue-700 px-8 py-4 rounded-full
                       font-medium transition-all duration-300 mt-4 sm:mt-0
                       border border-blue-300 shadow-[0_6px_0_rgb(191,219,254)] hover:shadow-[0_4px_0px_rgb(191,219,254)]
                       hover:translate-y-[2px] active:translate-y-[6px] active:shadow-none"
            >
              Enroll Now
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
