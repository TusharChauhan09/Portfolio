"use client";

import { useQuery, gql } from "@apollo/client";
import { useEffect, useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import type {
  ReactCalendarHeatmapValue,
  TooltipDataAttrs,
} from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { useThemeMode } from "@/hooks/useThemeMode";
import { useMobileView } from "@/hooks/useMobileView";
// Removed Tooltip import

// LeetCodeCard props reference (matches react-calendar-heatmap)
// Name              Type                        Description
// values            Required, Array of Object   Required array of objects which each have a date property, which can be a Date object, parseable string, or millisecond timestamp. Example: [{ date: '2016-01-01', count: 6 }]
// startDate         String, Number, or Date     Start of date range.
// endDate           String, Number, or Date     End of date range - a Date object, parseable string, or millisecond timestamp.
// showMonthLabels   Boolean                     Toggle for removing month labels.
// showWeekdayLabels Boolean                     Toggle for removing weekday labels.
// showOutOfRangeDays Boolean                    Toggle display of extra days in week that are past endDate and before beginning of range.
// horizontal        Boolean                     Whether to orient horizontally or vertically. Can be used in combination with numDays/endDate to show just the current month.
// gutterSize        Number                      Size of gutters relative to squares.
// onClick           Function                    Callback to invoke when a square is clicked, e.g. (value) => alert(value)
// onMouseOver       Function                    Callback to invoke when mouse pointer is over a square, e.g. (event, value) => console.log(event, value)
// onMouseLeave      Function                    Callback to invoke when mouse pointer leaves a square, e.g. (event, value) => console.log(event, value)
// titleForValue     Function                    Function to determine each square's title attribute, for generating 3rd party hover tooltips (may also need to configure tooltipDataAttrs). Example: (value) => `Date is ${value.date}`
// tooltipDataAttrs  Object or Function          Set data attributes for all squares, for generating 3rd party hover tooltips. Either an object like { 'data-tooltip': 'tooltip' } or a function like (value) => { return { 'data-tooltip': 'Tooltip: ' + value } }
// classForValue     Function                    Callback for determining CSS class to apply to each value, e.g. (value) => (value.count > 0 ? 'blue' : 'white').
// monthLabels       Array of String             An array with 12 strings representing the text from January to December, e.g. ['01', '02', ..., '12']
// weekdayLabels     Array of String             An array with 7 strings representing the text from Sunday to Saturday
// transformDayElement Function                  A function to further transform generated svg element for a single day. Can be used to attach event handlers, add tooltips and more. Example: (element, value, index) => React.cloneElement(element, { title: value.date }).

// Color scale constants for heatmap
const HEATMAP_COLORS = {
  dark: {
    empty: "#232323",
    scale1: "#7a1f1f",
    scale2: "#b22222",
    scale3: "#ff0000",
    scale4: "#ff4d4d",
  },
  light: {
    empty: "#e0e0e0",
    scale1: "#b0b0b0",
    scale2: "#666666",
    scale3: "#222222",
    scale4: "#000000",
  },
};

const GET_CALENDAR = gql`
  query userProfileCalendar($username: String!, $year: Int) {
    matchedUser(username: $username) {
      userCalendar(year: $year) {
        submissionCalendar
      }
    }
  }
`;

function parseSubmissionCalendar(
  submissionCalendar: string
): Record<string, number> {
  if (!submissionCalendar) return {};
  return JSON.parse(submissionCalendar);
}

function mergeCalendars(
  ...calendars: Record<string, number>[]
): Record<string, number> {
  const merged: Record<string, number> = {};
  for (const cal of calendars) {
    for (const [timestamp, count] of Object.entries(cal)) {
      merged[timestamp] = (merged[timestamp] || 0) + Number(count);
    }
  }
  return merged;
}

const LeetCodeCard = ({ username }: { username: string }) => {
  const theme = useThemeMode();
  const isMobile = useMobileView();
  const [values, setValues] = useState<{ date: string; count: number }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    const thisYear = new Date().getFullYear();
    const lastYear = thisYear - 1;
    Promise.all([
      fetch("/api/leetcode", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: GET_CALENDAR.loc?.source.body,
          variables: { username, year: thisYear },
        }),
      }).then((res) => res.json()),
      fetch("/api/leetcode", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: GET_CALENDAR.loc?.source.body,
          variables: { username, year: lastYear },
        }),
      }).then((res) => res.json()),
    ])
      .then(([thisYearData, lastYearData]) => {
        const cal1 = parseSubmissionCalendar(
          thisYearData?.data?.matchedUser?.userCalendar?.submissionCalendar ||
            "{}"
        );
        const cal2 = parseSubmissionCalendar(
          lastYearData?.data?.matchedUser?.userCalendar?.submissionCalendar ||
            "{}"
        );
        const merged = mergeCalendars(cal1, cal2);
        // Convert to array for heatmap
        const arr = Object.entries(merged).map(([timestamp, count]) => {
          const date = new Date(Number(timestamp) * 1000)
            .toISOString()
            .slice(0, 10);
          return { date, count: Number(count) };
        });
        setValues(arr);
        setLoading(false);
      })
      .catch((e) => {
        setError("Failed to fetch LeetCode data");
        setLoading(false);
      });
  }, [username]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error :(</div>;

  // Show last 2 years (730 days)
  const endDate = new Date();
  const startDate = new Date();
  startDate.setDate(endDate.getDate() - (isMobile ? 182 : 365));

  // Color scale (customize as desired)
  const classForValue = (
    value: ReactCalendarHeatmapValue<string> | undefined
  ): string => {
    if (!value || !value.count) return "color-empty";
    if (value.count < 2) return "color-scale-1";
    if (value.count < 4) return "color-scale-2";
    if (value.count < 8) return "color-scale-3";
    return "color-scale-4";
  };

  // Set up tooltip data
  const tooltipId = "leetcode-heatmap-tooltip";
  return (
    <div className="w-full max-h-[150px] flex flex-col items-center">
      <CalendarHeatmap
        startDate={startDate}
        endDate={endDate}
        values={values}
        classForValue={classForValue}
        titleForValue={(value) =>
          value && value.date
            ? `${value.date}: ${value.count ?? 0} submission${
                value.count === 1 ? "" : "s"
              }`
            : "No submissions"
        }
        // Removed tooltipDataAttrs
        showWeekdayLabels={true}
        gutterSize={2}
      />
      {/* Tooltip removed */}
      <style jsx global>{`
        .react-calendar-heatmap .react-calendar-heatmap-day {
          width: 10px !important;
          height: 10px !important;
          transition: fill 0.15s;
        }
        .react-calendar-heatmap .react-calendar-heatmap-day:hover {
          filter: brightness(0.7);
        }
        .color-empty {
          fill: ${theme === "dark"
            ? HEATMAP_COLORS.dark.empty
            : HEATMAP_COLORS.light.empty} !important;
        }
        .color-scale-1 {
          fill: ${theme === "dark"
            ? HEATMAP_COLORS.dark.scale1
            : HEATMAP_COLORS.light.scale1};
        }
        .color-scale-2 {
          fill: ${theme === "dark"
            ? HEATMAP_COLORS.dark.scale2
            : HEATMAP_COLORS.light.scale2};
        }
        .color-scale-3 {
          fill: ${theme === "dark"
            ? HEATMAP_COLORS.dark.scale3
            : HEATMAP_COLORS.light.scale3};
        }
        .color-scale-4 {
          fill: ${theme === "dark"
            ? HEATMAP_COLORS.dark.scale4
            : HEATMAP_COLORS.light.scale4};
        }
      `}</style>
    </div>
  );
};

export default LeetCodeCard;
