"use client";
import { useMobileView } from "@/hooks/useMobileView";
import BentoCard from "./BentoCards/BentoCard";
import { motion } from "motion/react";

import DevVsDsa from "./BentoCards/DevVsDsa";
import Socials from "./BentoCards/Socials";
import Vibe from "./BentoCards/Vibe";
import Skills from "./BentoCards/Skills";
import Nasa from "./BentoCards/Nasa";
import Spotify from "./BentoCards/Spotify";

const BentoGrid: React.FC = () => {
  const isMobile = useMobileView();

  return (
    <div className="w-full max-w-5xl mx-auto p-4 ">
      <div
        className={
          isMobile
            ? "grid grid-cols-[1.8fr_1fr] grid-flow-row-dense gap-3 auto-rows-[150px]"
            : "grid grid-cols-4 grid-flow-row-dense gap-3 auto-rows-[100px] md:auto-rows-[130px]"
        }
      >
        <DevVsDsa
          className={
            isMobile ? " col-span-1 row-span-2" : "col-span-4 row-span-2"
          }
        />

        <Socials
          className={
            isMobile ? " col-span-1 row-span-2 " : "col-span-1 row-span-2"
          }
        />
        <BentoCard
          className={
            isMobile
              ? " col-span-2 row-span-2 flex items-center justify-center"
              : "col-span-2 row-span-2 flex items-center justify-center"
          }
        >
          Time line by loki
        </BentoCard>
        <Skills
          className={
            isMobile ? "col-span-2 row-span-1" : "col-span-1 row-span-3"
          }
        />
        <Vibe
          className={
            isMobile
              ? "col-span-2 row-span-2 w-full  "
              : "col-span-2 row-span-2 w-full  "
          }
        />
        <Spotify
          className={
            isMobile ? "col-span-2 row-span-1" : "col-span-1 row-span-2"
          }
        />
        <Nasa
          className={
            isMobile ? "col-span-2 row-span-2" : "col-span-1 row-span-2"
          }
        />
        <BentoCard
          className={
            isMobile
              ? "col-span-2 row-span-1 flex items-center justify-center"
              : "col-span-3 row-span-1 flex items-center justify-center"
          }
        >
          qutes
        </BentoCard>
      </div>
    </div>
  );
};

export default BentoGrid;
