import styled from "styled-components";
import ProgressChart from "./ProgressChart";
import EventsSummaryCard from "../../../../components/EventTaskComponents/EventsSummaryCard";
import ManagerStatusChart from "./ManagerStatusCharts/ManagerStatusChart";
import { mobile } from "../../../../theme/media-queries";
import { NpmSparkLine } from "../../../../components/Charts/SparkLine";

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
          inline
        />
      </StyledFlex>
      <ProgressChart />
    </CardsRow>
  );
};

const CardsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: space-between;
  margin-bottom: 20px;
  ${mobile`
      margin-top: 15px;
  `}
`;

const StyledFlex = styled.div`
  flex-basis: 40%;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  flex-direction: column;

  ${mobile`
    flex-basis: 100%;
    width: 100%;
    gap: 12px;
  `}
`;
