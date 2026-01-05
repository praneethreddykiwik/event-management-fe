import styled from "styled-components";
import SummaryCard from "./SummaryCard";
import TaskItem from "./TaskItem";
import {
  StyledHeading,
  StyledHeadingMaxBig,
  StyledMediumHeading,
  StyledParagraphSmall,
} from "../../components/Styled/Typography.styled";
import { E_M_DASHBOARD_COMMON } from "../../enum/EMDashboard.common";
import { BADGE_TYPES } from "../../enum/common";
import { useEffect } from "react";
import { fetchEventsAndTasksAction } from "../../redux/tasks/tasks.actions";
import { useDispatch, useSelector } from "react-redux";
import { authSelector } from "../../redux/auth/auth.slice";
import { tasksSelector } from "../../redux/tasks/tasks.slice";
import { StyledHr } from "../../components/Styled/Common.styled";
import { BlueBackHOC } from "../../HOC/BlueBackHOC";
import { Section } from "../../HOC/SectionsHOC";

const EventManagerDashboard = () => {
  const dispatch = useDispatch();

  const { authUser } = useSelector(authSelector);
  const { tasks } = useSelector(tasksSelector);

  useEffect(() => {
    const query = `assignedToUid=${authUser.uid}&tenantUid=${authUser.tenantUid}`;
    dispatch(fetchEventsAndTasksAction(query));
  }, []);

  return (
    <BlueBackHOC>
      <DashboardContainer>
        <StyledHeading left>Event Manager</StyledHeading>
        <StyledHr />

        <CardsRow>
          <SummaryCard label="Total Tasks" value={tasks.length} />
          <SummaryCard type="completed" label="Completed" value="1" />
          <SummaryCard type="inprogress" label="In Progress" value="2" />
          <SummaryCard type="pending" label="Pending" value="1" />
        </CardsRow>

        {tasks.map((event) => (
          <Section>
            <TaskOverview>{event.eventName}</TaskOverview>
            <TaskMonitor>{event.venue}</TaskMonitor>
            {event.tasks.map((task) => (
              <TaskItem key={event.eventUid} task={task} />
            ))}
          </Section>
        ))}
      </DashboardContainer>
    </BlueBackHOC>
  );
};

const DashboardContainer = styled.div`
  padding: 0 20px 20px 20px;
`;

const CardsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  margin-bottom: 30px;
`;

const Tasktxt = styled.div`
  padding: 20px 20px 10px;
`;

const TaskOverview = styled(StyledMediumHeading)`
  margin: 0;
  text-align: left;
`;

const TaskMonitor = styled(StyledParagraphSmall)`
  margin: 0;
  text-align: left;
`;

export default EventManagerDashboard;
