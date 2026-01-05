import { httpsClient } from "./client/httpsClient";

export const fetchTasksApi = () => httpsClient.get("/tasks");

export const fetchEventsAndTasksApi = (query) =>
  httpsClient.get("/users/user-events-tasks?" + query);
