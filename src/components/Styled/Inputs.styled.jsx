/** @format */

import styled from "styled-components";

const baseStyles = `
  width: 100%;
  border-radius: 30px;
  box-sizing: border-box;
  height: 40px;
  padding: 10px 20px;
  font-size: 16px;
  border: 1px solid #e0e0e0;
  color: #696969;

  &::placeholder {
    color: #bdbdbd;
  }

  &:focus {
    outline: none;
    border-color: #27c14a;
  }
`;

export const InputDefault = styled.input`
  ${baseStyles};
  border-color: ${({ $hasError }) => ($hasError ? '#e53935' : '#e0e0e0')};

  &:focus {
    border-color: ${({ $hasError }) => ($hasError ? '#e53935' : '#27c14a')};
  }
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
