"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section className="relative h-[50vh] flex items-center bg-gradient-to-r from-blue-400 via-green-300 to-yellow-300 text-white rounded-b-3xl overflow-hidden">
      <div className="container mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-indigo-900 drop-shadow-md">
            News, Events & Offers!
          </h1>
          <p className="text-lg mb-6 text-indigo-800 drop-shadow-sm">
            Stay updated with our latest activities, special events, and
            exciting offers designed especially for our young learners!
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/courses">
              <span className="bg-orange-400 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-300 transition-all inline-block">
                Explore Courses
              </span>
            </Link>
            <Link href="/courses">
              <span className="bg-purple-500 text-white px-6 py-3 rounded-full font-medium hover:bg-purple-400 transition-all inline-block">
                Special Offers
              </span>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute right-10 bottom-10 w-40 h-40 md:w-64 md:h-64 z-0 hidden md:block">
        <Image
          src="/images/calendar.gif"
          alt="Calendar"
          width={240}
          height={240}
          className="object-contain"
        />
      </div>

      {/* Animated decorative elements */}
      <motion.div
        className="absolute top-10 right-20 w-16 h-16"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
      >
        <Image src="/images/star.gif" alt="Star" width={64} height={64} />
      </motion.div>

      <motion.div
        className="absolute top-20 left-10 w-10 h-10 rounded-full bg-red-300 opacity-70"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />

      <motion.div
        className="absolute bottom-20 left-40 w-14 h-14"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        <Image src="/images/balloon.gif" alt="Balloon" width={56} height={56} />
      </motion.div>
    </section>
  );
};

export default Hero;
