import * as React from "react";
import Stack from "@mui/material/Stack";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";
import {
  areaElementClasses,
  lineElementClasses,
} from "@mui/x-charts/LineChart";
import { chartsAxisHighlightClasses } from "@mui/x-charts/ChartsAxisHighlight";
import Box from "@mui/material/Box";

const sparkLineChartData = [
  {
    downloads: 160181,
    weekId: "2024-33",
    start: "2024-08-12",
    end: "2024-08-18",
  },
  {
    downloads: 533595,
    weekId: "2024-34",
    start: "2024-08-19",
    end: "2024-08-25",
  },
  {
    downloads: 346696,
    weekId: "2025-13",
    start: "2025-03-24",
    end: "2025-03-30",
  },
  {
    downloads: 705318,
    weekId: "2025-14",
    start: "2025-03-31",
    end: "2025-04-06",
  },
];

const downloads = sparkLineChartData.map((item) => item.downloads);
const weeks = sparkLineChartData.map((item) => `${item.start} to ${item.end}`);

const settings = {
  data: downloads,
  baseline: "min",
  margin: { bottom: 0, top: 5, left: 2, right: 0 },
  xAxis: { id: "week-axis", data: weeks },
  yAxis: {
    domainLimit: (_, maxValue) => ({
      min: -maxValue / 6,
      max: maxValue,
    }),
  },
  sx: {
    [`& .${areaElementClasses.root}`]: { opacity: 0.2 },
    [`& .${lineElementClasses.root}`]: { strokeWidth: 3 },
    [`& .${chartsAxisHighlightClasses.root}`]: {
      stroke: "rgb(58, 46, 85)",
      strokeDasharray: "none",
      strokeWidth: 2,
    },
  },
  slotProps: {
    lineHighlight: { r: 4 }, // Reduce the radius of the axis highlight.
  },
  clipAreaOffset: { top: 2, bottom: 2 },
  axisHighlight: { x: "line" },
};

export function NpmSparkLine({ color }) {
  const [weekIndex, setWeekIndex] = React.useState(null);

  return (
    <Box
      onKeyDown={(event) => {
        switch (event.key) {
          case "ArrowLeft":
            setWeekIndex((p) =>
              p === null
                ? weeks.length - 1
                : (weeks.length + p - 1) % weeks.length,
            );
            break;
          case "ArrowRight":
            setWeekIndex((p) => (p === null ? 0 : (p + 1) % weeks.length));
            break;
          default:
        }
      }}
      onFocus={() => {
        setWeekIndex((p) => (p === null ? 0 : p));
      }}
      role="button"
      aria-label="Showing weekly downloads"
      tabIndex={0}
      width="100%"
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Stack direction="column" width={200}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-end"
          sx={{ borderBottom: "solid 2px rgba(137, 86, 255, 0.2)" }}
        >
          <SparkLineChart
            height={40}
            width={195}
            area
            showHighlight
            // color="#006bd6"
            color={color || "#26C867"}
            onHighlightedAxisChange={(axisItems) => {
              setWeekIndex(axisItems[0]?.dataIndex ?? null);
            }}
            highlightedAxis={
              weekIndex === null
                ? []
                : [{ axisId: "week-axis", dataIndex: weekIndex }]
            }
            {...settings}
          />
        </Stack>
      </Stack>
    </Box>
  );
}

// const values = [0, 2, 3, 4, 6, 8, 7, 9, 15, 6, 8, 7, 12];

export function ColorCustomization() {
  return (
    <Box flexGrow={1}>
      <SparkLineChart
        plotType="bar"
        data={[1, 4, 2, 5, 7, 2, 4, 6]}
        height={100}
      />
    </Box>
  );
}
