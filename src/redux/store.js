import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/auth.slice";
import usersReducer from "./users/users.slice";
import eventsReducer from "./events/events.slice";
import tasksReducer from "./tasks/tasks.slice";
import taskCommentsReducer from "./taskComments/taskComments.slice";
import formsReducer from "./farms/farms.slice";
import bookmarksReducer from "./bookmarks/bookmarks.slice";

import { httpsClient } from "../api/client/httpsClient";
import { setupInterceptors } from "../api/client/interceptors";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
    events: eventsReducer,
    tasks: tasksReducer,
    taskComments: taskCommentsReducer,
    forms: formsReducer,
    bookmarks: bookmarksReducer,
  },
});

setupInterceptors(httpsClient, store);
