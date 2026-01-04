import { httpsClient } from "./client/httpsClient";

export const getHealthStatusAPI = () => {
  return httpsClient.get("/health");
};
