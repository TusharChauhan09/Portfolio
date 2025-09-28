"use client";
import { motion, stagger, AnimatePresence } from "motion/react";
import BentoCard from "./BentoCard";
import XIcon from "./Icons/XIcon";
import GithubIcon from "./Icons/GithubIcon";
import SpotifyIcon from "./Icons/Spotify";
import LinkedinIcon from "./Icons/LinkedinIcon";
import DiscordIcon from "./Icons/DiscordIcon";
import LeetcodeIcon from "./Icons/LeetcodeIcon";
import { useMobileView } from "@/hooks/useMobileView";
import { useState } from "react";

const ICONS = [
  { label: "X", Component: XIcon },
  { label: "GitHub", Component: GithubIcon },
  { label: "Spotify", Component: SpotifyIcon },
  { label: "LinkedIn", Component: LinkedinIcon },
  { label: "Discord", Component: DiscordIcon },
  { label: "LeetCode", Component: LeetcodeIcon },
];

const Socials = ({ className }: { className: string }) => {
  const isMobile = useMobileView();
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div
      className={
        isMobile
          ? `${className} flex flex-col items-end`
          : `${className} flex flex-row items-center justify-end w-full gap-3`
      }
    >
      <motion.div
        className={
          isMobile
            ? "jap text-4xl  mt-20 relative flex items-center justify-center w-full"
            : "jap text-4xl flex rotate-270 relative origin-top items-center justify-center"
        }
        initial={{
          y: isMobile ? -10 : 0,
        }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={hovered} 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className={` absolute ${isMobile ? " right-8" : "-bottom-3"}`}
          >
            {hovered || "Social"}
          </motion.span>
        </AnimatePresence>
      </motion.div>
      <motion.div
        className={`grid grid-cols-2 gap-2 ${isMobile ? "mt-1" : ""}`}
      >
        <motion.div
         className="flex flex-col gap-1">
          {ICONS.slice(0, 3).map(({ label, Component }) => (
            <motion.div
              initial={{
                opacity: 0,
                x: -15,
              }}
              animate={{
                scale: hovered === label ? 1.1 : 1,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, delay: 0.3 },
              }}
              key={label}
              className="cursor-pointer"
              onMouseEnter={() => setHovered(label)}
              onMouseLeave={() => setHovered(null)}
              onTouchStart={() => setHovered(label)}
              onTouchEnd={() => setHovered(null)}
            >
              <Component size={50} />
            </motion.div>
          ))}
        </motion.div>
        <div className="flex flex-col gap-1">
          {ICONS.slice(3, 6).map(({ label, Component }) => (
            <motion.div
              initial={{
                opacity: 0,
                x: 15,
              }}
              animate={{
                scale: hovered === label ? 1.1 : 1,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, delay: 0.3 },
              }}
              className="cursor-pointer"
              key={label}
              onMouseEnter={() => setHovered(label)}
              onMouseLeave={() => setHovered(null)}
              onTouchStart={() => setHovered(label)}
              onTouchEnd={() => setHovered(null)}
            >
              <Component size={50} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Socials;
