import { useNavigate, useLocation } from "react-router-dom";

const useNavigateWithQuery = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const includeTenant = (str, tenantParam) => {
    if (str.includes("?")) {
      return str.replace("?", `?${tenantParam}&`);
    } else {
      return str + `?${tenantParam}`;
    }
  };

  // const requiredParams = ["tenantId", "mode", "eventUid"]; // whitelist
  const requiredParams = ["tenantId"]; // whitelist

  return (to, options = {}) => {
    const currentParams = new URLSearchParams(location.search);
    const nextParams = new URLSearchParams();
    requiredParams.forEach((key) => {
      const value = currentParams.get(key);
      if (value) {
        nextParams.set(key, value);
      }
    });

    const queryString = nextParams.toString();

    const t02 = includeTenant(to, queryString);
    navigate(t02, options);
  };
};

export default useNavigateWithQuery;
