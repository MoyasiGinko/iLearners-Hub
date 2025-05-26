"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import CustomButton from "@/components/common/CustomButton";

interface CTANewsProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

const CtaNews: React.FC<CTANewsProps> = () => {
  return (
    <div className="bg-transparent py-10 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl px-2 sm:px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 text-white text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">
              Join Us Now
            </h2>
            <p className="text-sm sm:text-md md:text-lg lg:text-xl mb-4 sm:mb-6 px-2 sm:px-4">
              Join iLearnersHub and unlock exciting learning opportunities!
              Register now and start your journey with us!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <CustomButton
                text="Book a Lesson Now"
                href="/register"
                className="text-sm sm:text-md md:text-lg lg:text-xl bg-gradient-to-r from-yellow-400 to-yellow-500 border-yellow-600 hover:bg-opacity-90"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CtaNews;
