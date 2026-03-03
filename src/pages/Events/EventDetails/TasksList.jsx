import styled from "styled-components";
import { Button } from "../../../components/Buttons/Button";
import useNavigateWithQuery from "../../../hooks/useNavigateWithQuery";
import { paths } from "../../../constants/paths";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasksApiAction } from "../../../redux/tasks/tasks.actions";
import { tasksSelector } from "../../../redux/tasks/tasks.slice";
import TaskItem from "../../Tasks/TaskItem";
import { mapTaskForUI } from "../../../helpers/Dashboard.helper";
import {
  StyledHeading,
  StyledSemiHeading,
} from "../../../components/Styled/Typography.styled";

export const TasksList = () => {
  const { state } = useLocation();
  const navigate = useNavigateWithQuery();
  const dispatch = useDispatch();
  const { tasksByEvent } = useSelector(tasksSelector);

  useEffect(() => {
    const query = `eventUid=${event.uid}`;
    dispatch(fetchTasksApiAction({ query }));
  }, []);

  const event = state?.event;

  const createTaskHandler = () => {
    navigate(`${paths.createTask}`, {
      state: {
        eventUid: event.uid,
        mode: "add",
      },
    });
  };

  const onEdit = (task) => {
    navigate(`${paths.createTask}`, {
      state: {
        eventUid: event.uid,
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
    <StyledCtn>
      <StyledHead>
        <StyledSemiHeading>List of Tasks</StyledSemiHeading>
        <Button onClick={createTaskHandler} whiteText sx={{ width: "200px" }}>
          Create Task
        </Button>
      </StyledHead>
      {tasksByEvent.map((task) => (
        <TaskItem task={mapTaskForUI(task)} onEdit={(tsk) => onEdit(tsk)} /> // need to refactor the location of task item component
      ))}
    </StyledCtn>
  );
};

const StyledCtn = styled.div`
  padding: 20px 0;
`;
const StyledHead = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
`;
