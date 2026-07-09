import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import AdminTaskItem from "./AdminTaskItem";
import {
  StyledMediumHeading,
  StyledParagraphSmall,
  StyledParagraphSmallGray,
} from "../../../components/Styled/Typography.styled";
import CreateEventButtons from "./CreateEventManagerB";
import { useDispatch, useSelector } from "react-redux";
import { fetchManagersAction } from "../../../redux/users/users.actions";
import { ROLES } from "../../../constants/roles";
import ManagersPopupModal from "./AdminPopupModal/ManagersPopupModal";
import { fetchEventsDispatch } from "../../../redux/events/events.actions";
import {
  eventsSelector,
  setEventsGridView,
} from "../../../redux/events/events.slice";
import { BlueBackHOC } from "../../../HOC/BlueBackHOC";
import { mapEventForUI } from "../../../helpers/Dashboard.helper";
import { usersSelector } from "../../../redux/users/users.slice";
import { paths } from "../../../constants/paths";
import { EventCards } from "./EventCards/EventCards";
import * as enums from "../../../myEnum";
import { authSelector } from "../../../redux/auth/auth.slice";
import useNavigateWithQuery from "../../../hooks/useNavigateWithQuery";
import { updateAllEventInputs } from "../../../redux/farms/farms.slice";
import { generateNewEventsInputs } from "../../../redux/farms/metadata/event.metadata";
import { PageHeader } from "../../../components/Headers/PageHeader";
import { EventsFilterCards } from "./EventsFilterCards";
import { generateFetchManagersReq } from "../../../models/requests/user.req.model";
import { Icon } from "../../../components/Icons/Icons";
import { mobile } from "../../../theme/media-queries";
import { FilterHeaders } from "../../../components/Headers/FilterHeaders";

const EventsDashboard = () => {
  const dispatch = useDispatch();
  const [openManagersPopup, setOpenManagersPopup] = useState(false);

  const { events, eventsSearchVal, selectedEventFilters } =
    useSelector(eventsSelector);
  const { eventManagers } = useSelector(usersSelector);
  const { authUser } = useSelector(authSelector);
  const { eventGridView } = useSelector(eventsSelector);
  const navigate = useNavigateWithQuery();

  useEffect(() => {
    dispatch(
      fetchManagersAction(
        generateFetchManagersReq(authUser?.tenantId, ROLES.eventManager),
      ),
    );

    const query = `?status=${selectedEventFilters
      .filter((fl) => fl.selected)
      .map((m) => m.value)
      .join(",")}`;
    dispatch(fetchEventsDispatch({ query }));
  }, []);

  const onCreateEvent = () => {
    const createEventInputs = generateNewEventsInputs(eventManagers);
    dispatch(updateAllEventInputs(createEventInputs));
    navigate(`${paths.createEvent}`);
  };

  const onChangeSearch = () => {};

  return (
    <BlueBackHOC>
      <PageHeader isTitle>Events</PageHeader>
      <EventCards events={events} eventManagers={eventManagers} />
      <CreateEventButtons
        onCreateEvent={onCreateEvent}
        setOpenManagersPopup={setOpenManagersPopup}
      />
      {openManagersPopup && (
        <ManagersPopupModal onClose={() => setOpenManagersPopup(false)} />
      )}
      <FilterHeaders
        placeholder="Search Events"
        value={eventsSearchVal}
        onChangeSearch={onChangeSearch}
      />
      <EventsFilterCards />
      <TaskMainCard>
        <Tasktxt2>
          <Textwrapper>
            <StyledMediumHeading left>Events</StyledMediumHeading>
            <StyledParagraphSmall left>{enums.MONITOR_EV}</StyledParagraphSmall>
          </Textwrapper>
          <AlignBox onClick={() => dispatch(setEventsGridView(!eventGridView))}>
            <Icon selected={!eventGridView}>view_list</Icon>
            <Icon selected={eventGridView}>grid_view</Icon>
          </AlignBox>
        </Tasktxt2>
        <TaskList $gridView={eventGridView}>
          {!events.length ? (
            <StyledParagraphSmallGray>
              No Events available
            </StyledParagraphSmallGray>
          ) : (
            events.map((event) => (
              <AdminTaskItem
                key={event.uid}
                event={mapEventForUI(event)}
                gridView={eventGridView}
              />
            ))
          )}
        </TaskList>
      </TaskMainCard>
    </BlueBackHOC>
  );
};

const TaskMainCard = styled.div`
  border-radius: 14px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow:
    rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

const Tasktxt2 = styled.div`
  padding: 20px 20px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TaskList = styled.div`
  padding: 20px;
  display: flex;
  gap: 20px;
  justify-content: space-evenly;
  flex-direction: ${(props) => (props.$gridView ? "row" : "column")};
  flex-wrap: wrap;
  width: 100%;
`;

const AlignBox = styled.div`
  display: flex;
  justify-content: end;
  padding-right: 8px;
  gap: 10px;
  cursor: pointer;
  ${mobile`display: none;`}
`;

const Textwrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default EventsDashboard;