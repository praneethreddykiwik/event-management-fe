import styled from "styled-components";
import ProgressChart from "./ProgressChart";
import EventsSummaryCard from "./EventsSummaryCard";
import ManagerStatusChart from "./ManagerStatusCharts/ManagerStatusChart";
import { NpmSparkLine } from "../../../components/Charts/SparkLine";
import GaugeChart from "../../../components/Charts/GuageChart";

export const EventCards = ({ events, eventManagers }) => {
  return (
    <CardsRow>
      <StyledFlex>
        <EventsSummaryCard label="Total Events" value={events.length} />
        <EventsSummaryCard
          label="Event Managers"
          value={eventManagers.length}
          chart={<ManagerStatusChart percent={87} />}
        />
        <EventsSummaryCard
          label="Completion Rate"
          value="87%"
          chart={<NpmSparkLine />}
        />
      </StyledFlex>
      <ProgressChart events={events} />
    </CardsRow>
  );
};

const CardsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const StyledFlex = styled.div`
  flex-basis: 40%;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  flex-direction: column;
`;
