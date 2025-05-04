"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section className="relative h-[50vh] flex items-center bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400 text-white rounded-b-3xl overflow-hidden">
      <div className="container mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-indigo-900 drop-shadow-md">
            Welcome to iLearnersHub!
          </h1>
          <p className="text-lg mb-6 text-indigo-800 drop-shadow-sm">
            A magical place for curious minds to explore and grow! Join our
            colorful learning adventures with games, stories, and discoveries
            for little learners.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/courses">
              <span className="bg-yellow-400 text-indigo-900 px-6 py-3 rounded-full font-medium hover:bg-yellow-300 transition-all inline-block">
                Start Your Adventure
              </span>
            </Link>
            <Link href="/news-offers">
              <span className="bg-teal-500 text-white px-6 py-3 rounded-full font-medium hover:bg-teal-400 transition-all inline-block">
                Fun Events
              </span>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Playful decorative elements */}
      <div className="absolute right-10 bottom-10 w-40 h-40 md:w-64 md:h-64 z-0 hidden md:block">
        <Image
          src="/images/crayon.gif"
          alt="Colorful Building Blocks"
          width={240}
          height={240}
          className="object-contain"
        />
      </div>

      <motion.div
        className="absolute top-20 left-10 w-12 h-12 rounded-full bg-yellow-300 opacity-70"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />

      {/* Added stars for whimsy */}
      <motion.div
        className="absolute top-40 right-60 w-6 h-6 text-yellow-200"
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
      >
        ★
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-20 w-8 h-8 text-yellow-200"
        animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ repeat: Infinity, duration: 3.2 }}
      >
        ★
      </motion.div>
    </section>
  );
};

export default Hero;
