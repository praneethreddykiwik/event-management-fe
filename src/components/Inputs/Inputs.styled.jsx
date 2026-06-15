import styled from "styled-components";

const baseStyles = `
  width: 100%;
  border-radius: 30px;
  box-sizing: border-box;
  height: 40px;
  padding: 10px 20px;
  font-size: 14px;
  border: 1px solid #e0e0e0;
  color: #000000ff;

  &::placeholder {
    color: #bdbdbd;
      font-size: 14px;
  }

  &:focus {
    outline: none;
    border-color: #27c14a;
  }
`;

export const InputDefault = styled.input`
  ${baseStyles};
  border-color: ${({ $hasError }) => ($hasError ? "#e53935" : "#e0e0e0")};

  &:focus {
    border-color: ${({ $hasError }) => ($hasError ? "#e53935" : "#27c14a")};
  }
`;
export const TextAreaDefault = styled.textarea`
  ${baseStyles};
  height: unset;
  border-color: ${({ $hasError }) => ($hasError ? "#e53935" : "#e0e0e0")};
  font-family: "Roboto", serif !important;

  &:focus {
    border-color: ${({ $hasError }) => ($hasError ? "#e53935" : "#27c14a")};
  }
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

export const StyledInputLayout = styled.div`
  position: relative;
  text-align: left;

  p {
    text-align: left;
    margin-left: 20px;
  }

  & .backdrop {
    opacity: 1;
  }
`;
