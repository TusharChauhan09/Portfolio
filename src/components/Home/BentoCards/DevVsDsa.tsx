"use client";
import { motion } from "motion/react";
import GitHubHeatmap from "@/components/GitHub/GitHubHeatmap";
import LeetCodeCard from "@/components/Leetcode/LeetCodeCard";
import BentoCard from "./BentoCard";

export default function DevVsDsa({ className }: { className: string }) {
  return (
    <BentoCard className={`${className} max-h-[380px]`}>
      <motion.div
        className={`flex flex-col items-center justify-center space-y-2`}
      >
        <GitHubHeatmap username={"tusharchauhan09"} />
        <LeetCodeCard username={"tushar529"} />
      </motion.div>
    </BentoCard>
  );
}
