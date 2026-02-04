import styled from "styled-components";
import SummaryCard from "./SummaryCard";
import TaskItem from "./TaskItem";
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
import { Button } from "../../components/Buttons/Button";
import useNavigateWithQuery from "../../hooks/useNavigateWithQuery";
import { paths } from "../../constants/paths";
import { fetchVendorsAction } from "../../redux/users/users.actions";

const EventManagerDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigateWithQuery();

  const { authUser } = useSelector(authSelector);
  const { tasks } = useSelector(tasksSelector);

  useEffect(() => {
    const query = `assignedToUid=${authUser.uid}&tenantUid=${authUser.tenantUid}`;
    dispatch(fetchEventsAndTasksAction(query));
    dispatch(fetchVendorsAction());
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
          priority: task.taskPriority,
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

        <CardsRow>
          <SummaryCard label="Total Tasks" value={tasks.length} />
          <SummaryCard type="completed" label="Completed" value="1" />
          <SummaryCard type="inprogress" label="In Progress" value="2" />
          <SummaryCard type="pending" label="Pending" value="1" />
        </CardsRow>

        {tasks.map((event) => (
          <Section key={event.eventUid}>
            <StyledTaskHeading>
              <StyledBox2>
                <StyledMediumHeading left>{event.eventName}</StyledMediumHeading>
                <StyledParagraphSmall left>{event.eventVenue}</StyledParagraphSmall>
              </StyledBox2>

              <Button
                icon="add"
                sx={{ width: "180px" }}
                whiteText
                onClick={() => onAddTask(event)}
              >
                Add Task
              </Button>
            </StyledTaskHeading>
            <StyledHr />

            {event.tasks?.length ? (
              event.tasks.map((task) => (
                <TaskItem
                  task={mapTaskForUI(task)}
                  onEdit={(tsk) => onEdit(tsk, event)}
                />
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

const CardsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 40px;
`;


const StyledTaskHeading = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const StyledBox2 = styled.div`
  flex-basis: 50%;
`;

export default EventManagerDashboard;
