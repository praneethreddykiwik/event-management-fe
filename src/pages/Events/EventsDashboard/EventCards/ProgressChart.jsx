import * as React from "react";
import Box from "@mui/material/Box";
import { PieChart } from "@mui/x-charts/PieChart";
import { StyledSemiHeading } from "../../../../components/Styled/Typography.styled";
import useMediaQuery from "@mui/material/useMediaQuery";

const ProgressChart = ({ events }) => {
  const isMobile = useMediaQuery("(max-width:480px)");
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

      return obj;
    }, eventStatuses);

    return Object.values(eventCount);
  }, [events]);

  const valueFormatter = (item) => `${item.value}`;

  return (
    <Box sx={boxStyles}>
      <PieChart
        height={isMobile ? 220 : 300}
        width={isMobile ? 220 : 300}
        series={[
          {
            data,
            innerRadius: 35,
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

const boxStyles = { width: "50%", whiteSpace: "nowrap" };
export default ProgressChart;
