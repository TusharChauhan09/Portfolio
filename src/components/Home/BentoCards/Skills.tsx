"use client";
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
import BentoCard from "./BentoCard";
import { useMobileView } from "@/hooks/useMobileView";
import { motion } from "motion/react";

type SkillsProps = {
  className?: string;
};

const skillsRow1 = [
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
];

const skillsRow2 = [
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
];

export default function Skills({ className }: SkillsProps) {
  const isMobile = useMobileView();

  // Calculate the total size needed for seamless scrolling
  const skillsCount1 = skillsRow1.length;
  const skillsCount2 = skillsRow2.length;

  // Exact Tailwind values: w-15 = 60px, h-15 = 60px, gap-x-3 = 12px, gap-y-3 = 12px
  const skillWidth = 60; // w-15 = 60px
  const skillHeight = 60; // h-15 = 60px
  const skillWidth2 = 56; // w-14 = 56px (for second row)
  const skillHeight2 = 56; // h-14 = 56px (for second row)
  const gapHorizontal = 12; // gap-x-3 = 12px
  const gapVertical = 12; // gap-y-3 = 12px

  // Calculate total width/height for each row based on actual dimensions
  const totalWidth1 = isMobile
    ? skillsCount1 * skillWidth + (skillsCount1 - 1) * gapHorizontal
    : 0;
  const totalHeight1 = isMobile
    ? 0
    : skillsCount1 * skillHeight + (skillsCount1 - 1) * gapVertical;

  const totalWidth2 = isMobile
    ? skillsCount2 * skillWidth2 + (skillsCount2 - 1) * gapHorizontal
    : 0;
  const totalHeight2 = isMobile
    ? 0
    : skillsCount2 * skillHeight2 + (skillsCount2 - 1) * gapVertical;

  return (
    <BentoCard className={className}>
      <div
        className={`w-full flex hover:cursor-pointer ${
          isMobile
            ? "pt-2 flex-col [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] [mask-repeat:no-repeat] [mask-size:100%_100%] [-webkit-mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:100%_100%]"
            : "gap-2 px-3 flex-row max-h-[460px] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] [mask-repeat:no-repeat] [mask-size:100%_100%] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:100%_100%]"
        } skills-container  `}
      >
        <div
          className={`flex flex-1 ${
            isMobile
              ? "gap-x-3 overflow-hidden"
              : "flex-col gap-y-3 overflow-hidden"
          } items-center h-full`}
        >
          <motion.div
            className={`flex ${
              isMobile ? "gap-x-3" : "flex-col gap-y-3"
            } items-center h-full`}
            style={{
              width: isMobile ? `${totalWidth1 * 2}px` : "auto",
              height: isMobile ? "auto" : `${totalHeight1 * 2}px`,
            }}
            animate={{
              x: isMobile ? [0, -totalWidth1] : 0,
              y: isMobile ? 0 : [0, -totalHeight1],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            }}
            whileHover={{
              transition: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {[...skillsRow1, ...skillsRow1].map((SkillComponent, index) => (
              <div key={index} className="flex-shrink-0 w-15 h-15">
                <SkillComponent />
              </div>
            ))}
          </motion.div>
        </div>

        <div
          className={`flex flex-1 ${
            isMobile
              ? "gap-x-3 overflow-hidden"
              : "flex-col gap-y-3 overflow-hidden"
          } items-center h-full`}
        >
          <motion.div
            className={`flex ${
              isMobile ? "gap-x-3" : "flex-col gap-y-3"
            } items-center h-full`}
            style={{
              width: isMobile ? `${totalWidth2 * 2}px` : "auto",
              height: isMobile ? "auto" : `${totalHeight2 * 2}px`,
            }}
            animate={{
              x: isMobile ? [-totalWidth2, 0] : 0,
              y: isMobile ? 0 : [-totalHeight2, 0],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            }}
            whileHover={{
              transition: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {[...skillsRow2, ...skillsRow2].map((SkillComponent, index) => (
              <div key={index} className="flex-shrink-0 w-14 h-14">
                <SkillComponent />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </BentoCard>
  );
}
