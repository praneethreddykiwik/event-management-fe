import { useSelector } from "react-redux";
import { tasksSelector } from "../../../redux/tasks/tasks.slice";
import { TaskKpiCard } from "../../../components/EventTaskComponents/TaskKpiCard";
import { getStatusColor } from "../../../utils/utils";
import styled from "styled-components";
import { TaskProirotyChart } from "./TaskProirotyChart";
import EventsSummaryCard from "../../../components/EventTaskComponents/EventsSummaryCard";
import { NpmSparkLine } from "../../../components/Charts/SparkLine";
import { usersSelector } from "../../../redux/users/users.slice";

export const QADashboard = () => {
  const { eventsAndTasks, taskCountObj, kpiCounts, priorityCounts } =
    useSelector(tasksSelector);
  const { eventManagers } = useSelector(usersSelector);

  return (
    <>
      <CardsRow>
        {Object.keys(kpiCounts).map((key) => (
          <TaskKpiCard
            objKey={key}
            value={kpiCounts[key]}
            color={getStatusColor(key, kpiCounts)}
          />
        ))}
      </CardsRow>

      <TaskProirotyChart dataObj={priorityCounts} />
      <ChartCtn>
        <EventsSummaryCard
          label="Users"
          value={eventManagers.length}
          chart={<NpmSparkLine color={"#006bd6"} />}
          inline
        />
        <EventsSummaryCard
          label="Conversations"
          value="3"
          chart={<NpmSparkLine color="rgb(66, 84, 251)" />}
          inline
        />
        <EventsSummaryCard
          label="Events Count"
          value={eventsAndTasks.length}
          chart={<NpmSparkLine color="rgb(66, 84, 251)" />}
          inline
        />
        <EventsSummaryCard
          label="Tasks Count"
          value={taskCountObj.totalTaskCount}
          chart={<NpmSparkLine color="rgb(66, 84, 251)" />}
          inline
        />
      </ChartCtn>
      {/* Event wise workload */}
      {/* Overdue QA Tasks */}
    </>
  );
};

const CardsRow = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

const ChartCtn = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 40px;
  flex-wrap: wrap;

  & .events-summary-card {
    flex-basis: calc(33.3% - 16px);
    flex-grow: 0;
  }
`;
