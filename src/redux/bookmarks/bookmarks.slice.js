import { createSlice } from "@reduxjs/toolkit";
import { PREDEFINED_BOOKMARKS } from "./bookmarks.metadata";

const initialState = {
  eventBookmarks: {},
  taskBookmarks: {},
};

const withPlaceholders = (bookmarksMap) => {
  const result = { ...bookmarksMap };
  PREDEFINED_BOOKMARKS.forEach((name) => {
    if (!result[name]) result[name] = [];
  });
  return result;
};

const bookmarksSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    setEventBookmarks(state, action) {
      state.eventBookmarks = withPlaceholders(action.payload ?? {});
    },
    setTaskBookmarks(state, action) {
      state.taskBookmarks = withPlaceholders(action.payload ?? {});
    },
    toggleFolderEntity(state, action) {
      const { entity_type, bookmark_name, entity_id } = action.payload;
      const target =
        entity_type === "event" ? state.eventBookmarks : state.taskBookmarks;

      if (!target[bookmark_name]) target[bookmark_name] = [];

      const index = target[bookmark_name].indexOf(entity_id);
      if (index === -1) {
        target[bookmark_name].push(entity_id);
      } else {
        target[bookmark_name].splice(index, 1);
      }
    },
  },
});

export const bookmarksSelector = (state) => state.bookmarks;
export const { setEventBookmarks, setTaskBookmarks, toggleFolderEntity } =
  bookmarksSlice.actions;
export default bookmarksSlice.reducer;

export const getFolderNames = (bookmarksMap) => Object.keys(bookmarksMap);

export const getSelectedFolderNames = (bookmarksMap, entityId) =>
  Object.entries(bookmarksMap)
    .filter(([, ids]) => ids.includes(entityId))
    .map(([name]) => name);

export const getChangedFolder = (previousSelected, newSelected) => {
  const folderWasAdded = newSelected.length > previousSelected.length;

  return folderWasAdded
    ? newSelected.find((f) => !previousSelected.includes(f))
    : previousSelected.find((f) => !newSelected.includes(f));
};