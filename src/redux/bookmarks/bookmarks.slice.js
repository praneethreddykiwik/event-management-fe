import { createSlice } from "@reduxjs/toolkit";
import { PREDEFINED_BOOKMARKS } from "./bookmarks.metadata";

const initialState = {
  bookmarksData: [],
  bookmarkOptions: [],
  eventBookmarks: [],
  taskBookmarks: [],
};

const bookmarksSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    setAllBookmarks(state, action) {
      const payload = action.payload ?? [];
      state.bookmarksData = payload;

      const mappedNames = payload.map((el) => el.bookmark_name);
      state.bookmarkOptions = [...mappedNames, ...PREDEFINED_BOOKMARKS].filter(
        (name, i, arr) => arr.indexOf(name) === i,
      );

      const existingKeys = new Set(
        payload.map((b) => `${b.bookmark_name}::${b.entity_type}`),
      );

      const placeholders = [];
      PREDEFINED_BOOKMARKS.forEach((name) => {
        ["event", "task"].forEach((type) => {
          const key = `${name}::${type}`;
          if (!existingKeys.has(key)) {
            placeholders.push({
              bookmark_name: name,
              entity_type: type,
              entity_ids: [],
            });
          }
        });
      });

      const allFolders = [...payload, ...placeholders];
      state.eventBookmarks = allFolders.filter((f) => f.entity_type === "event");
      state.taskBookmarks = allFolders.filter((f) => f.entity_type === "task");
    },

    setBookmark(state, action) {
      const { entity_id, bookmark_name, entity_type } = action.payload;

      const folder = state.bookmarksData.find(
        (b) => b.bookmark_name === bookmark_name && b.entity_type === entity_type,
      );

      if (folder) {
        if (!folder.entity_ids) folder.entity_ids = [];
        if (!folder.entity_ids.includes(entity_id)) {
          folder.entity_ids.push(entity_id);
        }
      } else {
        state.bookmarksData.push({
          bookmark_name,
          entity_type,
          entity_ids: [entity_id],
        });
      }
    },

    removeBookmark(state, action) {
      const { entity_id, bookmark_name, entity_type } = action.payload;

      const folder = state.bookmarksData.find(
        (b) => b.bookmark_name === bookmark_name && b.entity_type === entity_type,
      );

      if (folder?.entity_ids) {
        folder.entity_ids = folder.entity_ids.filter((id) => id !== entity_id);
      }
    },
  },
});

export const bookmarksSelector = (state) => state.bookmarks;
export const { setAllBookmarks, setBookmark, removeBookmark } = bookmarksSlice.actions;
export default bookmarksSlice.reducer;