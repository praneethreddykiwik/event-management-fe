import { httpsClient } from "../client/httpsClient";

export const LoginAPI = (userDetails) => {
  return httpsClient.post("/v1/users/login", userDetails);
};

export const postMeAPI = (payload) => {
  return httpsClient.post("v1/users/me", payload);
};

// http://localhost:4001/v1/users/me
