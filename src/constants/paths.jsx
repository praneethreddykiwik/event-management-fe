export const paths = {
  home: "/",
  login: "/login",
  newsFeed: "/news-feed",
  accountSettings: "/account-settings",
  eventsDashboard: "/events-dashboard",
  tasks: "/tasks",
  createTask: "/tasks/create",
  registration: "/registration",
  twoFactorAuth: "/two-factor-auth",
  eventsDetails: "/events/event-details",
  createEvent: "/events/create-event",
  editEvent: "/events/edit-event",

  vendor: "/vendor",
  supervisor: "/supervisor",
  customer: "/customer",
  userManagement: "/user/management",
  marketPlace: "/market-place",
  getInTouch: "/get-in-touch",

  venues: "/venues",
};

export const pathsAccordingToRole = {
  admin: paths.eventsDashboard,
  event_manager: paths.tasks,
  vendor: paths.vendor,
  supervisor: paths.supervisor,
  customer: paths.customer,
};
