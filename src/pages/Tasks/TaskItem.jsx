import styled from "styled-components";
import Badge from "../../components/Badge/Badge.component";
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
import { mobile } from "../../theme/media-queries";
import { formatDateTime } from "../../utils/utils";

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
          <StyledParagraphSmall left>
            Desc: {task.taskDescription}
          </StyledParagraphSmall>
          <StyledParagraphSmall left>
            Assigned To: {task.taskAssignedTo}
          </StyledParagraphSmall>
          <StyledParagraphSmall left>
            {enums.TASKDUE} {formatDateTime(task.taskDueAt)}
          </StyledParagraphSmall>
          <StyledParagraphSmall left>
            Task Created At: {formatDateTime(task.taskCreatedAt)}
          </StyledParagraphSmall>
        </Taskcard>
      </Left>
      <BadgeButton>
        <StyledFlex2>
          <Badge type={task.type}>{task.taskStatus}</Badge>
          <Icon variant="alternate_email" />
          <Icon variant="chat" />
          <Button type="inline-delete">Delete</Button>
        </StyledFlex2>
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
      </BadgeButton>
    </TaskRow>
  );
};

const TaskRow = styled(Section)`
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  background: #f3fff4;

  ${mobile`
    flex-direction: column;
    margin: 20px 0;
  `}
`;

const Left = styled.div`
  padding: 16px 0;
  display: flex;
  gap: 8px;
  justify-content: space-between;

  ${mobile`
    padding: 16px 0;
    flex-direction: row-reverse;
  `}
`;

const StatusIcon = styled.span`
  font-size: ${({ theme }) => theme.typography["heading-h3"]["font-size"]};
  color: ${({ theme, type }) => theme.badgeColors[`badge-${type}-primary`]};
`;

const Taskcard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const BadgeButton = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  gap: 16px;
  margin: 0;
  flex-wrap: wrap;
  padding: 16px 0;
  flex-basis: 30%;
`;

const StyledFlex2 = styled.div`
  display: flex;
  gap: 18px;
  align-items: center;
`;

export default TaskItem;
