"use client";
import React, { useEffect, useState } from "react";
import { useMobileView } from "@/hooks/useMobileView";

const ScrollToTopButton = () => {
  const isMobile = useMobileView();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isMobile) return null;

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-3 transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0 "
      }`}
      aria-label="Scroll to top"
    >
      <svg
        data-name="1-Arrow Up"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="24"
        height="24"
        fill="currentColor"
      >
        <path d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z" />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
