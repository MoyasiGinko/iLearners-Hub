"use client";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { BackgroundElements, QuoteIcon } from "./BackgroundElements";

if (typeof window !== "undefined") {
  gsap.registerPlugin(Draggable);
}

interface TestimonialCardProps {
  name: string;
  position: string;
  content: string;
}

const TestimonialCard = ({ name, position, content }: TestimonialCardProps) => {
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
    },
    {
      id: 2,
      name: "Aleesha Brown",
      position: "Awesome Learner",
      content:
        "The games we play while learning are my favorite part. I made new friends and can't wait for class every day!",
    },
    {
      id: 3,
      name: "Michael Johnson",
      position: "Creative Kid",
      content:
        "I used to think school was boring, but these classes are super fun! I get to create cool projects and play while learning!",
    },
    {
      id: 4,
      name: "Sarah Williams",
      position: "Young Explorer",
      content:
        "My mom says I'm always talking about what I learned in class. I love all the colorful books and fun games we play!",
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
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false); // New state for hover
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const autoPlayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play functionality - now considers both isAutoPlaying and isHovering
  useEffect(() => {
    if (!isAutoPlaying || isHovering) {
      // Clear interval if auto-play is disabled or user is hovering
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current);
        autoPlayIntervalRef.current = null;
      }
      return;
    }

    const startAutoPlay = () => {
      autoPlayIntervalRef.current = setInterval(() => {
        setCurrentSlide((prevSlide) => {
          let nextSlide = prevSlide + direction;

          // Check if we need to reverse direction
          if (nextSlide >= testimonials.length - 1) {
            setDirection(-1);
            return testimonials.length - 1;
          } else if (nextSlide <= 0) {
            setDirection(1);
            return 0;
          }

          return nextSlide;
        });
      }, 3000); // Change slide every 3 seconds
    };

    startAutoPlay();

    return () => {
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current);
      }
    };
  }, [isAutoPlaying, isHovering, direction, testimonials.length]);

  // Auto-scroll to current slide when currentSlide changes from auto-play
  useEffect(() => {
    if (isAutoPlaying && !isHovering && cardWidth > 0) {
      goToSlide(currentSlide, true);
    }
  }, [currentSlide, cardWidth, isAutoPlaying, isHovering]);

  // Detect mobile/desktop view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Hover handlers
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  // Setup carousel
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
          // Only stop auto-play permanently when dragging starts
          setIsAutoPlaying(false);
          if (autoPlayIntervalRef.current) {
            clearInterval(autoPlayIntervalRef.current);
          }
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

      // Removed onPress handler - no longer stops auto-play on simple press/click
      if (draggableInstanceRef.current) {
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
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current);
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
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="relative overflow-hidden cursor-grab touch-pan-y select-none"
              ref={carouselRef}
              style={{
                WebkitTapHighlightColor: "transparent",
                touchAction: "pan-y",
              }}
            >
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
                    />
                  </div>
                ))}
              </div>
              <div className="absolute right-0 top-0 w-12 h-full bg-gradient-to-l from-blue-50 to-transparent z-10 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
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
