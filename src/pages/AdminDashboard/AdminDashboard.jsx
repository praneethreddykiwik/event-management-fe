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

const AdminDashboard = () => {
  const [open, setOpen] = useState(false);
  const tasks = [
    {
      event: 'Annual Conference 2025',
      date: 'March 15, 2025',
      assigned: 'Unassigned',
      type: BADGE_TYPES.PENDING,
      status: BADGE_TYPES.PENDING,
    },
    {
      event: 'Product Launch Event',
      date: 'April 20, 2025',
      assigned: 'Sarah Johnson',
      type: BADGE_TYPES.INPROGRESS,
      status: 'in progress',
    },
    {
      event: 'Team Building Workshop',
      date: 'May 10, 2025',
      assigned: 'Mike Chen',
      type: BADGE_TYPES.COMPLETED,
      status: BADGE_TYPES.COMPLETED,
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
            <TaskEvents>Upcoming Events</TaskEvents>
            <TaskMonitor>Manage and monitor all events</TaskMonitor>
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
