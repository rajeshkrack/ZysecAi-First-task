"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const newsHeadlines = [
  "🚨 Breaking: Global markets hit record highs!",
  "🔥 AI revolutionizing news reporting in real-time!",
  "🌍 Climate Summit 2025: Key takeaways from world leaders.",
  "⚡ Tech Giants unveil next-gen AI assistants.",
  "📰 Stay updated with the latest headlines here!"
];

const Banner = () => {
  const [currentHeadline, setCurrentHeadline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % newsHeadlines.length);
    }, 4000); // Changes headline every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-8 flex justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl w-full bg-gray-800 rounded-3xl shadow-xl px-6 py-8 text-center text-white"
      >
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold tracking-wide"
        >
          <span className="text-red-500">Breaking</span> News &{" "}
          <span className="text-blue-400">Real-Time</span> Updates
        </motion.h1>

        {/* Animated News Headline */}
        <motion.div
          key={currentHeadline}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.6 }}
          className="mt-3 text-lg font-medium text-yellow-400"
        >
          {newsHeadlines[currentHeadline]}
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="mt-2 text-gray-300 text-sm"
        >
          Stay ahead with top headlines and live updates from around the world.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Banner;
