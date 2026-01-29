import { httpsClient } from "./client/httpsClient";

export const fetchEventsApi = () => httpsClient.get("/events");

export const createEventsApi = (payload) =>
  httpsClient.post("/events/create-event", payload);

export const deleteEventsApi = (payload) =>
  httpsClient.delete("/events/delete-Event", {
    data: payload,
  });