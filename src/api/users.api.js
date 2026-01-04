import { httpsClient } from "./client/httpsClient";

export const getUsersApi = () => {
  return httpsClient.get("/v1/health");
};
