/** @format */

import styled from 'styled-components';
import Badge from '../../components/Badge/Badge.component';
import { StyledOutlinedButton } from '../../components/Styled/Buttons.styled';
import {
  StyledParagraphBold,
  StyledParagraphSmall,
} from '../../components/Styled/Typography.styled';
import { E_M_DASHBOARD_COMMON } from '../../Enum/EMDashboard.common';
import { BADGE_TYPES } from '../../enum/Common';

const ICONS = {
  [BADGE_TYPES.COMPLETED]: 'task_alt',
  [BADGE_TYPES.INPROGRESS]: 'schedule',
  [BADGE_TYPES.PENDING]: 'error_outline',
};

const getIcon = (type) => ICONS[type] || '';
const TaskItem = ({ data }) => {
  return (
    <TaskRow>
      <Left>
        <StatusIcon type={data.type} className="material-symbols-outlined">
          {getIcon(data.type)}
        </StatusIcon>
        <Taskcard>
          <Title>{data.title}</Title>
          <EventName>{data.event}</EventName>
          <TaskAssignee>
            {E_M_DASHBOARD_COMMON.TASKASSIGNEE} {data.assigned}
            {E_M_DASHBOARD_COMMON.TASKDUE} {data.due}
          </TaskAssignee>
        </Taskcard>
      </Left>
      <BadgeButton>
        <Badge type={data.type}>{data.status}</Badge>
        <ManageButton>{E_M_DASHBOARD_COMMON.MANAGE_B}</ManageButton>
      </BadgeButton>
    </TaskRow>
  );
};

const TaskRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  border-radius: 14px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
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
  margin: 0;
`;
const EventName = styled(StyledParagraphSmall)`
  margin-top: 0;
  margin-bottom: 5px;
  color: gray;
  text-align: left;
`;
const TaskAssignee = styled(StyledParagraphSmall)`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
`;
const BadgeButton = styled.div`
  width: 30%;
  gap: 5px;
  display: flex;
  align-content: center;
  align-items: center;
  margin: 0;
`;
const ManageButton = styled(StyledOutlinedButton)`
  background-color: #eeeeee;
`;

export default TaskItem;
