import { httpsClient } from "./client/httpsClient";

export const fetchTasksApi = () => httpsClient.get("/tasks");
