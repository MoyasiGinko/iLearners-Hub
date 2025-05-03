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
    <div className="relative bg-white overflow-hidden py-16">
      {/* Dotted world map background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="w-full h-full bg-[url('/images/dotted-world-map.png')] bg-no-repeat bg-contain bg-center"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Paper airplane decoration */}
        <div className="absolute top-10 left-10 z-0">
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 50L80 20L60 80L20 50Z"
              stroke="#FF6B6B"
              strokeWidth="2"
              fill="none"
              className="paper-plane-outline"
            />
            <path
              d="M20 50L60 80"
              stroke="#FF6B6B"
              strokeWidth="2"
              strokeDasharray="5 5"
              className="paper-plane-fold"
            />
          </svg>
          <style jsx>{`
            .paper-plane-outline {
              stroke-dasharray: 220;
              stroke-dashoffset: 220;
              animation: drawPlane 3s ease-in-out forwards infinite;
            }

            .paper-plane-fold {
              stroke-dasharray: 50;
              stroke-dashoffset: 50;
              animation: drawFold 3s ease-in-out 0.5s forwards infinite;
            }

            @keyframes drawPlane {
              0% {
                stroke-dashoffset: 220;
              }
              40% {
                stroke-dashoffset: 0;
              }
              60% {
                stroke-dashoffset: 0;
              }
              100% {
                stroke-dashoffset: 0;
              }
            }

            @keyframes drawFold {
              0% {
                stroke-dashoffset: 50;
              }
              40% {
                stroke-dashoffset: 0;
              }
              60% {
                stroke-dashoffset: 0;
              }
              100% {
                stroke-dashoffset: 0;
              }
            }

            @keyframes float {
              0%,
              100% {
                transform: translate(0, 0) rotate(0deg);
              }
              25% {
                transform: translate(5px, -5px) rotate(2deg);
              }
              50% {
                transform: translate(0, -8px) rotate(-1deg);
              }
              75% {
                transform: translate(-5px, -3px) rotate(1deg);
              }
            }

            svg {
              animation: float 6s ease-in-out infinite;
            }
          `}</style>
        </div>

        {/* Circular path decoration */}
        <div className="absolute bottom-10 left-10 z-0">
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 0C155.228 0 200 44.7715 200 100C200 155.228 155.228 200 100 200C44.7715 200 0 155.228 0 100C0 44.7715 44.7715 0 100 0Z"
              stroke="#FF6B6B"
              strokeWidth="2"
              strokeDasharray="6 6"
              fill="none"
              className="animate-circle"
            />

            {/* Small star object that moves along the path */}
            <g className="moving-object">
              <path
                d="M10 4L7.85 9.79L2 10.13L6.32 14.21L5.09 20L10 16.79L14.91 20L13.68 14.21L18 10.13L12.15 9.79L10 4Z"
                fill="#FFD700"
              />
            </g>
          </svg>

          <style jsx>{`
            .animate-circle {
              stroke-dashoffset: 628;
              animation: drawCircle 20s linear infinite;
            }

            @keyframes drawCircle {
              to {
                stroke-dashoffset: 0;
              }
            }

            .moving-object {
              transform-origin: 100px 100px;
              animation: moveAlong 10s linear infinite;
            }

            @keyframes moveAlong {
              0% {
                transform: rotate(0deg) translateX(100px) rotate(0deg)
                  scale(0.6);
              }
              100% {
                transform: rotate(360deg) translateX(100px) rotate(-360deg)
                  scale(0.6);
              }
            }
          `}</style>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left side with images - Updated for side-by-side positioning and animation */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 relative">
            <div
              className="h-[420px] relative mx-auto"
              style={{ width: "420px" }}
            >
              {/* First image */}
              <div
                className="absolute rounded-3xl overflow-hidden shadow-lg transition-all duration-1000 ease-in-out"
                style={{
                  width: "380px",
                  height: "380px",
                  zIndex: activeIndex === 0 ? 20 : 10,
                  transform:
                    activeIndex === 0
                      ? "translateX(0) rotate(0deg)"
                      : "translateX(100px) rotate(-5deg)",
                  opacity: 1,
                  left: activeIndex === 0 ? "0" : "40px",
                }}
              >
                <Image
                  src={images[0].src}
                  alt={images[0].alt}
                  width={380}
                  height={380}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Second image */}
              <div
                className="absolute rounded-3xl overflow-hidden shadow-lg transition-all duration-1000 ease-in-out"
                style={{
                  width: "380px",
                  height: "380px",
                  zIndex: activeIndex === 1 ? 20 : 10,
                  transform:
                    activeIndex === 1
                      ? "translateX(0) rotate(0deg)"
                      : "translateX(-100px) rotate(5deg)",
                  opacity: 1,
                  left: activeIndex === 1 ? "0" : "60px",
                }}
              >
                <Image
                  src={images[1].src}
                  alt={images[1].alt}
                  width={380}
                  height={380}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Curved dotted line */}
            <div className="absolute top-0 right-0 z-0">
              <svg
                width="150"
                height="150"
                viewBox="0 0 150 150"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="dotPath"
                  d="M10 75C10 40 50 10 120 30"
                  stroke="#00000000"
                  strokeWidth="2"
                  fill="none"
                />

                {/* Dots along the path */}
                <circle className="dot" cx="10" cy="75" r="3" fill="#4CAF50" />
                <circle className="dot" cx="30" cy="55" r="3" fill="#4CAF50" />
                <circle className="dot" cx="50" cy="40" r="3" fill="#4CAF50" />
                <circle className="dot" cx="70" cy="30" r="3" fill="#4CAF50" />
                <circle className="dot" cx="90" cy="25" r="3" fill="#4CAF50" />
                <circle className="dot" cx="120" cy="30" r="3" fill="#4CAF50" />

                {/* Pepe character */}
                <g className="pepe-character">
                  <circle cx="0" cy="0" r="8" fill="#97DB4F" />
                  <circle cx="-3" cy="-2" r="2" fill="white" />
                  <circle cx="3" cy="-2" r="2" fill="white" />
                  <circle cx="-3" cy="-2" r="1" fill="black" />
                  <circle cx="3" cy="-2" r="1" fill="black" />
                  <path
                    d="M-3 3 Q0 5 3 3"
                    stroke="black"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </g>
              </svg>

              <style jsx>{`
                .dot {
                  opacity: 0;
                  animation: fadeInOut 3s infinite;
                }

                .dot:nth-child(2) {
                  animation-delay: 0.2s;
                }
                .dot:nth-child(3) {
                  animation-delay: 0.4s;
                }
                .dot:nth-child(4) {
                  animation-delay: 0.6s;
                }
                .dot:nth-child(5) {
                  animation-delay: 0.8s;
                }
                .dot:nth-child(6) {
                  animation-delay: 1s;
                }
                .dot:nth-child(7) {
                  animation-delay: 1.2s;
                }

                @keyframes fadeInOut {
                  0%,
                  100% {
                    opacity: 0;
                  }
                  50% {
                    opacity: 1;
                  }
                }

                .pepe-character {
                  animation: moveAlong 3s linear infinite;
                  transform-origin: center;
                }

                @keyframes moveAlong {
                  0% {
                    transform: translate(10px, 75px) rotate(0deg);
                  }
                  20% {
                    transform: translate(30px, 55px) rotate(-20deg);
                  }
                  40% {
                    transform: translate(50px, 40px) rotate(-30deg);
                  }
                  60% {
                    transform: translate(70px, 30px) rotate(-20deg);
                  }
                  80% {
                    transform: translate(90px, 25px) rotate(-10deg);
                  }
                  100% {
                    transform: translate(120px, 30px) rotate(0deg);
                  }
                }
              `}</style>
            </div>

            {/* Experience badge */}
            {/* <div className="absolute -bottom-2 left-1/3 z-30">
              <div
                className="bg-indigo-600 text-white p-4 rounded-lg shadow-lg"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 80%, 95% 100%, 0 100%)",
                }}
              >
                <div className="font-bold text-5xl">16</div>
                <div className="text-sm font-medium leading-tight">
                  Years of
                  <br />
                  Experience
                </div>
              </div>
            </div> */}
          </div>

          {/* Right side with text and features */}
          <div className="w-full lg:w-1/2 lg:pl-16">
            <div className="text-teal-500 font-medium mb-2">GET TO KNOW US</div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Grow your skills learn with us from anywhere
            </h2>

            <p className="text-gray-600 mb-10">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {/* Feature 1 */}
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-3 bg-red-400 rounded-full p-2">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <span className="font-medium">Expert trainers</span>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-3 bg-purple-500 rounded-full p-2">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <span className="font-medium">Online learning</span>
              </div>

              {/* Feature 3 */}
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-3 bg-orange-400 rounded-full p-2">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <span className="font-medium">Lifetime access</span>
              </div>

              {/* Feature 4 */}
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-3 bg-teal-400 rounded-full p-2">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <span className="font-medium">Great results</span>
              </div>
            </div>

            <Link href="/about">
              <span className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-medium px-8 py-3 rounded-full transition-colors duration-300">
                DISCOVER MORE
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimarySection;
