import { getHealthStatusAPI } from "../api/endpoints/health.api";

export const getHealthStatus = async () => {
  const response = await getHealthStatusAPI();

  const responseData = response.data;

  return responseData;
};
