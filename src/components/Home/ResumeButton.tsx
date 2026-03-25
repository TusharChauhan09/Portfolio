"use client";
import React from "react";
import { useThemeMode } from "@/hooks/useThemeMode";
import { FileText } from "lucide-react";

export default function ResumeButton() {
  const theme = useThemeMode();

  return (
    <button
      type="button"
      onClick={() => window.open("/Tushar_CV_12310419_FINAL_UPDATED.pdf", "_blank")}
      className="skillsDoubleBorder !inline-flex flex-row items-center justify-center gap-2 px-2 py-[3px] text-xs smalll transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] w-fit cursor-pointer"
    >
      <FileText
        size={14}
        className={theme === "dark" ? "white" : ""}
        strokeWidth={2.5}
      />
      <span>Resume</span>
    </button>
  );
}
