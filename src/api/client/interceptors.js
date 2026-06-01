import { logoutAction } from "../../redux/auth/auth.actions";

let isLoggingOut = false;

export const setupInterceptors = (axiosInstance, store) => {
  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const status = error?.response?.status;
      const url = error?.config?.url || "";
      const isAuthCall =
        url.includes("/auth/login") || url.includes("/auth/logout");

      if (status === 401 && !isAuthCall && !isLoggingOut) {
        const { auth } = store.getState();
        
        if (auth?.authStatus === "authenticated") {
          isLoggingOut = true;
          try {
            await store.dispatch(logoutAction());
          } finally {
            isLoggingOut = false;
          }
        }
      }

      return Promise.reject(error);
    }
  );
};