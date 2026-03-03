import styled from "styled-components";
import { useLocation } from "react-router-dom";
import ProgressChart from "../EventsDashboard/EventCards/ProgressChart";
import { BlueBackHOC } from "../../../HOC/BlueBackHOC";
import { DetailsBox } from "./DetailsBox";
import { TasksList } from "./TasksList";
import { TitleBox } from "./TitleBox";
import { SecondBoxCol } from "./CardsBox";

const EventDetails = () => {
  const { state } = useLocation();
  const event = state?.event;

  return (
    <BlueBackHOC>
      <StyledBG>
        <TitleBox />
        <StyledEventBody>
          <DetailsBox />
          <SecondBoxCol />
          <ProgressChart events={[event]} />
        </StyledEventBody>
        <TasksList />
      </StyledBG>
    </BlueBackHOC>
  );
};

const StyledEventBody = styled.div`
  display: flex;
  gap: 30px;
  margin-top: ${({ theme }) => `${theme.spacings["spacing-6"]}`};
  flex-wrap: wrap;
`;

const StyledBG = styled.div`
  padding: 40px 50px;
  min-height: 80vh;
`;

export default EventDetails;
