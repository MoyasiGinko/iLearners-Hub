"use client";
import React, { useState } from "react";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const categories = [
    { name: "Business Management" },
    { name: "Arts and Design" },
    { name: "Computer Science" },
    { name: "Personal Development" },
    { name: "Business and Finance" },
    { name: "Video and Photography" },
  ];

  return (
    <div className="w-full max-w-6xl bg-transparent mx-auto px-3 sm:px-4 md:px-6 relative z-10">
      <div className="bg-gradient-to-r from-gray-900 to-teal-600 rounded-xl overflow-hidden px-3 sm:px-6 lg:px-10 shadow-xl">
        <div className="flex flex-col md:flex-row">
          {/* Left Section */}
          <div className="pt-6 px-4 sm:pt-6 sm:px-6 md:p-8 min-h-[250px] sm:min-h-[300px] md:min-h-[440px] md:w-1/2 flex items-center justify-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4">
                Sign up for a free trial lesson by zoom
              </h2>
              <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">
                Quisque commodo, magna nec accu mani euismod tellus mi ornare
                enim, quis congue elit.
              </p>
              <div className="flex space-x-2">
                {["🎨", "🔍", "🌟", "🧩", "🎯"].map((emoji, i) => (
                  <span
                    key={i}
                    className="text-xl sm:text-2xl animate-bounce"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    {emoji}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="pb-6 px-4 sm:pb-6 sm:px-6 md:p-8 md:w-1/2 flex items-center justify-center">
            <div className="w-full bg-white bg-opacity-90 p-3 sm:p-4 md:p-6 rounded-3xl border-4 border-dashed border-yellow-400 shadow-lg">
              <div className="mb-3 sm:mb-4">
                <label className="block text-teal-600 text-sm sm:text-base font-medium mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="What should we call you?"
                  className="w-full p-2 sm:p-3 text-sm sm:text-base rounded-xl bg-blue-50 border-2 border-blue-300 focus:border-purple-400 focus:outline-none"
                />
              </div>

              <div className="mb-3 sm:mb-4">
                <label className="block text-teal-600 text-sm sm:text-base font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Where can we reach you?"
                  className="w-full p-2 sm:p-3 text-sm sm:text-base rounded-xl bg-blue-50 border-2 border-blue-300 focus:border-purple-400 focus:outline-none"
                />
              </div>

              <div className="mb-4 sm:mb-5">
                <label className="block text-teal-600 text-sm sm:text-base font-medium mb-1">
                  Pick Your Favorite Subject
                </label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full p-2 sm:p-3 text-sm sm:text-base rounded-xl bg-blue-50 border-2 border-blue-300 focus:border-purple-400 focus:outline-none appearance-none"
                >
                  <option value="" disabled>
                    Choose something fun to learn!
                  </option>
                  {categories.map((category, index) => (
                    <option
                      key={index}
                      value={category.name.toLowerCase().replace(/\s+/g, "-")}
                    >
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={handleSubmit}
                className="bg-gradient-to-r from-pink-500 to-orange-400 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full hover:from-pink-600 hover:to-orange-500 transition duration-300 shadow-md text-xs sm:text-sm md:text-base flex items-center justify-center w-full"
              >
                Let's Start Learning! 🎉✨
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
