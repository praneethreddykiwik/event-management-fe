import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookmarksData: {},
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
      action.payload.forEach(({ entity_id, bookmark_name }) => {
        state.bookmarksData[entity_id] = bookmark_name ?? null;
      });
    },
    setBookmark(state, action) {
      const { entity_id, bookmark_name } = action.payload;
      state.bookmarksData[entity_id] = bookmark_name;
    },
    removeBookmark(state, action) {
      const { entity_id } = action.payload;
      state.bookmarksData[entity_id] = null;
    },
  },
});

export const bookmarksSelector = (st) => st.bookmarks;
export const { setAllBookmarks, setBookmark, removeBookmark } = bookmarksSlice.actions;
export default bookmarksSlice.reducer;