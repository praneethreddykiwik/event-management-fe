import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAllEventInputs } from "../../../redux/farms/farms.slice";
import { eventMetaData } from "../../../redux/farms/metadata/event.metadata";
import CreateEvent from "./CreateEvent";
import styled from "styled-components";
import { BlueBackHOC } from "../../../HOC/BlueBackHOC";
import { createEventsDispatch } from "../../../redux/events/events.actions";
import { usersSelector } from "../../../redux/users/users.slice";
import { StyledHeading } from "../../../components/Styled/Typography.styled";
import { StyledHr } from "../../../components/Styled/Common.styled";

import { Venue } from "../../../components/Venue/Venue";
import { tasksMetadata } from "../../../constants/metadata/tasks.metadata";
import { fetchManagersAction } from "../../../redux/users/users.actions";

const CreateEventPage = () => {
  const dispatch = useDispatch();

  const { eventManagers } = useSelector(usersSelector);

  useEffect(() => {
    dispatch(fetchManagersAction());
    const eventMetaDataFull = eventMetaData(eventManagers);
    dispatch(updateAllEventInputs(eventMetaDataFull));
  }, []);

  const onCreateEvent = (payload) => {
    dispatch(createEventsDispatch(payload));
  };

  return (
    <BlueBackHOC>
      <EventsPageContainer>
        <StyledHeading left>Create Event</StyledHeading>
        <StyledHr />

        <CreateEvent onCreateEvent={onCreateEvent} />
      </EventsPageContainer>

      <StyledSuggestions>
        {tasksMetadata.map((el) => (
          <Venue venueDetails={el} btnText="Choose" onClick={() => {}} />
        ))}
      </StyledSuggestions>
    </BlueBackHOC>
  );
};

const EventsPageContainer = styled.div`
  padding: 20px 20px 40px 20px;
`;

export default CreateEventPage;

const DashboardContainer = styled.div`
  padding: 0 20px 60px 20px;
`;

const StyledBox = styled.div`
  flex-basis: 30%;
  flex-shrink: 0;
`;

const StyledFlex = styled.div`
  display: flex;
  gap: 160px;
  // padding-left: 140px;
`;

const StyledSuggestions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 20px;

  .venue-ctn {
    flex: 0 0 calc((100% - 180px) / 3);
  }
`;
