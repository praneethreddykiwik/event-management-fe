import Badge, { Badge2 } from "../../../components/Badge/Badge.component";
import { TASK_STATUSES } from "../../../constants/statuses";
import { formatDateTime } from "../../../utils/utils";

const fullWidth = {
  flexBasis: "100%",
  alignItems: "baseline",
  display: "flex",
  gap: "4px",
};

export const generateEventSummary = (task) => {
  return [
    { label: "Event Name", value: task.eventName, sx: fullWidth },
    { label: "Event Assigned to", value: task.eventAssignedTo, sx: fullWidth },
    {
      label: "Event Status",
      value: task.eventStatus,
      sx: fullWidth,
      component: (
        <Badge type={TASK_STATUSES[task.taskStatus]?.badgeColor}>
          {task.taskStatus}
        </Badge>
      ),
    },
  ];
};

export const generateQASummary = (task) => {
  return [
    {
      label: "QA Assigned to",
      value: task.qaAssignedTo || "None",
      sx: fullWidth,
    },
    {
      label: "Is QA approved",
      value: task.taskIsQaApproved ? "Yes" : "No",
      sx: fullWidth,
      component: (
        <Badge2 approved={task.isQaApproved}>
          {task.isQaApproved ? "QA Approved" : "QA Not Approved"}
        </Badge2>
      ),
    },
    {
      label: "QA approved at",
      value: formatDateTime(task.taskQaApprovedAt) || "Not approved yet",
      sx: fullWidth,
    },
  ];
};

export const generateTaskSummary = (task) => {
  return [
    { label: "Task Name", value: task.taskTitle, sx: fullWidth },
    {
      label: "Task Description",
      value: task.taskDescription,
      sx: fullWidth,
    },
    { label: "Task Assigned to", value: task.taskAssignedTo },
    { label: "Task Created At", value: formatDateTime(task.taskCreatedAt) },
    { label: "Task Due At", value: formatDateTime(task.taskDueAt) },
    { label: "Event Venue", value: task.eventVenue || task.venue },
    { label: "Assigned To", value: task.taskAssignedTo }, // checkHere
    { label: "Status", value: task.taskStatus },
    { label: "Priority", value: task.taskPriority },
  ];
};

export const generateEditPayload = (task) => {
  return {
    eventUid: task.eventUid,
    taskUid: task.taskUid,
    mode: "edit",
    taskData: {
      title: task.taskTitle,
      description: task.taskDescription,
      priority: task.taskPriority,
      dueAt: task.taskDueAt,
      assignedToUid: task.taskAssignedToUid,
      status: task.taskStatus,
      qaAssignedTo: task.qaAssignedTo,
      qaAssignedToUid: task.qaAssignedToUid,
    },
  };
};
