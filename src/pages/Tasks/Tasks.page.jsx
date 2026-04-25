import styled from "styled-components";
import TaskItem from "./TaskItem";
import { StyledParagraphSmallGray } from "../../components/Styled/Typography.styled";
import { useEffect } from "react";
import { fetchEventsAndTasksAction } from "../../redux/tasks/tasks.actions";
import { useDispatch, useSelector } from "react-redux";
import { authSelector } from "../../redux/auth/auth.slice";
import { tasksSelector } from "../../redux/tasks/tasks.slice";
import { BlueBackHOC } from "../../HOC/BlueBackHOC";
import { mapTaskForUI } from "../../helpers/Dashboard.helper";
import useNavigateWithQuery from "../../hooks/useNavigateWithQuery";
import { paths } from "../../constants/paths";
import { fetchVendorsSupsQA } from "../../redux/users/users.actions";
import { usersSelector } from "../../redux/users/users.slice";
import { EventSection } from "./EventSection";
import { PageHeader } from "../../components/Headers/PageHeader";
import { getStatusColor } from "../../utils/utils";
import FilterCard from "../../components/Cards/FilterCard";

const Tasks = () => {
  const dispatch = useDispatch();
  const navigate = useNavigateWithQuery();

  const { authUser } = useSelector(authSelector);
  const { tasks, taskCountObj } = useSelector(tasksSelector);
  const { vendors, supervisors, qa } = useSelector(usersSelector);

  useEffect(() => {
    const query = `assignedToUid=${authUser?.uid}&tenantUid=${authUser?.tenantUid}`;
    dispatch(fetchEventsAndTasksAction(query));
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
        <PageHeader title>Tasks</PageHeader>

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

const CardsRow = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

export default Tasks;
