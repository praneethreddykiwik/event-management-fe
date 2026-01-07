export const PERMS = {
  TASK_CREATE: "task:create",
  TASK_EDIT: "task:edit",
  EVENT_VIEW: "event:view",
  EVENT_EDIT: "event:edit",
  ADMIN_PANEL: "admin:panel",
  CUSTOMER_PANEL: "customer:panel",
};

export const ROLE_PERMISSIONS = {
  admin: Object.values(PERMS),
  event_manager: [
    PERMS.EVENT_VIEW,
    PERMS.EVENT_EDIT,
    PERMS.TASK_CREATE,
    PERMS.TASK_EDIT,
  ],
  vendor: [PERMS.EVENT_VIEW],
  customer: [PERMS.CUSTOMER_PANEL],
};
