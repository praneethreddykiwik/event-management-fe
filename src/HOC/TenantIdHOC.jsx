import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateTenantId } from "../redux/auth/auth.slice";

export const TenantIdHOC = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    let tenantId = searchParams.get("tenantId");
    const qparams = new URLSearchParams(window.location.search);
    const tenantId2 = qparams.get("tenantId");

    if (!tenantId && !tenantId2) {
      tenantId = "helm";
      const next = new URLSearchParams(searchParams);
      next.set("tenantId", tenantId);
      setSearchParams(next, { replace: true });
    }
    dispatch(updateTenantId(tenantId));
  }, [searchParams, setSearchParams, dispatch]);

  return <>{children}</>;
};
