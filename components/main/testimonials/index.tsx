"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import KidFriendlyTV from "./KidTV";

const Testimonials: React.FC = () => {
  const [hoveredBalloon, setHoveredBalloon] = useState<number | null>(null);
  const [starPosition, setStarPosition] = useState({ x: 50, y: 50 });
  const [rainbowVisible, setRainbowVisible] = useState(false);

  // Move star around randomly
  useEffect(() => {
    const interval = setInterval(() => {
      setStarPosition({
        x: Math.random() * 100,
        y: Math.random() * 100,
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-transparent pt-20 rounded-3xl relative overflow-hidden">
      {/* Floating Clouds SVG */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <svg
          viewBox="0 0 1000 600"
          className="w-full h-full opacity-20"
          aria-hidden="true"
        >
          <motion.path
            d="M100,200 Q150,100 200,200 Q250,300 300,200 Q350,100 400,200 C450,300 500,100 550,200 Q600,300 650,200 Q700,100 750,200 Q800,300 850,200 Q900,100 950,200"
            fill="none"
            stroke="#8B5CF6"
            strokeWidth="5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />

          <motion.ellipse
            cx="200"
            cy="150"
            rx="40"
            ry="30"
            fill="#E0F2FE"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />

          <motion.ellipse
            cx="700"
            cy="120"
            rx="50"
            ry="30"
            fill="#E0F2FE"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          />
        </svg>
      </div>

      {/* Interactive Star that follows cursor */}
      <motion.div
        className="absolute z-10 pointer-events-none"
        initial={{ scale: 0 }}
        animate={{
          scale: [0.8, 1, 0.8],
          x: `${starPosition.x}%`,
          y: `${starPosition.y}%`,
          rotate: [0, 15, -15, 0],
        }}
        transition={{
          scale: { repeat: Infinity, duration: 2 },
          rotate: { repeat: Infinity, duration: 3 },
        }}
      >
        <svg width="40" height="40" viewBox="0 0 50 50">
          <motion.path
            d="M25,2 L30,20 L48,20 L35,30 L40,48 L25,38 L10,48 L15,30 L2,20 L20,20 Z"
            fill="#FFD700"
            stroke="#FFA500"
            strokeWidth="1"
            initial={{ fill: "#FFD700" }}
            animate={{ fill: ["#FFD700", "#FFA500", "#FFD700"] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </svg>
      </motion.div>

      {/* Interactive Balloons */}
      <div className="absolute right-10 top-20 z-10">
        {[0, 1, 2].map((i) => (
          <motion.svg
            key={i}
            width="60"
            height="100"
            viewBox="0 0 60 100"
            className="absolute"
            style={{ right: `${i * 40}px`, top: `${i * 20}px` }}
            onMouseEnter={() => setHoveredBalloon(i)}
            onMouseLeave={() => setHoveredBalloon(null)}
          >
            <motion.path
              d="M30,20 Q10,20 10,40 Q10,70 30,80 Q50,70 50,40 Q50,20 30,20 Z"
              fill={i === 0 ? "#FF6B6B" : i === 1 ? "#48BB78" : "#4299E1"}
              initial={{ y: 0 }}
              animate={{
                y: hoveredBalloon === i ? -10 : [0, -5, 0],
                scale: hoveredBalloon === i ? 1.1 : 1,
              }}
              transition={{
                y:
                  hoveredBalloon === i
                    ? { duration: 0.3 }
                    : { repeat: Infinity, duration: 2 + i },
                scale: { duration: 0.3 },
              }}
            />
            <motion.path
              d="M30,80 L35,100"
              stroke="#888"
              strokeWidth="2"
              fill="none"
              initial={{ y: 0 }}
              animate={{
                y: hoveredBalloon === i ? -10 : [0, -5, 0],
              }}
              transition={{
                y:
                  hoveredBalloon === i
                    ? { duration: 0.3 }
                    : { repeat: Infinity, duration: 2 + i },
              }}
            />
          </motion.svg>
        ))}
      </div>

      {/* Rainbow that appears on hover */}
      <div
        className="absolute left-0 bottom-0 w-full h-40 pointer-events-none z-0"
        onMouseEnter={() => setRainbowVisible(true)}
        onMouseLeave={() => setRainbowVisible(false)}
      >
        <motion.svg
          viewBox="0 0 1000 200"
          className="w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: rainbowVisible ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.path
            d="M0,200 Q500,50 1000,200"
            fill="none"
            stroke="red"
            strokeWidth="10"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: rainbowVisible ? 1 : 0 }}
            transition={{ duration: 1 }}
          />
          <motion.path
            d="M0,200 Q500,70 1000,200"
            fill="none"
            stroke="orange"
            strokeWidth="10"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: rainbowVisible ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.1 }}
          />
          <motion.path
            d="M0,200 Q500,90 1000,200"
            fill="none"
            stroke="yellow"
            strokeWidth="10"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: rainbowVisible ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          />
          <motion.path
            d="M0,200 Q500,110 1000,200"
            fill="none"
            stroke="green"
            strokeWidth="10"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: rainbowVisible ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
          <motion.path
            d="M0,200 Q500,130 1000,200"
            fill="none"
            stroke="blue"
            strokeWidth="10"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: rainbowVisible ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          />
          <motion.path
            d="M0,200 Q500,150 1000,200"
            fill="none"
            stroke="purple"
            strokeWidth="10"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: rainbowVisible ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Right side with text and features */}
          <div className="w-full lg:w-1/2 relative">
            {/* Animated Pencil SVG */}
            <motion.div
              className="absolute -left-16 top-0"
              initial={{ rotate: -30, x: -50 }}
              animate={{ rotate: [-30, -25, -30], x: [-50, -40, -50] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <svg width="80" height="100" viewBox="0 0 80 100">
                <rect x="30" y="5" width="20" height="60" fill="#FFD700" />
                <rect x="30" y="65" width="20" height="15" fill="#F87171" />
                <polygon points="30,80 50,80 40,95" fill="#000000" />
                <rect x="30" y="5" width="20" height="5" fill="#D1D5DB" />
              </svg>
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-br from-indigo-600 via-blue-700 to-indigo-800 drop-shadow-[2px_2px_2px_rgba(79,70,229,0.3)]">
              Join Our Fun Learning Adventure!
            </h2>

            <motion.p
              className="text-gray-600 mb-8 text-lg rounded-lg bg-white p-4 border-2 border-dashed border-pink-300 relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Book SVG */}
              <motion.span
                className="absolute -right-10 -top-10 z-10"
                initial={{ rotate: 0 }}
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <svg width="60" height="50" viewBox="0 0 60 50">
                  <rect
                    x="5"
                    y="5"
                    width="50"
                    height="40"
                    rx="3"
                    fill="#3B82F6"
                  />
                  <rect
                    x="10"
                    y="10"
                    width="40"
                    height="30"
                    rx="2"
                    fill="#EFF6FF"
                  />
                  <line
                    x1="15"
                    y1="15"
                    x2="45"
                    y2="15"
                    stroke="#6B7280"
                    strokeWidth="2"
                  />
                  <line
                    x1="15"
                    y1="20"
                    x2="45"
                    y2="20"
                    stroke="#6B7280"
                    strokeWidth="2"
                  />
                  <line
                    x1="15"
                    y1="25"
                    x2="45"
                    y2="25"
                    stroke="#6B7280"
                    strokeWidth="2"
                  />
                  <line
                    x1="15"
                    y1="30"
                    x2="35"
                    y2="30"
                    stroke="#6B7280"
                    strokeWidth="2"
                  />
                </svg>
              </motion.span>

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

            <div className="space-y-4 mb-8 relative">
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

              {/* Animated Paint Brush */}
              <motion.div
                className="absolute -right-20 bottom-0"
                initial={{ rotate: 30 }}
                animate={{
                  rotate: [30, 40, 30],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <svg width="80" height="100" viewBox="0 0 80 100">
                  <rect x="35" y="20" width="10" height="60" fill="#8B5CF6" />
                  <path d="M30,20 Q40,5 50,20 Z" fill="#EC4899" />
                  <motion.ellipse
                    cx="40"
                    cy="5"
                    rx="5"
                    ry="5"
                    fill="#EC4899"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  />
                </svg>
              </motion.div>
            </div>

            <Link href="/courses">
              <motion.span
                className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold px-8 py-3 rounded-full uppercase tracking-wide
                shadow-[0_6px_0_rgb(79,70,229)]
                hover:shadow-[0_4px_0px_rgb(79,70,229)] hover:translate-y-[2px]
                active:shadow-none active:translate-y-[6px] active:bg-indigo-800
                transition-all duration-150 ease-in-out relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Adventure!
                {/* Button sparks - shows on hover */}
                <motion.svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 100 100"
                  className="absolute top-0 left-0 w-full h-full"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.circle
                    cx="10"
                    cy="10"
                    r="3"
                    fill="#FCD34D"
                    initial={{ scale: 0 }}
                    animate={{
                      scale: [0, 1, 0],
                      x: [0, -10, -15],
                      y: [0, -10, -5],
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      repeatDelay: 0.2,
                    }}
                  />
                  <motion.circle
                    cx="90"
                    cy="10"
                    r="3"
                    fill="#FCD34D"
                    initial={{ scale: 0 }}
                    animate={{
                      scale: [0, 1, 0],
                      x: [0, 10, 15],
                      y: [0, -10, -5],
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      repeatDelay: 0.5,
                    }}
                  />
                  <motion.circle
                    cx="90"
                    cy="90"
                    r="3"
                    fill="#FCD34D"
                    initial={{ scale: 0 }}
                    animate={{
                      scale: [0, 1, 0],
                      x: [0, 10, 15],
                      y: [0, 10, 5],
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      repeatDelay: 0.8,
                    }}
                  />
                  <motion.circle
                    cx="10"
                    cy="90"
                    r="3"
                    fill="#FCD34D"
                    initial={{ scale: 0 }}
                    animate={{
                      scale: [0, 1, 0],
                      x: [0, -10, -15],
                      y: [0, 10, 5],
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      repeatDelay: 1.1,
                    }}
                  />
                </motion.svg>
              </motion.span>
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
