import GitHubHeatmap from "@/components/GitHub/GitHubHeatmap";
import Introduction from "@/components/Home/Introduction";
import LeetCodeCard from "@/components/Leetcode/LeetCodeCard";
import BentoGrid from "@/components/Home/BentoGrid";

export default function Home() {
  return (
    <>
      <Introduction name={"Enlight"} />
      <br />
      <br />
      {/* Bento Grid */}
      <BentoGrid />
      <br />
      <GitHubHeatmap username={"tusharchauhan09"} />
      <LeetCodeCard />
    </>
  );
}
