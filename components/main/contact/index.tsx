"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

// Separate component for floating SVG elements
const FloatingElements = () => {
  return (
    <div className="absolute container inset-0 mx-auto flex items-center justify-center">
      {/* Improved Rocket animation with smoother motion */}
      <motion.div
        className="absolute inset-0 top-40 left-0 w-20 h-20 z-0 hidden md:block"
        animate={{
          x: [0, 500, 0], // Simplified path
          y: [0, -150, 0], // Smooth arc
          rotate: [0, 45, 180, 360], // Smooth rotation
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut", // Smooth transitions
          times: [0, 0.5, 1], // Control timing
        }}
      >
        <img src="/images/rocket.gif" alt="Rocket" className="w-full h-full" />
      </motion.div>

      {/* Animated Earth SVG */}
      <motion.div
        className="absolute top-16 right-14 w-20 h-20 md:w-24 md:h-24 z-0 hidden md:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <img
          src="/images/planet/planet1.svg"
          alt="Rocket"
          className="w-full h-full"
        />
      </motion.div>

      {/* Animated Chemistry Flask SVG */}
      <motion.div
        className="absolute bottom-20 right-6 w-20 h-20 z-0 hidden md:block"
        animate={{
          y: [0, -10, 0],
          rotate: [-5, 5, -5],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src="/images/study-materials/color-pencils.svg"
          alt="Rocket"
          className="w-full h-full"
        />
      </motion.div>

      {/* Animated Math Symbols SVG */}
      <motion.div
        className="absolute top-60 left-16 w-16 h-16 z-0 hidden lg:block"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 10, 0],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src="/images/study-materials/scissor.svg"
          alt="Math Symbols"
          className="w-full h-full"
        />
      </motion.div>

      {/* Animated Lightbulb SVG */}
      <motion.div
        className="absolute top-20 left-1/2 transform -translate-x-1/2 w-16 h-16 z-0 hidden lg:block"
        animate={{
          opacity: [0.7, 1, 0.7],
          y: [-5, 5, -5],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src="/images/study-materials/marker.svg"
          alt="Math Symbols"
          className="w-full h-full"
        />
      </motion.div>

      {/* Animated Math SYmbol SVG */}
      <motion.div
        className="absolute bottom-20 left-[47%] transform -translate-x-1/2 w-16 h-16 z-0 hidden lg:block"
        animate={{
          y: [0, -5, 0],
          rotate: [-3, 5, -6],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src="/images/math-elements/pie.svg"
          alt="Math Symbols"
          className="w-full h-full"
        />
      </motion.div>

      {/* DNA Helix SVG Animation */}
      <motion.div
        className="absolute bottom-10 left-10 w-26 h-32 z-0 hidden md:block"
        animate={{
          rotateY: 360,
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      >
        <img
          src="/images/math-elements/root.svg"
          alt="Math Symbols"
          className="w-full h-full"
        />
      </motion.div>

      {/* Atom SVG Animation */}
      <motion.div
        className="absolute bottom-16 right-16 w-20 h-20 z-0 hidden lg:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <ellipse
            cx="50"
            cy="50"
            rx="45"
            ry="20"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="2"
          />
          <ellipse
            cx="50"
            cy="50"
            rx="45"
            ry="20"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="2"
            transform="rotate(60 50 50)"
          />
          <ellipse
            cx="50"
            cy="50"
            rx="45"
            ry="20"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="2"
            transform="rotate(120 50 50)"
          />
          <circle cx="50" cy="50" r="8" fill="#0EA5E9" />

          <motion.circle
            cx="95"
            cy="50"
            r="4"
            fill="#7DD3FC"
            animate={{
              cx: [95, 5, 95],
              cy: [50, 50, 50],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />

          <motion.circle
            cx="72"
            cy="85"
            r="4"
            fill="#7DD3FC"
            animate={{
              cx: [72, 28, 72],
              cy: [85, 15, 85],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />

          <motion.circle
            cx="28"
            cy="85"
            r="4"
            fill="#7DD3FC"
            animate={{
              cx: [28, 72, 28],
              cy: [85, 15, 85],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </motion.div>
    </div>
  );
};

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const categories = [
    { name: "Business Management" },
    { name: "Arts and Design" },
    { name: "Computer Science" },
    { name: "Personal Development" },
    { name: "Business and Finance" },
    { name: "Video and Photography" },
  ];

  return (
    <div className="w-full bg-transparent py-20 px-4 overflow-hidden relative">
      <FloatingElements />
      <div className="w-full max-w-6xl bg-transparent mx-auto px-3 sm:px-4 md:px-6 relative z-10">
        {/* Background SVG */}
        <div className="bg-gradient-to-r from-gray-900 to-teal-600 rounded-xl overflow-hidden px-3 sm:px-6 lg:px-10 shadow-xl">
          <div className="flex flex-col md:flex-row">
            {/* Left Section */}
            <div className="pt-6 px-4 sm:pt-6 sm:px-6 md:p-8 min-h-[250px] sm:min-h-[300px] md:min-h-[440px] md:w-1/2 flex items-center justify-center">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4">
                  Sign up for a free trial lesson by zoom
                </h2>
                <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">
                  Quisque commodo, magna nec accu mani euismod tellus mi ornare
                  enim, quis congue elit.
                </p>
                <div className="flex space-x-2">
                  {["🎨", "🔍", "🌟", "🧩", "🎯"].map((emoji, i) => (
                    <span
                      key={i}
                      className="text-xl sm:text-2xl animate-bounce"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      {emoji}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Section - Form */}
            <div className="pb-6 px-4 sm:pb-6 sm:px-6 md:p-8 md:w-1/2 flex items-center justify-center">
              <div className="w-full bg-gradient-to-r from-gray-800 to-teal-500 p-3 sm:p-4 md:p-6 rounded-3xl  shadow-[0_8px_16px_rgba(0,0,0,0.3)] transform hover:translate-y-[-2px] transition-all duration-300">
                <div className="mb-3 sm:mb-4">
                  <label className="block text-white text-sm sm:text-base font-medium mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="What should we call you?"
                    className="w-full p-2 sm:p-3 text-sm sm:text-base rounded-xl bg-gray-950/80 border-2 border-teal-400/5 text-white placeholder:text-gray-400 focus:border-teal-300 focus:outline-none shadow-inner"
                  />
                </div>

                <div className="mb-3 sm:mb-4">
                  <label className="block text-white text-sm sm:text-base font-medium mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Where can we reach you?"
                    className="w-full p-2 sm:p-3 text-sm sm:text-base rounded-xl bg-gray-950/80 border-2 border-teal-400/5 text-white placeholder:text-gray-400 focus:border-teal-300 focus:outline-none shadow-inner"
                  />
                </div>

                <div className="mb-4 sm:mb-5">
                  <label className="block text-white text-sm sm:text-base font-medium mb-1">
                    Pick Your Favorite Subject
                  </label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full p-2 sm:p-3 text-sm sm:text-base rounded-xl bg-gray-950/80 border-2 border-teal-400/5 text-white focus:border-teal-300 focus:outline-none appearance-none shadow-inner"
                  >
                    <option value="" disabled>
                      Choose something fun to learn!
                    </option>
                    {categories.map((category, index) => (
                      <option
                        key={index}
                        value={category.name.toLowerCase().replace(/\s+/g, "-")}
                      >
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={handleSubmit}
                  className="relative bg-gradient-to-r from-pink-500 to-orange-400 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full shadow-[0_6px_0_rgb(194,24,91)] active:shadow-[0_0px_0px_rgb(194,24,91)] active:translate-y-[6px] transition-all duration-150 text-xs sm:text-sm md:text-base flex items-center justify-center w-full"
                >
                  Let's Start Learning!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
