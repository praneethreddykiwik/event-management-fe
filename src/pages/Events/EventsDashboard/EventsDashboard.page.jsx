import { useEffect, useState } from "react";
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
import {
  getAllBookmarksByUserApi,
  bookmarkEventApi,
} from "../../../api/bookmark.api";
import {
  setAllBookmarks,
  setBookmark,
  removeBookmark,
  bookmarksSelector,
} from "../../../redux/bookmarks/bookmarks.slice";

const EventsDashboard = () => {
  const dispatch = useDispatch();
  const [openManagersPopup, setOpenManagersPopup] = useState(false);
  const [isBookmarkLoading, setIsBookmarkLoading] = useState(false);

  const { events, eventsSearchVal, selectedEventFilters } =
    useSelector(eventsSelector);
  const { eventManagers } = useSelector(usersSelector);
  const { authUser } = useSelector(authSelector);
  const { eventGridView } = useSelector(eventsSelector);
  const { bookmarksData, bookmarkOptions } = useSelector(bookmarksSelector);
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

    const loadAllBookmarks = async () => {
      try {
        const res = await getAllBookmarksByUserApi();
        const bookmarkList = res?.data?.details ?? [];
        console.log(bookmarkList);
        dispatch(setAllBookmarks(bookmarkList));
      } catch (err) {
        console.error("Failed to load bookmarks:", err);
      }
    };

    if (authUser?.uid) {
      loadAllBookmarks();
    }
  }, []);

  const getSelectedBookmarkFolder = (taskUid, type) => {
    if (!Array.isArray(bookmarksData)) return null;
    const match = bookmarksData.find(
      (folder) =>
        folder?.entity_type === type && folder?.entity_ids?.includes(taskUid),
    );
    return match ? match.bookmark_name : null;
  };

  const handleToggleBookmark = async (uid, label, type) => {
    if (isBookmarkLoading) return;

    const folder = bookmarksData?.find(
      (b) => b.bookmark_name === label && b.entity_type === type,
    );
    const willBeChecked = !folder?.entity_ids?.includes(uid);
    const payload = { entity_id: uid, bookmark_name: label, entity_type: type };

    if (willBeChecked) {
      dispatch(setBookmark(payload));
    } else {
      dispatch(removeBookmark(payload));
    }

    setIsBookmarkLoading(true);
    try {
      await bookmarkEventApi(payload);
    } catch (err) {
      console.error("Failed to save bookmark:", err);
      dispatch(willBeChecked ? removeBookmark(payload) : setBookmark(payload));
    } finally {
      setIsBookmarkLoading(false);
    }
  };

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
                selectedOption={getSelectedBookmarkFolder(event.uid, "event")}
                options={bookmarkOptions}
                onOptionToggle={(label, type) =>
                  handleToggleBookmark(event.uid, label, type)
                }
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
