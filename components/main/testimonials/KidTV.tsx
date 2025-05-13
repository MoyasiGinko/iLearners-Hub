"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function KidFriendlyTV() {
  const [isOn, setIsOn] = useState(true);
  const [volume, setVolume] = useState(50);
  const [channel, setChannel] = useState(1);
  const [showStatic, setShowStatic] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Video sources for different channels
  const videoSources = ["/videos/sample2.webm", "/videos/sample2.webm"];

  // Get current video source based on channel
  const currentVideoSource = videoSources[channel - 1] || videoSources[0];

  // Antenna wiggle animation
  const antennaAnimation = {
    wiggle: {
      rotateZ: [0, 5, -5, 3, -2, 0],
      transition: { repeat: Infinity, duration: 5, repeatDelay: 3 },
    },
  };

  // Update video volume when TV volume changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume / 100;
    }
  }, [volume]);

  // Handle TV power toggle
  const togglePower = () => {
    if (isOn) {
      setShowStatic(true);
      setTimeout(() => {
        setIsOn(false);
        setShowStatic(false);
        if (videoRef.current) {
          videoRef.current.pause();
        }
      }, 500);
    } else {
      setIsOn(true);
      setShowStatic(true);
      setTimeout(() => {
        setShowStatic(false);
        if (videoRef.current && currentVideoSource) {
          videoRef.current.play().catch((error) => {
            console.log("Video playback failed:", error);
          });
        }
      }, 1000);
    }
  };

  // Handle channel change
  interface ChangeChannelProps {
    direction: "up" | "down";
  }

  const changeChannel = (direction: ChangeChannelProps["direction"]): void => {
    if (!isOn) return;

    setShowStatic(true);
    // Pause the current video
    if (videoRef.current) {
      videoRef.current.pause();
    }

    setTimeout(() => {
      setChannel((prev: number) => {
        if (direction === "up") return prev < 9 ? prev + 1 : 1;
        return prev > 1 ? prev - 1 : 9;
      });
      setShowStatic(false);

      // Play the new video after channel change
      if (videoRef.current) {
        // Need to load the new source before playing
        videoRef.current.load();
        videoRef.current.play().catch((error) => {
          console.log("Video playback failed:", error);
        });
      }
    }, 300);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center min-h-[600px] py-16 bg-gradient-to-b from-blue-100 to-purple-100">
      <div className="relative">
        {/* TV Base/Stand */}
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-64 h-12 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 rounded-b-3xl z-0"></div>

        {/* Main TV Body */}
        <motion.div
          className="relative w-[350px] h-[300px] bg-gradient-to-b from-purple-500 to-purple-700 rounded-3xl p-6 border-8 border-yellow-400 shadow-2xl"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        >
          {/* TV Screen Area */}
          <div className="relative w-full h-[200px] bg-gray-900 rounded-2xl overflow-hidden border-8 border-gray-800 flex justify-center items-center">
            {/* TV Static or Off State */}
            {!isOn && (
              <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
              </div>
            )}

            {/* TV Static Animation */}
            {showStatic && (
              <div className="absolute inset-0 bg-gray-800 opacity-80 overflow-hidden z-20">
                <div
                  className="w-full h-full opacity-30"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>
            )}

            {/* Video Player */}
            {isOn && (
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover z-10"
                src={currentVideoSource}
                playsInline
                autoPlay={isOn}
                loop
              />
            )}

            {/* Channel indicator overlay when video is playing */}
            {isOn && !showStatic && currentVideoSource && (
              <div className="absolute top-2 right-2 bg-black bg-opacity-50 px-2 py-1 rounded-lg z-20">
                <span className="text-white font-bold text-sm">
                  CH {channel}
                </span>
              </div>
            )}

            {/* Screen Reflection Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent opacity-10 rounded-xl z-30"></div>

            {/* Scan Line Effect */}
            {isOn && (
              <div
                className="absolute inset-0 pointer-events-none z-30"
                style={{
                  backgroundImage:
                    "linear-gradient(0deg, transparent 50%, rgba(255,255,255,0.05) 50%)",
                  backgroundSize: "4px 4px",
                  mixBlendMode: "overlay",
                }}
              ></div>
            )}
          </div>

          {/* TV Controls Area */}
          <div className="mt-4 flex justify-between items-center">
            {/* Volume Control */}
            <div className="flex flex-col items-center space-y-1">
              <span className="text-xs font-bold text-yellow-300">VOLUME</span>
              <div className="flex space-x-2">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setVolume((prev) => Math.max(0, prev - 10))}
                  className="w-6 h-6 rounded-full bg-yellow-400 text-purple-800 flex items-center justify-center font-bold text-xs"
                  disabled={!isOn}
                >
                  -
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setVolume((prev) => Math.min(100, prev + 10))}
                  className="w-6 h-6 rounded-full bg-yellow-400 text-purple-800 flex items-center justify-center font-bold text-xs"
                  disabled={!isOn}
                >
                  +
                </motion.button>
              </div>
            </div>

            {/* Power Button */}
            <motion.button
              className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${
                isOn
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-green-500 hover:bg-green-600"
              }`}
              whileTap={{ scale: 0.9 }}
              onClick={togglePower}
            >
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </motion.button>

            {/* Channel Control */}
            <div className="flex flex-col items-center space-y-1">
              <span className="text-xs font-bold text-yellow-300">CHANNEL</span>
              <div className="flex space-x-2">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => changeChannel("down")}
                  className="w-6 h-6 rounded-full bg-yellow-400 text-purple-800 flex items-center justify-center font-bold text-xs"
                  disabled={!isOn}
                >
                  -
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => changeChannel("up")}
                  className="w-6 h-6 rounded-full bg-yellow-400 text-purple-800 flex items-center justify-center font-bold text-xs"
                  disabled={!isOn}
                >
                  +
                </motion.button>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-3 bg-yellow-400 rounded-b-lg"></div>

          {/* TV Speaker Grills */}
          <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 w-2 h-32 bg-yellow-400 rounded-l-lg flex flex-col justify-center items-center p-1">
            <div className="grid grid-rows-5 gap-1 h-full w-full">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="bg-purple-800 rounded-full"></div>
              ))}
            </div>
          </div>
          <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-2 h-32 bg-yellow-400 rounded-r-lg flex flex-col justify-center items-center p-1">
            <div className="grid grid-rows-5 gap-1 h-full w-full">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="bg-purple-800 rounded-full"></div>
              ))}
            </div>
          </div>

          {/* TV Logo */}
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-yellow-400 px-4 py-1 rounded-t-xl font-bold text-purple-800 text-sm tracking-wider">
            KID TV
          </div>
        </motion.div>

        {/* TV Antennas */}
        <motion.div
          className="absolute -top-10 left-1/4 w-1 h-12 bg-gradient-to-t from-gray-700 to-gray-500 rounded-full transform origin-bottom"
          variants={antennaAnimation}
          animate="wiggle"
        >
          <div className="absolute -top-2 -left-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
        </motion.div>
        <motion.div
          className="absolute -top-10 right-1/4 w-1 h-12 bg-gradient-to-t from-gray-700 to-gray-500 rounded-full transform origin-bottom"
          variants={antennaAnimation}
          animate="wiggle"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="absolute -top-2 -left-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
        </motion.div>

        {/* Volume Indicator */}
        {isOn && (
          <div className="absolute -right-16 top-1/3 transform -translate-y-1/2 w-6 h-32 bg-gray-800 rounded-lg overflow-hidden border-2 border-yellow-400">
            <div
              className="w-full bg-gradient-to-t from-green-500 to-yellow-400 rounded-b-md transition-all duration-300"
              style={{ height: `${volume}%`, position: "absolute", bottom: 0 }}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
}
