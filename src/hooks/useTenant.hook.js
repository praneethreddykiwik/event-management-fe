import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { authSelector, updateTenantId } from "../redux/auth/auth.slice";

const useTenant = () => {
  const dispatch = useDispatch();
  const { authUser } = useSelector(authSelector);

  const [searchParams] = useSearchParams();

  const tenantId = useMemo(() => {
    const val = searchParams.get("tenantId");

    const tenantIdRedux = authUser?.tenantId;
    if (tenantIdRedux !== val) {
      dispatch(updateTenantId(val));
    }

    return val;
  }, [searchParams, dispatch, authUser]);

  return tenantId;
};

export default useTenant;
