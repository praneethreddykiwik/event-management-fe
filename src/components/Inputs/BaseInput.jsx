import styled from "styled-components";
import { InputDefault } from "../Styled/Inputs.styled";
import {
  StyledParagraphError,
  StyledParagraphSmall,
} from "../Styled/Typography.styled";

export const BaseInput = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  disabled,
  error,
}) => {
  return (
    <StyledCtn>
      {label ? <StyledParagraphSmall>{label}</StyledParagraphSmall> : null}
      <InputDefault
        name={name}
        type={"text"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        $hasError={!!error}
      />
      {error ? <StyledParagraphError>{error}</StyledParagraphError> : null}
    </StyledCtn>
  );
};

const StyledCtn = styled.div`
  p {
    text-align: left;
    margin-left: 20px;
  }
`;
