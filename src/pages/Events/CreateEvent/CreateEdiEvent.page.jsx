import { useDispatch, useSelector } from "react-redux";
import {
  formsSelector,
  updateAllEventInputs,
} from "../../../redux/farms/farms.slice";
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
import { generateNewEventsInputs } from "../../../redux/farms/metadata/event.metadata";
import { toast } from "react-toastify";
import { mobile } from "../../../theme/media-queries";

import { useLocation, useSearchParams } from "react-router-dom";
import useNavigateWithQuery from "../../../hooks/useNavigateWithQuery";
import { paths } from "../../../constants/paths";
import { useEffect } from "react";
import { fetchManagersAction } from "../../../redux/users/users.actions";
import CreateEventForm from "./CreateEventForm";
import { PageHeader } from "../../../components/Headers/PageHeader";

const CreateEdiEvent = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigateWithQuery();
  const [searchParams] = useSearchParams();

  const { eventManagers } = useSelector(usersSelector);
  const isEditMode = location?.state?.mode === "edit";
  const { createEventInputs } = useSelector(formsSelector);

  useEffect(() => {
    if (isEditMode) {
      refreshOnEditHandler();
    } else {
      refreshOnCreateMode();
    }
  }, []);

  const refreshOnEditHandler = () => {
    const eventUid = searchParams.get("eventUid");
    if (!eventUid) {
      navigate(paths.eventsDashboard);
    }

    if (!eventManagers.length || !createEventInputs.length) {
      if (eventUid) {
        navigate(`${paths.eventsDetails}?eventUid=${eventUid}`);
      } else {
        navigate(paths.eventsDashboard);
      }
    }
  };

  // const managersCallback = (callback) => {
  //   return dispatch(fetchManagersAction({ callback }));
  // };

  const refreshOnCreateMode = () => {
    if (!eventManagers.length) {
      const callback = (eventManagersRes) => {
        const createEventInputs = generateNewEventsInputs(eventManagersRes);
        dispatch(updateAllEventInputs(createEventInputs));
      };
      dispatch(fetchManagersAction({ callback }));
    }
  };

  const onCreateEvent = (payload) => {
    if (isEditMode) {
      dispatch(updateEventDispatch(payload));
    } else {
      dispatch(createEventsDispatch(payload));
    }
  };

  const onChooseVenueSuggestion = (event) => {
    const k = createEventInputs.map((inp) => {
      if (inp.name === "venue") {
        return {
          ...inp,
          value: event[inp.name] || inp.value,
          helperText: inp.helperText,
        };
      }
      return { ...inp, value: event[inp.name] || inp.value };
    });
    dispatch(updateAllEventInputs(k));
    toast.success("Selected event details are added in the input fields");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <BlueBackHOC>
      <PageHeader left>
        <StyledHeading>
          {isEditMode ? "Edit Event" : "Create Event"}
        </StyledHeading>
      </PageHeader>

      {/* All scroll content */}
      <EventsPageContainer>
        <CreateEventForm onCreateEvent={onCreateEvent} />
      </EventsPageContainer>

      <StyledSuggestions>
        {eventsMetadata.map((el) => (
          <VenueSuggestion
            key={el.title}
            venueDetails={el}
            btnText="Choose"
            onClick={() => onChooseVenueSuggestion(el)}
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

export default CreateEdiEvent;
