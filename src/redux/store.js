import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/auth.slice";
import usersReducer from "./users/users.slice";
import eventsReducer from "./events/events.slice";
import tasksReducer from "./tasks/tasks.slice";
import formsReducer from "./farms/farms.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
    events: eventsReducer,
    tasks: tasksReducer,
    forms: formsReducer,
  },
});
