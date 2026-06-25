import { httpsClient } from "./client/httpsClient";

export const bookmarkEventApi = (payload) =>
  httpsClient.post("/bookmark", payload);

export const getAllBookmarksByUserApi = () =>
  httpsClient.get("/bookmark/user-bookmarks");
