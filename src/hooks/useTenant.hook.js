import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

const useTenant = () => {
  const [searchParams] = useSearchParams();

  const tenantId = useMemo(() => {
    const val = searchParams.get("tenantId");

    return val;
  }, [searchParams]);

  return tenantId;
};

export default useTenant;
