import { useEffect, useState } from "react";
import styled from "styled-components";
import AdminTaskItem from "./AdminTaskItem";
import {
  StyledHeading,
  StyledMediumHeading,
  StyledParagraphSmall,
} from "../../../components/Styled/Typography.styled";
import CreateEventButtons from "./CreateEventManagerB";
import { useDispatch, useSelector } from "react-redux";
import { fetchManagersAction } from "../../../redux/users/users.actions";
import { roles } from "../../../constants/roles";
import ManagersPopupModal from "./AdminPopupModal/ManagersPopupModal";
import { fetchEventsDispatch } from "../../../redux/events/events.actions";
import { eventsSelector } from "../../../redux/events/events.slice";
import { BlueBackHOC } from "../../../HOC/BlueBackHOC";
import { StyledHr } from "../../../components/Styled/Common.styled";
import { mapEventForUI } from "../../../helpers/Dashboard.helper";
import { usersSelector } from "../../../redux/users/users.slice";
import { paths } from "../../../constants/paths";
import { EventCards } from "./EventCards/EventCards";
import * as enums from "../../../myEnum";
import { authSelector } from "../../../redux/auth/auth.slice";
import useNavigateWithQuery from "../../../hooks/useNavigateWithQuery";
import { updateAllEventInputs } from "../../../redux/farms/farms.slice";
import { generateNewEventsInputs } from "../../../redux/farms/metadata/event.metadata";

const EventsDashboard = () => {
  const dispatch = useDispatch();

  const [openManagersPopup, setOpenManagersPopup] = useState(false);

  const { events } = useSelector(eventsSelector);
  const { eventManagers } = useSelector(usersSelector);
  const { authUser } = useSelector(authSelector);
  const navigate = useNavigateWithQuery();

  // adnan
  const onChooseEvent = (event) => {
    navigate(`${paths.createEvent}`, {
      state: {
        mode: "edit",
        eventData: event,
      },
    });
  };

  useEffect(() => {
    const payload = {
      query: `?tenantId=${authUser?.tenantId}&role=${roles.eventManager}`, // checkHere
    };
    dispatch(fetchManagersAction(payload));
    dispatch(fetchEventsDispatch());
  }, []);

  const onCreateEvent = () => {
    const createEventInputs = generateNewEventsInputs(eventManagers);
    debugger;
    dispatch(updateAllEventInputs(createEventInputs));
    navigate(`${paths.createEvent}`);
  };

  return (
    <BlueBackHOC>
      <AdminDashboardContainer>
        <StyledHeading left>Admin Dashboard</StyledHeading>
        <StyledHr />

        <EventCards events={events} eventManagers={eventManagers} />

        <CreateEventButtons
          onCreateEvent={onCreateEvent}
          setOpenManagersPopup={setOpenManagersPopup}
        />

        {openManagersPopup && (
          <ManagersPopupModal onClose={() => setOpenManagersPopup(false)} />
        )}

        <TaskMainCard>
          <Tasktxt>
            <StyledMediumHeading left>Events</StyledMediumHeading>
            <StyledParagraphSmall left>{enums.MONITOR_EV}</StyledParagraphSmall>
          </Tasktxt>
          <TaskList>
            {events.map((event) => (
              <AdminTaskItem event={mapEventForUI(event)} />
            ))}
          </TaskList>
        </TaskMainCard>
      </AdminDashboardContainer>
    </BlueBackHOC>
  );
};

const AdminDashboardContainer = styled.div`
  padding: 0 20px 20px 20px;
`;

const TaskMainCard = styled.div`
  border-radius: 14px;
  box-shadow: ${({ theme }) => theme.shadows["level-2"]};
  background: ${({ theme }) => theme.colors.white};
  box-shadow:
    rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

const Tasktxt = styled.div`
  padding: 20px 20px 10px;
`;

const TaskList = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default EventsDashboard;
