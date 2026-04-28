"use client";
import { useThemeMode } from "@/hooks/useThemeMode";
import { FileText } from "lucide-react";
import { motion } from "motion/react";

export default function ResumeButton() {
  const theme = useThemeMode();

  return (
    <motion.button
      type="button"
      onClick={() => window.open("/Tushar_CV_12310419_FINAL_UPDATED.pdf", "_blank")}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className="skillsDoubleBorder !inline-flex flex-row items-center justify-center gap-2 px-2 py-[3px] text-xs smalll w-fit cursor-pointer"
    >
      <FileText
        size={14}
        className={theme === "dark" ? "white" : ""}
        strokeWidth={2.5}
      />
      <span>Resume</span>
    </motion.button>
  );
}
