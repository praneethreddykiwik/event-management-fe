import { httpsClient } from "./client/httpsClient";

export const getUsersApi = (queryParams) => {
  return httpsClient.get("/users" + queryParams);
};
export const getEventManagersApi = (queryParams) => {
  return httpsClient.get("/users/event-managers" + queryParams);
};

export const createUserApi = (body) =>
  httpsClient.post("/users/register", body);
export const userDeleteApi = ({ uid }) =>
  httpsClient.delete(`/users/delete-user?uid=${uid}`);
export const updateUserApi = (body) => httpsClient.put("/users", body);
