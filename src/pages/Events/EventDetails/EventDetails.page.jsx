import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { BlueBackHOC } from "../../../HOC/BlueBackHOC";
import { DetailsBox } from "./DetailsBox";
import { TasksList } from "./TasksList";
import { TitleBox } from "./TitleBox";
import { SecondBoxCol } from "./CardsBox";
import { mobile } from "../../../theme/media-queries";
import EventDetailsPChart from "./EventDetailsPChart";

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
          <EventDetailsPChart events={[event]} />
        </StyledEventBody>
        <TasksList />
      </StyledBG>
    </BlueBackHOC>
  );
};

const StyledEventBody = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 40px;
  margin-top: ${({ theme }) => `${theme.spacings["spacing-6"]}`};

  > div {
    flex-basis: calc(33.3% - 32px);
    flex-grow: 1;
  }

  ${mobile`
    > div {
      flex-basis: 100%;
    }
  `}
`;

const StyledBG = styled.div`
  padding: 40px 50px;
  min-height: 80vh;

  ${mobile`
    padding: 20px 20px;
    `}
`;

export default EventDetails;
