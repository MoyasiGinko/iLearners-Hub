"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface CTANewsProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

const CtaNews: React.FC<CTANewsProps> = () => {
  return (
    <div className="bg-gradient-to-b py-10 from-blue-50 to-blue-100 ">
      <div className="max-w-6xl  mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className=" bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl p-8 text-white text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Stay Updated!</h2>
            <p className="mb-6">
              Subscribe to our newsletter for the latest news, events, and
              special offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Your email address"
                className="px-5 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full sm:w-auto"
              />
              <button className="bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-bold px-8 py-3 rounded-full transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CtaNews;
