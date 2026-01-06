import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import { PieChart } from "@mui/x-charts/PieChart";
import { mobileAndDesktopOS, valueFormatter } from "./webUsageStats";

const ProgressChart = () => {
  const [itemNb, setItemNb] = React.useState(5);

  const handleItemNbChange = (event, newValue) => {
    if (typeof newValue !== "number") {
      return;
    }
    setItemNb(newValue);
  };

  return (
    <Box sx={{ width: "50%" }}>
      <PieChart
        height={300}
        width={300}
        series={[
          {
            data: mobileAndDesktopOS.slice(0, itemNb),
            innerRadius: 50,
            arcLabel: (params) => params.label ?? "",
            arcLabelMinAngle: 20,
            valueFormatter,
          },
        ]}
      />
      <Typography id="input-item-number" gutterBottom>
        Number of items
      </Typography>
      <Slider
        value={itemNb}
        onChange={handleItemNbChange}
        valueLabelDisplay="auto"
        min={1}
        max={8}
        aria-labelledby="input-item-number"
      />
    </Box>
  );
};

export default ProgressChart;
