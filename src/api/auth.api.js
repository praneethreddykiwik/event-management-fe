import { httpsClient } from "./client/httpsClient";
// http://localhost:4001/v1/users/me

export const loginApi = (payload) =>
  httpsClient.post("/v1/auth/login", payload);

export const meApi = () => httpsClient.get("/v1/auth/me");

export const logoutApi = () => httpsClient.post("/v1/auth/logout");
