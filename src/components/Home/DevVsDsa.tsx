'use client';
import {motion} from "motion/react";
import GitHubHeatmap from "@/components/GitHub/GitHubHeatmap";
import LeetCodeCard from "@/components/Leetcode/LeetCodeCard";
import Vs from "@/components/Home/Vs";
import { useMobileView } from "@/hooks/useMobileView";
export default function Home() {
    const isMobile = useMobileView();
  return (
      <motion.div className={`flex flex-col items-center justify-center space-y-2`}>
      <GitHubHeatmap username={"tusharchauhan09"} />
      <Vs />
      <GitHubHeatmap username={"tusharchauhan09"} />
      {/* <LeetCodeCard /> */}
      </motion.div>
  );
}