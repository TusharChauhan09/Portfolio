"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "motion/react";
import { useState } from "react";
import Image from "next/image";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  const [showCharizard, setShowCharizard] = useState(false);
  const [animating, setAnimating] = useState(false);

  const handleToggle = () => {
    if (!isDark) {
      setShowCharizard(true);
      setAnimating(true);
      setTimeout(() => {
        setTheme("dark");
        setTimeout(() => {
          setShowCharizard(false);
          setAnimating(false);
        }, 400); // fade out duration
      }, 400); // switch theme after 0.4s
    } else {
      setTheme("light");
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleToggle}
        className="relative flex items-center justify-center w-10 h-10 "
        aria-label="Toggle theme"
        disabled={animating}
      >
        {isDark ? (
          <motion.span
            key="moon"
            initial={{ rotate: 90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: -90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute"
          >
            <Moon className="h-[1.2rem] w-[1.2rem] text-white" />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={{ rotate: -90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-400" />
          </motion.span>
        )}
        <span className="sr-only">Toggle theme</span>
      </button>
      {showCharizard && (
        <motion.div
          initial={{ scale: 0.2, opacity: 0.7 }}
          animate={{ scale: 3, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            pointerEvents: "none",
            transition: "opacity 0.4s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          <Image
            src="/images/BlackCharizard.png"
            alt="Charizard Transition"
            width={600}
            height={600}
            style={{
              objectFit: "contain",
              transition: "transform 0.7s cubic-bezier(0.4,0,0.2,1)",
            }}
            priority
          />
        </motion.div>
      )}
    </>
  );
}
