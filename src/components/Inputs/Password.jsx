import styled from "styled-components";
import { InputPassword } from "./Inputs.styled";
import EyeIcon from "../../assets/Logos/SeePassWord.svg";
import CloseEyeIcon from "../../assets/Logos/ClosePassword.svg";
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
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <InputLayout label={label} error={error}>
        <InputPassword
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder || "Password"}
          required
          disabled={disabled}
          type={showPassword ? "text" : "password"}
        />

        <ShowHideIcon onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? (
            <StyledPasswordImg src={CloseEyeIcon} alt="show" />
          ) : (
            <StyledPasswordImg src={EyeIcon} alt="hide" />
          )}
        </ShowHideIcon>
      </InputLayout>

      {confirmPassword ? (
        <InputLayout label={label} error={error}>
          <InputPassword
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder || "Password"}
            required
            disabled={disabled}
            type={showPassword ? "text" : "password"}
          />

          <ShowHideIcon onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <StyledPasswordImg src={CloseEyeIcon} alt="show" />
            ) : (
              <StyledPasswordImg src={EyeIcon} alt="hide" />
            )}
          </ShowHideIcon>
        </InputLayout>
      ) : null}
    </>
  );
};

export const ShowHideIcon = styled.span`
  cursor: pointer;
  right: 12px;
  top: 27px;
  position: absolute;
`;
const StyledPasswordImg = styled.img`
  width: 22px;
  height: 22px;
`;
