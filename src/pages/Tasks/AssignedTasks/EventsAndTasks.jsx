import { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { StyledParagraphSmallGray } from "../../../components/Styled/Typography.styled";
import {
  fetchEventsAndTasksAction,
  fetchQaEventsAndTasksAction,
} from "../../../redux/tasks/tasks.actions";
import { authSelector } from "../../../redux/auth/auth.slice";
import { tasksSelector } from "../../../redux/tasks/tasks.slice";
import { mapTaskForUI } from "../../../helpers/Dashboard.helper";
import useNavigateWithQuery from "../../../hooks/useNavigateWithQuery";
import { paths } from "../../../constants/paths";
import { fetchVendorsSupsQA } from "../../../redux/users/users.actions";
import { usersSelector } from "../../../redux/users/users.slice";
import { getStatusColor } from "../../../utils/utils";
import TaskRow from "../../../components/EventTaskComponents/TaskRow";
import { EventWrapsTasks } from "../../../components/EventTaskComponents/EventWrapsTasks";
import { TASK_INITIAL_FILTERS } from "../../../constants/tasks.constants";
import { FilterHeaders } from "../../../components/Headers/FilterHeaders";
import { fetchBookmarksByTypeAction } from "../../../redux/bookmarks/bookmarks.actions";
import FilterCards from "../../../components/Filters/FilterCards/FilterCards";
import {
  isFilterSelected,
  updateFilters,
} from "../../../components/Filters/FilterCards/FilterCards.helper";
import { SkeletonLoaders } from "../../../components/UI/Loaders/SkeletonLoaders";

const EventsAndTasks = ({ isQa }) => {
  const dispatch = useDispatch();
  const navigate = useNavigateWithQuery();

  const { authUser } = useSelector(authSelector);
  const { eventsAndTasks, taskCountObj, tasksLoading, selectedTaskFilters } =
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

  const onClickFilter = (key) => {
    const updated = updateFilters(key, selectedTaskFilters);

    dispatch(
      fetchEventsAndTasksAction({
        assignedToUid: authUser?.uid,
        tenantUid: authUser?.tenantUid,
        filters: updated,
      }),
    );
  };

  const isSelected = (key) => {
    return isFilterSelected(key, selectedTaskFilters);
  };

  return (
    <DashboardContainer>
      <FilterHeaders />
      {/* Filter cards */}
      <FilterCards
        countObj={taskCountObj}
        getColor={(key) => getStatusColor(key, taskCountObj)}
        onCardClick={onClickFilter}
        isSelected={isSelected}
        isLoading={tasksLoading}
      />

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
                loading={tasksLoading}
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

export default EventsAndTasks;
