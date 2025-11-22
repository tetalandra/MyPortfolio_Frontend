import React from "react";
import { Dumbbell, Apple, Brain } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="min-h-screen bg-[#0f1a17] text-white flex flex-col items-center px-6 py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Hero Image with Fade + Slide */}
      <motion.img
        src="./assets/mine.jpeg"
        alt="HealthHub Hero"
        className="rounded-xl w-full max-w-sm shadow-lg mb-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />

      {/* Title Fade Up */}
      <motion.h1
        className="text-2xl font-bold text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Welcome to HealthHub
      </motion.h1>

      {/* Subtitle Smooth Fade */}
      <motion.p
        className="text-gray-300 text-center mt-2 max-w-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.6 }}
      >
        Track your fitness, nutrition, and mental health all in one place.
        Start your journey towards a healthier you.
      </motion.p>

      {/* Features Section */}
      <div className="mt-6 w-full max-w-sm space-y-4">
        {[
          {
            icon: <Dumbbell className="w-6 h-6 text-green-300 mr-4" />,
            title: "Fitness Tracking",
            text: "Monitor workouts, set goals, and track progress.",
          },
          {
            icon: <Apple className="w-6 h-6 text-green-300 mr-4" />,
            title: "Nutrition Tracking",
            text: "Log meals and discover healthy recipes.",
          },
          {
            icon: <Brain className="w-6 h-6 text-green-300 mr-4" />,
            title: "Mental Health Tracking",
            text: "Practice mindfulness and track your mood.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center bg-[#162521] p-4 rounded-xl border border-gray-700 cursor-pointer"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 * index, duration: 0.6 }}
            whileHover={{
              scale: 1.05,
              backgroundColor: "#1b2e29",
            }}
          >
            {item.icon}
            <div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Buttons Section */}
      <motion.div
        className="mt-8 w-full max-w-sm space-y-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.7 }}
      >
        <motion.button
          className="w-full bg-green-300 text-black py-3 rounded-xl font-semibold"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
        >
          Sign Up
        </motion.button>

        <motion.button
          className="w-full bg-green-300 text-black py-3 rounded-xl font-semibold"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
        >
          Login
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
