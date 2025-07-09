import React from "react";
import GitHubCalendar from "react-github-calendar";
import type { ReactElement, CSSProperties, RefObject } from "react";
import { Tooltip } from "react-tooltip";

type Activity = any;
type BlockElement = any;
type DayName = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";
type Labels = Record<string, string>;

export type ColorScale = string[];
export type ThemeInput = {
  dark: ColorScale;
  light?: ColorScale;
};

export type GitHubHeatmapProps = {
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

export default function GitHubHeatmap(props: GitHubHeatmapProps) {
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
        username={props.username}
        blockMargin={props.blockMargin}
        blockRadius={props.blockRadius}
        blockSize={props.blockSize}
        colorScheme={props.colorScheme}
        fontSize={props.fontSize}
        transformData={props.transformData}
        hideColorLegend={props.hideColorLegend}
        renderBlock={defaultRenderBlock}
      />
      <Tooltip
        id={tooltipId}
        style={{ fontSize: "11px", padding: "4px 8px" }}
      />
    </>
  );
}
