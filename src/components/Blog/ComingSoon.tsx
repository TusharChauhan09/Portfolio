"use client";

import { useThemeMode } from "@/hooks/useThemeMode";
import { motion } from "motion/react";

interface ComingSoonProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const ComingSoon = ({
  title = "Coming Soon",
  subtitle = "This section is under construction.",
  className = "",
}: ComingSoonProps) => {
  const theme = useThemeMode();
  const isDark = theme === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`relative flex flex-col items-center ${className}`}
    >
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className={`jap text-4xl md:text-6xl tracking-widest ${
          isDark ? "demon-red" : "text-foreground"
        }`}
      >
        {title}
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="small-text text-base md:text-lg text-muted-foreground text-center max-w-sm mt-6"
      >
        {subtitle}
      </motion.p>

      {/* Status indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="flex items-center gap-2 mt-6"
      >
        <span
          className={`w-1.5 h-1.5 rounded-full animate-pulse ${
            isDark ? "bg-red-500" : "bg-neutral-500"
          }`}
        />
        <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
          Building
        </span>
      </motion.div>
    </motion.div>
  );
};

export default ComingSoon;
