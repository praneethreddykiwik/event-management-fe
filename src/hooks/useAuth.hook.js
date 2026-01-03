import { useState } from "react";
import { loginAndFetchUserService } from "../services/auth.service";

export const useAuth = () => {
  //   const [details, setDetails] = useState({});
  const [user, setUser] = useState(null);
  const [userDetails, setUserDetails] = useState({});
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);

  console.log("userDetails at useAuth", userDetails);

  // get all use details from UI on Login.
  // post the details to BE.
  // get a authentication response.
  const login = async (credentials) => {
    setLoading(true);

    try {
      const { email } = credentials;
      console.log("credentials", credentials);
      const loginAndFetchUserServiceRes = await loginAndFetchUserService(
        credentials
      );
      setUser(email);
      setUserDetails((prev) => ({ ...prev, email }));
      return loginAndFetchUserServiceRes;
    } catch (error) {
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return {
    user,
    role,
    loading,
    error,
    isAuthenticaed: !!user,
    authChecked,
    userDetails,

    login,
    logout,
    setAuthChecked,
    setRole,
    setUserDetails,
  };
};
