import { createAsyncThunk } from "@reduxjs/toolkit";
import { bookmarkEventApi } from "../../api/bookmark.api";
import { setBookmark, removeBookmark } from "./bookmarks.slice";

export const toggleBookmarkAction = createAsyncThunk(
  "bookmarks/toggle",
  async ({ entityId, folderName, type }, { dispatch, getState }) => {
    const { bookmarksData } = getState().bookmarks;

    const folder = bookmarksData.find(
      (b) => b.bookmark_name === folderName && b.entity_type === type,
    );
    const willBeAdded = !folder?.entity_ids?.includes(entityId);

    const payload = {
      entity_id: entityId,
      bookmark_name: folderName,
      entity_type: type,
    };

    if (willBeAdded) {
      dispatch(setBookmark(payload));
    } else {
      dispatch(removeBookmark(payload));
    }

    try {
      await bookmarkEventApi(payload);
    } catch (err) {
      console.error("Failed to save bookmark:", err);
      if (willBeAdded) {
        dispatch(removeBookmark(payload));
      } else {
        dispatch(setBookmark(payload));
      }
    }
  },
);