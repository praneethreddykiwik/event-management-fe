import { httpsClient } from "./client/httpsClient";
// http://localhost:4001/v1/users/me

export const loginApi = (payload) => httpsClient.post("/auth/login", payload);

export const meApi = () => httpsClient.get("/auth/me");

export const logoutApi = () => httpsClient.post("/auth/logout");

export const registrationApi = (body) =>
  httpsClient.post("/auth/register", body);
