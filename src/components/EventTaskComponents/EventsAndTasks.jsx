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
import TaskRow from "./TaskRow";
import { EventWrapsTasks } from "./EventWrapsTasks";
import { TASK_INITIAL_FILTERS } from "../../constants/tasks.constants";
import { FilterHeaders } from "../Headers/FilterHeaders";
import { fetchBookmarksByTypeAction } from "../../redux/bookmarks/bookmarks.actions";

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

    if (!vendors.length || !supervisors.length || !qa.length) {
      dispatch(fetchVendorsSupsQA());
    }

    dispatch(fetchBookmarksByTypeAction("task"));

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

  const onClickFilter = (selectedKey) => {
    if (selectedKey === "totalTaskCount") {
      totalClickHandler();
      return;
    }

    // TASK_INITIAL_FILTERS
    const arr = selectedTaskFilters.map((el) => {
      if (el.keyMap === selectedKey) {
        return {
          ...el,
          selected: !el.selected,
        };
      }

      return el;
    });

    dispatch(
      fetchEventsAndTasksAction({
        assignedToUid: authUser?.uid,
        tenantUid: authUser?.tenantUid,
        filters: arr,
      }),
    );
  };

  const totalClickHandler = () => {
    const isEverySelected = isEveryFilterSelected();

    const arr = selectedTaskFilters.map((el) => ({
      ...el,
      selected: !isEverySelected,
    }));

    dispatch(
      fetchEventsAndTasksAction({
        assignedToUid: authUser?.uid,
        tenantUid: authUser?.tenantUid,
        filters: arr,
      }),
    );
  };

  const isEveryFilterSelected = () => {
    return TASK_INITIAL_FILTERS.every((es) => {
      const record = selectedTaskFilters.find((sf) => sf.value === es.value);

      return record?.selected;
    });
  };

  const isFilterSelected = (key) => {
    if (key === "totalTaskCount") {
      return isEveryFilterSelected();
    }

    return selectedTaskFilters.find((el) => el.keyMap === key)?.selected;
  };

  return (
    <DashboardContainer>
      <FilterHeaders />
      {/* Filter cards */}
      <CardsRow>
        {Object.keys(taskCountObj).map((key) => (
          <FilterCard
            key={key}
            objKey={key}
            value={taskCountObj[key]}
            color={getStatusColor(key, taskCountObj)}
            onClick={() => onClickFilter(key)}
            selected={isFilterSelected(key)}
          />
        ))}
      </CardsRow>

      {eventsAndTasks.map((event) => (
        <EventWrapsTasks
          key={event.eventUid}
          event={event}
          onAddTask={onAddTask}
        >
          {event.tasks?.length ? (
            event.tasks.map((task) => (
              <TaskRow
                key={task.taskUid}
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

const DashboardContainer = styled.div``;

const CardsRow = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

export default EventsAndTasks;