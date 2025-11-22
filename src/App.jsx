import React from "react";
import { Dumbbell, Apple, Brain } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-[#0f1a17] to-[#12332b] text-white flex flex-col items-center px-6 py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Hero Image with Floating + Fade */}
      <motion.img
        src="./assets/mine.jpeg"
        alt="HealthHub Hero"
        className="rounded-xl w-full max-w-sm shadow-2xl mb-6"
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.02, y: -5 }}
      />

      {/* Title with Gradient Text */}
      <motion.h1
        className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-teal-400"
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
        All-in-one platform to track your fitness, nutrition, and mental health. 
        Build habits, track your progress, and achieve your goals.
      </motion.p>

      {/* Features Section with Floating Cards */}
      <motion.div
        className="mt-6 w-full max-w-sm space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        {[
          {
            icon: <Dumbbell className="w-6 h-6 text-green-300 mr-4" />,
            title: "Dynamic Fitness",
            text: "Track exercises, set goals, and see your strength grow.",
          },
          {
            icon: <Apple className="w-6 h-6 text-green-300 mr-4" />,
            title: "Smart Nutrition",
            text: "Log meals, get insights, and discover healthy recipes.",
          },
          {
            icon: <Brain className="w-6 h-6 text-green-300 mr-4" />,
            title: "Mindful Mind",
            text: "Track moods, meditate, and improve mental wellness.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center bg-[#162521] p-4 rounded-xl border border-gray-700 shadow-md cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 * index, duration: 0.6 }}
            whileHover={{
              scale: 1.05,
              backgroundColor: "#1b3a2e",
              boxShadow: "0 8px 20px rgba(0,255,128,0.3)",
            }}
          >
            {item.icon}
            <div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Buttons with Gradient + Shadow Hover */}
      <motion.div
        className="mt-8 w-full max-w-sm space-y-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.7 }}
      >
        <motion.button
          className="w-full py-3 rounded-xl font-semibold text-black bg-gradient-to-r from-green-300 to-teal-400 shadow-lg"
          whileHover={{ scale: 1.07, boxShadow: "0 8px 25px rgba(0,255,128,0.4)" }}
          whileTap={{ scale: 0.95 }}
        >
          Sign Up
        </motion.button>

        <motion.button
          className="w-full py-3 rounded-xl font-semibold text-black bg-gradient-to-r from-green-300 to-teal-400 shadow-lg"
          whileHover={{ scale: 1.07, boxShadow: "0 8px 25px rgba(0,255,128,0.4)" }}
          whileTap={{ scale: 0.95 }}
        >
          Login
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
