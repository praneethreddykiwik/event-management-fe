import * as React from "react";
import Box from "@mui/material/Box";
import { PieChart } from "@mui/x-charts/PieChart";
import { StyledSemiHeading } from "../../../../components/Styled/Typography.styled";

const ProgressChart = ({ events }) => {
  const data = React.useMemo(() => {
    const eventStatuses = {
      pending: {
        label: "Pending",
        value: 0,
      },

      assigned: {
        label: "Assigned",
        value: 0,
      },

      accepted: {
        label: "Accepted",
        value: 0,
      },

      ready: {
        label: "Ready",
        value: 0,
      },

      in_progress: {
        label: "In Progress",
        value: 0,
      },

      completed: {
        label: "Completed",
        value: 0,
      },

      declined: {
        label: "Declined",
        value: 0,
      },

      cancelled: {
        label: "Cancelled",
        value: 0,
      },

      deleted: {
        label: "Deleted",
        value: 0,
      },
    };
    const eventCount = events.reduce((acu, event) => {
      const obj = { ...acu };
      obj[event.status].value++;
      console.log("abdul test", { [event.status]: obj[event.status].value });

      return obj;
    }, eventStatuses);

    return Object.values(eventCount);
  }, [events]);

  const valueFormatter = (item) => `${item.value}`;

  return (
    <Box sx={{ width: "50%" }}>
      <PieChart
        height={300}
        width={300}
        series={[
          {
            data,
            innerRadius: 50,
            arcLabel: (params) => params.label ?? "",
            arcLabelMinAngle: 20,
            valueFormatter,
          },
        ]}
      />
      <StyledSemiHeading id="input-item-number" left>
        Events Progress
      </StyledSemiHeading>
    </Box>
  );
};

export default ProgressChart;
