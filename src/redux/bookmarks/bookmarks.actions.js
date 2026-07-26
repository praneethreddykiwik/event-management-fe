import { createAsyncThunk } from "@reduxjs/toolkit";
import { bookmarkEventApi, getBookmarksByTypeApi } from "../../api/bookmark.api";
import {
  setEventBookmarks,
  setTaskBookmarks,
  toggleFolderEntity,
} from "./bookmarks.slice";

export const fetchBookmarksByTypeAction = createAsyncThunk(
  "bookmarks/fetchByType",
  async (entityType, { dispatch }) => {
    const res = await getBookmarksByTypeApi(entityType);
    const bookmarksMap = res?.data?.details ?? {};

    if (entityType === "event") {
      dispatch(setEventBookmarks(bookmarksMap));
    } else {
      dispatch(setTaskBookmarks(bookmarksMap));
    }
  },
);

export const toggleBookmarkAction = createAsyncThunk(
  "bookmarks/toggle",
  async ({ entityId, folderName, entityType }, { dispatch }) => {
    const reducerPayload = {
      entity_type: entityType,
      bookmark_name: folderName,
      entity_id: entityId,
    };

    const apiPayload = {
      entityType,
      bookmarkName: folderName,
      entityId,
    };

    dispatch(toggleFolderEntity(reducerPayload));

    try {
      await bookmarkEventApi(apiPayload);
    } catch (err) {
      console.error("Failed to save bookmark:", err);
      dispatch(toggleFolderEntity(reducerPayload)); 
    }
  },
);