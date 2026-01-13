"use client";
import Link from "next/link";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { IconBrandGithub, IconLink } from "@tabler/icons-react";
import TechStackOverlap from "./TechStackOverlap";
import { motion } from "motion/react";

interface ProjectTemplateProps {
  title: string;
  description: string;
  image: string | StaticImageData;
  github: string;
  link?: string;
  stack?: string[];
}

const ProjectTemplate: React.FC<ProjectTemplateProps> = ({
  title,
  description,
  image,
  github,
  link,
  stack,
}) => {
  return (
    <motion.div className="relative w-full rounded-xl overflow-hidden skillsDoubleBorder hover:cursor-pointer">
      {/* Shiny border line */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none border-2 border-transparent bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0"
        initial={{ opacity: 0, x: "-100%" }}
        whileHover={{ opacity: 1, x: ["-100%", "100%"] }}
        transition={{ duration: 1, ease: "linear", repeat: Infinity }}
      />

      {/* Inner content */}
      <div className="flex flex-col w-full items-center gap-1.5 rounded-md p-2 text-sm font-medium group">
        <div
          className="w-full aspect-video border rounded-lg relative overflow-hidden"
          style={{ perspective: "1000px" }}
        >
          <motion.div
            className="relative w-full h-full rounded-lg overflow-hidden"
            whileHover={{
              z: -50,
              scale: 0.92,
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <Image
              src={image}
              alt={title + " project preview"}
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </div>

        <div className="w-full flex flex-col items-start justify-center smalll">
          <div className="flex w-full justify-between items-center">
            <h2 className="text-base font-semibold">{title}</h2>
            <div className="flex space-x-1.5">
              {link && (
                <Link href={link} target="_blank" rel="noopener noreferrer">
                  <IconLink size={18} stroke={1.5} />
                </Link>
              )}
              <Link href={github} target="_blank" rel="noopener noreferrer">
                <IconBrandGithub size={18} stroke={1.5} />
              </Link>
            </div>
          </div>
          <p className="text-gray-600 text-xs">{description}</p>
        </div>

        {/* Overlapping Tech Stack */}
        {stack && stack.length > 0 && (
          <div className="w-full">
            <TechStackOverlap stack={stack} maxVisible={5} size={28} />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectTemplate;
