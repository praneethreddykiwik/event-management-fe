import styled from "styled-components";
import SummaryCard from "./SummaryCard";
import TaskItem from "./TaskItem";
import {
  StyledHeading,
  StyledParagraphSmallGray,
} from "../../components/Styled/Typography.styled";
import { useEffect } from "react";
import { fetchEventsAndTasksAction } from "../../redux/tasks/tasks.actions";
import { useDispatch, useSelector } from "react-redux";
import { authSelector } from "../../redux/auth/auth.slice";
import { tasksSelector } from "../../redux/tasks/tasks.slice";
import { StyledHr } from "../../components/Styled/Common.styled";
import { BlueBackHOC } from "../../HOC/BlueBackHOC";
import { mapTaskForUI } from "../../helpers/Dashboard.helper";
import useNavigateWithQuery from "../../hooks/useNavigateWithQuery";
import { paths } from "../../constants/paths";
import { fetchVendorsAction } from "../../redux/users/users.actions";
import { usersSelector } from "../../redux/users/users.slice";
import { EventSection } from "./EventSection";

const EventManagerDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigateWithQuery();

  const { authUser } = useSelector(authSelector);
  const { tasks, taskCountObj } = useSelector(tasksSelector);
  const { vendors } = useSelector(usersSelector);

  useEffect(() => {
    const query = `assignedToUid=${authUser.uid}&tenantUid=${authUser.tenantUid}`;
    dispatch(fetchEventsAndTasksAction(query));
    if (!vendors.length) {
      dispatch(fetchVendorsAction());
    }
  }, []);

  const onAddTask = (event) => {
    navigate(`${paths.createTask}`, {
      state: {
        eventUid: event.eventUid,
        mode: "add",
      },
    });
  };

  const onEdit = (task, event) => {
    navigate(`${paths.createTask}`, {
      state: {
        eventUid: event.eventUid,
        taskUid: task.taskUid,
        mode: "edit",
        taskData: {
          title: task.taskTitle,
          description: task.taskDescription,
          priority: task.priority,
          dueAt: task.taskDueAt,
          assignedToUid: task.taskAssignedToUid,
        },
      },
    });
  };

  return (
    <BlueBackHOC>
      <DashboardContainer>
        <StyledHeading left>Tasks</StyledHeading>
        <StyledHr />
        <SummaryCard taskCountObj={taskCountObj} />

        {tasks.map((event) => (
          <EventSection event={event} onAddTask={onAddTask}>
            {event.tasks?.length ? (
              event.tasks.map((task) => (
                <TaskItem
                  task={mapTaskForUI(task, event)}
                  onEdit={(tsk) => onEdit(tsk, event)}
                />
              ))
            ) : (
              <StyledParagraphSmallGray>
                No tasks added yet
              </StyledParagraphSmallGray>
            )}
          </EventSection>
        ))}
      </DashboardContainer>
    </BlueBackHOC>
  );
};

const DashboardContainer = styled.div`
  padding: 0 16px 16px 16px;
`;

export default EventManagerDashboard;
