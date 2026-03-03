import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

export const TenantIdHOC = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.has("tenantId")) {
      const next = new URLSearchParams(searchParams);
      next.set("tenantId", "helm");
      setSearchParams(next, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  return <>{children}</>;
};
