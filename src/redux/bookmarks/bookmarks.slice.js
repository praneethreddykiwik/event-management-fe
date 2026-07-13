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
      const bookmarksFromServer = action.payload ?? [];
      state.bookmarksData = bookmarksFromServer;

      state.bookmarkOptions = [
        ...new Set([
          ...bookmarksFromServer.map((b) => b.bookmark_name),
          ...PREDEFINED_BOOKMARKS,
        ]),
      ];

      const allFolders = [...bookmarksFromServer];

      PREDEFINED_BOOKMARKS.forEach((name) => {
        ["event", "task"].forEach((type) => {
          const alreadyExists = allFolders.some(
            (b) => b.bookmark_name === name && b.entity_type === type,
          );

          if (!alreadyExists) {
            allFolders.push({ bookmark_name: name, entity_type: type, entity_ids: [] });
          }
        });
      });

      state.eventBookmarks = allFolders.filter((f) => f.entity_type === "event");
      state.taskBookmarks = allFolders.filter((f) => f.entity_type === "task");
    },

    setBookmark(state, action) {
      const { entity_id, bookmark_name, entity_type } = action.payload;

      const updateFolder = (list) => {
        const folder = list.find(
          (b) => b.bookmark_name === bookmark_name && b.entity_type === entity_type,
        );
        if (folder) {
          if (!folder.entity_ids) folder.entity_ids = [];
          if (!folder.entity_ids.includes(entity_id)) {
            folder.entity_ids.push(entity_id);
          }
        } else {
          list.push({ bookmark_name, entity_type, entity_ids: [entity_id] });
        }
      };

      updateFolder(state.bookmarksData);
      updateFolder(entity_type === "event" ? state.eventBookmarks : state.taskBookmarks);
    },

    removeBookmark(state, action) {
      const { entity_id, bookmark_name, entity_type } = action.payload;

      const updateFolder = (list) => {
        const folder = list.find(
          (b) => b.bookmark_name === bookmark_name && b.entity_type === entity_type,
        );
        if (folder?.entity_ids) {
          folder.entity_ids = folder.entity_ids.filter((id) => id !== entity_id);
        }
      };

      updateFolder(state.bookmarksData);
      updateFolder(entity_type === "event" ? state.eventBookmarks : state.taskBookmarks);
    },
  },
});

export const bookmarksSelector = (state) => state.bookmarks;
export const { setAllBookmarks, setBookmark, removeBookmark } = bookmarksSlice.actions;
export default bookmarksSlice.reducer;


export const getFolderNames = (bookmarks, type) =>
  bookmarks
    .filter((b) => b.entity_type === type)
    .map((b) => b.bookmark_name);


export const getSelectedFolderNames = (bookmarks, type, entityId) =>
  bookmarks
    .filter((b) => b.entity_type === type && b.entity_ids?.includes(entityId))
    .map((b) => b.bookmark_name);
    

export const getChangedFolder = (previousSelected, newSelected) => {
  const folderWasAdded = newSelected.length > previousSelected.length;

  return folderWasAdded
    ? newSelected.find((f) => !previousSelected.includes(f))
    : previousSelected.find((f) => !newSelected.includes(f));
};