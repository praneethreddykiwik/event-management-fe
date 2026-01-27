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
import { eventsMetadata } from "../../../constants/metadata/events.metadata";
import { generateEventDataToEdit } from "../../../redux/farms/metadata/event.metadata";
import { fetchManagersAction } from "../../../redux/users/users.actions";
import { toast } from "react-toastify";

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

  const onChooseVenue = (event) => {
    dispatch(
      updateAllEventInputs(generateEventDataToEdit(eventManagers, event))
    );
    toast.success("Selected event details are added in the input fields");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <BlueBackHOC>
      <EventsPageContainer>
        <StyledHeading left>Create Event</StyledHeading>
        <StyledHr />

        <CreateEvent onCreateEvent={onCreateEvent} />
      </EventsPageContainer>

      <StyledSuggestions>
        {eventsMetadata.map((el) => (
          <Venue
            key={el.title}
            venueDetails={el}
            btnText="Choose"
            onClick={() => onChooseVenue(el)}
          />
        ))}
      </StyledSuggestions>
    </BlueBackHOC>
  );
};

const EventsPageContainer = styled.div`
  padding: 20px 20px 40px 20px;
`;
export default CreateEventPage;

const StyledSuggestions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 20px;

  .venue-ctn {
    flex: 0 0 calc((100% - 180px) / 3);
  }
`;
