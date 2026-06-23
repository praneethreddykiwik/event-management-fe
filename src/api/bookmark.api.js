import { httpsClient } from "./client/httpsClient";

export const bookmarkEventApi = (payload) => {
  httpsClient.post("/bookmark-event", payload);
};

export const getBookmarkByEntityApi = async (query) =>
  httpsClient.get("/bookmark-event/bookmark" + query);
