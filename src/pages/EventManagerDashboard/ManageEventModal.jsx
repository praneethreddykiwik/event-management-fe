import React, { useState } from "react";
import styled from "styled-components";

import {
  StyledBaseButton,
  StyledOutlinedButton,
} from "../../components/Styled/Buttons.styled";
import { InputDefault } from "../../components/Styled/Inputs.styled";

/*  Add Task Modal  */

const AddTaskModal = ({ onClose, onAddTask }) => {
  const [taskName, setTaskName] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [dueDate, setDueDate] = useState("");

  const formFields = [
    {
      id: "taskName",
      label: "Task Name",
      required: true,
      component: "input",
      placeholder: "e.g. Setup audio equipment",
      value: taskName,
      onChange: (e) => setTaskName(e.target.value),
    },
    {
      id: "assignedTo",
      label: "Assign To",
      required: true,
      component: "select",
      value: assignedTo,
      onChange: (e) => setAssignedTo(e.target.value),
      options: [
        { value: "", label: "Select stakeholder/vendor" },
        { value: "XYZ Decorations", label: "XYZ Decorations" },
        { value: "ABC Catering", label: "ABC Catering" },
      ],
    },
    {
      id: "dueDate",
      label: "Due Date",
      required: true,
      component: "date",
      value: dueDate,
      onChange: (e) => setDueDate(e.target.value),
    },
  ];

  const handleSubmit = () => {
    if (!taskName || !assignedTo || !dueDate) return;

    onAddTask({
      id: Date.now(),
      name: taskName,
      assignedTo,
      dueDate,
      status: "not started",
    });

    onClose();
  };

  return (
    <Overlay>
      <ModalContainer style={{ width: "460px" }}>
        <ModalHeader>
          <HeaderText>
            <Title>Add New Task</Title>
            <Subtitle>Create a task for this event</Subtitle>
          </HeaderText>
          <CloseButton onClick={onClose}>
            <span className="material-symbols-outlined">close_small</span>
          </CloseButton>
        </ModalHeader>

        {formFields.map((field) => (
          <FormGroup key={field.id}>
            <Label>
              {field.label} {field.required && <sup>*</sup>}
            </Label>

            {field.component === "input" && (
              <InputDefault
                placeholder={field.placeholder}
                value={field.value}
                onChange={field.onChange}
              />
            )}

            {field.component === "select" && (
              <Select value={field.value} onChange={field.onChange}>
                {field.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
            )}

            {field.component === "date" && (
              <Input
                type="date"
                value={field.value}
                onChange={field.onChange}
              />
            )}
          </FormGroup>
        ))}

        <ButtonRow>
          <PrimaryButton onClick={handleSubmit}>Add Task</PrimaryButton>
          <SecondaryButton onClick={onClose}>Cancel</SecondaryButton>
        </ButtonRow>
      </ModalContainer>
    </Overlay>
  );
};

/*  Event Modal  */

const ManageEventModal = ({ onClose }) => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  const eventSummaryData = [
    { label: "Event Name", value: "Annual Tech Conference" },
    { label: "Event Type", value: "Corporate" },
    { label: "Date & Time", value: "February 15, 2025 at 09:00" },
    { label: "Venue", value: "Convention Center" },
    { label: "Assigned By", value: "Admin User" },
    { label: "Expected Attendees", value: "500" },
  ];

  const getStatusStyles = (status) => {
    switch (status) {
      case "in progress":
        return {
          background: "#FEF3C7",
          color: "#92400E",
        };
      case "not started":
      default:
        return {
          background: "#E5E7EB",
          color: "#374151",
        };
    }
  };

  return (
    <>
      <Overlay>
        <ModalContainer>
          <ModalHeader>
            <HeaderText>
              <Title>Manage Event</Title>
              <Subtitle>View event details and manage tasks</Subtitle>
            </HeaderText>
            <CloseButton onClick={onClose}>
              <span className="material-symbols-outlined">close_small</span>
            </CloseButton>
          </ModalHeader>

          <Section>
            <SectionTitle>Event Summary</SectionTitle>

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
            <DeclineButton>
              <span className="material-symbols-outlined">close_small</span>{" "}
              Decline Event
            </DeclineButton>
          </ActionRow>

          <TaskHeader>
            <SectionTitle>Tasks</SectionTitle>
            <AddTaskButton onClick={() => setShowAddTask(true)}>
              <span className="material-symbols-outlined">add</span> Add Task
            </AddTaskButton>
          </TaskHeader>

          <TaskList>
            {tasks.map((task) => (
              <TaskCard key={task.id}>
                <TaskLeft>
                  <TaskIcon>
                    <span className="material-symbols-outlined">schedule</span>
                  </TaskIcon>

                  <TaskContent>
                    <TaskTitle>{task.name}</TaskTitle>
                    <TaskMeta>
                      Assigned to: {task.assignedTo} • Due: {task.dueDate}
                    </TaskMeta>
                  </TaskContent>
                </TaskLeft>

                <TaskRight>
                  <StatusBadge style={getStatusStyles(task.status)}>
                    {task.status}
                  </StatusBadge>

                  <ArrowIcon>
                    <span className="material-symbols-outlined">send</span>
                  </ArrowIcon>
                </TaskRight>
              </TaskCard>
            ))}
          </TaskList>
        </ModalContainer>
      </Overlay>

      {showAddTask && (
        <AddTaskModal
          onClose={() => setShowAddTask(false)}
          onAddTask={(task) => setTasks((prev) => [...prev, task])}
        />
      )}
    </>
  );
};

/* Styled Components  */

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

const CloseButton = styled.button`
  border: none;
  background: transparent;
  font-size: 18px;
  cursor: pointer;
`;

/*  Event Summary  */

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
  font-size: 13px;
  color: #6b7280;
`;

const Value = styled.p`
  margin: 4px 0 0;
  font-size: 14px;
  font-weight: 500;
`;

/* Action Buttons */

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

/* Tasks */

const TaskHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const AddTaskButton = styled(StyledBaseButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  color: #fff;
`;

const TaskList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TaskCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 14px 16px;
  background: #fff;
`;

const TaskLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const TaskIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
  font-size: 18px;
`;

const TaskContent = styled.div``;

const TaskTitle = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
`;

const TaskMeta = styled.p`
  margin: 4px 0 0;
  font-size: 12px;
  color: #6b7280;
`;

const TaskRight = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StatusBadge = styled.span`
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 999px;
  font-weight: 500;
  text-transform: capitalize;
`;

const ArrowIcon = styled.div`
  color: #9ca3af;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

/* Form Styles */

const FormGroup = styled.div`
  margin-bottom: 16px;
`;

const Input = styled.input`
  width: calc(100% - 24px);
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
`;

const PrimaryButton = styled(StyledBaseButton)`
  width: auto;
  color: #fff;
`;

const SecondaryButton = styled(StyledOutlinedButton)`
  width: auto;
`;

export default ManageEventModal;
