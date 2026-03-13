import styled from "styled-components";
import {
  StyledMediumHeading,
  StyledParagraphBold,
  StyledParagraph,
  StyledParagraphSmall,
} from "../../components/Styled/Typography.styled";
import { Icon } from "../../components/Icons/Icons";
import { formatDateTime } from "../../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import {
  acceptTasksAction,
  declineTasksAction,
} from "../../redux/tasks/tasks.actions";
import { Button } from "../../components/Buttons/Button";
import { authSelector } from "../../redux/auth/auth.slice";
import { mobile } from "../../theme/media-queries";

const ManageTaskModal = ({ onClose, task }) => {
  const dispatch = useDispatch();
  const { authUser } = useSelector(authSelector);

  const loggesinUserIsTaskOwner = task.taskAssignedToUid === authUser?.uid;

  const eventSummaryData = [
    { label: "Task Name", value: task.taskTitle },
    {
      label: "Task Description",
      value: task.taskDescription,
      sx: { flexGrow: "1" },
    },
    { label: "Task Created At", value: formatDateTime(task.taskCreatedAt) },
    { label: "Venue", value: task.eventVenue || task.venue },
    { label: "Assigned To", value: task.taskAssignedTo }, // checkHere
    { label: "Status", value: task.taskStatus },
  ];

  const onAccept = () => {
    const payload = {
      taskUid: task.taskUid,
      tenantId: authUser?.tenantId,
    };

    dispatch(acceptTasksAction(payload)).then((res) => {
      if (!res.error) {
        onClose();
      }
    });
  };

  const onDecline = () => {
    onClose();
    const payload = {
      taskUid: task.taskUid,
      tenantId: authUser?.tenantId,
    };

    dispatch(declineTasksAction(payload)).then((res) => {
      if (!res.error) {
        onClose();
      }
    });
  };

  return (
    <Overlay>
      <ModalContainer>
        <ModalHeader>
          <HeaderText>
            <StyledMediumHeading left turncate>
              Task: {task.taskTitle}
            </StyledMediumHeading>
            <StyledParagraph left>Event: {task.eventName}</StyledParagraph>

            <StyledParagraphSmall left>
              Assigned To: {task.taskAssignedTo}
            </StyledParagraphSmall>
          </HeaderText>
          <Icon variant="close" onClick={onClose} />
        </ModalHeader>

        <Section>
          <StyledMediumHeading left>Task Summary</StyledMediumHeading>

          <SummaryGrid>
            {eventSummaryData.map((item) => (
              <SummaryItem key={item.label} style={item.sx}>
                <StyledParagraphBold className="label" left>
                  {item.label}
                </StyledParagraphBold>

                <StyledParagraph className="value" left>
                  {item.value}
                </StyledParagraph>
              </SummaryItem>
            ))}
          </SummaryGrid>
        </Section>

        <ActionRow>
          {!loggesinUserIsTaskOwner ? (
            <Button onClick={onDecline} icon="close_small" type="delete">
              Decline
            </Button>
          ) : null}
          <Button onClick={onAccept} icon="close_small">
            Accept
          </Button>
        </ActionRow>
        <ActionRow>
          <Button onClick={onClose} icon="close_small" type="outlined">
            Close
          </Button>
        </ActionRow>
      </ModalContainer>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  text-align: left;
`;

const ModalContainer = styled.div`
  background: ${({ theme }) => theme.appBackgroundColor};
  width: 620px;
  border-radius: 14px;
  padding: 32px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  gap: 20px;
  display: flex;
  flex-direction: column;

  ${mobile`
    padding: 16px;
    `}
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const HeaderText = styled.div`
  width: 100%;
`;

const Section = styled.div`
  border: 1px solid #e5e7eb;
  box-shadow: 0 0 4px 0px #e5e7eb;
  border-radius: 12px;
  padding: 16px;
  max-height: 60vh;
  overflow: auto;
`;

const SummaryGrid = styled.div`
  display: flex;
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
`;

const SummaryItem = styled.div`
  flex-basis: 50%;
  padding: 16px;

  .label {
    color: ${({ theme }) => theme.colors["text-gray-color"]};
  }

  .value {
    margin-bottom: 4px;
  }

  ${mobile`
      flex-basis: 100%;
      padding: 10px;
    `}
`;

const ActionRow = styled.div`
  display: flex;
  gap: 8px;
`;

export default ManageTaskModal;
