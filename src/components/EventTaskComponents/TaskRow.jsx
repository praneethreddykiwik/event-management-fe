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
import { generateDeleteTaskReq } from "../../models/requests/task.req.model";
import { paths } from "../../constants/paths";
import { toast } from "react-toastify";
import { RBACHOC } from "../../RBAC/RBAC";
import { EditTaskStatus } from "../TaskComponents/EditTaskStatus";
import { Bookmark } from "../UI/Menu/Bookmark";
import { bookmarksSelector } from "../../redux/bookmarks/bookmarks.slice";
import { toggleBookmarkAction } from "../../redux/bookmarks/bookmarks.actions";

const TaskRow = ({ task = {}, onEdit }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { authUser } = useSelector(authSelector);
  const { taskBookmarks } = useSelector(bookmarksSelector);

  const handleToggleBookmark = (folderName, type, entityId) => {
    dispatch(toggleBookmarkAction({ entityId, folderName, type }));
  };

  const viewDetailsHandler = () => {
    const eventUid = searchParams.get("eventUid");
    navigate(`${paths.tasks}/${task.taskUid}?eventUid=${eventUid}`);
  };

  const onDelete = () => {
    const callBack = () => {
      const eventUid = searchParams.get("eventUid");
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

  const handleEdit = () => {
    if (task.taskStatus === "deleted") {
      toast.error("This task is deleted. So you can't edit this task.");
      return;
    }
    onEdit(task);
  };

  const handleCreateFolder = () => {};

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
          <Icon variant="alternate_email" title="Email" />
          <Bookmark
            title="Save to Bookmarks"
            icon="bookmark"
            iconColor="black"
            type="task"
            entityId={task.taskUid}
            bookmarks={taskBookmarks}
            onToggle={handleToggleBookmark}
            onCreateFolder={handleCreateFolder}
          />
          <Icon variant="chat" title="Chat" />
          <RBACHOC perm="event:edit">
            <Icon variant="edit" title="Edit" onClick={handleEdit} />
          </RBACHOC>
          <RBACHOC perm="task:delete">
            <InlineButton
              type="delete"
              icon="delete"
              onClick={onDelete}
              title="Delete"
            >
              Delete Task
            </InlineButton>
          </RBACHOC>
        </StyledFlex2>
        <Button type="no-border" onClick={viewDetailsHandler} small>
          Details
        </Button>

        <EditTaskStatus task={task} />
      </BadgeButton>
    </Ctn>
  );
};

const Ctn = styled(Section)`
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  background: ${({ theme }) => theme.colors.primaryLight};

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

export default TaskRow;