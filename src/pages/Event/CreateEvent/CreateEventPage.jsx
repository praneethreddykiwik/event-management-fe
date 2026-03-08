import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAllEventInputs } from "../../../redux/farms/farms.slice";
import { generateNewEventsInputs } from "../../../redux/farms/metadata/event.metadata";
import CreateEvent from "./CreateEvent";
import styled from "styled-components";
import { BlueBackHOC } from "../../../HOC/BlueBackHOC";
import {
  createEventsDispatch,
  updateEventDispatch,
} from "../../../redux/events/events.actions";
import { usersSelector } from "../../../redux/users/users.slice";
import { StyledHeading } from "../../../components/Styled/Typography.styled";
import { StyledHr } from "../../../components/Styled/Common.styled";

import { VenueSuggestion } from "../../../components/Venue/VenueSuggestion";
import { eventsMetadata } from "../../../constants/events.constants";
import { generateEventDataToEdit } from "../../../redux/farms/metadata/event.metadata";
import { fetchManagersAction } from "../../../redux/users/users.actions";
import { toast } from "react-toastify";
import { mobile } from "../../../theme/media-queries";

import { useLocation } from "react-router-dom";

const CreateEventPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const { eventManagers } = useSelector(usersSelector);
  const isEditMode = location?.state?.mode === "edit";
  const eventData = location?.state?.eventData;

  useEffect(() => {
    const callback = (eventManagers) => {
      let eventMetaDataFull = isEditMode
        ? generateEventDataToEdit(eventManagers, location, eventData)
        : generateNewEventsInputs(eventManagers, location);

      dispatch(updateAllEventInputs(eventMetaDataFull));
    };

    dispatch(fetchManagersAction({ callback }));
  }, []);

  const onCreateEvent = (payload) => {
    if (isEditMode) {
      dispatch(updateEventDispatch(payload));
    } else {
      dispatch(createEventsDispatch(payload));
    }
  };

  const onChooseVenue = (event) => {
    dispatch(
      updateAllEventInputs(generateEventDataToEdit(eventManagers, event)),
    );
    toast.success("Selected event details are added in the input fields");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <BlueBackHOC>
      <EventsPageContainer>
        <StyledHeading left>
          {isEditMode ? "Edit Event" : "Create Event"}
        </StyledHeading>
        <StyledHr />
        <CreateEvent onCreateEvent={onCreateEvent} />
      </EventsPageContainer>

      <StyledSuggestions>
        {eventsMetadata.map((el) => (
          // refactor
          <VenueSuggestion
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

  ${mobile`
    padding: 15px;
  `}
`;

const StyledSuggestions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 20px;

  .venue-ctn {
    width: 31%;
    flex-grow: 1;
  }

  ${mobile`
    flex-direction: column;
    gap: 20px;

    .venue-ctn {
      width: 100%;
      flex-grow: 1;
    }
  `}
`;

export default CreateEventPage;
