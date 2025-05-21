"use client";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

if (typeof window !== "undefined") {
  gsap.registerPlugin(Draggable);
}

// ... QuoteIcon and BackgroundElements unchanged ...
// Quote icon updated to be more playful
const QuoteIcon = () => {
  return (
    <div className="w-14 h-14 flex items-center justify-center bg-blue-500 rounded-full border-4 border-yellow-300 shadow-md">
      <svg
        width="22"
        height="20"
        viewBox="0 0 18 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.5 8H2.5C2.1 8 1.75 7.85 1.45 7.55C1.15 7.25 1 6.9 1 6.5V1.5C1 1.1 1.15 0.75 1.45 0.45C1.75 0.15 2.1 0 2.5 0H7.5C7.9 0 8.25 0.15 8.55 0.45C8.85 0.75 9 1.1 9 1.5V6.5C9 6.9 8.85 7.25 8.55 7.55C8.25 7.85 7.9 8 7.5 8ZM16.5 8H11.5C11.1 8 10.75 7.85 10.45 7.55C10.15 7.25 10 6.9 10 6.5V1.5C10 1.1 10.15 0.75 10.45 0.45C10.75 0.15 11.1 0 11.5 0H16.5C16.9 0 17.25 0.15 17.55 0.45C17.85 0.75 18 1.1 18 1.5V6.5C18 6.9 17.85 7.25 17.55 7.55C17.25 7.85 16.9 8 16.5 8ZM7.5 16H2.5C2.1 16 1.75 15.85 1.45 15.55C1.15 15.25 1 14.9 1 14.5V9.5C1 9.1 1.15 8.75 1.45 8.45C1.75 8.15 2.1 8 2.5 8H7.5C7.9 8 8.25 8.15 8.55 8.45C8.85 8.75 9 9.1 9 9.5V14.5C9 14.9 8.85 15.25 8.55 15.55C8.25 15.85 7.9 16 7.5 16ZM16.5 16H11.5C11.1 16 10.75 15.85 10.45 15.55C10.15 15.25 10 14.9 10 14.5V9.5C10 9.1 10.15 8.75 10.45 8.45C10.75 8.15 11.1 8 11.5 8H16.5C16.9 8 17.25 8.15 17.55 8.45C17.85 8.75 18 9.1 18 9.5V14.5C18 14.9 17.85 15.25 17.55 15.55C17.25 15.85 16.9 16 16.5 16Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

// New Fun SVG Background Elements
const BackgroundElements = () => {
  return (
    <>
      {/* Floating Clouds */}
      <svg
        className="absolute top-0 left-0 w-full h-full z-0 opacity-20"
        viewBox="0 0 1200 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Cloud 1 - Top Left */}
        <g className="animate-float-slow">
          <path
            d="M120,100 C120,65 150,40 185,40 C200,15 240,15 260,40 C280,15 340,15 360,40 C380,20 420,20 440,40 C475,20 525,30 540,70 C560,60 580,70 585,85 C605,75 635,85 640,105 C660,90 690,100 690,130 C690,160 660,180 630,180 C630,195 610,210 585,210 C570,230 540,240 510,230 C495,250 455,260 420,240 C400,255 370,255 350,240 C315,265 265,265 230,240 C210,250 185,250 170,235 C135,255 95,240 80,215 C50,215 30,195 30,170 C30,145 50,125 75,125 C75,110 90,100 120,100 Z"
            fill="#E6F7FF"
            stroke="#B3E0FF"
            strokeWidth="2"
          />
        </g>

        {/* Cloud 2 - Top Right */}
        <g
          className="animate-float-slower"
          style={{ transformOrigin: "center" }}
        >
          <path
            d="M950,150 C950,115 980,90 1015,90 C1030,65 1070,65 1090,90 C1110,65 1170,65 1190,90 C1210,70 1250,70 1270,90 C1305,70 1355,80 1370,120 C1390,110 1410,120 1415,135 C1435,125 1465,135 1470,155 C1490,140 1520,150 1520,180 C1520,210 1490,230 1460,230 C1460,245 1440,260 1415,260 C1400,280 1370,290 1340,280 C1325,300 1285,310 1250,290 C1230,305 1200,305 1180,290 C1145,315 1095,315 1060,290 C1040,300 1015,300 1000,285 C965,305 925,290 910,265 C880,265 860,245 860,220 C860,195 880,175 905,175 C905,160 920,150 950,150 Z"
            fill="#E6F7FF"
            stroke="#B3E0FF"
            strokeWidth="2"
          />
        </g>

        {/* Stars */}
        <g className="animate-twinkle">
          <circle cx="200" cy="250" r="5" fill="#FFD700" />
          <circle cx="350" cy="150" r="4" fill="#FFD700" />
          <circle cx="500" cy="80" r="6" fill="#FFD700" />
          <circle cx="650" cy="280" r="5" fill="#FFD700" />
          <circle cx="800" cy="120" r="4" fill="#FFD700" />
          <circle cx="950" cy="320" r="6" fill="#FFD700" />
          <circle cx="1100" cy="200" r="5" fill="#FFD700" />
        </g>

        {/* Colorful Balloons */}
        <g className="animate-float-medium">
          <circle cx="150" cy="400" r="20" fill="#FF6B6B" />
          <path d="M150,420 L150,480" stroke="#FF6B6B" strokeWidth="2" />
        </g>
        <g className="animate-float-slow">
          <circle cx="1050" cy="350" r="25" fill="#5E72E4" />
          <path d="M1050,375 L1050,445" stroke="#5E72E4" strokeWidth="2" />
        </g>
        <g className="animate-float">
          <circle cx="600" cy="450" r="22" fill="#FFD166" />
          <path d="M600,472 L600,535" stroke="#FFD166" strokeWidth="2" />
        </g>

        {/* Rainbow Arc */}
        <path
          d="M600,500 C750,400 900,400 1050,500"
          fill="none"
          stroke="#FF6B6B"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M600,515 C750,415 900,415 1050,515"
          fill="none"
          stroke="#FFD166"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M600,530 C750,430 900,430 1050,530"
          fill="none"
          stroke="#06D6A0"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M600,545 C750,445 900,445 1050,545"
          fill="none"
          stroke="#118AB2"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M600,560 C750,460 900,460 1050,560"
          fill="none"
          stroke="#5E72E4"
          strokeWidth="10"
          strokeLinecap="round"
        />
      </svg>
    </>
  );
};

interface TestimonialCardProps {
  name: string;
  position: string;
  content: string;
  rating: number;
  image: string;
}

const TestimonialCard = ({
  name,
  position,
  content,
  rating,
  image,
}: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-3xl p-8 relative h-full border-4 border-blue-400">
      <p className="text-gray-700 mb-6 text-lg font-medium rounded-xl bg-blue-50 p-4 border-2 border-blue-100">
        {content}
      </p>
      <div className="flex items-center">
        <QuoteIcon />
        <div className="ml-4">
          <h4 className="font-bold text-xl text-blue-600">{name}</h4>
          <p className="text-purple-500 text-md">{position}</p>
        </div>
      </div>
    </div>
  );
};

const ClientReview = () => {
  const testimonials = [
    {
      id: 1,
      name: "James Ickres",
      position: "Happy Student",
      content:
        "I love the fun activities in my classes! The teachers are super nice and I learned so many cool things!",
      rating: 5,
      image: "/images/testimonial-1.jpg",
    },
    {
      id: 2,
      name: "Aleesha Brown",
      position: "Awesome Learner",
      content:
        "The games we play while learning are my favorite part. I made new friends and can't wait for class every day!",
      rating: 5,
      image: "/images/testimonial-2.jpg",
    },
    {
      id: 3,
      name: "Michael Johnson",
      position: "Creative Kid",
      content:
        "I used to think school was boring, but these classes are super fun! I get to create cool projects and play while learning!",
      rating: 4,
      image: "/images/testimonial-1.jpg",
    },
    {
      id: 4,
      name: "Sarah Williams",
      position: "Young Explorer",
      content:
        "My mom says I'm always talking about what I learned in class. I love all the colorful books and fun games we play!",
      rating: 5,
      image: "/images/testimonial-2.jpg",
    },
  ];

  const carouselWrapperRef = useRef(null);
  const carouselRef = useRef(null);
  const sliderRef = useRef(null);
  const draggableInstanceRef = useRef<Draggable | null>(null);
  const snapAnimationRef = useRef<gsap.core.Tween | null>(null);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [cardGap, setCardGap] = useState(20);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile/desktop view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Setup carousel (no autoplay)
  useEffect(() => {
    if (
      typeof window === "undefined" ||
      !carouselRef.current ||
      !sliderRef.current
    )
      return;

    const setupCarousel = () => {
      const wrapper = carouselWrapperRef.current;
      if (!wrapper) return;
      const wrapperWidth = (wrapper as HTMLElement).offsetWidth;

      const newCardWidth =
        window.innerWidth < 768 ? wrapperWidth : Math.min(500, wrapperWidth);
      setCardWidth(newCardWidth);

      if (draggableInstanceRef.current) {
        draggableInstanceRef.current.kill();
      }
      if (snapAnimationRef.current) {
        gsap.killTweensOf(sliderRef.current);
      }
      gsap.set(sliderRef.current, { x: 0 });

      if (!sliderRef.current) return;
      const slideItems = (sliderRef.current as HTMLElement).children;
      Array.from(slideItems).forEach((item) => {
        gsap.set(item as Element, {
          width: newCardWidth,
          marginRight: cardGap,
        });
      });

      const totalMovement =
        (newCardWidth + cardGap) * (testimonials.length - 1);

      draggableInstanceRef.current = Draggable.create(sliderRef.current, {
        type: "x",
        inertia: true,
        trigger: carouselRef.current,
        bounds: {
          minX: -totalMovement,
          maxX: 0,
        },
        edgeResistance: 0.85,
        throwResistance: 0.85,
        overshootTolerance: 0.5,
        dragClickables: true,
        onDragStart: () => {
          gsap.set(carouselRef.current, { cursor: "grabbing" });
        },
        onDrag: function () {
          gsap.set(carouselRef.current, { cursor: "grabbing" });
        },
        onDragEnd: function () {
          const x = this.endX;
          const slideUnit = newCardWidth + cardGap;
          const slideIndex = Math.round(Math.abs(Number(x)) / slideUnit);
          snapAnimationRef.current = gsap.to(sliderRef.current, {
            x: -slideIndex * slideUnit,
            duration: 0.4,
            ease: "power2.out",
            onComplete: () => {
              setCurrentSlide(slideIndex);
              gsap.set(carouselRef.current, { cursor: "grab" });
            },
          });
        },
        onThrowComplete: function () {
          const x = gsap.getProperty(sliderRef.current, "x");
          const slideUnit = newCardWidth + cardGap;
          const slideIndex = Math.round(Math.abs(Number(x)) / slideUnit);
          setCurrentSlide(slideIndex);
        },
      })[0];

      if (draggableInstanceRef.current) {
        draggableInstanceRef.current.vars.onPress = function () {
          gsap.set(carouselRef.current, { cursor: "grabbing" });
        };
        draggableInstanceRef.current.vars.onRelease = function () {
          gsap.set(carouselRef.current, { cursor: "grab" });
        };
      }
    };

    setupCarousel();

    const handleResize = () => {
      setupCarousel();
      goToSlide(currentSlide, false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (draggableInstanceRef.current) {
        draggableInstanceRef.current.kill();
      }
      if (snapAnimationRef.current) {
        gsap.killTweensOf(sliderRef.current);
      }
    };
    // eslint-disable-next-line
  }, [testimonials.length, cardGap, isMobile]);

  const goToSlide = (index: number, animated = true) => {
    const slideUnit = cardWidth + cardGap;
    const targetX = -index * slideUnit;
    gsap.to(sliderRef.current, {
      x: targetX,
      duration: animated ? 0.5 : 0,
      ease: "power2.out",
      onComplete: () => {
        setCurrentSlide(index);
      },
    });
  };

  const handleNavButtonClick = (direction: string) => {
    let nextSlide;
    if (direction === "prev") {
      nextSlide =
        (currentSlide - 1 + testimonials.length) % testimonials.length;
    } else {
      nextSlide = (currentSlide + 1) % testimonials.length;
    }
    goToSlide(nextSlide);
  };

  const handleDotClick = (index: number) => {
    goToSlide(index);
  };

  return (
    <div className="bg-transparent py-16 relative overflow-hidden">
      <BackgroundElements />
      <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-200 rounded-br-full z-0 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-pink-200 rounded-tl-full z-0 opacity-50"></div>
      <div className="absolute top-1/4 right-20 w-24 h-24 bg-green-200 rounded-full z-0 opacity-50"></div>
      <div className="absolute bottom-1/4 left-20 w-20 h-20 bg-purple-200 rounded-full z-0 opacity-50"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          <div className="w-full lg:w-1/2">
            <h3
              className="text-pink-500 font-bold mb-4 text-xl"
              style={{ textShadow: "0 1px 2px rgba(0,0,0,0.1)" }}
            >
              WHAT KIDS ARE SAYING
            </h3>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 leading-tight mb-6"
              style={{ textShadow: "2px 2px 4px rgba(0,105,255,0.2)" }}
            >
              Our Friends Love Learning With Us!
            </h2>
            <p
              className="text-purple-700 mb-8 text-lg"
              style={{ textShadow: "0 1px 1px rgba(128,0,128,0.1)" }}
            >
              Hear from our happy students about their exciting adventures in
              learning!
            </p>
            <div className="relative w-20 h-20 animate-bounce">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <polygon
                  points="30,10 70,10 90,30 50,95 10,30"
                  fill="#FFD166"
                  stroke="#FF9F1C"
                  strokeWidth="3"
                />
                <polygon points="30,10 70,10 50,50" fill="#FF9F1C" />
                <rect x="40" y="75" width="20" height="25" fill="#6A4C93" />
                <polygon points="40,75 60,75 50,95" fill="#000" />
              </svg>
            </div>
          </div>
          <div
            className="w-full lg:w-2/3 overflow-hidden relative"
            ref={carouselWrapperRef}
          >
            <div
              className="relative overflow-hidden cursor-grab touch-pan-y select-none"
              ref={carouselRef}
              style={{
                WebkitTapHighlightColor: "transparent",
                touchAction: "pan-y",
              }}
            >
              <div className="absolute top-0 bottom-0 left-0 right-0 z-30 pointer-events-none flex items-center justify-between px-2">
                <button
                  onClick={() => handleNavButtonClick("prev")}
                  className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all pointer-events-auto"
                  aria-label="Previous testimonial"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 18L9 12L15 6"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => handleNavButtonClick("next")}
                  className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all pointer-events-auto"
                  aria-label="Next testimonial"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 6L15 12L9 18"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="absolute left-0 top-0 w-12 h-full bg-gradient-to-r from-blue-50 to-transparent z-10 pointer-events-none"></div>
              <div
                ref={sliderRef}
                className="flex will-change-transform touch-pan-y"
                style={{
                  touchAction: "pan-y",
                }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="px-2 flex-shrink-0"
                    style={{
                      width: isMobile ? "100%" : "500px",
                    }}
                  >
                    <TestimonialCard
                      name={testimonial.name}
                      position={testimonial.position}
                      content={testimonial.content}
                      rating={testimonial.rating}
                      image={testimonial.image}
                    />
                  </div>
                ))}
              </div>
              <div className="absolute right-0 top-0 w-12 h-full bg-gradient-to-l from-blue-50 to-transparent z-10 pointer-events-none"></div>
            </div>
            <div className="flex justify-center mt-6 z-20">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-4 h-4 mx-1.5 rounded-full transition-all duration-300 ease-in-out ${
                    index === currentSlide
                      ? "bg-blue-500 transform scale-125"
                      : "bg-blue-200 hover:bg-blue-300"
                  }`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex justify-center mt-4">
              <div className="px-4 py-2 bg-blue-100 rounded-full flex items-center text-blue-600 text-sm">
                <svg
                  className="w-5 h-5 mr-2 animate-pulse"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Swipe to see more
                <svg
                  className="w-5 h-5 ml-2 animate-pulse"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ...styles unchanged... */}
      <style jsx global>{`
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes float-slower {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes float-medium {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-25px);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-30px);
          }
        }
        @keyframes twinkle {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.3;
          }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: float-slower 12s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 6s ease-in-out infinite;
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .animate-twinkle {
          animation: twinkle 4s ease-in-out infinite;
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        html {
          scroll-behavior: smooth;
        }
        * {
          -webkit-tap-highlight-color: transparent;
        }
        .will-change-transform {
          will-change: transform;
        }
      `}</style>
    </div>
  );
};

export default ClientReview;
