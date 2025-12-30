/** @format */

import styled from 'styled-components';
import Badge from '../../components/Badge/Badge.component';
import { StyledOutlinedButton, StyledSecButton } from '../../components/Styled/Buttons.styled';
import {
  StyledParagraphBold,
  StyledParagraphSmall,
} from '../../components/Styled/Typography.styled';

const TaskItem = ({ data }) => {
  return (
    <TaskRow>
      <Left>
        <Taskcard>
          <EventName>{data.event}</EventName>
          <TaskDate>{data.date}</TaskDate>
          <TaskAssignee>Manager: {data.assigned}</TaskAssignee>
        </Taskcard>
      </Left>
      <BadgeButton>
        <Badge type={data.type}>{data.status}</Badge>
        <ViewButton>View Details</ViewButton>
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

const Taskcard = styled.div`
  justify-items: left;
  margin: -1px;
`;
const EventName = styled(StyledParagraphBold)`
  margin-top: 0;
  margin-bottom: 5px;
`;
const TaskAssignee = styled(StyledParagraphSmall)`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
`;
const TaskDate = styled(StyledParagraphSmall)`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
`;
const BadgeButton = styled.div`
  width: 25%;
  gap: 5px;
  display: flex;
  align-content: center;
  align-items: center;
  margin: 0;
`;
const ViewButton = styled(StyledOutlinedButton)`
  background-color: #eeeeee;
`;

export default TaskItem;
