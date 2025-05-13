"use client";
import React from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import KidFriendlyTV from "./KidTV";

const Testimonials: React.FC = () => {
  return (
    <div className="bg-transparent py-20 rounded-3xl">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Right side with text and features */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-br from-indigo-600 via-blue-700 to-indigo-800 drop-shadow-[2px_2px_2px_rgba(79,70,229,0.3)]">
              Join Our Fun Learning Adventure!
            </h2>

            <motion.p
              className="text-gray-600 mb-8 text-lg rounded-lg bg-white p-4 border-2 border-dashed border-pink-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {[
                "Come explore our colorful world of learning where every day brings",
                "new discoveries! Learn, play, and grow with friends in a safe and",
                "exciting environment.",
              ].map((line, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 0.5 + i * 0.8,
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                  className="block"
                >
                  {line}
                </motion.span>
              ))}
            </motion.p>

            <div className="space-y-4 mb-8">
              {/* Features */}
              {[
                "Explore fun activities with thousands of cool lessons",
                "Discover exciting new topics in your favorite subjects",
                "Learn with friendly teachers who make learning fun",
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start transform hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="flex-shrink-0 mt-1 mr-3 bg-yellow-300 rounded-full p-1 shadow-md">
                    <Check className="h-5 w-5 text-indigo-700" />
                  </div>
                  <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-blue-800">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <Link href="/courses">
              <span
                className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold px-8 py-3 rounded-full uppercase tracking-wide
                shadow-[0_6px_0_rgb(79,70,229)]
                hover:shadow-[0_4px_0px_rgb(79,70,229)] hover:translate-y-[2px]
                active:shadow-none active:translate-y-[6px] active:bg-indigo-800
                transition-all duration-150 ease-in-out"
              >
                Start Your Adventure!
              </span>
            </Link>
          </div>

          {/* Left side with old-style TV */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <KidFriendlyTV />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
