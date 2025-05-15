"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface WhyChooseUsCardProps {
  icon: React.ReactNode;
  color: string;
  title: { text: string; color: string };
  description: string;
  index: number;
}

const WhyChooseUsCard: React.FC<WhyChooseUsCardProps> = ({
  icon,
  color,
  title,
  description,
  index,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, x: 100 },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.8,
            delay: index * 0.3,
            ease: "easeOut",
          },
        },
      }}
      className={`relative bg-white shadow-lg rounded-lg p-6 mb-8 w-full max-w-md mx-auto`}
    >
      {/* Connection line to next card */}
      {index < 2 && (
        <div className="absolute -bottom-8 left-1/2 w-1 h-8 bg-gray-300 transform -translate-x-1/2 z-0"></div>
      )}

      {/* Card content */}
      <div className="flex flex-col items-center text-center">
        <div
          className={`w-16 h-16 ${color} rounded-full flex items-center justify-center mb-4`}
        >
          <span className="text-2xl">{icon}</span>
        </div>
        <h2 className={`text-xl font-semibold ${title.color} mb-3`}>
          {title.text}
        </h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

const WhyChooseUs = () => {
  const cards = [
    {
      icon: "🎓",
      color: "bg-blue-100",
      title: { text: "Quality Focused", color: "text-blue-700" },
      description:
        "Our tutors are highly qualified and experienced, with a deep understanding of the National 5 curriculum. They are dedicated to helping students succeed and reach their full potential.",
    },
    {
      icon: "📚",
      color: "bg-green-100",
      title: { text: "Personalised Tutoring Plan", color: "text-green-700" },
      description:
        "We recognise that every student is unique. Our tutoring sessions are tailored to the individual needs of each student, ensuring targeted support in areas where they need it the most.",
    },
    {
      icon: "🌟",
      color: "bg-yellow-100",
      title: { text: "Enhanced Support", color: "text-yellow-700" },
      description:
        "National 5 exams can be challenging, but with our expert guidance, students can approach exams with confidence. We focus on honing exam skills, providing practice papers, and offering valuable tips for success.",
    },
  ];

  // The main container reference and animation
  const containerRef = useRef(null);
  const isContainerInView = useInView(containerRef, {
    once: true,
    amount: 0.1,
  });
  const containerControls = useAnimation();

  useEffect(() => {
    if (isContainerInView) {
      containerControls.start("visible");
    }
  }, [isContainerInView, containerControls]);

  return (
    <div className="bg-gray-50 py-20 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-blue-600 mb-16"
        >
          Why Choose Us
        </motion.h1>

        {/* Decorative road path */}
        <motion.div
          ref={containerRef}
          initial="hidden"
          animate={containerControls}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { duration: 0.8, staggerChildren: 0.3 },
            },
          }}
          className="relative flex flex-col items-center"
        >
          {/* Road background */}
          <div className="absolute top-0 left-1/2 h-full w-2 bg-gray-200 transform -translate-x-1/2 rounded-full z-0"></div>

          {/* Journey icons */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mb-4 z-10"
          >
            1
          </motion.div>

          {/* Cards */}
          {cards.map((card, index) => (
            <WhyChooseUsCard
              key={index}
              index={index}
              icon={card.icon}
              color={card.color}
              title={card.title}
              description={card.description}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
