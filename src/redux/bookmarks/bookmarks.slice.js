import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookmarksData: {},
};

const bookmarksSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
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
export const { setBookmark, removeBookmark } = bookmarksSlice.actions;
export default bookmarksSlice.reducer;