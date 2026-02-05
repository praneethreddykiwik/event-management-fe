import styled from "styled-components";
import Badge from "../../components/Badge/Badge.component";
import { StyledOutlinedButton } from "../../components/Styled/Buttons.styled";
import {
  StyledParagraphBold,
  StyledParagraphSmall,
} from "../../components/Styled/Typography.styled";
import * as enums from "../../myEnum";
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
          <StyledParagraphBold left>{task.taskTitle}</StyledParagraphBold>
          <StyledParagraphSmall left>{task.taskDescription}</StyledParagraphSmall>
          <StyledParagraphSmall left>
            {enums.TASKASSIGNEE} {task.taskAssignedToUid}
            {enums.TASKDUE} {task.taskDueAt}
          </StyledParagraphSmall>
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
  padding: 0 16px;
  background: #f3fff4;
`;

const Left = styled.div`
  padding: 32px 0;
  display: flex;
  gap: 8px;
`;

const StatusIcon = styled.span`
  font-size: ${({ theme }) => theme.typography["heading-h3"]["font-size"]};
  color: ${({ theme, type }) => theme.badgeColors[`badge-${type}-primary`]};
`;


const Taskcard = styled.div`
  margin: -1px;
`;


const BadgeButton = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  gap: 16px;
  margin: 0;
`;

const ManageButton = styled(StyledOutlinedButton)`
  background-color: #eeeeee;
`;


export default TaskItem;
