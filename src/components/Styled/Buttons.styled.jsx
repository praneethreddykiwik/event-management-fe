/** @format */
import styled from "styled-components";

const height = ({ small }) => (small ? "28px" : "40px");
const padding = ({ small }) => (small ? "0px 20px;" : "6px 20px;");

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
  height: ${height};

  width: 100%;
  border-radius: 30px;
  width: 100%;
  font-size: 16px;

  padding: ${padding}
  background-color: #26c867;
  color: ${({ $whiteText }) => ($whiteText ? "#fff" : "#000")};
  min-width: 100px;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  ${({ sx }) => ({ ...sx })} &:disabled {
    cursor: not-allowed;
    background-color: #dcdcdc;
    color: #777777;
  }
`;

export const StyledOutlinedButton = styled.button`
  height: ${height};

  width: 100%;
  border-radius: 30px;
  padding: ${padding}
  background-color: #fff;
  color: #000;
  min-width: 100px;
  border: 1px solid #000;
  cursor: pointer;
  white-space: nowrap;
  ${({ sx }) => ({ ...sx })}
`;

export const StyledNoBorderButton = styled.button`
  height: ${height};

  width: 100%;
  border: none;
  border-radius: 30px;
  padding: ${padding}
  // background-color: #eaeaeaff;
  color: #000;
  min-width: 100px;
  // border: 1px solid #000;
  cursor: pointer;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  white-space: nowrap;
  ${({ sx }) => ({ ...sx })}
`;

export const StyledSecButton = styled.button`
  height: ${height};

  width: 100%;
  border-radius: 30px;
  padding: ${padding}
  background-color: #fff;
  color: #000;
  min-width: 100px;
  border: 1px solid #eee;
  cursor: pointer;
  white-space: nowrap;
  ${({ sx }) => ({ ...sx })}
`;

// need to change this to links after the review
export const StyledTransparentButton = styled.button`
  border: none;
  height: ${height};

  border-radius: 30px;
  padding: ${padding}
  color: #26c867;
  min-width: 100px;
  background-color: transparent;
  cursor: pointer;
  align-items: center;
  white-space: nowrap;
  ${({ sx }) => ({ ...sx })}
`;
export const StyledIconButton = styled.button`
  height: ${height};

  width: 100%;
  border-radius: 30px;
  padding: ${padding}
  background-color: #26c867;
  color: #fff;
  min-width: 100px;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  ${({ sx }) => ({ ...sx })}
`;
