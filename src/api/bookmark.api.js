import { httpsClient } from "./client/httpsClient";

export const getBookmarksByTypeApi = (entityType) =>
  httpsClient.get(`/bookmark/user-bookmarks/${entityType}`);
 
export const bookmarkEventApi = (payload) =>
  httpsClient.post("/bookmark", payload);
