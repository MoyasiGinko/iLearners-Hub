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
    <div className="bg-gradient-to-b py-10 from-blue-50 to-blue-100 ">
      <div className="max-w-6xl  mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className=" bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl p-8 text-white text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Join Us Now</h2>
            <p className="mb-6">
              Join iLearnersHub and unlock exciting learning opportunities!
              Register now and start your journey with us!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CustomButton
                text="Book a Lesson Now"
                href="/register"
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 border-yellow-600 hover:bg-opacity-90"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CtaNews;
