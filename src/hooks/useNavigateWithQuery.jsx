import { useNavigate, useLocation } from "react-router-dom";

const useNavigateWithQuery = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const allowedVars = ["tenantId", "mode"]; // whitelist

  return (to, options = {}) => {
    const currentParams = new URLSearchParams(location.search);
    const nextParams = new URLSearchParams();
    allowedVars.forEach((key) => {
      const value = currentParams.get(key);
      if (value) {
        nextParams.set(key, value);
      }
    });

    const queryString = nextParams.toString();
    const finalPath = queryString ? `${to}?${queryString}` : to;

    navigate(finalPath, options);
  };
};

export default useNavigateWithQuery;
