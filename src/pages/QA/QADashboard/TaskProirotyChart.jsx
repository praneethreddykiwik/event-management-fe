import { BarChart } from "@mui/x-charts/BarChart";
import {
  StyledMediumHeading,
  StyledSemiHeading,
} from "../../../components/Styled/Typography.styled";
import styled from "styled-components";

export const TaskProirotyChart = ({ dataObj }) => {
  return (
    <StyledCtn>
      <StyledMediumHeading id="input-item-number" left>
        Task Priorities
      </StyledMediumHeading>
      <BarChart
        className="task-priority-chart"
        xAxis={[{ data: Object.keys(dataObj) }]}
        series={[
          {
            data: Object.values(dataObj),
            colorGetter: (data) => {
              const dataIndex = data?.dataIndex;

              if (dataIndex === 0) {
                return "#B0DB9C";
              } else if (dataIndex === 1) {
                return "#5D6EC7";
              } else {
                return "#FD7979";
              }
            },
          },
        ]}
        height={300}
      />
    </StyledCtn>
  );
};

const StyledCtn = styled.div`
  height: 400px;
  width: 400px;

  .task-priority-chart {
    // width: 50%;
    height: 100%;
  }
`;
