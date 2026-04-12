import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { StyledSemiHeading } from "../../../../components/Styled/Typography.styled";
import useMediaQuery from "@mui/material/useMediaQuery";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { eventsSelector } from "../../../../redux/events/events.slice";
import { camelToWords } from "../../../../utils/utils";

const ProgressChart = () => {
  const isMobile = useMediaQuery("(max-width:480px)");

  const { eventsStatusCounts } = useSelector(eventsSelector);
  const valueFormatter = (item) => `${item.value}`;

  return (
    <StyledCtn sx={boxStyles}>
      <PieChart
        className="pie-chart"
        height={isMobile ? 220 : 300}
        width={isMobile ? 220 : 300}
        series={[
          {
            data: Object.keys(eventsStatusCounts).map((key) => ({
              label: camelToWords(key),
              value: eventsStatusCounts[key],
            })),
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
    </StyledCtn>
  );
};

const StyledCtn = styled.div`
  white-space: "nowrap";
`;

const boxStyles = { width: "50%", whiteSpace: "nowrap" };
export default ProgressChart;
