import { useEffect, useState } from "react";
import { getHealthStatus } from "../services/user.service";

export const useHealth = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await getHealthStatus();
        const resData = res.success;
        setData(resData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { data, loading, error };
};
