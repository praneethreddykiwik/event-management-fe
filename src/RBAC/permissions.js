export const PERMS = {
  TASK_CREATE: "task:create", // notGetting Used
  TASK_EDIT: "task:edit", // notGetting Used
  EVENT_VIEW: "event:view",
  EVENT_EDIT: "event:edit", // notGetting Used

  TASK_VIEW: "task:view",

  ADMIN_PANEL: "admin:panel",
  // CUSTOMER_PANEL: "customer:panel",
  VENDOR_PANEL: "vendor:panel",
  SUPERVISOR_PANEL: "supervisor:panel",
  QA_PANEL: "qa:panel",
};

export const ROLE_PERMISSIONS = {
  admin: Object.values(PERMS),
  event_manager: [
    PERMS.EVENT_VIEW,
    PERMS.EVENT_EDIT,
    PERMS.TASK_CREATE,
    PERMS.TASK_EDIT,
  ],
  vendor: [PERMS.VENDOR_PANEL],
  supervisor: [PERMS.SUPERVISOR_PANEL],
  qa: [PERMS.QA_PANEL],
  // customer: [PERMS.CUSTOMER_PANEL],
};
