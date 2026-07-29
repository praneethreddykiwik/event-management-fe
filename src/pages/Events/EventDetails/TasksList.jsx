import styled from "styled-components";
import { Button } from "../../../components/Buttons/Button";
import useNavigateWithQuery from "../../../hooks/useNavigateWithQuery";
import { paths } from "../../../constants/paths";
import { useSelector } from "react-redux";
import { tasksSelector } from "../../../redux/tasks/tasks.slice";
import { mapTaskForUI } from "../../../helpers/Dashboard.helper";
import { StyledSemiHeading } from "../../../components/Styled/Typography.styled";
import { eventsSelector } from "../../../redux/events/events.slice";
import TaskRow from "../../../components/EventTaskComponents/TaskRow";
import { toast } from "react-toastify";

export const TasksList = () => {
  const navigate = useNavigateWithQuery();

  const { tasksByEvent } = useSelector(tasksSelector);
  const { eventDetails: event } = useSelector(eventsSelector);

  const createTaskHandler = () => {
    toast.warning(
      "This event has already been deleted. Please review carefully before attempting to create a task.",
    );
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
          status: task.taskStatus,
          dueAt: task.taskDueAt,
          assineeType: task.assineeType,
          assignedToUid: task.taskAssignedToUid,
          qaAssignedTo: task.qaAssignedTo,
          qaAssignedToUid: task.qaAssignedToUid,
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
      {/* eventName */}
      {tasksByEvent.map((task) => (
        // need to refactor the location of task item component
        <TaskRow
          task={mapTaskForUI(task, event)}
          onEdit={(tsk) => onEdit(tsk)}
        />
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
