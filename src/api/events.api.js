import { httpsClient } from "./client/httpsClient";

export const fetchEventsApi = (query) =>
  httpsClient.get("/events" + (query || ""));

export const createEventsApi = (payload) =>
  httpsClient.post("/events/create-event", payload);

export const deleteEventsApi = (payload) =>
  httpsClient.delete("/events/delete-event", {
    data: payload,
  });

export const updateEventsApi = (payload) =>
  httpsClient.put("/events/update-event", payload);

export const assignEventApi = (payload) =>
  httpsClient.post("/events/assign-event", payload);

export const filterEventsApi = (payload) =>
  httpsClient.get(`/events/filter?searchText=${payload}`);