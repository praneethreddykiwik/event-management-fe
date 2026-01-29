import styled from "styled-components";
import Badge from "../../components/Badge/Badge.component";
import {
  StyledParagraphBold,
  StyledParagraphSmall,
} from "../../components/Styled/Typography.styled";
import { Section } from "../../HOC/SectionsHOC";

const CustomerItem = ({ task = {} }) => {
  return (
    <TaskRow>
      <Left>
        <StatusIcon type={task.type} className="material-symbols-outlined">
          {task.taskIcon}
        </StatusIcon>
        <Taskcard>
          <Title>{task.taskTitle}</Title>
          <EventName>{task.taskDescription}</EventName>
          <StyledParagraphSmall left>
            {/* {E_M_DASHBOARD_COMMON.TASKDUE} {task.taskDueAt} */}
          </StyledParagraphSmall>
        </Taskcard>
      </Left>
      <BadgeButton>
        <Badge type={task.type}>{task.taskStatus}</Badge>
      </BadgeButton>
    </TaskRow>
  );
};

const TaskRow = styled(Section)`
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
`;

const Left = styled.div`
  padding: 32px 0;
  display: flex;
  gap: 8px;
`;

const StatusIcon = styled.span`
  font-size: 20px;
  color: ${({ theme, type }) => theme.badgeColors[`badge-${type}-primary`]};
`;

const Taskcard = styled.div`
  margin: -1px;
`;

const Title = styled(StyledParagraphBold)`
  margin: 0 0 4px 0;
`;

const EventName = styled(StyledParagraphSmall)`
  margin-bottom: 4px;
  color: gray;
`;

const TaskAssignee = styled(StyledParagraphSmall)``;

const BadgeButton = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  gap: 4px;
  margin: 0;
`;



export default CustomerItem;
