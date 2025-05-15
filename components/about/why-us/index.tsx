"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface WhyChooseUsCardProps {
  imageUrl: string;
  color: string;
  title: { text: string; color: string };
  description: string;
  index: number;
}

const WhyChooseUsCard: React.FC<WhyChooseUsCardProps> = ({
  imageUrl,
  color,
  title,
  description,
  index,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {
          opacity: 0,
          y: 50,
          x: 0,
        },
        visible: {
          opacity: 1,
          y: 0,
          x: 0,
          transition: {
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1.0], // Custom easing for smoother motion
          },
        },
      }}
      className={`relative bg-white shadow-lg rounded-lg p-6 mb-16 w-full max-w-md md:max-w-sm lg:mb-0 mx-auto`}
    >
      {/* Connection lines - only shown on mobile */}
      {index < 2 && (
        <motion.div
          initial={{ height: 0 }}
          animate={isInView ? { height: "4rem" } : { height: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="absolute -bottom-16 left-1/2 w-1 bg-gray-300 transform -translate-x-1/2 z-0 md:hidden"
        ></motion.div>
      )}

      {/* Card content */}
      <div className="flex flex-col items-center text-center">
        <div
          className={`w-32 h-32 md:w-40 md:h-40 ${color} rounded-full flex items-center justify-center mb-4 overflow-hidden`}
        >
          <img
            src={imageUrl || "/api/placeholder/200/200"}
            alt={title.text}
            className="w-full h-full object-cover"
          />
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
      imageUrl: "/api/placeholder/200/200", // Replace with your actual image URL
      color: "bg-blue-100",
      title: { text: "Quality Focused", color: "text-blue-700" },
      description:
        "Our tutors are highly qualified and experienced, with a deep understanding of the National 5 curriculum. They are dedicated to helping students succeed and reach their full potential.",
    },
    {
      imageUrl: "/api/placeholder/200/200", // Replace with your actual image URL
      color: "bg-green-100",
      title: { text: "Personalised Tutoring Plan", color: "text-green-700" },
      description:
        "We recognise that every student is unique. Our tutoring sessions are tailored to the individual needs of each student, ensuring targeted support in areas where they need it the most.",
    },
    {
      imageUrl: "/api/placeholder/200/200", // Replace with your actual image URL
      color: "bg-yellow-100",
      title: { text: "Enhanced Support", color: "text-yellow-700" },
      description:
        "National 5 exams can be challenging, but with our expert guidance, students can approach exams with confidence. We focus on honing exam skills, providing practice papers, and offering valuable tips for success.",
    },
  ];

  // The title animation
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: false, amount: 0.5 });
  const titleControls = useAnimation();

  // Section ref
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { amount: 0.2, once: false });

  // Card container refs
  const cardContainerRef = useRef(null);
  const isCardContainerInView = useInView(cardContainerRef, {
    amount: 0.2,
    once: false,
  });

  useEffect(() => {
    if (isTitleInView) {
      titleControls.start("visible");
    } else {
      titleControls.start("hidden");
    }
  }, [isTitleInView, titleControls]);

  return (
    <div ref={sectionRef} className="bg-gray-50 py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h1
          ref={titleRef}
          initial="hidden"
          animate={titleControls}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6 },
            },
          }}
          className="text-4xl font-bold text-center text-blue-600 mb-16"
        >
          Why Choose Us
        </motion.h1>

        {/* Mobile layout (vertical) */}
        <div className="relative flex flex-col items-center md:hidden">
          {/* Road background for mobile */}
          <motion.div
            initial={{ height: 0 }}
            animate={isSectionInView ? { height: "100%" } : { height: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="absolute top-0 left-1/2 w-2 bg-gray-200 transform -translate-x-1/2 rounded-full z-0"
          ></motion.div>

          {/* Cards - Each card will animate when scrolled into view */}
          {cards.map((card, index) => (
            <WhyChooseUsCard
              key={index}
              index={index}
              imageUrl={card.imageUrl}
              color={card.color}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>

        {/* Desktop layout (horizontal) */}
        <div className="hidden md:block relative">
          {/* Horizontal connecting line for desktop */}
          <motion.div
            initial={{ width: 0 }}
            animate={isCardContainerInView ? { width: "100%" } : { width: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute left-0 top-40 h-1 bg-gray-200 z-0"
          ></motion.div>

          <div
            ref={cardContainerRef}
            className="grid md:grid-cols-3 gap-8 relative z-10"
          >
            {/* Cards in horizontal layout */}
            {cards.map((card, index) => {
              // For desktop, we'll use different animation variants
              const desktopRef = useRef(null);
              const isDesktopInView = useInView(desktopRef, {
                once: false,
                amount: 0.5,
              });
              const desktopControls = useAnimation();

              useEffect(() => {
                if (isDesktopInView) {
                  desktopControls.start({
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      delay: index * 0.3,
                      ease: [0.25, 0.1, 0.25, 1.0],
                    },
                  });
                } else {
                  desktopControls.start({ opacity: 0, y: 50 });
                }
              }, [isDesktopInView, index, desktopControls]);

              return (
                <motion.div
                  key={index}
                  ref={desktopRef}
                  initial={{ opacity: 0, y: 50 }}
                  animate={desktopControls}
                  className="bg-white shadow-lg rounded-lg p-6 mx-auto"
                >
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`w-32 h-32 md:w-40 md:h-40 ${card.color} rounded-full flex items-center justify-center mb-4 overflow-hidden`}
                    >
                      <img
                        src={card.imageUrl}
                        alt={card.title.text}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h2
                      className={`text-xl font-semibold ${card.title.color} mb-3`}
                    >
                      {card.title.text}
                    </h2>
                    <p className="text-gray-600">{card.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
