/** @format */

import styled from "styled-components";

const baseStyles = `
  width:100%;
  border-radius: 30px;
  opacity: 1;
  box-sizing: border-box;
  height: 40px;
  padding: 10px;
  outline: none;
  padding-left: 20px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  border: 1px solid #e0e0e0;
  color:#696969;

  &::placeholder {
    color: #bdbdbd;
    }
  
  &:focus{
    border-color: #27c14a;
      color: #000;
    }
`;

export const InputDefault = styled.input`
  ${baseStyles};
`;

export const InputNumber = styled.input`
  ${baseStyles};
`;

export const InputPassword = styled.input`
  ${baseStyles};
`;

export const InputCheckbox = styled.input`
  width: 18px;
  height: 18px;
  border-radius: 4px;
  cursor: pointer;
`;

export const InputRadio = styled.input`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  cursor: pointer;
`;
