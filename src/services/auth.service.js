/* eslint-disable no-debugger */
import { LoginAPI } from "../api/endpoints/auth.api";

export const loginUserService = async (credentails) => {
  const response = await LoginAPI(credentails);

  const responseData = response.data;
  return responseData;
};

export const loginAndFetchUserService = async () => {
  try {
    // 1. Login
    // const loginResponse = await LoginAPI({ userRole, email, password });

    // if (!loginResponse?.data?.success) {
    //   throw new Error("Login failed!");
    // }

    // const responseData = response.data;
    // return responseData;

    // 2. Fetch user details.

    // const userDetailsResponse = await postMeAPI({ email });
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

    // eslint-disable-next-line no-unsafe-optional-chaining
    return userDetailsResponseData;
  } catch (error) {
    console.log("getCurrentUserService error ", error);
    throw error;
  }
};
