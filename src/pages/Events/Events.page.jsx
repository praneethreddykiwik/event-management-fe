import { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { fetchManagersAction } from "../../redux/users/users.actions";
import { ROLES } from "../../constants/roles";
import { fetchEventsDispatch } from "../../redux/events/events.actions";
import { eventsSelector } from "../../redux/events/events.slice";
import { BlueBackHOC } from "../../HOC/BlueBackHOC";
import { authSelector } from "../../redux/auth/auth.slice";
import { PageHeader } from "../../components/Headers/PageHeader";
import { generateFetchManagersReq } from "../../models/requests/user.req.model";
import { fetchBookmarksByTypeAction } from "../../redux/bookmarks/bookmarks.actions";
import { EventsHistory } from "./EventsHistory/EventsHistory";
import { TabBody } from "../../components/UI/Tabs/OwnTabs";
import { useSearchParams } from "react-router-dom";
import AssignedEvents from "./AssignedEvents/AssignedEvents";
import EventsDashboard from "./EventsDashboard/EventsDashboard";

const eventTabs = [
  { label: "Events Dashboard" },
  { label: "Assigned Events" },
  { label: "Events History" },
];

const EventsPage = () => {
  const dispatch = useDispatch();
  const { authUser } = useSelector(authSelector);
  const [searchParams, setSearchParams] = useSearchParams();
  const { searchFilter, selectedEventFilters } = useSelector(eventsSelector);

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

  const handleTabChange = (val) => {
    setSearchParams(
      { tab: val, tenantId: searchParams.get("tenantId") },
      { replace: true },
    );
  };

  const selectedTab = searchParams.get("tab");

  return (
    <BlueBackHOC>
      <DashboardContainer>
        <PageHeader
          isTitle
          tabs={eventTabs}
          selectedTab={selectedTab}
          handleTabChange={handleTabChange}
        >
          Events
        </PageHeader>

        <TabBody value={0} selectedTab={selectedTab}>
          <EventsDashboard />
        </TabBody>

        <TabBody value={1} selectedTab={selectedTab}>
          <AssignedEvents />
        </TabBody>

        <TabBody value={2} selectedTab={selectedTab}>
          <EventsHistory />
        </TabBody>
      </DashboardContainer>
    </BlueBackHOC>
  );
};

const DashboardContainer = styled.div`
  padding: 0 16px 16px 16px;
`;

export default EventsPage;
