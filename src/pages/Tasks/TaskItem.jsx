import styled from "styled-components";
import Badge from "../../components/Badge/Badge.component";
import { StyledOutlinedButton } from "../../components/Styled/Buttons.styled";
import {
  StyledParagraphBold,
  StyledParagraphSmall,
} from "../../components/Styled/Typography.styled";
import * as enums from "../../enum";
import { useState } from "react";
import ManageTaskModal from "./ManageTaskModal";
import { Section } from "../../HOC/SectionsHOC";
import { Button } from "../../components/Buttons/Button";
import { Icon } from "../../components/Icons/Icons";

const TaskItem = ({ task = {}, onEdit }) => {
  const [showManageEvent, setShowManageEvent] = useState(false);

  const onOpen = () => {
    setShowManageEvent(true);
  };

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
            {enums.TASKASSIGNEE} {task.taskAssignedToUid}
            {enums.TASKDUE} {task.taskDueAt}
          </TaskAssignee>
        </Taskcard>
      </Left>
      <BadgeButton>
        <Badge type={task.type}>{task.taskStatus}</Badge>
        <Button type="no-border" onClick={() => onOpen()} small>
          Details
        </Button>
        {showManageEvent && (
          <ManageTaskModal
            onClose={() => setShowManageEvent(false)}
            task={task}
          />
        )}
        <Button onClick={() => onEdit(task)} icon="edit" type="no-border" small>
          Edit
        </Button>
        {/* <Icon variant="edit" /> */}
      </BadgeButton>
    </TaskRow>
  );
};

const TaskRow = styled(Section)`
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  background: #f3fff4;
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
  // width: 30%;
  gap: 16px;
  display: flex;
  align-content: center;
  align-items: center;
  margin: 0;
`;
const ManageButton = styled(StyledOutlinedButton)`
  background-color: #eeeeee;
`;

export default TaskItem;
