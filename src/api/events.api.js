import { httpsClient } from "./client/httpsClient";

export const fetchEventsApi = () => httpsClient.get("/events");
