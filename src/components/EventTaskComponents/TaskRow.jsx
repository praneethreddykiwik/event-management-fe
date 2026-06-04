import { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import Badge, { Badge2 } from "../Badge/Badge.component";
import {
  StyledParagraphBold,
  StyledParagraphSmall,
} from "../Styled/Typography.styled";
import * as enums from "../../myEnum";
import { Section } from "../../HOC/SectionsHOC";
import { Button } from "../Buttons/Button";
import { Icon } from "../Icons/Icons";
import { mobile } from "../../theme/media-queries";
import { formatDateTime } from "../../utils/utils";
import { InlineButton } from "../Buttons/InlineButton/InlineButton";
import {
  deleteTaskAction,
  fetchTasksApiAction,
} from "../../redux/tasks/tasks.actions";

import { authSelector } from "../../redux/auth/auth.slice";
import ManageTaskModal from "./ManageTaskModal";
import { generateDeleteTaskReq } from "../../models/requests/task.req.model";
const TaskItem = ({ task = {}, onEdit }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { authUser } = useSelector(authSelector);

  const viewDetailsHandler = () => {
    navigate(`${paths.tasks}/${task.taskUid}`);
  };

  const onDelete = () => {
    const callBack = (a, b, c) => {
      const eventUid = searchParams.get("eventUid");
      // dispatch(fetchEventDetailsAction({ eventUid: eventUid }));

      const query = `eventUid=${eventUid}`;
      dispatch(fetchTasksApiAction({ query }));
    };
    const onDeletePayload = {
      callBack,
      reqPayload: generateDeleteTaskReq({
        taskUid: task.taskUid,
        tenantUid: authUser?.tenantUid,
      }),
    };
    dispatch(deleteTaskAction(onDeletePayload));
  };

  return (
    <Ctn>
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
          <FlexBox>
            <StyledParagraphSmall left>
              QA assigned to: {task.qaAssignedTo}{" "}
            </StyledParagraphSmall>
            <Badge2 approved={task.isQaApproved}>
              {task.isQaApproved ? "QA Approved" : "QA Not Approved"}
            </Badge2>
          </FlexBox>
        </Taskcard>
      </Left>
      <BadgeButton>
        <StyledFlex2>
          <Badge type={task.type}>{task.taskStatusForBadge}</Badge>
          <Icon variant="alternate_email" />
          <Icon variant="chat" />
          <InlineButton type="delete" icon="delete" onClick={onDelete}>
            Delete Task
          </InlineButton>
        </StyledFlex2>
        <Button type="no-border" onClick={viewDetailsHandler} small>
          Details
        </Button>

        <Button onClick={() => onEdit(task)} icon="edit" type="no-border" small>
          Edit
        </Button>
      </BadgeButton>
    </Ctn>
  );
};

const Ctn = styled(Section)`
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  background: #f3fff4;

  ${mobile`
    flex-direction: column;
    margin: 20px 0;
  `}
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
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

// export default TaskRow;
