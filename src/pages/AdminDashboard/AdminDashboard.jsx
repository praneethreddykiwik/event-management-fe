import { useEffect, useState } from "react";
import styled from "styled-components";
import AdminSummaryCard from "./AdminSummaryCard";
import AdminTaskItem from "./AdminTaskItem";
import {
  StyledHeadingMaxBig,
  StyledMediumHeading,
  StyledParagraphSmall,
} from "../../components/Styled/Typography.styled";
import CreateEventButtons from "./CreateEventManagerB";
import CreateEventModal from "./CreateEventModal";
import { ADMIN_COMMON } from "../../Enum/Admin.common";
import { useDispatch, useSelector } from "react-redux";
import { fetchManagersAction } from "../../redux/users/users.actions";
import useTenant from "../../hooks/useTenant.hook";
import { roles } from "../../constants/roles";
import ManagersPopupModal from "./AdminPopupModal/ManagersPopupModal";
import { fetchEventsDispatch } from "../../redux/events/events.actions";
import { eventsSelector } from "../../redux/events/events.slice";
import GlobalSpinner from "../../components/Spinner/GlobalSpinner";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const tenantId = useTenant();

  const [openManagersPopup, setOpenManagersPopup] = useState(false);
  const [open, setOpen] = useState(false);

  const { events } = useSelector(eventsSelector);

  useEffect(() => {
    const payload = {
      query: `?tenantId=${tenantId}&role=${roles.eventManager}`,
    };
    dispatch(fetchManagersAction(payload));

    dispatch(fetchEventsDispatch());
  }, []);

  return (
    <AdminDashboardContainer>
      <StyledHeadingMaxBig left>Admin Manager</StyledHeadingMaxBig>
      <CardsRow>
        <AdminSummaryCard label="Total Events" value={events.length} />
        <AdminSummaryCard label="Event Managers" value="5" />
        <AdminSummaryCard label="Completion Rate" value="87%" />
      </CardsRow>
      <CreateEventButtons
        onCreateEvent={() => setOpen(true)}
        setOpenManagersPopup={setOpenManagersPopup}
      />

      {open && <CreateEventModal onClose={() => setOpen(false)} />}
      {openManagersPopup && (
        <ManagersPopupModal onClose={() => setOpenManagersPopup(false)} />
      )}

      <TaskMainCard>
        <Tasktxt>
          <TaskEvents>{ADMIN_COMMON.UPCOMING_EV}</TaskEvents>
          <TaskMonitor>{ADMIN_COMMON.MONITOR_EV}</TaskMonitor>
        </Tasktxt>
        <TaskList>
          {events.map((task, index) => (
            <AdminTaskItem key={index} data={task} />
          ))}
        </TaskList>
      </TaskMainCard>
    </AdminDashboardContainer>
  );
};

const AdminDashboardContainer = styled.div`
  max-width: 1200px;
  margin: 10px auto;
  padding: 20px;
`;
const CardsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
`;
const TaskMainCard = styled.div`
  border-radius: 14px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

const Tasktxt = styled.div`
  padding: 20px 20px 10px;
`;
const TaskEvents = styled(StyledMediumHeading)`
  margin: 0;
  text-align: left;
`;
const TaskMonitor = styled(StyledParagraphSmall)`
  margin: 0;
  text-align: left;
`;
const TaskList = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export default AdminDashboard;
