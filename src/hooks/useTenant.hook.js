import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { authSelector, updateTenantId } from "../redux/auth/auth.slice";

const useTenant = () => {
  const dispatch = useDispatch();
  const { tenantId: tenantIdRedux } = useSelector(authSelector);

  const [searchParams] = useSearchParams();

  const tenantId = useMemo(() => {
    const val = searchParams.get("tenantId");

    if (tenantIdRedux !== val) {
      dispatch(updateTenantId(val));
    }

    return val;
  }, [searchParams]);

  return tenantId;
};

export default useTenant;
