"use client";
import { motion } from "motion/react";
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
          : `${className} flex flex-row items-center justify-end gap-3`
      }
    >
      <div
        className={
          isMobile
            ? "jap text-4xl mb-2 flex items-center justify-center w-full"
            : "jap text-4xl flex rotate-270 origin-top items-center justify-center"
        }
        style={
          isMobile
            ? {
                height: "48px",
                minHeight: "48px",
                width: "100%",
                maxWidth: "140px",
              }
            : {
                width: "40px",
                minWidth: "40px",
                height: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
                pointerEvents: "none",
                marginRight: "10px",
              }
        }
      >
        {hovered || "Social"}
      </div>
      <motion.div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col gap-1">
          {ICONS.slice(0, 3).map(({ label, Component }) => (
            <div
              key={label}
              onMouseEnter={() => setHovered(label)}
              onMouseLeave={() => setHovered(null)}
              onTouchStart={() => setHovered(label)}
              onTouchEnd={() => setHovered(null)}
            >
              <Component size={50} />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-1">
          {ICONS.slice(3, 6).map(({ label, Component }) => (
            <div
              key={label}
              onMouseEnter={() => setHovered(label)}
              onMouseLeave={() => setHovered(null)}
              onTouchStart={() => setHovered(label)}
              onTouchEnd={() => setHovered(null)}
            >
              <Component size={50} />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Socials;
