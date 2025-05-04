"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import {
  FaChild,
  FaUser,
  FaBook,
  FaPhone,
  FaEnvelope,
  FaComments,
} from "react-icons/fa";

type FormData = {
  studentName: string;
  studentAge: number;
  parentName: string;
  email: string;
  phone: string;
  course: string;
  message: string;
  preferredTime: string;
};

const RegistrationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      // Here you would connect to your API to send the form data
      // For now, we'll just simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted:", data);
      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="bg-blue-500 py-6 px-8">
            <h1 className="text-3xl font-bold text-white text-center">
              Join Our Learning Adventure!
            </h1>
            <p className="text-white text-center mt-2">
              Fill out this form to register for a course or ask questions
            </p>
          </div>

          {isSuccess ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="p-8 text-center"
            >
              <div className="bg-green-100 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-green-600 mb-2">
                  Yay! We got your message!
                </h2>
                <p className="text-gray-700">
                  Our friendly team will get back to you very soon. Get ready
                  for an amazing learning journey!
                </p>
                <motion.div
                  animate={{ rotate: [0, 10, -10, 10, 0] }}
                  transition={{ repeat: 1, duration: 0.5 }}
                  className="text-6xl mx-auto mt-4 text-yellow-500"
                >
                  😊
                </motion.div>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-6">
              <div className="bg-yellow-100 p-4 rounded-lg mb-6 border-2 border-dashed border-yellow-300">
                <h2 className="text-xl font-bold text-yellow-700 flex items-center">
                  <FaChild className="mr-2" /> Student Information
                </h2>
                <div className="mt-4 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Student's Name
                    </label>
                    <input
                      {...register("studentName", {
                        required: "Please tell us your name",
                      })}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your name"
                    />
                    {errors.studentName && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.studentName.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Student's Age
                    </label>
                    <input
                      type="number"
                      {...register("studentAge", {
                        required: "Age is required",
                        min: { value: 3, message: "Minimum age is 3" },
                        max: { value: 18, message: "Maximum age is 18" },
                      })}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="How old are you?"
                    />
                    {errors.studentAge && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.studentAge.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="bg-blue-100 p-4 rounded-lg border-2 border-dashed border-blue-300">
                <h2 className="text-xl font-bold text-blue-700 flex items-center">
                  <FaUser className="mr-2" /> Parent Information
                </h2>
                <div className="mt-4 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Parent's Name
                    </label>
                    <input
                      {...register("parentName", {
                        required: "Parent name is required",
                      })}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Parent/Guardian's name"
                    />
                    {errors.parentName && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.parentName.message}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="flex items-center text-sm font-medium text-gray-700">
                        <FaEnvelope className="mr-1" /> Email
                      </label>
                      <input
                        type="email"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Please enter a valid email",
                          },
                        })}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="flex items-center text-sm font-medium text-gray-700">
                        <FaPhone className="mr-1" /> Phone
                      </label>
                      <input
                        {...register("phone", {
                          required: "Phone number is required",
                          pattern: {
                            value: /^[0-9\+\-\(\) ]+$/,
                            message: "Please enter a valid phone number",
                          },
                        })}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your phone number"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-100 p-4 rounded-lg border-2 border-dashed border-green-300">
                <h2 className="text-xl font-bold text-green-700 flex items-center">
                  <FaBook className="mr-2" /> Course Information
                </h2>
                <div className="mt-4 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Which course are you interested in?
                    </label>
                    <select
                      {...register("course", {
                        required: "Please select a course",
                      })}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select a course</option>
                      <option value="math">Fun Math Adventures</option>
                      <option value="science">Science Explorers</option>
                      <option value="art">Creative Art & Crafts</option>
                      <option value="coding">Coding for Kids</option>
                      <option value="music">Music & Rhythm</option>
                      <option value="languages">
                        Languages for Little Ones
                      </option>
                    </select>
                    {errors.course && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.course.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Preferred class time
                    </label>
                    <select
                      {...register("preferredTime")}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select a time (optional)</option>
                      <option value="morning">Morning (9AM - 12PM)</option>
                      <option value="afternoon">Afternoon (1PM - 4PM)</option>
                      <option value="evening">Evening (5PM - 7PM)</option>
                      <option value="weekend">Weekends Only</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 flex items-center">
                      <FaComments className="mr-1" /> Questions or Comments
                    </label>
                    <textarea
                      {...register("message")}
                      rows={4}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Tell us anything else we should know, or ask us any questions!"
                    ></textarea>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-4 border border-transparent rounded-md shadow-sm text-xl font-bold text-white bg-gradient-to-r from-blue-500 to-blue-500 hover:from-blue-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Submit Registration"
                )}
              </motion.button>

              <div className="text-center mt-4 text-sm text-gray-500">
                <p>We'll get back to you as soon as possible!</p>
                <div className="flex justify-center mt-4 space-x-2">
                  {["🧠", "🎨", "🔍", "🎵", "🌟"].map((emoji, i) => (
                    <motion.span
                      key={i}
                      initial={{ y: 0 }}
                      animate={{ y: [0, -10, 0] }}
                      transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 1,
                        delay: i * 0.2,
                      }}
                      className="text-2xl"
                    >
                      {emoji}
                    </motion.span>
                  ))}
                </div>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default RegistrationForm;
