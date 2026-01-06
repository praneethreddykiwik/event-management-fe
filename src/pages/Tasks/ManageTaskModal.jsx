import styled from "styled-components";
import {
  StyledBaseButton,
  StyledOutlinedButton,
} from "../../components/Styled/Buttons.styled";
import { Icon } from "../../components/Icons/Icons";
import { formatDateTime } from "../../utils/utils";
import { useDispatch } from "react-redux";
import { declineTasksAction } from "../../redux/tasks/tasks.actions";

const ManageTaskModal = ({ onClose, task }) => {
  const dispatch = useDispatch();

  console.log("abdul task", task);

  const eventSummaryData = [
    { label: "Task Name", value: task.taskTitle },
    { label: "Task Description", value: task.taskDescription },
    { label: "Task Created At", value: formatDateTime(task.taskCreatedAt) },
    { label: "Venue", value: task.venue },
    { label: "Assigned By", value: task.taskAssignedToUid },
    { label: "Status", value: task.taskStatus },
  ];

  // add toast
  const onDecline = () => {
    const payload = {
      taskUid: "",
      tenantId: "",
    };
    dispatch(declineTasksAction(payload));
  };

  return (
    <>
      <Overlay>
        <ModalContainer>
          <ModalHeader>
            <HeaderText>
              <Title>Event: {task.eventName}</Title>
              <Subtitle>{task.venue}</Subtitle>
            </HeaderText>
            <Icon variant="close" onClick={onClose} />
          </ModalHeader>

          <Section>
            <SectionTitle>Task Summary</SectionTitle>

            <SummaryGrid>
              {eventSummaryData.map((item, index) => (
                <SummaryItem key={index}>
                  <Label>{item.label}</Label>
                  <Value>{item.value}</Value>
                </SummaryItem>
              ))}
            </SummaryGrid>
          </Section>

          <ActionRow>
            <AcceptButton>
              <span className="material-symbols-outlined">check_small</span>{" "}
              Accept Event
            </AcceptButton>
            <DeclineButton onClick={onDecline}>
              <span className="material-symbols-outlined">close_small</span>{" "}
              Decline Event
            </DeclineButton>
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
  background: #fff;
  width: 620px;
  border-radius: 14px;
  padding: 24px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const HeaderText = styled.div``;

const Title = styled.h3`
  margin: 0;
  font-size: 20px;
`;

const Subtitle = styled.p`
  margin: 4px 0 0;
  font-size: 14px;
  color: #6b7280;
`;

const Section = styled.div`
  border: 1px solid #e5e7eb;
  box-shadow: 0 0 4px 0px #e5e7eb;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h4`
  margin: 0;
  font-size: 16px;
`;

const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px 24px;
  margin-top: 14px;
`;

const SummaryItem = styled.div``;

const Label = styled.p`
  margin: 0;
  color: #86868d;
  font-size: 12px;
`;

const Value = styled.p`
  margin: 4px 0 0;
  font-size: 12px;
  font-weight: 500;
`;

const ActionRow = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 24px;
  padding: 15px 0;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
`;

const AcceptButton = styled(StyledBaseButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  color: #fff;
`;

const DeclineButton = styled(StyledOutlinedButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export default ManageTaskModal;
