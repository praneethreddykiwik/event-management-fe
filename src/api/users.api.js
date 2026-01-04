import { httpsClient } from "./client/httpsClient";

export const getUsersApi = () => {
  return httpsClient.get("/health");
};
