"use client";
import { motion } from "motion/react";

const LeetcodeLoader = () => {
  return (
    <div className="flex items-center justify-center w-full h-40 rounded-xl">
      <motion.div
        className="w-3 h-3 bg-yellow-600 rounded-full mx-1"
        animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="w-3 h-3 bg-yellow-600 rounded-full mx-1"
        animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 0.8, repeat: Infinity, delay: 0.2, ease: "easeInOut" }}
      />
      <motion.div
        className="w-3 h-3 bg-yellow-600 rounded-full mx-1"
        animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 0.8, repeat: Infinity, delay: 0.4, ease: "easeInOut" }}
      />
    </div>
  );
};

export default LeetcodeLoader;
