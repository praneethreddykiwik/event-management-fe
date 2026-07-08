import { createSlice } from "@reduxjs/toolkit";
import { PREDEFINED_BOOKMARKS } from "./bookmarks.metadata";

const initialState = {
  bookmarksData: [],
  bookmarkOptions: [],
  eventBookmarks: [],
  taskBookamrks: [],
};

const bookmarksSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    setAllBookmarks(state, action) {
      state.bookmarksData = action.payload ?? [];

      const mappedOptions = action.payload.map((el) => el.bookmark_name);
      const newOptions = [...mappedOptions, ...PREDEFINED_BOOKMARKS].filter(
        (fl, i, arr) => {
          return arr.findIndex((fi) => fi === fl) === i;
        },
      );
      state.bookmarkOptions = newOptions;

      // PREDEFINED_BOOKMARKS

      const fromBackend = [
        {
          bookmark_name: "Work",
          entity_type: "event",
          entity_ids: ["e9ed88f7-48c1-49b0-83cd-a7aff79e2091"],
        },
        {
          bookmark_name: "Work",
          entity_type: "task",
          entity_ids: [
            "4b33f588-1dc1-4bbb-8c79-53cd1edf08f8",
            "fbad4b04-3d88-4202-a1d6-bf503aa174ed",
            "6cfdcc93-e805-4baf-b2ea-0fe734443842",
          ],
        },

        {
          bookmark_name: "Personal",
          entity_type: "event",
          entity_ids: [
            "4b33f588-1dc1-4bbb-8c79-53cd1edf08f8",
            "fbad4b04-3d88-4202-a1d6-bf503aa174ed",
            "6cfdcc93-e805-4baf-b2ea-0fe734443842",
          ],
        },
        {
          bookmark_name: "Personal",
          entity_type: "task",
          entity_ids: ["fe3450ad-7272-4e5f-9fca-6c16beacc333"],
        },
      ];
      // const mappedOptions = action.payload.map((el) => el.bookmark_name);
      const k = [...action.payload, ...PREDEFINED_BOOKMARKS].filter(
        (fl, i, arr) => {
          return (
            arr.findIndex((fi) => fi.bookmark_name === fl.bookmark_name) === i
          );
        },
      );
      state.eventBookmarks = k.filter((fl) => fl.entity_type === "event");
      state.taskBookamrks = k.filter((fl) => fl.entity_type === "task");
      debugger;

      const dbData = {
        Work: {
          task: [
            "4b33f588-1dc1-4bbb-8c79-53cd1edf08f8",
            "fbad4b04-3d88-4202-a1d6-bf503aa174ed",
            "6cfdcc93-e805-4baf-b2ea-0fe734443842",
          ],
          event: [
            "7c224733-430e-4539-ae36-8fda90cbf9c9",
            "786501b4-11a1-4005-9328-4bfd0c95fe53",
            "83b573bf-9b8f-4e2f-8533-8008c6706f37",
          ],
        },
        Personal: {
          task: ["fe3450ad-7272-4e5f-9fca-6c16beacc333"],
          event: [
            "4f4a44ae-caae-470c-bea8-1ee1cdcbff0a",
            "7c224733-430e-4539-ae36-8fda90cbf9c9",
            "55e7e593-7127-4afb-a479-27a9d8687787",
          ],
        },
      };
      // const k = Object.keys(dbData).
    },

    setBookmark(state, action) {
      const { entity_id, bookmark_name, entity_type } = action.payload;
      debugger;

      const folder = state.bookmarksData.find(
        (b) =>
          b.bookmark_name === bookmark_name && b.entity_type === entity_type,
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
