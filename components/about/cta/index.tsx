"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const AboutCTA: React.FC = () => {
  // Using a limited palette of blue and white with shades
  return (
    <section className="py-20 bg-transparent relative overflow-hidden">
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
          Start Your Learning Journey Today
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-sm"
        >
          Discover our wide range of courses designed to help you acquire new
          skills, advance your career, and achieve your educational goals.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <Link href="/courses">
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
              Explore Courses
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

export default AboutCTA;
