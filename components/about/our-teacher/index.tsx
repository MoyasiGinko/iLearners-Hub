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
    image: "/images/about/teacher1.png",
    subject: "Science",
    favoriteColor: "bg-blue-200",
    funFact: "Can name all the planets in reverse order!",
  },
  {
    name: "Dr Ghazi Droubi",
    experience: "15+ years of experience",
    image: "/images/about/teacher2.png",
    subject: "Math",
    favoriteColor: "bg-green-200",
    funFact: "Makes math problems about cookies and ice cream!",
  },
  {
    name: "Zara",
    experience: "2+ years of experience",
    image: "/images/about/teacher3.png",
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
          // y: 50,
          // rotate: index % 2 === 0 ? -2 : 2,
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
        <div className="relative mx-auto ">
          {/* Outer circle animation */}
          {/* <motion.div
            className={`absolute inset-0 rounded-full border-4 border-dashed ${getThemeColor(
              teacher.favoriteColor
            )}`}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          ></motion.div> */}

          {/* Inner circle with animated accessories */}
          <div className="relative w-40 h-40 mx-auto">
            {/* Image container */}
            <div className="w-32 h-32 rounded-full overflow-hidden relative mx-auto border-4 border-white shadow-lg">
              <Image
                src={teacher.image}
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

        {/* <motion.div
          initial={{ width: 0 }}
          animate={{ width: "70%" }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className={`h-1 mx-auto mb-3 ${getThemeColor(
            teacher.favoriteColor
          ).replace("border", "bg")}`}
        ></motion.div> */}

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
      className="py-16 px-4 relative overflow-hidden bg-transparent"
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
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#4a6bcc] mb-4 font-['Comic_Sans_MS',cursive,sans-serif]">
            Meet Our Amazing Teachers
          </h2>
          <p className="text-xl max-w-3xl  mx-auto text-gray-600 font-['Comic_Sans_MS',cursive,sans-serif]">
            Our teachers, who have themselves navigated the Scottish curriculum,
            bring a deep understanding of the local academic landscape.
          </p>
        </div>

        {/* Teacher cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
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
              className="absolute -inset-x-4 -inset-y-2 rounded-xl bg-gradient-to-r from-blue-200 to-indigo-200 -z-10"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <p className="text-xl  font-bold font-comic px-8 py-2   mx-auto text-indigo-600 font-['Comic_Sans_MS',cursive,sans-serif]">
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
