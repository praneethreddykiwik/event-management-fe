export const PERMS = {
  EVENT_VIEW: "event:view",
  EVENT_EDIT: "event:edit", // only for admin
  EVENT_DELETE: "event:delete",

  TASK_CREATE: "task:create", // notGetting Used
  TASK_EDIT: "task:edit", // notGetting Used
  TASK_DELETE: "task:delete", // Admin and EM
  TASK_VIEW: "task:view",
  TASK_STATUS_UODATE: "task:status:update",

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
    PERMS.TASK_VIEW,
    PERMS.TASK_DELETE,
    PERMS.TASK_STATUS_UODATE,
  ],
  vendor: [PERMS.VENDOR_PANEL],
  supervisor: [PERMS.SUPERVISOR_PANEL],
  qa: [PERMS.QA_PANEL, PERMS.TASK_VIEW, PERMS.TASK_STATUS_UODATE],
  // customer: [PERMS.CUSTOMER_PANEL],
};
