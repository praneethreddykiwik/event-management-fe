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
import TaskRow from "./TaskRow";
import { EventWrapsTasks } from "./EventWrapsTasks";
import { TASK_INITIAL_FILTERS } from "../../constants/tasks.constants";
import { FilterHeaders } from "../Headers/FilterHeaders";
import FilterBoxes from "../Filters/FilterBoxes/FilterBoxes";
import {
  isFilterSelected,
  updateFilters,
} from "../Filters/FilterBoxes/FilterBoxes.helper";

const EventsAndTasks = ({ isQa }) => {
  const dispatch = useDispatch();
  const navigate = useNavigateWithQuery();

  const { authUser } = useSelector(authSelector);
  const { eventsAndTasks, taskCountObj, selectedTaskFilters } =
    useSelector(tasksSelector);
  const { vendors, supervisors, qa } = useSelector(usersSelector);

  useEffect(() => {
    if (isQa) {
      const query = `assignedToUid=${authUser?.uid}&tenantUid=${authUser?.tenantUid}`;
      dispatch(fetchQaEventsAndTasksAction(query));
    } else {
      dispatch(
        fetchEventsAndTasksAction({
          assignedToUid: authUser?.uid,
          tenantUid: authUser?.tenantUid,
          filters: selectedTaskFilters,
        }),
      );
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

  const onClickFilter = (key) => {
    const updated = updateFilters(
      key,
      selectedTaskFilters,
      "totalTaskCount",
      TASK_INITIAL_FILTERS,
      "keyMap",
      "keyMap",
    );

    dispatch(
      fetchEventsAndTasksAction({
        assignedToUid: authUser?.uid,
        tenantUid: authUser?.tenantUid,
        filters: updated,
      }),
    );
  };

  return (
    <DashboardContainer>
      <FilterHeaders />
      {/* Filter cards */}
      <FilterBoxes
        countObj={taskCountObj}
        getColor={(key) => getStatusColor(key, taskCountObj)}
        onCardClick={onClickFilter}
        isSelected={(key) =>
          isFilterSelected(
            key,
            selectedTaskFilters,
            "totalTaskCount",
            TASK_INITIAL_FILTERS,
            "keyMap",
            "keyMap",
          )
        }
      />

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

export default EventsAndTasks;
