import styled from "styled-components";
import {
  StyledHeading,
  StyledMediumHeading,
  StyledParagraphSmall,
  StyledParagraphSmallGray,
} from "../../components/Styled/Typography.styled";
import { useEffect } from "react";
import { fetchEventsAndTasksAction } from "../../redux/tasks/tasks.actions";
import { useDispatch, useSelector } from "react-redux";
import { authSelector } from "../../redux/auth/auth.slice";
import { tasksSelector } from "../../redux/tasks/tasks.slice";
import { StyledHr } from "../../components/Styled/Common.styled";
import { BlueBackHOC } from "../../HOC/BlueBackHOC";
import { Section } from "../../HOC/SectionsHOC";
import { mapTaskForUI } from "../../helpers/Dashboard.helper";
import CustomerItem from "./CustomerItem";
import * as enums from "../../myEnum";

const CustomerDashboard = () => {
  const dispatch = useDispatch();

  const { authUser } = useSelector(authSelector);
  const { tasks } = useSelector(tasksSelector);
  useEffect(() => {
    if (!authUser?.uid || !authUser?.tenantUid) return;

    const query = `assignedToUid=${authUser.uid}&tenantUid=${authUser.tenantUid}`;
    dispatch(fetchEventsAndTasksAction(query));
  }, []);

  return (
    <BlueBackHOC>
      <DashboardContainer>
        <StyledHeading left>{authUser.username}</StyledHeading>
        <StyledHr />

        {tasks.map((event) => (
          <Section key={event.eventUid}>
            <StyledTaskHeading>
              <StyledBox2>
                <StyledMediumHeading left>
                  {event.eventName}
                </StyledMediumHeading>
                <StyledParagraphSmall left>
                  {event.eventVenue}
                </StyledParagraphSmall>
                <StyledParagraphSmall left>
                  {enums.TASK_ASSIGNEE} {event.eventAssignedToFirstName}{" "}
                  {event.eventAssignedToLastName}
                </StyledParagraphSmall>
                {/* <TaskAssignee>
                  {E_M_DASHBOARD_COMMON.TASKDUE} {task.taskDueAt}
                </TaskAssignee> */}
              </StyledBox2>
            </StyledTaskHeading>
            <StyledHr />
            {event.tasks.length ? (
              event.tasks.map((task) => (
                <CustomerItem task={mapTaskForUI(task)} />
              ))
            ) : (
              <StyledParagraphSmallGray>
                No tasks added yet
              </StyledParagraphSmallGray>
            )}
          </Section>
        ))}
      </DashboardContainer>
    </BlueBackHOC>
  );
};

const DashboardContainer = styled.div`
  padding: 0 16px 16px 16px;
`;

// const TaskOverview = styled(StyledMediumHeading)``;
// const TaskMonitor = styled(StyledParagraphSmall)``;
// const TaskAssignee = styled(StyledParagraphSmall)``;

const StyledTaskHeading = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const StyledBox2 = styled.div`
  flex-basis: 50%;
`;

const StyledHrTask = styled(StyledHr)``;

export default CustomerDashboard;
