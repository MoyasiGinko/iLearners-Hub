"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import {
  FaChild,
  FaUser,
  FaBook,
  FaPhone,
  FaEnvelope,
  FaSchool,
  FaGraduationCap,
} from "react-icons/fa";

type FormData = {
  studentName: string;
  institutionName: string;
  parentName: string;
  email: string;
  phone: string;
  level: string;
  levelDetail: string;
  subject: string;
  message: string;
};

const RegistrationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState("");
  const [availableSubjects, setAvailableSubjects] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm<FormData>();

  // Watch the level field to update subjects
  const watchLevel = watch("level");

  // Update available subjects when level changes
  useEffect(() => {
    if (watchLevel === "Primary") {
      setSelectedLevel("Primary");
      setAvailableSubjects(["Mathematics", "English", "Science"]);
    } else if (["S1", "S2", "S3"].includes(watchLevel)) {
      setSelectedLevel("Secondary");
      setAvailableSubjects(["Mathematics", "Science"]);
    } else if (["National 5", "Highers"].includes(watchLevel)) {
      setSelectedLevel("Advanced");
      setAvailableSubjects(["Mathematics", "Physics", "Chemistry", "Biology"]);
    } else {
      setSelectedLevel("");
      setAvailableSubjects([]);
    }

    // Reset subject when level changes
    setValue("subject", "");
  }, [watchLevel, setValue]);

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
          className="bg-gradient-t from-blue-300 via-indigo-300 to-purple-300 rounded-3xl shadow-lg overflow-hidden"
        >
          <div className="p-8 text-center">
            <h2 className=" leading-tight bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-3xl font-bold text-transparent md:text-5xl drop-shadow-lg">
              Join Our Learning Adventure!
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-indigo-700">
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
                      Name of Student
                    </label>
                    <input
                      {...register("studentName", {
                        required: "Student name is required",
                      })}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter student's name"
                    />
                    {errors.studentName && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.studentName.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className=" text-sm font-medium text-gray-700 flex items-center">
                      <FaSchool className="mr-2" /> Institution Name
                    </label>
                    <input
                      {...register("institutionName", {
                        required: "Institution name is required",
                      })}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter school or institution name"
                    />
                    {errors.institutionName && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.institutionName.message}
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
                        <FaPhone className="mr-1" /> Contact no.
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

                    <div>
                      <label className="flex items-center text-sm font-medium text-gray-700">
                        <FaEnvelope className="mr-1" /> Email address
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
                  </div>
                </div>
              </div>

              <div className="bg-green-100 p-4 rounded-lg border-2 border-dashed border-green-300">
                <h2 className="text-xl font-bold text-green-700 flex items-center">
                  <FaGraduationCap className="mr-2" /> Educational Information
                </h2>
                <div className="mt-4 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Level
                    </label>
                    <select
                      {...register("level", {
                        required: "Please select a level",
                      })}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select a level</option>
                      <option value="Primary">Primary</option>
                      <option value="S1">S1</option>
                      <option value="S2">S2</option>
                      <option value="S3">S3</option>
                      <option value="National 5">National 5</option>
                      <option value="Highers">Highers</option>
                    </select>
                    {errors.level && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.level.message}
                      </p>
                    )}
                  </div>

                  {selectedLevel === "Primary" && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Primary Level Details
                      </label>
                      <select
                        {...register("levelDetail", {
                          required: "Please select a primary level",
                        })}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select a primary level</option>
                        <option value="P3">P3</option>
                        <option value="P4">P4</option>
                        <option value="P5">P5</option>
                        <option value="P6">P6</option>
                        <option value="P7">P7</option>
                      </select>
                      {errors.levelDetail && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.levelDetail.message}
                        </p>
                      )}
                    </div>
                  )}

                  {availableSubjects.length > 0 && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Subject
                      </label>
                      <select
                        {...register("subject", {
                          required: "Please select a subject",
                        })}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select a subject</option>
                        {availableSubjects.map((subject) => (
                          <option key={subject} value={subject}>
                            {subject}
                          </option>
                        ))}
                      </select>
                      {errors.subject && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.subject.message}
                        </p>
                      )}
                    </div>
                  )}

                  <div>
                    <label className="text-sm font-medium text-gray-700 flex items-center">
                      <FaBook className="mr-1" /> Questions or Comments
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

              <div className="flex justify-center">
                <motion.button
                  // whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 inline-block py-3 rounded-full text-white font-medium shadow-lg hover:shadow-xl border-b-4 active:border-b-0 active:border-t-0 active:shadow-inner active:translate-y-1 hover:-translate-y-1 transform transition-all duration-200
                  bg-gradient-to-r from-indigo-500 to-purple-600 border-indigo-700 hover:from-indigo-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
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
              </div>

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
