import { paths } from "./paths";

export const ROLES = {
  admin: "admin",
  eventManager: "event_manager",
  vendor: "vendor",
  supervisor: "supervisor",
  customer: "customer",
  qa: "qa",
};

export const ROLES_OBJ = {
  admin: { key: "admin", label: "Admin", routePath: paths.eventsDashboard },
  event_manager: {
    key: "eventManager",
    label: "Event Manager",
    routePath: paths.tasks,
  },
  vendor: { key: "vendor", label: "Vendor", routePath: paths.vendor },
  supervisor: {
    key: "supervisor",
    label: "Supervisor",
    routePath: paths.supervisor,
  },
  customer: { key: "customer", label: "Customer", routePath: paths.customer },
  qa: { key: "qa", label: "QA", routePath: paths.qa },
};
