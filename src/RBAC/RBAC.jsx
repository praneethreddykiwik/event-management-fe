import { useSelector } from "react-redux";
import { selectPermissions } from "../redux/auth/auth.slice";
// import { selectPermissions } from "./autSelectors";

export const RBACHOC = ({ perm, children, fallback = null }) => {
  const perms = useSelector(selectPermissions);
  return perms.includes(perm) ? children : fallback;
};
