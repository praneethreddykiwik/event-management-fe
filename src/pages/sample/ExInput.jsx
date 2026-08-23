import { inputValidation } from "../../components/Validations/inputValidation";
import styled from "styled-components";
import { useState } from "react";
import { Button } from "../../components/Buttons/Button";
import { Inputs } from "../../components/Inputs/Inputs";

const ExInput = () => {
  const [userName, setUserName] = useState("");
  const [firstName, setfirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [gender, setGender] = useState("");
  const [favPlaces, setFavPlaces] = useState([]);

  const [errors, setErrors] = useState({
    userName: "",
    firstName: "",
    secondName: "",
    number: "",
    password: "",
    gender: "",
    favPlaces: "",
  });

  function handleUserNameChage(UserName) {
    setUserName(UserName.value);
  }

  function handleFirstNameChage(firstName) {
    setfirstName(firstName.value);
  }

  function handleSecondNameChage(secondName) {
    setSecondName(secondName.value);
  }

  function handleNumberChage(number) {
    setNumber(number.value);
  }
  function handlePasswordChage(password) {
    setPassword(password.value);
  }

  function handleGenderChange(gender) {
    setGender(gender.value);
  }

  function handleCheckBoxChage(data) {
    setFavPlaces((prev) =>
      data.checked ? [...prev, data.item] : prev.filter((v) => v !== data.item),
    );
  }

  function handleSubmit() {
    const newErrors = {
      userName: inputValidation(userName, ["required"]),
      firstName: inputValidation(firstName, ["required"]),
      secondName: "",
      number: inputValidation(number, ["required"]),
      password: inputValidation(password, [
        "required",
        { type: "min-length", value: 6 },
      ]),
      gender: inputValidation(gender, ["required"]),
      favPlaces: inputValidation(favPlaces, ["required"]),
    };

    setErrors(newErrors);

    const hasError = Object.values(newErrors).some(Boolean);
    if (hasError) return;

    console.log("Submitted Data:", {
      userName,
      firstName,
      secondName,
      number,
      password,
      gender,
      favPlaces,
    });
  }

  return (
    <ExampleInputs>
      <Inputs
        type="text"
        value={userName}
        onChange={handleUserNameChage}
        placeholder="User Name"
        validations={["required"]}
        error={errors.userName}
        setError={(err) => setErrors((prev) => ({ ...prev, userName: err }))}
      />

      <Inputs
        type="text"
        value={firstName}
        onChange={handleFirstNameChage}
        placeholder="First Name"
        validations={["required"]}
        error={errors.firstName}
        setError={(err) => setErrors((prev) => ({ ...prev, firstName: err }))}
      />

      <Inputs
        type="text"
        value={secondName}
        onChange={handleSecondNameChage}
        placeholder="Second Name"
      />

      <Inputs
        type="number"
        value={number}
        onChange={handleNumberChage}
        placeholder="Mobile Number"
        validations={["required"]}
        error={errors.number}
        setError={(err) => setErrors((prev) => ({ ...prev, number: err }))}
      />

      <ExInputWrapper>
        <Inputs
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={handlePasswordChage}
          placeholder="Password"
          validations={["required", { type: "min-length", value: 6 }]}
          error={errors.password}
          setError={(err) => setErrors((prev) => ({ ...prev, password: err }))}
        />
        <ShowHideIcon onClick={() => setShowPassword(!showPassword)}>
          <span className="material-symbols-outlined">
            {showPassword ? "visibility" : "visibility_off"}
          </span>
        </ShowHideIcon>
      </ExInputWrapper>

      <Inputs
        type="radio-group"
        name="gender"
        placeholder="Gender"
        list={["male", "female", "prefer not to say"]}
        value={gender}
        onChange={handleGenderChange}
        validations={["required"]}
        error={errors.gender}
        setError={(err) => setErrors((prev) => ({ ...prev, gender: err }))}
      />
      <Inputs
        type="checkbox-group"
        name="FavPlaces"
        placeholder="Favourite places"
        list={["Hyderbad", "Delhi", "Some other place"]}
        value={favPlaces}
        onChange={handleCheckBoxChage}
        validations={["required"]}
        error={errors.favPlaces}
        setError={(err) => setErrors((prev) => ({ ...prev, favPlaces: err }))}
      />

      <Button type="base" onClick={handleSubmit}>
        Submit
      </Button>
    </ExampleInputs>
  );
};
const ExampleInputs = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
`;

const ExInputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const ShowHideIcon = styled.span`
  position: absolute;
  right: 16px;
  top: 8px;
  cursor: pointer;
  font-size: 18px;
`;

export default ExInput;
