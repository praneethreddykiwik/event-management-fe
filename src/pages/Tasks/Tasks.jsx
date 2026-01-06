import styled from "styled-components";
import SummaryCard from "./SummaryCard";
import TaskItem from "./TaskItem";
import {
  StyledHeading,
  StyledMediumHeading,
  StyledParagraphSmall,
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

const EventManagerDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigateWithQuery();

  const { authUser } = useSelector(authSelector);
  const { tasks } = useSelector(tasksSelector);

  useEffect(() => {
    const query = `assignedToUid=${authUser.uid}&tenantUid=${authUser.tenantUid}`;
    dispatch(fetchEventsAndTasksAction(query));
  }, []);

  const onAddTask = () => {
    navigate(paths.createEvent);
  };

  return (
    <BlueBackHOC>
      <DashboardContainer>
        <StyledHeading left>Event Tasks</StyledHeading>
        <StyledHr />

        <CardsRow>
          <SummaryCard label="Total Tasks" value={tasks.length} />
          <SummaryCard type="completed" label="Completed" value="1" />
          <SummaryCard type="inprogress" label="In Progress" value="2" />
          <SummaryCard type="pending" label="Pending" value="1" />
        </CardsRow>

        {tasks.map((event) => (
          <Section key={event.eventUid}>
            <StyledBtnBox>
              <StyledBox2>
                <TaskOverview>{event.eventName}</TaskOverview>
                <TaskMonitor>{event.venue}</TaskMonitor>
              </StyledBox2>
              <Button
                icon="add"
                sx={{ width: "180px" }}
                whiteText
                onClick={onAddTask}
              >
                Add Task
              </Button>
            </StyledBtnBox>

            {event.tasks.map((task) => (
              <TaskItem task={mapTaskForUI(task)} />
            ))}
          </Section>
        ))}
      </DashboardContainer>
    </BlueBackHOC>
  );
};

const DashboardContainer = styled.div`
  padding: 0 20px 20px 20px;
`;

const CardsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  margin-bottom: 30px;
`;

const TaskOverview = styled(StyledMediumHeading)`
  margin: 0;
  text-align: left;
`;

const TaskMonitor = styled(StyledParagraphSmall)`
  margin: 0;
  text-align: left;
`;

const StyledBtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  // width: 40px;
`;
const StyledBox2 = styled.div`
  flex-basis: 50%;
`;

export default EventManagerDashboard;
