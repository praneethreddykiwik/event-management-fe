import { httpsClient } from "./client/httpsClient";

export const getUsersApi = (queryParams) => {
  return httpsClient.get("/users" + queryParams);
};

export const createUserApi = (body) => httpsClient.post("/users", body);
export const userDeleteApi = ({ uid }) =>
  httpsClient.delete(`/users/delete-user?uid=${uid}`);
