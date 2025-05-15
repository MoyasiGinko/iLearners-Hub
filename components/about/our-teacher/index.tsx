"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";

interface Teacher {
  name: string;
  experience: string;
  image: string;
  subject: string;
  favoriteColor: string;
  funFact: string;
}

const teachers: Teacher[] = [
  {
    name: "Marcus Montgomery",
    experience: "10+ years of experience",
    image: "teacher-1.jpg",
    subject: "Science",
    favoriteColor: "bg-blue-200",
    funFact: "Can name all the planets in reverse order!",
  },
  {
    name: "Dr Ghazi Droubi",
    experience: "15+ years of experience",
    image: "teacher-2.jpg",
    subject: "Math",
    favoriteColor: "bg-green-200",
    funFact: "Makes math problems about cookies and ice cream!",
  },
  {
    name: "Zara",
    experience: "2+ years of experience",
    image: "teacher-3.jpg",
    subject: "English",
    favoriteColor: "bg-purple-200",
    funFact: "Writes stories about talking animals!",
  },
];

const TeacherCard: React.FC<{ teacher: Teacher; index: number }> = ({
  teacher,
  index,
}) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  // Get theme color for accessories based on favoriteColor
  const getThemeColor = (bgColor: string) => {
    switch (bgColor) {
      case "bg-blue-200":
        return "border-blue-400";
      case "bg-green-200":
        return "border-green-400";
      case "bg-purple-200":
        return "border-purple-400";
      default:
        return "border-yellow-400";
    }
  };

  const getTextColor = (bgColor: string) => {
    switch (bgColor) {
      case "bg-blue-200":
        return "text-blue-600";
      case "bg-green-200":
        return "text-green-600";
      case "bg-purple-200":
        return "text-purple-600";
      default:
        return "text-yellow-600";
    }
  };

  return (
    <motion.div
      ref={cardRef}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {
          opacity: 0,
          y: 50,
          rotate: index % 2 === 0 ? -2 : 2,
        },
        visible: {
          opacity: 1,
          y: 0,
          rotate: 0,
          transition: {
            duration: 0.8,
            delay: index * 0.2,
            type: "spring",
            stiffness: 90,
          },
        },
      }}
      whileHover={{
        scale: 1.03,
        y: -10,
        rotate: index % 2 === 0 ? 1 : -1,
        transition: { duration: 0.3 },
      }}
      className={`p-6 text-center rounded-3xl shadow-lg ${teacher.favoriteColor} overflow-hidden relative`}
    >
      {/* Background decoration */}
      <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-white opacity-10"></div>
      <div className="absolute -top-8 -left-8 w-24 h-24 rounded-full bg-white opacity-10"></div>

      {/* Teacher content */}
      <div className="relative z-10">
        {/* Image with animated frame */}
        <div className="relative mx-auto mb-6">
          {/* Outer circle animation */}
          <motion.div
            className={`absolute inset-0 rounded-full border-4 border-dashed ${getThemeColor(
              teacher.favoriteColor
            )}`}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          ></motion.div>

          {/* Inner circle with animated accessories */}
          <div className="relative w-40 h-40 mx-auto">
            {/* Crown for teachers with 10+ years */}
            {teacher.experience.includes("10+") && (
              <motion.div
                className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20 text-2xl"
                animate={{
                  y: [0, -5, 0],
                  rotateZ: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                👑
              </motion.div>
            )}

            {/* Graduation cap for Dr title */}
            {teacher.name.includes("Dr") && (
              <motion.div
                className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20 text-2xl"
                animate={{
                  y: [0, -5, 0],
                  rotateZ: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                🎓
              </motion.div>
            )}

            {/* Subject icons */}
            <motion.div
              className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-20 text-2xl"
              animate={{
                x: [0, 5, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              {teacher.subject === "Science" && "🔬"}
              {teacher.subject === "Math" && "🧮"}
              {teacher.subject === "English" && "📚"}
            </motion.div>

            {/* Image container */}
            <div className="w-32 h-32 rounded-full overflow-hidden relative mx-auto border-4 border-white shadow-lg">
              <Image
                src={`/api/placeholder/200/200`} // Placeholder for demo
                alt={teacher.name}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>

        {/* Teacher info */}
        <h3
          className={`text-xl font-bold mb-2 ${getTextColor(
            teacher.favoriteColor
          )} font-comic`}
        >
          {teacher.name}
        </h3>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "70%" }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className={`h-1 mx-auto mb-3 ${getThemeColor(
            teacher.favoriteColor
          ).replace("border", "bg")}`}
        ></motion.div>

        <p className="text-sm text-gray-700 mb-3 font-comic">
          {teacher.experience}
        </p>

        {/* Fun fact bubble */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="relative mt-6 pt-3"
        >
          <div className="absolute left-1/2 -top-3 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-gray-100"></div>
          <div className="bg-gray-100 rounded-xl p-3 relative">
            <p className="text-sm text-gray-600 italic font-comic">
              "{teacher.funFact}"
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const OurTeachers = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: false, amount: 0.5 });
  const titleControls = useAnimation();

  useEffect(() => {
    if (isTitleInView) {
      titleControls.start("visible");
    } else {
      titleControls.start("hidden");
    }
  }, [isTitleInView, titleControls]);

  return (
    <div
      ref={sectionRef}
      className="py-16 px-4 relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #fff8e1, #fffde7)",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated school supplies */}
        <motion.div
          className="absolute top-20 left-5 text-4xl"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          📝
        </motion.div>

        <motion.div
          className="absolute top-40 right-10 text-4xl"
          animate={{
            y: [0, -20, 0],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        >
          🎨
        </motion.div>

        <motion.div
          className="absolute bottom-20 left-20 text-4xl"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5,
          }}
        >
          📚
        </motion.div>

        <motion.div
          className="absolute bottom-40 right-20 text-4xl"
          animate={{
            y: [0, -15, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1.5,
          }}
        >
          🧩
        </motion.div>

        {/* Colorful circles */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-40 h-40 rounded-full bg-yellow-200 opacity-30"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        <motion.div
          className="absolute bottom-1/3 right-1/4 w-60 h-60 rounded-full bg-blue-200 opacity-20"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5,
          }}
        />

        <motion.div
          className="absolute top-2/3 left-2/3 w-48 h-48 rounded-full bg-green-200 opacity-25"
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header section */}
        <motion.div
          ref={titleRef}
          initial="hidden"
          animate={titleControls}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8 },
            },
          }}
          className="text-center mb-12"
        >
          {/* Title */}
          <div className="relative inline-block">
            <motion.div
              className="absolute -inset-4 -z-10"
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 1, 0, -1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 200 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#FFC107"
                  d="M41.3,-48.7C53.4,-35.9,63.2,-24.4,67.4,-10.6C71.5,3.2,70,19.2,62.1,31.5C54.2,43.8,39.9,52.3,24.5,58.8C9.1,65.3,-7.4,69.8,-22.3,66.2C-37.1,62.5,-50.4,50.8,-60.4,36.2C-70.3,21.5,-77,3.9,-75.4,-13.9C-73.8,-31.7,-63.9,-49.8,-49.2,-62.1C-34.5,-74.4,-15.1,-80.9,-0.5,-80.2C14.1,-79.6,29.2,-61.6,41.3,-48.7Z"
                  transform="translate(100 50)"
                />
              </svg>
            </motion.div>
            <h2 className="text-4xl font-bold text-amber-600 mb-4 font-comic">
              Our Amazing Teachers
            </h2>
          </div>

          {/* Introduction text */}
          <motion.p
            className="text-center text-lg text-green-600 mb-8 font-comic max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Our super teachers know all about Scottish schools because they went
            to them too! They make learning fun and help you understand
            everything you need to know!
          </motion.p>
        </motion.div>

        {/* Teacher cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
          {teachers.map((teacher, index) => (
            <TeacherCard key={index} teacher={teacher} index={index} />
          ))}
        </div>

        {/* Coming soon message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="relative inline-block">
            <motion.div
              className="absolute -inset-x-4 -inset-y-2 rounded-xl bg-gradient-to-r from-orange-200 to-amber-200 -z-10"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <p className="text-xl text-orange-600 font-bold font-comic px-8 py-2">
              More Awesome Teachers Coming Soon...
            </p>
          </div>

          {/* Decorative stars */}
          <div className="mt-4 flex justify-center">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="text-2xl mx-1"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 10, 0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: i * 0.2,
                }}
              >
                ⭐
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Add global styles for the component */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&display=swap");

        .font-comic {
          font-family: "Comic Neue", cursive;
        }
      `}</style>
    </div>
  );
};

export default OurTeachers;
