import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

const useTenant = () => {
  const [searchParams] = useSearchParams();

  const tenantId = useMemo(() => {
    return searchParams.get("tenantId");
  }, [searchParams]);

  return tenantId;
};

export default useTenant;
