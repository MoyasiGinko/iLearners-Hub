"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-gray-800"
        >
          Start Your Learning Journey Today
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-full
                         font-medium hover:from-blue-600 hover:to-indigo-700 transition-all duration-300
                         border border-blue-400 shadow-lg hover:shadow-xl hover:shadow-indigo-500/20"
            >
              Explore Courses
            </motion.span>
          </Link>

          <Link href="/enrollment">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-gray-700 px-8 py-4 rounded-full
                         font-medium transition-all duration-300 mt-4 sm:mt-0
                         border border-gray-300 hover:border-blue-400 hover:text-blue-600"
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
