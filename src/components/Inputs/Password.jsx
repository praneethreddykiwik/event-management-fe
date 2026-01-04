import styled from "styled-components";
import { InputPassword } from "../Styled/Inputs.styled";
import EyeIcon from "../../assets/Logos/SeePassWord.svg";
import CloseEyeIcon from "../../assets/Logos/ClosePassword.svg";
import { useState } from "react";
import {
  StyledParagraphError,
  StyledParagraphSmall,
} from "../Styled/Typography.styled";

export const Password = ({
  value,
  onChange,
  error,
  placeholder,
  disabled = false,
  label,
  name,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <StyledCtn>
      {label ? <StyledParagraphSmall>{label}</StyledParagraphSmall> : null}
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

      {error && <StyledParagraphError>{error}</StyledParagraphError>}
    </StyledCtn>
  );
};

const StyledCtn = styled.div`
  position: relative;
  p {
    text-align: left;
    margin-left: 20px;
  }
`;

export const ShowHideIcon = styled.span`
  cursor: pointer;
  // font-size: 18px;

  right: 12px;
  top: 27px;

  position: absolute;
`;
const StyledPasswordImg = styled.img`
  width: 22px;
  height: 22px;
`;
