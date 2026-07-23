import { useSelector } from "react-redux";
import { tasksSelector } from "../../../redux/tasks/tasks.slice";
import { TaskKpiCard } from "../../../components/EventTaskComponents/TaskKpiCard";
import { getStatusColor } from "../../../utils/utils";
import styled from "styled-components";
import { TaskProirotyChart } from "./TaskProirotyChart";
import EventsSummaryCard from "../../../components/EventTaskComponents/EventsSummaryCard";
import { NpmSparkLine } from "../../../components/Charts/SparkLine";
import { usersSelector } from "../../../redux/users/users.slice";
import {
  conversionsChartData,
  eventsCountChartData,
  usersChartData,
} from "../qa.helper";
import { SkeletonLoaders } from "../../../components/UI/Loaders/SkeletonLoaders";

export const QADashboard = () => {
  const {
    eventsAndTasks,
    taskCountObj,
    kpiCounts,
    priorityCounts,
    tasksLoading,
  } = useSelector(tasksSelector);
  const { eventManagers } = useSelector(usersSelector);

  return (
    <>
      <CardsRow>
        {Object.keys(kpiCounts).map((key) => (
          <TaskKpiCard
            objKey={key}
            loading={tasksLoading}
            value={kpiCounts[key]}
            color={getStatusColor(key, kpiCounts)}
          />
        ))}
      </CardsRow>
      {tasksLoading ? (
        <SkeletonLoaders count={1} height={300} />
      ) : (
        <TaskProirotyChart dataObj={priorityCounts} />
      )}
      <ChartCtn>
        {tasksLoading ? (
          <SkeletonLoaders count={6} height={100} type="card" width={340} />
        ) : (
          <>
            <EventsSummaryCard
              label="Users"
              value={eventManagers.length}
              chart={
                <NpmSparkLine
                  color={"rgb(66, 84, 251)"}
                  chartData={usersChartData}
                />
              }
              inline
            />
            <EventsSummaryCard
              label="Conversations"
              value="3"
              chart={
                <NpmSparkLine
                  color="rgb(66, 84, 251)"
                  chartData={conversionsChartData}
                />
              }
              inline
            />
            <EventsSummaryCard
              label="Events Count"
              value={eventsAndTasks.length}
              chart={
                <NpmSparkLine
                  color="rgb(66, 84, 251)"
                  chartData={eventsCountChartData}
                />
              }
              inline
            />
            <EventsSummaryCard
              label="Tasks Count"
              value={taskCountObj.total}
              chart={<NpmSparkLine color="rgb(66, 84, 251)" />}
              inline
            />
          </>
        )}
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
