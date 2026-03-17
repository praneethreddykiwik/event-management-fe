import styled from "styled-components";
import { BlueBackHOC } from "../../../HOC/BlueBackHOC";
import { DetailsBox } from "./DetailsBox";
import { TasksList } from "./TasksList";
import { TitleBox } from "./TitleBox";
import { SecondBoxCol } from "./CardsBox";
import { mobile } from "../../../theme/media-queries";
import EventDetailsPChart from "./EventDetailsPChart";
import { useDispatch, useSelector } from "react-redux";
import { eventsSelector } from "../../../redux/events/events.slice";
import { useEffect } from "react";
import { fetchTasksApiAction } from "../../../redux/tasks/tasks.actions";
import { fetchEventDetailsAction } from "../../../redux/events/events.actions";
import { useSearchParams } from "react-router-dom";
import useNavigateWithQuery from "../../../hooks/useNavigateWithQuery";
import { paths } from "../../../constants/paths";

const EventDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigateWithQuery();
  const [searchParams] = useSearchParams();

  const { eventDetails: event } = useSelector(eventsSelector);
  console.log("event at eventdetails page: ", event);

  useEffect(() => {
    const eventUid = searchParams.get("eventUid");
    if (!eventUid) {
      return navigate(paths.eventsDashboard);
    }
    dispatch(fetchEventDetailsAction({ eventUid: eventUid }));

    const query = `eventUid=${eventUid}`;
    dispatch(fetchTasksApiAction({ query }));
  }, []);

  return (
    <BlueBackHOC>
      <StyledBG>
        <TitleBox />
        <StyledEventBody>
          <DetailsBox />
          <SecondBoxCol />
          <EventDetailsPChart />
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
