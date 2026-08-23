import styled, { css } from "styled-components";

// checkHere
export const baseStyles = css(
  ({ theme, $hasError }) => `
  width: 100%;
  border-radius: 30px;
  box-sizing: border-box;
  height: 40px;
  padding: 10px 20px;
  font-size: 14px;
  color: #000000ff;

  border: 1px solid ${theme.colors.borderGray};
  border-color: ${$hasError ? theme.colors.warning : theme.colors.borderGray};
  &:focus {
    border-color: ${$hasError ? theme.colors.warning : "#27c14a"};
  }

  &::placeholder {
    color: ${theme.colors.borderGray};
    font-size: 14px;
  }

  &:focus {
    outline: none;
    border-color: #27c14a;
  }
`,
);

export const InputDefault = styled.input`
  ${baseStyles};
`;
export const TextAreaDefault = styled.textarea`
  ${baseStyles};
  height: unset;
  font-family: "Roboto", serif !important;
`;

export const InputSelect = styled.select`
  border: 1px solid red;
`;

export const InputSelectOptions = styled.option`
  color: red;
`;

export const InputNumber = styled(InputDefault)``;
export const InputPassword = styled(InputDefault)``;

export const InputCheckbox = styled.input`
  border-radius: 4px;
  accent-color: #27c14a;
  cursor: pointer;
`;

export const InputRadio = styled.input`
  accent-color: #27c14a;
  border-radius: 50%;
  cursor: pointer;
`;
