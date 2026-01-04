import axios from "axios";

export const httpsClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL + "/v1",
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
