"use client";

import { useThemeMode } from "@/hooks/useThemeMode";
import { useState } from "react";
import { motion as m, AnimatePresence } from "motion/react";
import {
  C,
  Cpp,
  Java,
  Python,
  Html,
  Css,
  Tailwind,
  Javascript,
  Typescript,
  React,
  Node,
  Express,
  Hono,
  MongoDB,
  Postgres,
  MySQL,
  NextjS,
  Expo,
  Docker,
  Vercel,
  Prisma,
  Neon,
  Motion,
  Redux,
  Zustand,
  Azure,
  DigitalOcean,
  Cursor,
  GraphQl,
  Trpc,
  GSAP,
  Figma,
  Postman,
  VScode,
} from "@/components/Skills/SkillsLogo";

// Re-export SKILLS from the separate file for convenience
export { SKILLS, type SkillName } from "./skills";

// Map skill names (matching SKILLS values) to their logo components
const skillLogoMap: { [key: string]: React.ComponentType } = {
  // Languages
  C: C,
  "C++": Cpp,
  Java: Java,
  Python: Python,
  HTML: Html,
  CSS: Css,
  Tailwind: Tailwind,
  "Tailwind CSS": Tailwind,
  Javascript: Javascript,
  JavaScript: Javascript,
  Typescript: Typescript,
  TypeScript: Typescript,
  // Frontend
  React: React,
  "Next.js": NextjS,
  Expo: Expo,
  Motion: Motion,
  "Framer Motion": Motion,
  Redux: Redux,
  Zustand: Zustand,
  GSAP: GSAP,
  // Backend
  "Node.js": Node,
  Node: Node,
  Express: Express,
  Hono: Hono,
  tRPC: Trpc,
  GraphQL: GraphQl,
  // Databases
  MongoDB: MongoDB,
  Postgres: Postgres,
  PostgreSQL: Postgres,
  MySQL: MySQL,
  Prisma: Prisma,
  Neon: Neon,
  // DevOps & Tools
  Docker: Docker,
  Vercel: Vercel,
  Azure: Azure,
  DigitalOcean: DigitalOcean,
  Cursor: Cursor,
  Figma: Figma,
  Postman: Postman,
  VSCode: VScode,
};

interface TechStackOverlapProps {
  stack: string[];
  maxVisible?: number;
  size?: number;
  className?: string;
}

const TechStackOverlap = ({
  stack,
  maxVisible = 4,
  size = 32,
  className = "",
}: TechStackOverlapProps) => {
  const theme = useThemeMode();
  const isDark = theme === "dark";
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Early return if stack is empty or undefined
  if (!stack || stack.length === 0) {
    return null;
  }

  const visibleStack = stack.slice(0, maxVisible);
  const remainingCount = stack.length - maxVisible;

  return (
    <div className={`flex items-center ${className}`}>
      {visibleStack.map((tech, index) => {
        const LogoComponent = skillLogoMap[tech];

        return (
          <div
            key={index}
            className={`relative rounded-full flex items-center justify-center border transition-all duration-300 ease-out cursor-pointer ${
              isDark
                ? "bg-neutral-900 border-neutral-700"
                : "bg-white border-neutral-300"
            }`}
            style={{
              width: size,
              height: size,
              marginLeft: index === 0 ? 0 : -(size * 0.4),
              zIndex: hoveredIndex === index ? 50 : visibleStack.length - index,
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === index && (
                <m.div
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 5, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1.5 bg-neutral-900/90 backdrop-blur-md border border-white/20 text-white text-[10px] font-medium rounded-lg whitespace-nowrap z-[60] shadow-2xl pointer-events-none"
                >
                  {tech}
                </m.div>
              )}
            </AnimatePresence>

            {/* Logo */}
            <div className="flex items-center justify-center">
              {LogoComponent ? (
                <LogoComponent />
              ) : (
                <span
                  className={`text-xs font-mono font-bold ${
                    isDark ? "text-white" : "text-black"
                  }`}
                >
                  {tech.slice(0, 2).toUpperCase()}
                </span>
              )}
            </div>
          </div>
        );
      })}

      {/* Remaining count indicator */}
      {remainingCount > 0 && (
        <div
          className={`relative rounded-full flex items-center justify-center border ${
            isDark
              ? "bg-neutral-900 border-neutral-700"
              : "bg-white border-neutral-300"
          }`}
          style={{
            width: size,
            height: size,
            marginLeft: -(size * 0.3),
            zIndex: 0,
          }}
        >
          {/* Count text */}
          <span
            className={`text-xs font-mono font-bold ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            +{remainingCount}
          </span>
        </div>
      )}
    </div>
  );
};

export default TechStackOverlap;
