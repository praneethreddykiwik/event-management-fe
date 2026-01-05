/** @format */
import styled from "styled-components";

export const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;

  span {
    font-size: 16px;
  }
  ${({ sx }) => ({ ...sx })}
`;

export const ButtonImage = styled.img`
  width: 18px;
  height: 18px;
  ${({ sx }) => ({ ...sx })}
`;

export const StyledBaseButton = styled.button`
  height: 40px;
  width: 100%;
  border-radius: 30px;
  width: 100%;
  font-size: 16px;

  padding: 6px 20px;
  background-color: #26c867;
  color: ${({ $whiteText }) => ($whiteText ? "#fff" : "#000")};
  min-width: 100px;
  border: none;
  cursor: pointer;
  ${({ sx }) => ({ ...sx })}
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
  ${({ sx }) => ({ ...sx })}
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
  ${({ sx }) => ({ ...sx })}
`;

// need to change this to links after the review
export const StyledTransparentButton = styled.button`
  border: none;
  height: 40px;
  border-radius: 30px;
  padding: 6px 20px;
  color: #26c867;
  min-width: 100px;
  background-color: transparent;
  cursor: pointer;
  align-items: center;
  ${({ sx }) => ({ ...sx })}
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
  ${({ sx }) => ({ ...sx })}
`;
