import { useSelector } from "react-redux";
import { selectIsAuthReady, selectPermissions } from "../redux/auth/auth.slice";
import { Navigate } from "react-router-dom";
import useTenant from "../hooks/useTenant.hook";

export const RBACRoute = ({ perm, children }) => {
  const tenantId = useTenant();
  const ready = useSelector(selectIsAuthReady);
  const perms = useSelector(selectPermissions);

  if (!ready) return null; // loader
  if (!perms.includes(perm))
    return <Navigate to={`/?tenantId=${tenantId}`} replace />;

  return children;
};
