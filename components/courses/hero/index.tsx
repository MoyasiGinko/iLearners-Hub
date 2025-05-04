"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section className="relative h-[50vh] flex items-center bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-400 text-white rounded-b-3xl overflow-hidden">
      <div className="container mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-md">
            Fun Learning Adventures!
          </h1>
          <p className="text-lg mb-6 text-white drop-shadow-sm">
            Explore exciting courses made just for kids! Discover, learn, and
            grow with interactive lessons.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/courses">
              <span className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-full font-medium hover:bg-yellow-300 transition-all inline-block">
                Explore Courses
              </span>
            </Link>
            <Link href="/gallery">
              <span className="bg-white text-purple-700 px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all inline-block">
                View Gallery
              </span>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute right-10 bottom-10 w-40 h-40 md:w-64 md:h-64 z-0 hidden md:block">
        <Image
          src="/images/rocket.gif"
          alt="Rocket"
          width={240}
          height={240}
          className="object-contain"
        />
      </div>

      <motion.div
        className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-yellow-300 opacity-60"
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      />
      <motion.div
        className="absolute top-20 left-10 w-10 h-10 rounded-full bg-pink-300 opacity-60"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
    </section>
  );
};

export default Hero;
