"use client";

import { useThemeMode } from "@/hooks/useThemeMode";
import { motion } from "motion/react";
import Cd from "@/components/Miscellaneous/Cd";

export default function BlogPage() {
  const theme = useThemeMode();
  const isDark = theme === "dark";

  return (
    <div className="flex flex-col min-h-[70vh] px-4">
      {/* Main Content Container - Centered */}
      <div className="flex-1 flex flex-col items-center justify-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative flex flex-col items-center gap-6"
        >
          {/* Decorative Top Element */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className={`h-[2px] w-32 ${
              isDark
                ? "bg-gradient-to-r from-transparent via-red-500 to-transparent"
                : "bg-gradient-to-r from-transparent via-neutral-400 to-transparent"
            }`}
          />

          {/* Coming Soon Title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`jap text-5xl md:text-7xl font-bold tracking-wider ${
              isDark ? "demon-red" : "text-foreground"
            }`}
          >
            Coming Soon
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="smalll text-lg md:text-xl text-muted-foreground text-center max-w-md"
          >
            The blog section is currently under construction. Stay tuned for
            articles about development, design, and more.
          </motion.p>

          {/* Decorative Bottom Element */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className={`h-[2px] w-32 ${
              isDark
                ? "bg-gradient-to-r from-transparent via-red-500 to-transparent"
                : "bg-gradient-to-r from-transparent via-neutral-400 to-transparent"
            }`}
          />
        </motion.div>
      </div>

      {/* Terminal-style cd.. navigation */}
      <Cd />

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(${
              isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.03)"
            } 1px, transparent 1px), linear-gradient(90deg, ${
              isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.03)"
            } 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>
    </div>
  );
}
