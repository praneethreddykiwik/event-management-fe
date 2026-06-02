export const TASK_STATUSES = {
  not_started: {
    badgeColor: "notstarted",
    icon: "schedule",
    status: "Not Started",
    label: "Not Started",
    keyCamel: "notStarted",
  },

  assigned: {
    badgeColor: "assigned",
    icon: "assignment_ind",
    status: "Assigned",
    label: "Assigned",
    keyCamel: "assigned",
  },

  in_progress: {
    badgeColor: "inprogress",
    icon: "hourglass_bottom",
    status: "In Progress",
    label: "In Progress",
    keyCamel: "inProgress",
  },

  ready_for_qa: {
    badgeColor: "inprogress",
    icon: "hourglass_bottom",
    status: "Ready For QA",
    label: "Ready For QA",
    keyCamel: "readyForQA",
  },

  qa_in_progress: {
    badgeColor: "inprogress",
    icon: "hourglass_bottom",
    status: "QA in progress",
    label: "QA in progress",
    keyCamel: "QAInProgress",
  },

  completed: {
    badgeColor: "completed",
    icon: "task_alt",
    status: "Completed",
    label: "Completed",
    keyCamel: "completed",
  },

  cancelled: {
    badgeColor: "cancelled",
    icon: "cancel",
    status: "Cancelled",
    label: "Cancelled",
    keyCamel: "cancelled",
  },

  deleted: {
    badgeColor: "deleted",
    icon: "delete",
    status: "Deleted",
    label: "Deleted",
    keyCamel: "deleted",
  },
};

export const eventStatuses = {
  pending: {
    badgeColor: "pending",
    icon: "pending_actions",
    status: "Pending",
    count: 0,
  },

  assigned: {
    badgeColor: "assigned",
    icon: "assignment_ind",
    status: "Assigned",
    count: 0,
  },

  accepted: {
    badgeColor: "completed",
    icon: "thumb_up",
    status: "Accepted",
    count: 0,
  },

  ready: {
    badgeColor: "active",
    icon: "task",
    status: "Ready",
    count: 0,
  },

  in_progress: {
    badgeColor: "inprogress",
    icon: "hourglass_bottom",
    status: "In Progress",
    count: 0,
  },

  completed: {
    badgeColor: "completed",
    icon: "task_alt",
    status: "Completed",
    count: 0,
  },

  declined: {
    badgeColor: "declined",
    icon: "thumb_down",
    status: "Declined",
    count: 0,
  },

  cancelled: {
    badgeColor: "cancelled",
    icon: "cancel",
    status: "Cancelled",
    count: 0,
  },

  deleted: {
    badgeColor: "deleted",
    icon: "delete",
    status: "Deleted",
    count: 0,
  },
};

export const managersStatuses = {
  IDLE: {},
  DISABLED: {},
};

export const taskPriorities = {
  low: "low",
  medium: "medium",
  high: "high",
};
