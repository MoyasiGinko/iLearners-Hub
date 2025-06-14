"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function KidFriendlyTV() {
  const [isOn, setIsOn] = useState(true);
  const [volume, setVolume] = useState(50);
  const [channel, setChannel] = useState(1);
  const [showStatic, setShowStatic] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false); // Added state for play/pause
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

  // Handle play/pause toggle
  const togglePlayPause = () => {
    if (!isOn) return;

    if (isPlaying) {
      if (videoRef.current) {
        videoRef.current.pause();
      }
      setIsPlaying(false);
    } else {
      if (videoRef.current) {
        videoRef.current.play().catch((error) => {
          console.log("Video playback failed:", error);
        });
      }
      setIsPlaying(true);
    }
  };

  // Handle TV power toggle
  const togglePower = () => {
    if (isOn) {
      setShowStatic(true);
      setTimeout(() => {
        setIsOn(false);
        setIsPlaying(false);
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
        // Don't automatically play - keep paused state
        if (videoRef.current) {
          videoRef.current.load();
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
      setIsPlaying(false);

      // Load the new video after channel change but don't play automatically
      if (videoRef.current) {
        videoRef.current.load();
      }
    }, 300);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center min-h-[800px] py-0 bg-transparent">
      <div className="relative flex items-center justify-center mx-auto w-full h-full">
        {/* Main TV Body */}
        <motion.div
          className="relative w-full sm:w-[500px] h-[400px] bg-gradient-to-b from-purple-500 to-purple-700 rounded-3xl p-4 border-8 border-yellow-400 shadow-2xl"
          // animate={{ scale: [1, 1.02, 1] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        >
          {/* TV Base/Stand */}
          <motion.div className="absolute -bottom-6 left-1/4 w-6 h-6 bg-yellow-400 rounded-full transform origin-bottom"></motion.div>
          <motion.div className="absolute -bottom-6 right-1/4 w-6 h-6 bg-yellow-400 rounded-full transform origin-bottom"></motion.div>

          {/* TV Antennas */}
          <motion.div
            className="absolute -top-14 left-1/4 w-2 h-16 bg-gradient-to-t from-gray-700 to-gray-500 rounded-full transform origin-bottom"
            variants={antennaAnimation}
            animate="wiggle"
          >
            <div className="absolute -top-3 -left-1.5 w-5 h-5 bg-red-500 rounded-full animate-pulse"></div>
          </motion.div>
          <motion.div
            className="absolute -top-14 right-1/4 w-2 h-16 bg-gradient-to-t from-gray-700 to-gray-500 rounded-full transform origin-bottom"
            variants={antennaAnimation}
            animate="wiggle"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="absolute -top-3 -left-1.5 w-5 h-5 bg-red-500 rounded-full animate-pulse"></div>
          </motion.div>
          {/* TV Screen Area */}
          <div className="relative w-full h-[260px] bg-gray-900 rounded-2xl overflow-hidden border-8 border-gray-800 flex justify-center items-center">
            {/* TV Static or Off State */}
            {!isOn && (
              <div className="absolute inset-0 bg-gray-900 flex flex-col items-center justify-center space-y-4">
                <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                <p className="text-white text-lg px-2 font-bold">
                  Press <span className="text-green-500">power button</span> to
                  start TV
                </p>
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
                autoPlay={false}
                loop
              />
            )}

            {/* Play/Pause Overlay when video is paused */}
            {isOn && !isPlaying && !showStatic && (
              <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/70 bg-opacity-30">
                <div className="text-white text-center text-lg font-bold">
                  Press <span className="text-blue-500">blue</span> button to
                  play
                </div>
              </div>
            )}

            {/* Channel indicator overlay when video is showing */}
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
          <div className="mt-2 flex justify-between items-center w-full sm:w-3/4 lg:w-5/6 mx-auto">
            {/* Volume Control */}
            <div className="flex flex-col items-center space-y-2">
              <span className="text-xs sm:text-sm font-bold text-yellow-300">
                VOLUME
              </span>
              <div className="flex space-x-2 sm:space-x-3">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setVolume((prev) => Math.max(0, prev - 10))}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-b from-yellow-300 to-yellow-500 text-purple-800 flex items-center justify-center font-bold text-sm sm:text-lg shadow-lg border-2 border-yellow-200 transform hover:translate-y-0.5 active:translate-y-1 transition-transform"
                  style={{
                    boxShadow: "0 4px 0 0 rgba(202, 138, 4, 1)",
                  }}
                  disabled={!isOn}
                >
                  -
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setVolume((prev) => Math.min(100, prev + 10))}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-b from-yellow-300 to-yellow-500 text-purple-800 flex items-center justify-center font-bold text-sm sm:text-lg shadow-lg border-2 border-yellow-200 transform hover:translate-y-0.5 active:translate-y-1 transition-transform"
                  style={{
                    boxShadow: "0 4px 0 0 rgba(202, 138, 4, 1)",
                  }}
                  disabled={!isOn}
                >
                  +
                </motion.button>
              </div>
            </div>

            {/* Play/Pause Button */}
            <div className="flex flex-col items-center space-y-1">
              <motion.button
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-lg bg-gradient-to-b from-blue-400 to-blue-600 border-2 border-blue-300 transform hover:translate-y-0.5 active:translate-y-1 transition-transform"
                style={{
                  boxShadow: "0 4px 0 0 rgba(30, 64, 175, 1)",
                }}
                whileTap={{ scale: 0.9 }}
                onClick={togglePlayPause}
                disabled={!isOn}
              >
                <div className="text-white text-center items-center text-lg sm:text-2xl font-bold">
                  {isPlaying ? "❚❚" : "▶"}
                </div>
              </motion.button>
              <span className="text-xs text-center sm:text-sm text-white font-semibold">
                {isPlaying ? "Pause" : "Play"}
              </span>
            </div>

            {/* Power Button */}
            <div className="flex flex-col items-center space-y-1">
              <motion.button
                className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-lg border-2 transform hover:translate-y-0.5 active:translate-y-1 transition-transform ${
                  isOn
                    ? "bg-gradient-to-b from-red-400 to-red-600 border-red-300"
                    : "bg-gradient-to-b from-green-400 to-green-600 border-green-300"
                }`}
                style={{
                  boxShadow: isOn
                    ? "0 4px 0 0 rgba(185, 28, 28, 1)"
                    : "0 4px 0 0 rgba(22, 101, 52, 1)",
                }}
                whileTap={{ scale: 0.9 }}
                onClick={togglePower}
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center">
                  <div
                    className={`w-4 h-4 sm:w-6 sm:h-6 ${
                      isOn ? "bg-red-500" : "bg-green-500"
                    } rounded-full`}
                  ></div>
                </div>
              </motion.button>
              <span className="text-xs text-center sm:text-sm text-white font-semibold">
                {isOn ? "Off" : "On"}
              </span>
            </div>

            {/* Channel Control */}
            <div className="flex flex-col items-center space-y-2">
              <span className="text-xs sm:text-sm font-bold text-yellow-300">
                CHANNEL
              </span>
              <div className="flex space-x-2 sm:space-x-3">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => changeChannel("down")}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-b from-yellow-300 to-yellow-500 text-purple-800 flex items-center justify-center font-bold text-sm sm:text-lg shadow-lg border-2 border-yellow-200 transform hover:translate-y-0.5 active:translate-y-1 transition-transform"
                  style={{
                    boxShadow: "0 4px 0 0 rgba(202, 138, 4, 1)",
                  }}
                  disabled={!isOn}
                >
                  -
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => changeChannel("up")}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-b from-yellow-300 to-yellow-500 text-purple-800 flex items-center justify-center font-bold text-sm sm:text-lg shadow-lg border-2 border-yellow-200 transform hover:translate-y-0.5 active:translate-y-1 transition-transform"
                  style={{
                    boxShadow: "0 4px 0 0 rgba(202, 138, 4, 1)",
                  }}
                  disabled={!isOn}
                >
                  +
                </motion.button>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-yellow-400 rounded-b-lg"></div>

          {/* TV Speaker Grills */}
          <div className="absolute hidden  top-1/2 -left-6 transform -translate-y-1/2 w-4 h-48 bg-yellow-400 rounded-l-lg xl:flex flex-col justify-center items-center p-1">
            <div className="grid grid-rows-8 gap-1 h-full w-full">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-purple-800 rounded-full"></div>
              ))}
            </div>
          </div>
          <div className="absolute hidden  top-1/2 -right-6 transform -translate-y-1/2 w-4 h-48 bg-yellow-400 rounded-r-lg xl:flex flex-col justify-center items-center p-1">
            <div className="grid grid-rows-8 gap-1 h-full w-full">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-purple-800 rounded-full"></div>
              ))}
            </div>
          </div>

          {/* TV Logo */}
          {/* <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-yellow-400 px-6 py-2 rounded-t-xl font-bold text-purple-800 text-base tracking-wider border-2 border-yellow-300">
            MY TV
          </div> */}
          {/* Volume Indicator */}
          {isOn && (
            <div className="absolute hidden md:block lg:hidden xl:block -right-20 top-1/3 transform -translate-y-1/2 w-8 h-40 bg-gray-800 rounded-lg overflow-hidden border-2 border-yellow-400">
              <div
                className="w-full bg-gradient-to-t from-green-500 to-yellow-400 rounded-b-md transition-all duration-300"
                style={{
                  height: `${volume}%`,
                  position: "absolute",
                  bottom: 0,
                }}
              ></div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
