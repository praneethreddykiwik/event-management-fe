import { loginApi } from "../api/auth.api";

export const loginUserService = async (credentails) => {
  const response = await loginApi(credentails);

  const responseData = response.data;
  return responseData;
};

export const loginAndFetchUserService = async (creds) => {
  try {
    // 1. Login
    const payload = {
      username: creds.username,
      password: creds.password,
      tenantId: creds.tenant.value,
    };
    const loginResponse = await loginApi(payload);

    const userDetailsResponse = {
      success: true,
      data: {
        firstName: "Adnan",
        lastName: "Shaik",
      },
    };
    debugger;

    const userDetailsResponseData = userDetailsResponse?.data;

    if (!userDetailsResponse?.success) {
      throw new Error("Failed to get user Details.");
    }

    return userDetailsResponseData;
  } catch (error) {
    debugger;
    console.log("getCurrentUserService error ", error);
    throw error;
  }
};
