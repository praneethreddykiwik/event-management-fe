import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookmarksData: [],
  bookmarkOptions: [
    { id: 1, label: "Work" },
    { id: 2, label: "Personal" },
    { id: 3, label: "Urgent" },
  ],
};

const bookmarksSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    setAllBookmarks(state, action) {
      state.bookmarksData = action.payload ?? [];
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
        (b) =>
          b.bookmark_name === bookmark_name && b.entity_type === entity_type,
      );

      if (folder?.entity_ids) {
        folder.entity_ids = folder.entity_ids.filter((id) => id !== entity_id);
      }
    },
  },
});

export const bookmarksSelector = (st) => st.bookmarks;
export const { setAllBookmarks, setBookmark, removeBookmark } =
  bookmarksSlice.actions;
export default bookmarksSlice.reducer;
