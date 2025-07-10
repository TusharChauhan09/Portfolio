"use client";

import React from "react";
import GitHubCalendar from "react-github-calendar";
import { useThemeMode } from "@/hooks/useThemeMode";
import { useMobileView } from "@/hooks/useMobileView";

import type { ReactElement, CSSProperties, RefObject } from "react";
import { Tooltip } from "react-tooltip";

//props: refrance
type Activity = any;
type BlockElement = any;
type DayName = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";
type Labels = Record<string, string>;

export type ColorScale = string[];
export type ThemeInput = {
  dark: ColorScale;
  light?: ColorScale;
};

export type GitHubCalendarProps = {
  username: string;
  year?: number | "last";
  blockMargin?: number;
  blockRadius?: number;
  blockSize?: number;
  colorScheme?: "light" | "dark";
  errorMessage?: string;
  eventHandlers?: Record<
    string,
    (event: React.SyntheticEvent, data: Activity) => void
  >;
  fontSize?: number;
  hideColorLegend?: boolean;
  hideMonthLabels?: boolean;
  hideTotalCount?: boolean;
  labels?: Labels;
  loading?: boolean;
  ref?: RefObject<HTMLElement>;
  renderBlock?: (block: BlockElement, activity: Activity) => ReactElement;
  renderColorLegend?: (block: BlockElement, level: number) => ReactElement;
  showWeekdayLabels?: boolean | DayName[];
  style?: CSSProperties;
  theme?: ThemeInput;
  throwOnError?: boolean;
  totalCount?: number;
  transformData?: (data: Activity[]) => Activity[];
  transformTotalCount?: boolean;
  weekStart?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
};

// 6 months
export const selectLastHalfYear = (contributions: Activity[]) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const shownMonths = 6;

  return contributions.filter((activity) => {
    const date = new Date(activity.date);
    const monthOfDay = date.getMonth();

    return (
      date.getFullYear() === currentYear &&
      monthOfDay > currentMonth - shownMonths &&
      monthOfDay <= currentMonth
    );
  });
};

export default function GitHubHeatmap({ username }: { username: string }) {
  const themeMode = useThemeMode();
  const isMobile = useMobileView();

  // Define custom color scales
  const customTheme = {
    dark: [
      "#232323", // light black
      "#7a1f1f", // dark red
      "#b22222", // firebrick
      "#ff0000", // red
      "#ff4d4d", // light red
    ],
    light: [
      "#e0e0e0", // light gray for no commits
      "#b0b0b0", // darker light gray
      "#666666", // darker gray
      "#222222", // black
      "#000000", // pure black
    ],
  };

  //hover commits
  const tooltipId = "gh-heatmap-tooltip";
  const defaultRenderBlock = (block: BlockElement, activity: Activity) =>
    activity && block ? (
      <>
        {React.cloneElement(block, {
          "data-tooltip-id": tooltipId,
          "data-tooltip-content": `${activity.count} contributions on ${activity.date}`,
        })}
      </>
    ) : (
      block
    );

  return (
    <>
      <GitHubCalendar
        username={username}
        blockMargin={3}
        blockRadius={3}
        blockSize={10}
        colorScheme={themeMode}
        fontSize={10}
        transformData={isMobile ? selectLastHalfYear : undefined}
        hideColorLegend={true}
        renderBlock={defaultRenderBlock}
        theme={customTheme}
      />
      <Tooltip
        id={tooltipId}
        style={{ fontSize: "11px", padding: "4px 8px" }}
      />
    </>
  );
}
