import styled from "styled-components";
import SummaryCard from "./SummaryCard";
import TaskItem from "./TaskItem";
import {
  StyledHeadingMaxBig,
  StyledMediumHeading,
  StyledParagraphSmall,
} from "../../components/Styled/Typography.styled";
import { E_M_DASHBOARD_COMMON } from "../../Enum/EMDashboard.common";
import { BADGE_TYPES } from "../../Enum/common";
import { useEffect } from "react";
import { fetchTasksDispatch } from "../../redux/tasks/tasks.actions";
import { useDispatch } from "react-redux";

const EventManagerDashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasksDispatch());
  }, []);

  const tasks = [
    {
      title: "Set up venue decorations",
      event: "Annual Conference 2025",
      assigned: "John Doe",
      due: "3/10/2025",
      type: BADGE_TYPES.PENDING,
      status: BADGE_TYPES.PENDING,
    },
    {
      title: "Coordinate catering service",
      event: "Annual Conference 2025",
      assigned: "Jane Smith",
      due: "3/12/2025",
      type: BADGE_TYPES.INPROGRESS,
      status: "in progress",
    },
    {
      title: "Prepare presentation materials",
      event: "Product Launch Event",
      assigned: "Mike Wilson",
      due: "4/15/2025",
      type: BADGE_TYPES.COMPLETED,
      status: BADGE_TYPES.COMPLETED,
    },
    {
      title: "Book audio-visual equipment",
      event: "Product Launch Event",
      assigned: "Sarah Lee",
      due: "4/18/2025",
      type: BADGE_TYPES.INPROGRESS,
      status: "in progress",
    },
  ];

  return (
    <DashboardContainer>
      <StyledHeadingMaxBig left>Event Manager</StyledHeadingMaxBig>
      <CardsRow>
        <SummaryCard label="Total Tasks" value="4" />
        <SummaryCard type="completed" label="Completed" value="1" />
        <SummaryCard type="inprogress" label="In Progress" value="2" />
        <SummaryCard type="pending" label="Pending" value="1" />
      </CardsRow>

      <TaskMainCard>
        <Tasktxt>
          <TaskOverview>{E_M_DASHBOARD_COMMON.TASKOV}</TaskOverview>
          <TaskMonitor>{E_M_DASHBOARD_COMMON.TASKM}</TaskMonitor>
        </Tasktxt>
        <TaskList>
          {tasks.map((task, index) => (
            <TaskItem key={index} data={task} />
          ))}
        </TaskList>
      </TaskMainCard>
    </DashboardContainer>
  );
};

const DashboardContainer = styled.div`
  max-width: 1200px;
  margin: 10px auto;
  padding: 20px;
`;
const CardsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  margin-bottom: 30px;
`;
const TaskMainCard = styled.div`
  border-radius: 14px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

const Tasktxt = styled.div`
  padding: 20px 20px 10px;
`;
const TaskOverview = styled(StyledMediumHeading)`
  margin: 0;
  text-align: left;
`;
const TaskMonitor = styled(StyledParagraphSmall)`
  margin: 0;
  text-align: left;
`;
const TaskList = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export default EventManagerDashboard;
