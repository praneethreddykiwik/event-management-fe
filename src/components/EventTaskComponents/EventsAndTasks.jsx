import { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { StyledParagraphSmallGray } from "../Styled/Typography.styled";
import {
  fetchEventsAndTasksAction,
  fetchQaEventsAndTasksAction,
} from "../../redux/tasks/tasks.actions";
import { authSelector } from "../../redux/auth/auth.slice";
import { tasksSelector } from "../../redux/tasks/tasks.slice";
import { mapTaskForUI } from "../../helpers/Dashboard.helper";
import useNavigateWithQuery from "../../hooks/useNavigateWithQuery";
import { paths } from "../../constants/paths";
import { fetchVendorsSupsQA } from "../../redux/users/users.actions";
import { usersSelector } from "../../redux/users/users.slice";
import { getStatusColor } from "../../utils/utils";
import FilterCard from "../Cards/FilterCard";
// import TaskRow from "./TaskRow";
import { EventWrapsTasks } from "./EventWrapsTasks";

const EventsAndTasks = ({ isQa }) => {
  const dispatch = useDispatch();
  const navigate = useNavigateWithQuery();

  const { authUser } = useSelector(authSelector);
  const { eventsAndTasks, taskCountObj } = useSelector(tasksSelector);
  const { vendors, supervisors, qa } = useSelector(usersSelector);

  useEffect(() => {
    const query = `assignedToUid=${authUser?.uid}&tenantUid=${authUser?.tenantUid}`;
    if (isQa) {
      dispatch(fetchQaEventsAndTasksAction(query));
    } else {
      dispatch(fetchEventsAndTasksAction(query));
    }
    // checkHere
    if (!vendors.length || !supervisors.length || !qa.length) {
      dispatch(fetchVendorsSupsQA());
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
          priority: task.taskPriority,
          dueAt: task.taskDueAt,
          assignedToUid: task.taskAssignedToUid,
          status: task.taskStatus,
          qaAssignedTo: task.qaAssignedTo,
          qaAssignedToUid: task.qaAssignedToUid,
        },
      },
    });
  };

  return (
    <DashboardContainer>
      {/* Filter cards */}
      <CardsRow>
        {Object.keys(taskCountObj).map((key) => (
          <FilterCard
            objKey={key}
            value={taskCountObj[key]}
            color={getStatusColor(key, taskCountObj)}
          />
        ))}
      </CardsRow>

      {eventsAndTasks.map((event) => (
        <EventWrapsTasks event={event} onAddTask={onAddTask}>
          {event.tasks?.length ? (
            event.tasks.map((task) => (
              <TaskRow
                task={mapTaskForUI(task, event)}
                onEdit={(tsk) => onEdit(tsk, event)}
              />
            ))
          ) : (
            <StyledParagraphSmallGray>
              No tasks added yet
            </StyledParagraphSmallGray>
          )}
        </EventWrapsTasks>
      ))}
    </DashboardContainer>
  );
};

const DashboardContainer = styled.div`
  // padding: 0 16px 16px 16px;
`;

const CardsRow = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

export default EventsAndTasks;
