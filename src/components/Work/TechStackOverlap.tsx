"use client";

import { useThemeMode } from "@/hooks/useThemeMode";
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
            className={`relative rounded-full flex items-center justify-center border ${
              isDark
                ? "bg-neutral-900 border-neutral-700"
                : "bg-white border-neutral-300"
            }`}
            style={{
              width: size,
              height: size,
              marginLeft: index === 0 ? 0 : -(size * 0.3),
              zIndex: visibleStack.length - index,
            }}
          >
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
