// /tasks-comments

import { httpsClient } from "./client/httpsClient";

export const fetchTasksCommentsApi = (taskUid) =>
  httpsClient.get("/tasks-comments/" + taskUid);

// {
//  *   taskUid: "",
//  *   commentText: ""
//  * }
export const createTasksCommentsApi = (data) =>
  httpsClient.post("/tasks-comments", data);

//  * body: {
//  *   taskUid: "",
//  *   commentUid: "",
//  *   commentText: ""
//  * }
export const editTasksCommentsApi = (data) =>
  httpsClient.put("/tasks-comments/edit", data);

/**
 * body: {
 *   taskUid: "",
 *   commentUid: ""
 * }
 */
export const deleteTaskCommentsApi = (query) =>
  httpsClient.delete("/tasks-comments/" + query);
