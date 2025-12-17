/** @format */
import styled from 'styled-components';

export const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;

  span {
    font-size: 16px;
  }
`;

export const ButtonImage = styled.img`
  width: 18px;
  height: 18px;
`;

export const StyledBaseButton = styled.button`
  height: 40px;
  width: 100%;
  border-radius: 30px;
  padding: 6px 20px;
  background-color: #26c867;
  color: #000;
  min-width: 100px;
  border: none;
  cursor: pointer;
`;

export const StyledOutlinedButton = styled.button`
  height: 40px;
  width: 100%;
  border-radius: 30px;
  padding: 6px 20px;
  background-color: #fff;
  color: #000;
  min-width: 100px;
  border: 1px solid #000;
  cursor: pointer;
`;

export const StyledSecButton = styled.button`
  height: 40px;
  width: 100%;
  border-radius: 30px;
  padding: 6px 20px;
  background-color: #fff;
  color: #000;
  min-width: 100px;
  border: 1px solid #eee;
  cursor: pointer;
`;

export const StyledIconButton = styled.button`
  height: 40px;
  width: 100%;
  border-radius: 30px;
  padding: 6px 20px;
  background-color: #26c867;
  color: #fff;
  min-width: 100px;
  border: none;
  cursor: pointer;
`;