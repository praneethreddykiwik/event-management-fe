import { useEffect, useState } from "react";
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
import {
  getAllBookmarksByUserApi,
  bookmarkEventApi,
} from "../../api/bookmark.api";
import {
  setAllBookmarks,
  setBookmark,
  removeBookmark,
  bookmarksSelector,
} from "../../redux/bookmarks/bookmarks.slice";

const EventsAndTasks = ({ isQa }) => {
  const dispatch = useDispatch();
  const navigate = useNavigateWithQuery();
  const [isBookmarkLoading, setIsBookmarkLoading] = useState(false);

  const { authUser } = useSelector(authSelector);
  const { eventsAndTasks, taskCountObj } = useSelector(tasksSelector);
  const { vendors, supervisors, qa } = useSelector(usersSelector);
  const { bookmarksData, bookmarkOptions } = useSelector(bookmarksSelector);

  useEffect(() => {
    const query = `assignedToUid=${authUser?.uid}&tenantUid=${authUser?.tenantUid}`;
    if (isQa) {
      dispatch(fetchQaEventsAndTasksAction(query));
    } else {
      dispatch(fetchEventsAndTasksAction(query));
    }

    if (!vendors.length || !supervisors.length || !qa.length) {
      dispatch(fetchVendorsSupsQA());
    }

    // Fetch all bookmarks for this user once on page load
    const loadAllBookmarks = async () => {
      try {
        const res = await getAllBookmarksByUserApi();
        const bookmarkList = res?.data?.message ?? [];
        dispatch(setAllBookmarks(bookmarkList));
      } catch (err) {
        console.error("Failed to load bookmarks:", err);
      }
    };

    if (authUser?.uid) {
      loadAllBookmarks();
    }
  }, []);

  const handleToggleBookmark = async (uid, label, type) => {
    if (isBookmarkLoading) return;

    const isAlreadyChecked = bookmarksData?.[uid] === label;
    const willBeChecked = !isAlreadyChecked;

    if (willBeChecked) {
      dispatch(setBookmark({ entity_id: uid, bookmark_name: label }));
    } else {
      dispatch(removeBookmark({ entity_id: uid }));
      return;
    }

    setIsBookmarkLoading(true);
    try {
      await bookmarkEventApi({
        entity_id: uid,
        bookmark_name: label,
        entity_type: type,
      });
    } catch (err) {
      console.error("Failed to save bookmark:", err);
      dispatch(removeBookmark({ entity_id: uid }));
    } finally {
      setIsBookmarkLoading(false);
    }
  };

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
      <CardsRow>
        {Object.keys(taskCountObj).map((key) => (
          <FilterCard
            key={key}
            objKey={key}
            value={taskCountObj[key]}
            color={getStatusColor(key, taskCountObj)}
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
                selectedOption={bookmarksData?.[task.taskUid] ?? null}
                options={bookmarkOptions}
                onOptionToggle={(label, type) =>
                  handleToggleBookmark(task.taskUid, label, type)
                }
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
