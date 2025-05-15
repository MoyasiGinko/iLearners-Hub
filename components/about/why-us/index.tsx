"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface WhyChooseUsCardProps {
  imageUrl: string;
  color: string;
  title: { text: string; color: string };
  description: string;
  index: number;
  icon: React.ReactNode;
}

// Fun icon components
const StarIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
      fill="#FFD700"
      stroke="#FF8A00"
      strokeWidth="2"
    />
  </svg>
);

const BrainIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C14.7614 2 17 4.23858 17 7C17 7.55228 16.8966 8.07988 16.7068 8.56385C19.0654 9.07404 21 11.1335 21 13.7143C21 15.411 20.0898 16.9262 18.7089 17.8524C18.8982 18.2843 19 18.7581 19 19.25C19 21.3211 17.3211 23 15.25 23H8.75C6.67893 23 5 21.3211 5 19.25C5 18.7581 5.10182 18.2843 5.29108 17.8524C3.91019 16.9262 3 15.411 3 13.7143C3 11.1335 4.9346 9.07404 7.29317 8.56385C7.10337 8.07988 7 7.55228 7 7C7 4.23858 9.23858 2 12 2Z"
      fill="#FF88DC"
      stroke="#FF499E"
      strokeWidth="2"
    />
    <circle cx="10" cy="11" r="1" fill="white" />
    <circle cx="14" cy="11" r="1" fill="white" />
    <path
      d="M9 15C10.5 16.5 13.5 16.5 15 15"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const RocketIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L8 6V10L4 14H8L10 20L12 14L16 10L20 6L16 2H12Z"
      fill="#64D2FF"
      stroke="#0091EA"
      strokeWidth="2"
    />
    <circle cx="14" cy="8" r="1" fill="white" />
  </svg>
);

const WhyChooseUsCard: React.FC<WhyChooseUsCardProps> = ({
  imageUrl,
  color,
  title,
  description,
  index,
  icon,
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

  // Add bouncing animation
  const bounceAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut",
      delay: index * 0.2,
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {
          opacity: 0,
          scale: 0.8,
          // y: 50,
          rotate: -5,
        },
        visible: {
          opacity: 1,
          scale: 1,
          y: 0,
          rotate: 0,
          transition: {
            duration: 0.6,
            ease: "backOut",
          },
        },
      }}
      whileHover={{ scale: 1.01, rotate: 2 }}
      className={`relative ${color} shadow-lg rounded-3xl p-6 mb-16 w-full max-w-md md:max-w-sm lg:mb-0 mx-auto border-4 border-white`}
    >
      {/* Connection lines styled as dashed lines with stars */}
      {index < 2 && (
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 z-0 md:hidden">
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: "4rem" } : { height: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="w-1 bg-gray-300 mx-auto dashed-line"
          ></motion.div>
          <motion.div
            animate={bounceAnimation}
            className="absolute -bottom-3 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">✦</span>
            </div>
          </motion.div>
        </div>
      )}

      {/* Card content */}
      <div className="flex flex-col items-center text-center">
        {/* Float the icon above the image with animation */}
        <motion.div className="relative mb-2" animate={bounceAnimation}>
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-full shadow-md z-10">
            {icon}
          </div>
        </motion.div>

        <div
          className={`w-full h-full rounded-2xl flex items-center justify-center mb-4 overflow-hidden border-4 border-white shadow-inner`}
        >
          <img
            src={imageUrl || "/api/placeholder/200/200"}
            alt={title.text}
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className={`text-2xl font-bold ${title.color} mb-3 font-comic`}>
          {title.text}
        </h2>
        <p className="text-gray-700 font-medium">{description}</p>
      </div>
    </motion.div>
  );
};

const WhyChooseUs = () => {
  const cards = [
    {
      imageUrl: "/images/about/choose1.png", // Replace with your actual image URL
      color: "bg-blue-200",
      title: { text: "Super Teachers", color: "text-blue-600" },
      description:
        "Our friendly teachers know all about National 5 and love helping kids learn in fun ways!",
      icon: <StarIcon />,
    },
    {
      imageUrl: "/images/about/choose2.png", // Replace with your actual image URL
      color: "bg-pink-200",
      title: { text: "Learning Your Way", color: "text-pink-600" },
      description:
        "Everyone learns differently! We create special lessons just for you to help with exactly what you need.",
      icon: <BrainIcon />,
    },
    {
      imageUrl: "/images/about/choose3.png", // Replace with your actual image URL
      color: "bg-purple-200",
      title: { text: "Exam Success", color: "text-purple-600" },
      description:
        "Tests can be tricky, but we'll help you practice and learn cool tips so you'll feel confident and ready!",
      icon: <RocketIcon />,
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

  // Rainbow text animation
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#F033FF", "#FF33A1"];

  return (
    <div
      ref={sectionRef}
      className="bg-transparent pt-20 pb-12 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Decorative elements */}
        <motion.div
          className="absolute top-10 left-10 w-8 h-8 rounded-full bg-yellow-300"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        <motion.div
          className="absolute top-20 right-20 w-6 h-6 rounded-full bg-pink-300"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5,
          }}
        />

        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#4a6bcc] mb-4 font-['Comic_Sans_MS',cursive,sans-serif]">
            Why Choose Us?
          </h2>
          <p className="text-xl max-w-3xl  mx-auto text-gray-600 font-['Comic_Sans_MS',cursive,sans-serif]">
            We make learning fun and exciting!
          </p>
        </div>

        {/* Mobile layout (vertical) */}
        <div className="relative flex flex-col items-center md:hidden">
          {/* Road background for mobile styled as a rainbow path */}
          <motion.div
            initial={{ height: 0 }}
            animate={isSectionInView ? { height: "100%" } : { height: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="absolute top-0 left-1/2 w-4 bg-gradient-to-b from-blue-300 via-purple-300 to-pink-300 transform -translate-x-1/2 rounded-full z-0"
            style={{
              backgroundImage:
                "linear-gradient(0deg, #FF9AA2, #FFDAC1, #E2F0CB, #B5EAD7, #C7CEEA)",
            }}
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
              icon={card.icon}
            />
          ))}
        </div>

        {/* Desktop layout (horizontal) */}
        <div className="hidden md:block relative">
          {/* Horizontal connecting line for desktop styled as a rainbow */}
          <motion.div
            initial={{ width: 0 }}
            animate={isCardContainerInView ? { width: "100%" } : { width: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute left-0 top-40 h-3 rounded-full z-0"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #FF9AA2, #FFDAC1, #E2F0CB, #B5EAD7, #C7CEEA)",
            }}
          ></motion.div>

          {/* Add floating elements along the path */}
          <motion.div
            className="absolute top-38 left-1/4 w-6 h-6 z-10"
            animate={{
              y: [-5, 5, -5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">✦</span>
            </div>
          </motion.div>

          <motion.div
            className="absolute top-40 left-2/4 w-6 h-6 z-10"
            animate={{
              y: [-5, 5, -5],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.5,
            }}
          >
            <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">★</span>
            </div>
          </motion.div>

          <motion.div
            className="absolute top-38 left-3/4 w-6 h-6 z-10"
            animate={{
              y: [-5, 5, -5],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1,
            }}
          >
            <div className="w-6 h-6 bg-pink-400 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">✦</span>
            </div>
          </motion.div>

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
                    rotate: 0,
                    transition: {
                      duration: 0.8,
                      delay: index * 0.3,
                      type: "spring",
                      stiffness: 100,
                    },
                  });
                } else {
                  desktopControls.start({
                    opacity: 0,
                    // y: 50,
                    rotate: index % 2 === 0 ? -5 : 5,
                  });
                }
              }, [isDesktopInView, index, desktopControls]);

              return (
                <motion.div
                  key={index}
                  ref={desktopRef}
                  initial={{
                    opacity: 0,
                    // y: 50,
                    // rotate: index % 2 === 0 ? -5 : 5,
                  }}
                  animate={desktopControls}
                  whileHover={{ scale: 1.01, rotate: 0 }}
                  className={`${card.color}  rounded-3xl p-6 mx-auto border-4 border-white`}
                >
                  <div className="flex flex-col items-center text-center">
                    {/* Float the icon above the image */}
                    <motion.div
                      className="relative mb-2"
                      animate={{
                        y: [0, -8, 0],
                        transition: {
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                          delay: index * 0.3,
                        },
                      }}
                    >
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-full shadow-md z-10">
                        {card.icon}
                      </div>
                    </motion.div>

                    <div
                      className={`w-full h-full rounded-2xl flex items-center justify-center mb-4 overflow-hidden border-4 border-white shadow-inner`}
                    >
                      <img
                        src={card.imageUrl}
                        alt={card.title.text}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h2
                      className={`text-2xl font-bold ${card.title.color} mb-3 font-comic`}
                    >
                      {card.title.text}
                    </h2>
                    <p className="text-gray-700 font-medium">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Add global styles for the component */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Comic+Neue:wght@700&display=swap");

        .font-comic {
          font-family: "Comic Neue", cursive;
        }

        .dashed-line {
          background: repeating-linear-gradient(
            to bottom,
            #9ca3af,
            #9ca3af 5px,
            transparent 5px,
            transparent 10px
          );
        }
      `}</style>
    </div>
  );
};

export default WhyChooseUs;
