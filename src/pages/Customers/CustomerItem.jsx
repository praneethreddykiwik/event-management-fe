/** @format */

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
          <TaskAssignee>
            {/* {E_M_DASHBOARD_COMMON.TASKDUE} {task.taskDueAt} */}
          </TaskAssignee>
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
  padding: 0 15px;
`;

const Left = styled.div`
  padding: 20px 0;
  display: flex;
  gap: 10px;
`;

const StatusIcon = styled.span`
  font-size: 20px;
  color: ${({ theme, type }) => theme.badgeColors[`badge-${type}-primary`]};
`;

const Taskcard = styled.div`
  margin: -1px;
`;

const Title = styled(StyledParagraphBold)`
  text-align: left;
  margin: 0 0 6px 0;
`;

const EventName = styled(StyledParagraphSmall)`
  margin-top: 0;
  margin-bottom: 6px;
  color: gray;
  text-align: left;
`;

const TaskAssignee = styled(StyledParagraphSmall)`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
  text-align: left;
`;

const BadgeButton = styled.div`
  gap: 6px;
  display: flex;
  align-content: center;
  align-items: center;
  margin: 0;
`;

export default CustomerItem;
