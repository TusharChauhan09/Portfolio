"use client";
import Link from "next/link";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { IconBrandGithub, IconLink } from "@tabler/icons-react";
import SkillsContainer from "../Skills/SkillsContainer";
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
    <motion.div
      className="relative w-full rounded-xl overflow-hidden skillsDoubleBorder hover:cursor-pointer"
      initial={{ boxShadow: "0 0 0px rgba(255,255,255,0)" }}
      whileHover={{
        boxShadow: "0 0 20px rgba(255,255,255,0.4)",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* Shiny border line */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none border-2 border-transparent bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0"
        initial={{ opacity: 0, x: "-100%" }}
        whileHover={{ opacity: 1, x: ["-100%", "100%"] }}
        transition={{ duration: 1, ease: "linear", repeat: Infinity }}
      />

      {/* Inner content remains exactly the same */}
      <div className="flex flex-col w-full h-full items-center gap-3 rounded-md p-3 text-sm font-medium">
        <div className="w-full aspect-video border rounded-2xl relative overflow-hidden">
          <Image
            src={image}
            alt={title + " project preview"}
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="w-full flex flex-col gap-1 items-start justify-center smalll">
          <div className="flex w-full justify-between items-center">
            <h2 className="text-lg font-semibold">{title}</h2>
            <div className="flex space-x-2">
              {link && (
                <Link href={link} target="_blank" rel="noopener noreferrer">
                  <IconLink stroke={1.5} />
                </Link>
              )}
              <Link href={github} target="_blank" rel="noopener noreferrer">
                <IconBrandGithub stroke={1.5} />
              </Link>
            </div>
          </div>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>

        <div className="w-full flex flex-wrap">
          {stack &&
            stack.map((tech, index) => (
              <SkillsContainer key={index} name={tech} />
            ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectTemplate;
