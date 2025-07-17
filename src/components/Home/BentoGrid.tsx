"use client";
import { useMobileView } from "@/hooks/useMobileView";
import BentoCard from "./BentoCards/BentoCard";
import Vibe from "./BentoCards/Vibe";

const BentoGrid: React.FC = () => {
  const isMobile = useMobileView();

  return (
    <div className="w-full max-w-5xl mx-auto p-4 ">
      <div
        className={
          isMobile
            ? "grid grid-cols-2 grid-rows-14 gap-4 auto-rows-[700px] auto-cols-[200px]"
            : "grid grid-cols-4 grid-rows-8 gap-4 auto-rows-[1000px] md:auto-rows-[1300px]"
        }
      >
        <BentoCard
          className={
            isMobile
              ? " col-span-2 row-span-3 flex items-center justify-center"
              : "col-span-4 row-span-3 flex items-center justify-center"
          }
        >
          dev
        </BentoCard>
        <BentoCard
          className={
            isMobile
              ? " col-span-1 row-span-3 flex items-center justify-center"
              : "col-span-1 row-span-2 flex items-center justify-center"
          }
        >
          socals
        </BentoCard>
        <BentoCard
          className={
            isMobile
              ? " col-span-1 row-span-3 flex items-center justify-center"
              : "col-span-2 row-span-2 flex items-center justify-center"
          }
        >
          Time line by loki
        </BentoCard>
        <BentoCard
          className={
            isMobile
              ? "col-span-2 row-span-2 flex items-center justify-center"
              : "col-span-1 row-span-4 flex items-center justify-center"
          }
        >
          posters
        </BentoCard>
        <Vibe
          className={
            isMobile
              ? "col-span-2 row-span-2 w-full h-[150px] "
              : "col-span-2 row-span-2 w-full h-[200px] "
          }
        />
        <BentoCard
          className={
            isMobile
              ? "col-span-2 row-span-2 flex items-center justify-center"
              : "col-span-1 row-span-2 flex items-center justify-center"
          }
        >
          hills
        </BentoCard>
        <BentoCard
          className={
            isMobile
              ? "col-span-2 row-span-1 flex items-center justify-center"
              : "col-span-3 row-span-1 flex items-center justify-center"
          }
        >
          qutes
        </BentoCard>
        <BentoCard
          className={
            isMobile
              ? "col-span-2 row-span-1 flex items-center justify-center"
              : "col-span-1 row-span-1 flex items-center justify-center"
          }
        >
          currently learning
        </BentoCard>
      </div>
    </div>
  );
};

export default BentoGrid;
