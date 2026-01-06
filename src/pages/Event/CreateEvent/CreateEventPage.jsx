import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAllEventInputs } from "../../../redux/farms/farms.slice";
import { eventMetaData } from "../../../redux/farms/eventsData/event.metadata";
import CreateEvent from "./CreateEvent";
import styled from "styled-components";
import { BlueBackHOC } from "../../../HOC/BlueBackHOC";
import { createEventsDispatch } from "../../../redux/events/events.actions";
import { usersSelector } from "../../../redux/users/users.slice";
import { StyledHeading } from "../../../components/Styled/Typography.styled";
import { StyledHr } from "../../../components/Styled/Common.styled";

import useNavigateWithQuery from "../../../hooks/useNavigateWithQuery";

const CreateEventPage = () => {
  const dispatch = useDispatch();

  const { eventManagers } = useSelector(usersSelector);

  useEffect(() => {
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
    </BlueBackHOC>
  );
};

const EventsPageContainer = styled.div`
  padding: 20px 20px 40px 20px;
`;

export default CreateEventPage;
