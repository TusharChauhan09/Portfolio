"use client";
import { motion } from "motion/react";
import BentoCard from "./BentoCard";
import XIcon from "./Icons/XIcon";
import GithubIcon from "./Icons/GithubIcon";
import SpotifyIcon from "./Icons/Spotify";
import LinkedinIcon from "./Icons/LinkedinIcon";
import DiscordIcon from "./Icons/DiscordIcon";

const Socials = ({ className }: { className: string }) => {
  return (
    <div className={`${className} flex justify-end`} >
      <div className="jap w-10 min-h-full">social</div>
      <motion.div className="grid grid-cols-2 gap-2 py-2 self-end ml-auto">
        <div className="flex flex-col gap-2">
          <XIcon size={50} />
          <GithubIcon size={50} />
          <SpotifyIcon size={50} />
        </div>
        <div className="flex flex-col gap-2">
          <LinkedinIcon size={50}  />
          <DiscordIcon size={50} />
        </div>
      </motion.div>
    </div>
  );
};

export default Socials;
