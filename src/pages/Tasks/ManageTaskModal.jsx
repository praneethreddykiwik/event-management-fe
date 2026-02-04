import styled from "styled-components";
import {
  StyledBaseButton,
  StyledOutlinedButton,
  
} from "../../components/Styled/Buttons.styled";
import {
  StyledMediumHeading,
  StyledParagraphBold,
  StyledParagraph,
  StyledParagraphSmall,
} from "../../components/Styled/Typography.styled";
import { Icon } from "../../components/Icons/Icons";
import { formatDateTime } from "../../utils/utils";
import { useDispatch } from "react-redux";
import {
  acceptTasksAction,
  declineTasksAction,
} from "../../redux/tasks/tasks.actions";
import useTenant from "../../hooks/useTenant.hook";
import { Button } from "../../components/Buttons/Button";

const ManageTaskModal = ({ onClose, task }) => {
  const dispatch = useDispatch();
  const tenantId = useTenant();

  const eventSummaryData = [
    { label: "Task Name", value: task.taskTitle },
    { label: "Task Description", value: task.taskDescription },
    { label: "Task Created At", value: formatDateTime(task.taskCreatedAt) },
    { label: "Venue", value: task.eventVenue },
    { label: "Assigned By", value: task.taskAssignedToUid },
    { label: "Status", value: task.taskStatus },
  ];

  const onAccept = () => {
    const payload = {
      taskUid: task.taskUid,
      tenantId,
    };

    dispatch(acceptTasksAction(payload)).then((res) => {
      if (!res.error) {
        onClose();
      }
    });
  };

  const onDecline = () => {
    onClose();
    // const payload = {
    //   taskUid: task.taskUid,
    //   tenantId,
    // };

    // dispatch(declineTasksAction(payload)).then((res) => {
    //   if (!res.error) {
    //     onClose();
    //   }
    // });
  };

  return (
    <>
      <Overlay>
        <ModalContainer>
          <ModalHeader>
           <HeaderText>
            <StyledMediumHeading left>
              Event: {task.eventName}
            </StyledMediumHeading>

            <StyledParagraphSmall left>
              {task.venue}
            </StyledParagraphSmall>
          </HeaderText>
            <Icon variant="close" onClick={onClose} />
          </ModalHeader>

          <Section>
            <StyledMediumHeading left>
            Task Summary
          </StyledMediumHeading>

            <SummaryGrid>
              {eventSummaryData.map((item, index) => (
                <SummaryItem key={index}>
                    <StyledParagraphBold className="label">
                  {item.label}
                </StyledParagraphBold>

                <StyledParagraph className="value">
                  {item.value}
                </StyledParagraph>
                </SummaryItem>
              ))}
            </SummaryGrid>
          </Section>

          <ActionRow>
            {/* <AcceptButton onClick={onAccept}>
              <span className="material-symbols-outlined">check_small</span>{" "}
              Accept Task
            </AcceptButton> */}
            <Button onClick={onDecline} icon="close_small">
              Close
            </Button>
          </ActionRow>
        </ModalContainer>
      </Overlay>
    </>
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
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 32px;
`;

const HeaderText = styled.div``;

const Section = styled.div`
  border: 1px solid #e5e7eb;
  box-shadow: 0 0 4px 0px #e5e7eb;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 32px;
`;

const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px 24px;
  margin-top: 16px;
`;

const SummaryItem = styled.div`
  .label {
    color: ${({ theme }) => theme.colors["text-gray-color"]};
  }

  .value {
    margin-bottom: 4px;
  }
`;

const ActionRow = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 40px;
  padding: 24px 0;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
`;

const DeclineButton = styled(StyledOutlinedButton)`
  // display: flex;
  // align-items: center;
  // justify-content: center;
  // flex: 1;
`;


export default ManageTaskModal;
