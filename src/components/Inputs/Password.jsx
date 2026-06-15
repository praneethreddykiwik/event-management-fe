import styled from "styled-components";
import { InputPassword } from "./Inputs.styled";
import EyeIcon from "../../assets/Logos/SeePassword.svg";
import CloseEyeIcon from "../../assets/Logos/ClosePassWord.svg";
import { useState } from "react";
import { InputLayout } from "./InputLayout";

export const Password = ({
  value,
  onChange,
  error,
  placeholder,
  disabled = false,
  label,
  name,
  confirmPassword,
  validations,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <InputLayout label={label} error={error} validations={validations}>
      <InputPassword
        name={confirmPassword ? "confirmPassword" : name}
        value={value}
        onChange={onChange}
        placeholder={confirmPassword ? "Confirm Password" : placeholder}
        required
        disabled={disabled}
        type={showPassword ? "text" : "password"}
        $hasError={!!error}
      />

      <ShowHideIcon onClick={() => setShowPassword(!showPassword)}>
        <StyledPasswordImg
          src={showPassword ? EyeIcon : CloseEyeIcon}
          alt="toggle"
        />
      </ShowHideIcon>
    </InputLayout>
  );
};

const ShowHideIcon = styled.span`
  cursor: pointer;
  right: 12px;
  top: 27px;
  position: absolute;
`;
const StyledPasswordImg = styled.img`
  width: 22px;
  height: 22px;
`;
