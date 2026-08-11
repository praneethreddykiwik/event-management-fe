import { useState } from "react";
import { useEffect, useMemo } from "react";
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
  setSearchFilter,
} from "../../../redux/events/events.slice";
import { BlueBackHOC } from "../../../HOC/BlueBackHOC";
import { usersSelector } from "../../../redux/users/users.slice";
import { paths } from "../../../constants/paths";
import { EventCards } from "./EventCards/EventCards";
import * as enums from "../../../myEnum";
import { authSelector } from "../../../redux/auth/auth.slice";
import useNavigateWithQuery from "../../../hooks/useNavigateWithQuery";
import { updateAllEventInputs } from "../../../redux/farms/farms.slice";
import { generateNewEventsInputs } from "../../../redux/farms/metadata/event.metadata";
import { PageHeader } from "../../../components/Headers/PageHeader";
import { generateFetchManagersReq } from "../../../models/requests/user.req.model";
import { Icon } from "../../../components/Icons/Icons";
import { mobile } from "../../../theme/media-queries";
import { FilterHeaders } from "../../../components/Headers/FilterHeaders";
import { fetchBookmarksByTypeAction } from "../../../redux/bookmarks/bookmarks.actions";
import { debounce } from "../../../utils/debouncer";
import FilterBoxes from "../../../components/Filters/FilterBoxes/FilterBoxes";
import { getStatusColor } from "../../../utils/utils";
import {
  isFilterSelected,
  updateFilters,
} from "../../../components/Filters/FilterBoxes/FilterBoxes.helper";
import { INITIAL_FILTERS } from "../../../constants/events.constants";
import { EventContainer } from "./EventContainer";
import { setSelectedEventFilters } from "../../../redux/events/events.slice";

const EventsDashboard = () => {
  const dispatch = useDispatch();
  const [openManagersPopup, setOpenManagersPopup] = useState(false);

  const {
    events,
    searchFilter,
    selectedEventFilters,
    eventGridView,
    eventsStatusCounts,
  } = useSelector(eventsSelector);

  const { eventManagers } = useSelector(usersSelector);
  const { authUser } = useSelector(authSelector);

  const navigate = useNavigateWithQuery();
  // const [searchFilter, setSearchFilter] = useState("");

  useEffect(() => {
    if (authUser?.tenantId) {
      const fetchmanagerpayload = generateFetchManagersReq(
        authUser.tenantId,
        ROLES.eventManager,
      );
      dispatch(fetchManagersAction(fetchmanagerpayload));
      dispatch(fetchBookmarksByTypeAction("event"));
    }
  }, [dispatch, authUser?.tenantId]);

  useEffect(() => {
    const query = selectedEventFilters
      .filter((fl) => fl.selected)
      .map((m) => m.value)
      .join(",");
    fetchEvents(query, searchFilter);
  }, []);

  const fetchEvents = (query, searchFilterArg) => {
    dispatch(
      fetchEventsDispatch({
        query,
        searchText: searchFilterArg,
      }),
    );
  };

  const onCreateEvent = () => {
    const createEventInputs = generateNewEventsInputs(eventManagers);
    dispatch(updateAllEventInputs(createEventInputs));
    navigate(`${paths.createEvent}`);
  };

  const viewClickHandler = () => {
    dispatch(setEventsGridView(!eventGridView));
  };

  const debounceFetchEventsFn = useMemo(
    () => debounce(fetchEvents, 2000),
    [dispatch],
  );

  const onChangeSearch = (e) => {
    const value = e.target.value;
    dispatch(setSearchFilter(value));

    const query = selectedEventFilters
      .filter((fl) => fl.selected)
      .map((m) => m.value)
      .join(",");
    debounceFetchEventsFn(query, value);
  };

  const onClickFilter = (key) => {
    const updated = updateFilters(key, selectedEventFilters, INITIAL_FILTERS);
    dispatch(setSelectedEventFilters(updated));

    const query = updated
      .filter((fl) => fl.selected)
      .map((m) => m.value)
      .join(",");
    fetchEvents(query, searchFilter);
  };

  const isSelected = (key) => {
    return isFilterSelected(key, selectedEventFilters, INITIAL_FILTERS);
  };

  return (
    <BlueBackHOC>
      <PageHeader isTitle>Events</PageHeader>
      <EventCards events={eventsStatusCounts} eventManagers={eventManagers} />
      <CreateEventButtons
        onCreateEvent={onCreateEvent}
        setOpenManagersPopup={setOpenManagersPopup}
      />
      {openManagersPopup && (
        <ManagersPopupModal onClose={() => setOpenManagersPopup(false)} />
      )}
      <FilterHeaders
        placeholder="Search Events"
        value={searchFilter}
        onChange={onChangeSearch}
      />

      <FilterBoxes
        countObj={eventsStatusCounts}
        getColor={(key) => getStatusColor(key, eventsStatusCounts)}
        onCardClick={onClickFilter}
        isSelected={isSelected}
      />

      <TaskMainCard>
        <Tasktxt2>
          <Textwrapper>
            <StyledMediumHeading left>Events</StyledMediumHeading>
            <StyledParagraphSmall left>{enums.MONITOR_EV}</StyledParagraphSmall>
          </Textwrapper>
          <AlignBox onClick={viewClickHandler}>
            <Icon selected={!eventGridView}>view_list</Icon>
            <Icon selected={eventGridView}>grid_view</Icon>
          </AlignBox>
        </Tasktxt2>
        <EventContainer />
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
