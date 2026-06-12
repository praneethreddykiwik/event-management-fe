import styled from "styled-components";
import {
  StyledHeading,
  StyledMediumHeading,
  StyledParagraph,
  StyledParagraphBold,
  StyledParagraphGray,
  StyledParagraphSmall,
  StyledParagraphSmallGray,
} from "../../../components/Styled/Typography.styled";
import { Button } from "../../../components/Buttons/Button";
import { BlueBackHOC } from "../../../HOC/BlueBackHOC";
import { useEffect, useMemo } from "react";
import { fetchTaskAction } from "../../../redux/tasks/tasks.actions";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { tasksSelector } from "../../../redux/tasks/tasks.slice";
import { PageHeader } from "../../../components/Headers/PageHeader";
import { DetailsBox } from "./DetailsBox";
import { paths } from "../../../constants/paths";
import {
  generateEditPayload,
  generateEventSummary,
  generateQASummary,
  generateTaskSummary,
} from "./taskDetails.helper";

export const TaskDetails = () => {
  const dispatch = useDispatch();
  const { taskUid } = useParams();
  const navigate = useNavigate();

  const { task } = useSelector(tasksSelector);

  //   {
  //     "taskUid": "d521585b-3f3f-44a2-aaef-59d85cffc54f",
  //     "tenantUid": "c5b0b728-8dd1-414b-9e69-fa1ee00d13aa",
  //     "eventUid": "4c86eba6-aabf-4f38-9b1f-46ebedbe1420",
  //     "taskTitle": "Confirm venue booking",
  //     "taskDescription": "Ensure the convention center booking is finalized and advance payment is completed.",
  //     "taskStatus": "not_started",
  //     "taskPriority": "high",
  //     "taskDueAt": "2026-06-26T00:00:00.000Z",
  //     "taskAssignedToUid": "d44ad0f2-9745-4d06-8997-9bc014a27677",
  //     "taskCreatedAt": "2026-06-02T10:42:24.635Z",
  //     "taskUpdatedAt": "2026-06-02T10:42:24.635Z",
  //     "taskCreatedByUid": "35accf54-4c6d-4c70-bfc3-7dea30b6291e",
  //     "taskUpdatedByUid": "35accf54-4c6d-4c70-bfc3-7dea30b6291e",
  //     "taskQaAssignedToUid": null,
  //     "taskIsQaApproved": false,
  //     "taskQaApprovedBy": null,
  //     "taskQaApprovedAt": null,
  //     "eventName": "Get together",
  //     "taskAssignedTo": "prasanna 2 yanamala",
  //     "eventAssignedTo": "saiprasanna yanamala"
  //     "eventVenue": "",
  //     "qaAssignedTo": ""
  // }

  const eventSummary = useMemo(() => generateEventSummary(task), [task]);
  const QASummary = useMemo(() => generateQASummary(task), [task]);
  const taskSummary = useMemo(() => generateTaskSummary(task), [task]);

  useEffect(() => {
    const query = `taskUid=${taskUid}`;
    dispatch(fetchTaskAction({ query }));
  }, []);

  const backHandler = () => {
    window.history.back();
  };

  const onEdit = () => {
    navigate(`${paths.createTask}`, {
      state: generateEditPayload(task),
    });
  };

  return (
    <BlueBackHOC>
      <Ctn>
        <PageHeader left>
          <StyledHeading>Task Details</StyledHeading>
        </PageHeader>

        <TextBox>
          <StyledMediumHeading>Task </StyledMediumHeading>
          <StyledParagraph turncate>{task.taskTitle}</StyledParagraph>
        </TextBox>

        <DetailsCtn>
          <DetailsBox
            title="Event Summary"
            dataArray={eventSummary}
            className="mid-box"
          />
          <DetailsBox
            title="QA Summary"
            dataArray={QASummary}
            className="mid-box"
          />
          <DetailsBox title="Task Summary" dataArray={taskSummary} />
        </DetailsCtn>

        <ActionRow>
          <Button onClick={backHandler} type="primary">
            Back
          </Button>
          <Button onClick={onEdit} icon="edit" type="no-border">
            Edit
          </Button>
        </ActionRow>
      </Ctn>
    </BlueBackHOC>
  );
};

const Ctn = styled.div`
  padding: 0 16px 16px 16px;
`;

const ActionRow = styled.div`
  gap: 40px;
  display: flex;
  max-width: 500px;
`;

const DetailsCtn = styled.div`
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
  margin-bottom: 40px;

  & .mid-box {
    flex-basis: calc(50% - 18px);
    flex-grow: 1;
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction ${({ column }) => (column ? "column" : "row")};
  align-items: baseline;
  gap: 4px;
  margin-bottom: 20px;
`;
