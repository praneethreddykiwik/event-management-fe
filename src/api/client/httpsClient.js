import axios from "axios";
import { toast } from "react-toastify";
import { logoutAction } from "../../redux/auth/auth.actions";

export const httpsClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL + "/v1",
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

let isLoggingOut = false;

export const setupInterceptors = (axiosInstance, store) => {
  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const status = error?.response?.status;
      const url = error?.config?.url || "";

      const isAuthCall =
        url.includes("/auth/login") ||
        url.includes("/auth/logout") ||
        url.includes("/auth/me");

      if (status === 401 && !isAuthCall && !isLoggingOut) {
        isLoggingOut = true;

        const { auth } = store.getState();

        if (auth?.authStatus === "authenticated") {
          try {
            toast.error("Session expired. Please login again.", {
              toastId: "session-expired",
            });
            await store.dispatch(logoutAction());
          } finally {
            isLoggingOut = false;
          }
        } else {
          isLoggingOut = false;
        }
      }

      return Promise.reject(error);
    },
  );
};
