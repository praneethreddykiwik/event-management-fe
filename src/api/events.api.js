import { httpsClient } from "./client/httpsClient";

export const fetchEventsApi = () => httpsClient.get("/events");

export const createEventsApi = (payload) =>
  httpsClient.post("/events/create-event", payload);
