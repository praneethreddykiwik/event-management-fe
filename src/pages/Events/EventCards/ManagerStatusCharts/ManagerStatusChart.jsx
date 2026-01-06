import Box from "@mui/material/Box";
import { BarChart } from "@mui/x-charts/BarChart";

const idleData = [10]; // how many managers are idle
const activeData = [4]; // how many managers are actine
const disabledData = [4]; // how many managers are actine
const xLabels = ["Managers"];

const ManagerStatusChart = () => {
  return (
    <Box sx={{ width: "100%", height: 120 }}>
      <BarChart
        series={[
          { data: activeData, label: "Active Managers", id: "active" },
          { data: idleData, label: "Idle Managers", id: "idle" },
          { data: disabledData, label: "Disabled", id: "disabled" },
        ]}
        xAxis={[{ data: xLabels }]}
        yAxis={[{ width: 30 }]}
      />
    </Box>
  );
};

export default ManagerStatusChart;
