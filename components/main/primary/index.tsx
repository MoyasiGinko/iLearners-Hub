"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

const PrimarySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    {
      src: "/images/student-smiling.png",
      alt: "Smiling student with glasses",
      width: 400,
      height: 480,
    },
    {
      src: "/images/online-class.png",
      alt: "Online class session",
      width: 400,
      height: 480,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 5000); // Swap every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-transparent overflow-hidden py-16 rounded-3xl">
      {/* Fun pattern background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="w-full h-full bg-[url('/images/dotted-world-map.png')] bg-no-repeat bg-contain bg-center"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Flying balloon decoration */}
        <div className="absolute top-10 left-10 z-0">
          <svg
            width="100"
            height="120"
            viewBox="0 0 100 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="balloon"
          >
            <path
              d="M50 10C65.464 10 78 22.536 78 38C78 53.464 65.464 66 50 66C34.536 66 22 53.464 22 38C22 22.536 34.536 10 50 10Z"
              fill="#FF6B6B"
            />
            <path
              d="M50 66C50 66 53 80 50 95C47 110 50 110 50 110"
              stroke="#333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="4 4"
            />
          </svg>
          <style jsx>{`
            .balloon {
              animation: float 6s ease-in-out infinite;
            }

            @keyframes float {
              0%,
              100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-15px);
              }
            }
          `}</style>
        </div>

        {/* Rainbow arc decoration */}
        <div className="absolute -bottom-20 right-10 -z-1">
          <svg
            width="200"
            height="120"
            viewBox="0 0 200 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 100C10 55.82 45.82 20 90 20C134.18 20 170 55.82 170 100"
              stroke="#FF9999"
              strokeWidth="8"
              strokeLinecap="round"
              fill="none"
              className="rainbow-path"
            />
            <path
              d="M30 100C30 66.86 56.86 40 90 40C123.14 40 150 66.86 150 100"
              stroke="#FFDD99"
              strokeWidth="8"
              strokeLinecap="round"
              fill="none"
              className="rainbow-path"
            />
            <path
              d="M50 100C50 77.91 67.91 60 90 60C112.09 60 130 77.91 130 100"
              stroke="#99FF99"
              strokeWidth="8"
              strokeLinecap="round"
              fill="none"
              className="rainbow-path"
            />
          </svg>
          <style jsx>{`
            .rainbow-path {
              stroke-dasharray: 250;
              stroke-dashoffset: 250;
              animation: drawRainbow 3s ease-in-out forwards;
            }

            @keyframes drawRainbow {
              to {
                stroke-dashoffset: 0;
              }
            }
          `}</style>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left side with images */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 relative">
            <div
              className="relative mx-auto"
              style={{
                maxWidth: "420px",
                height: "auto",
                aspectRatio: "1/1",
              }}
            >
              {/* First image */}
              <div
                className="absolute rounded-[30px] overflow-hidden shadow-lg transition-all duration-1000 ease-in-out border-4 border-yellow-300"
                style={{
                  width: "90%",
                  height: "90%",
                  maxWidth: "380px",
                  maxHeight: "380px",
                  zIndex: activeIndex === 0 ? 20 : 10,
                  transform:
                    activeIndex === 0
                      ? "translateX(0) rotate(0deg)"
                      : "translateX(15%) rotate(-5deg)",
                  opacity: 1,
                  left: activeIndex === 0 ? "0" : "10%",
                }}
              >
                <Image
                  src={images[0].src}
                  alt={images[0].alt}
                  width={380}
                  height={380}
                  className="object-cover w-full h-full"
                  sizes="(max-width: 768px) 90vw, 380px"
                />
              </div>

              {/* Second image */}
              <div
                className="absolute rounded-[30px] overflow-hidden shadow-lg transition-all duration-1000 ease-in-out border-4 border-blue-300"
                style={{
                  width: "90%",
                  height: "90%",
                  maxWidth: "380px",
                  maxHeight: "380px",
                  zIndex: activeIndex === 1 ? 20 : 10,
                  transform:
                    activeIndex === 1
                      ? "translateX(0) rotate(0deg)"
                      : "translateX(-15%) rotate(5deg)",
                  opacity: 1,
                  left: activeIndex === 1 ? "0" : "15%",
                }}
              >
                <Image
                  src={images[1].src}
                  alt={images[1].alt}
                  width={380}
                  height={380}
                  className="object-cover w-full h-full"
                  sizes="(max-width: 768px) 90vw, 380px"
                />
              </div>
            </div>

            {/* Jumping stars animation */}
            <div className="absolute top-0 right-0 z-0">
              <svg
                width="150"
                height="150"
                viewBox="0 0 150 150"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="max-w-full"
              >
                <path
                  id="jumpPath"
                  d="M10 75C10 40 50 10 120 30"
                  stroke="none"
                  fill="none"
                />

                {/* Star 1 */}
                <g className="star" style={{ animationDelay: "0s" }}>
                  <path
                    d="M10 4L7.5 9.5L2 10L6 14L5 20L10 17L15 20L14 14L18 10L12.5 9.5L10 4Z"
                    fill="#FFD700"
                  />
                </g>

                {/* Star 2 */}
                <g className="star" style={{ animationDelay: "0.5s" }}>
                  <path
                    d="M10 4L7.5 9.5L2 10L6 14L5 20L10 17L15 20L14 14L18 10L12.5 9.5L10 4Z"
                    fill="#FF9E80"
                  />
                </g>

                {/* Star 3 */}
                <g className="star" style={{ animationDelay: "1s" }}>
                  <path
                    d="M10 4L7.5 9.5L2 10L6 14L5 20L10 17L15 20L14 14L18 10L12.5 9.5L10 4Z"
                    fill="#80D8FF"
                  />
                </g>
              </svg>

              <style jsx>{`
                .star {
                  transform-origin: center;
                  animation: jump 2s infinite;
                }

                @keyframes jump {
                  0%,
                  100% {
                    transform: translate(20px, 80px) scale(0.5);
                  }
                  50% {
                    transform: translate(20px, 60px) scale(0.8) rotate(15deg);
                  }
                }

                .star:nth-child(2) {
                  animation-delay: 0.5s;
                }

                .star:nth-child(3) {
                  animation-delay: 1s;
                }
              `}</style>
            </div>
          </div>

          {/* Right side with text and features */}
          <div className="w-full lg:w-1/2 lg:pl-16">
            <div className="text-purple-500 font-bold mb-2 text-xl">
              LET'S LEARN TOGETHER!
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#FF6B6B] leading-tight mb-6 rounded-lg">
              Discover, Learn & Grow With Us!
            </h2>

            <p className="text-gray-600 mb-10 text-lg">
              Join our fun learning adventures! We make learning exciting with
              friendly teachers, cool activities, and awesome lessons that you
              can enjoy from anywhere!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {/* Feature 1 */}
              <div className="flex items-center bg-yellow-100 p-4 rounded-2xl hover:scale-105 transition-transform">
                <div className="flex-shrink-0 mr-3 bg-yellow-400 rounded-full p-3">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <span className="font-medium text-lg">Friendly teachers</span>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center bg-blue-100 p-4 rounded-2xl hover:scale-105 transition-transform">
                <div className="flex-shrink-0 mr-3 bg-blue-400 rounded-full p-3">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <span className="font-medium text-lg">Fun online lessons</span>
              </div>

              {/* Feature 3 */}
              <div className="flex items-center bg-green-100 p-4 rounded-2xl hover:scale-105 transition-transform">
                <div className="flex-shrink-0 mr-3 bg-green-400 rounded-full p-3">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <span className="font-medium text-lg">Cool activities</span>
              </div>

              {/* Feature 4 */}
              <div className="flex items-center bg-pink-100 p-4 rounded-2xl hover:scale-105 transition-transform">
                <div className="flex-shrink-0 mr-3 bg-pink-400 rounded-full p-3">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <span className="font-medium text-lg">Amazing rewards</span>
              </div>
            </div>

            <Link href="/about">
              <span className="inline-block bg-purple-500 hover:bg-purple-400 text-white font-bold px-8 py-4 rounded-full transition-colors duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                START YOUR ADVENTURE!
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimarySection;
