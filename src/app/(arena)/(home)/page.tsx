"use client";
import GitHubHeatmap, {
  selectLastHalfYear,
} from "@/components/GitHub/GitHubHeatmap";
import { useThemeMode } from "@/hooks/useThemeMode";
import { useMobileView } from "@/hooks/useMobileView";
import React from "react";

export default function Home() {
  const theme = useThemeMode();
  const isMobile = useMobileView();
  return (
    <>
      <GitHubHeatmap
        username="tusharchauhan09"
        blockMargin={3}
        blockRadius={3}
        blockSize={10}
        colorScheme={theme}
        fontSize={10}
        transformData={isMobile ? selectLastHalfYear : undefined}
        hideColorLegend={true}
      />
    </>
  );
}
