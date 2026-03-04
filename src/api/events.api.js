import { httpsClient } from "./client/httpsClient";

export const fetchEventsApi = () => httpsClient.get("/events");

export const createEventsApi = (payload) =>
  httpsClient.post("/events/create-event", payload);

export const assignEventApi = (payload) =>
  httpsClient.post("/events/assign-event", payload);
