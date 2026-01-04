import { useState } from "react";
import { inputValidation } from "../components/Validations/inputValidation";
import { useAuth } from "./useAuth.hook";
import { userRoles } from "../enum/Common";
import useNavigateWithQuery from "./useNavigateWithQuery";

export const useLoginForm = () => {
  const navigate = useNavigateWithQuery();
  const { login, loading, error, setUserDetails } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const [errors, setErrors] = useState({
    username: "",
    password: "",
    terms: "",
  });

  const validateForm = () => {
    const newErrors = {
      username: inputValidation(username, ["required"]),
      password: inputValidation(password, [
        "required",
        { type: "min-length", value: 6 },
      ]),
      terms: acceptedTerms ? "" : "You must accept terms & conditions",
    };

    setErrors(newErrors);

    return !Object.values(newErrors).some(Boolean);
  };

  const submit = async () => {
    if (!validateForm()) return;

    let loginResponse;

    try {
      loginResponse = await login({
        userRole: role,
        username,
        password,
      });
    } catch (error) {
      console.log("error at useLoginForm hook", error);
      const loginError = {
        email: "Your username or password are not correct.",
      };
      setErrors(loginError);
      throw new Error("Login Failed");
    }

    console.log("loginResponse", loginResponse);

    const { firstName, lastName } = loginResponse?.user || {};
    setUserDetails((prev) => ({ ...prev, firstName, lastName }));

    if (role === userRoles.adminRole) {
      navigate("/admin");
    } else if (role === userRoles.eventManagerRole) {
      navigate("/vendor");
    } else if (role === userRoles.stakeHolderRole) {
      navigate("/event-manager");
    }
  };

  return {
    username,
    password,
    acceptedTerms,
    showPassword,
    errors,
    loading,
    error,

    setUsername,
    setPassword,
    setAcceptedTerms,
    setShowPassword,
    setErrors,
    setRole,
    submit,
  };
};
