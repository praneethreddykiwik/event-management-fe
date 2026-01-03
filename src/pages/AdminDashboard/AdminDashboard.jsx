/** @format */

import { useState } from 'react';
import styled from 'styled-components';
import AdminSummaryCard from './AdminSummaryCard';
import AdminTaskItem from './AdminTaskItem';
import {
  StyledMediumHeading,
  StyledParagraphSmall,
} from '../../components/Styled/Typography.styled';
import { BADGE_TYPES } from '../../enum/Common';
import CreateEventButtons from './CreateEventManagerB';
import CreateEventModal from './CreateEventModal';
import {
  ADMIN_COMMON,
  EVENT_ASSIGNED,
  EVENT_DATE,
  EVENT_NAME,
  EVENT_STATUS,
} from '../../Enum/Admin.common';

const AdminDashboard = () => {
  const [open, setOpen] = useState(false);
  const tasks = [
    {
      event: EVENT_NAME.EVENT_NAME1,
      date: EVENT_DATE.EVENT_DATE1,
      assigned: EVENT_ASSIGNED.EVENT_ASSIGNED1,
      type: BADGE_TYPES.PENDING,
      status: EVENT_STATUS.EVENT_STATUS1,
    },
    {
      event: EVENT_NAME.EVENT_NAME2,
      date: EVENT_DATE.EVENT_DATE2,
      assigned: EVENT_ASSIGNED.EVENT_ASSIGNED2,
      type: BADGE_TYPES.INPROGRESS,
      status: EVENT_STATUS.EVENT_STATUS2,
    },
    {
      event: EVENT_NAME.EVENT_NAME3,
      date: EVENT_DATE.EVENT_DATE3,
      assigned: EVENT_ASSIGNED.EVENT_ASSIGNED3,
      type: BADGE_TYPES.COMPLETED,
      status: EVENT_STATUS.EVENT_STATUS3,
    },
  ];

  return (
    <>
      <AdminDashboardContainer>
        <CardsRow>
          <AdminSummaryCard label="Total Events" value="12" />
          <AdminSummaryCard label="Event Managers" value="5" />
          <AdminSummaryCard label="Completion Rate" value="87%" />
        </CardsRow>
        <CreateEventButtons onCreateEvent={() => setOpen(true)} />
        {open && <CreateEventModal onClose={() => setOpen(false)} />}
        <TaskMainCard>
          <Tasktxt>
            <TaskEvents>{ADMIN_COMMON.UPCOMING_EV}</TaskEvents>
            <TaskMonitor>{ADMIN_COMMON.MONITOR_EV}</TaskMonitor>
          </Tasktxt>
          <TaskList>
            {tasks.map((task, index) => (
              <AdminTaskItem key={index} data={task} />
            ))}
          </TaskList>
        </TaskMainCard>
      </AdminDashboardContainer>
    </>
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
