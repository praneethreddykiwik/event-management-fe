import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import styled from "styled-components";
import { StyledSemiHeading } from "../../../components/Styled/Typography.styled";
import { useSelector } from "react-redux";
import { tasksSelector } from "../../../redux/tasks/tasks.slice";
import { TASK_STATUSES } from "../../../constants/statuses";

const EventDetailsPChart = () => {
  const { tasksByEvent } = useSelector(tasksSelector);

  const data = React.useMemo(() => {
    const tasksStatusesObj = {};
    for (const key in TASK_STATUSES) {
      const el = TASK_STATUSES[key];
      tasksStatusesObj[key] = {
        label: el.label,
        value: 0,
      };
    }

    const taskCount = tasksByEvent.reduce((acu, task) => {
      const obj = { ...acu };
      obj[task.taskStatus].value++;
      return obj;
    }, tasksStatusesObj);

    return Object.values(taskCount);
  }, [tasksByEvent]);

  const valueFormatter = (item) => `${item.value}`;

  return (
    <StyledCtn sx={boxStyles}>
      <PieChart
        className="event-details-p-chart"
        // height={isMobile ? 220 : 300}
        // width={isMobile ? 220 : 300}
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
        Task Progress
      </StyledSemiHeading>
    </StyledCtn>
  );
};

const StyledCtn = styled.div`
  height: 400px;

  .event-details-p-chart {
    width: 100%;
    height: 100%;
  }
`;

const boxStyles = { width: "50%", whiteSpace: "nowrap" };
export default EventDetailsPChart;
