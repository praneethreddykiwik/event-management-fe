import styled, { css } from "styled-components";
import { mobile } from "../../theme/media-queries";

const height = ({ small }) => (small ? "28px" : "40px");
const padding = ({ small }) => (small ? "0px 20px;" : "6px 20px;");

const responsiveStyles = `
    max-height: 36px;
    padding-top: 0;
    padding-bottom: 0;
`;

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

export const StyledBaseButton = styled.button(
  ({ theme }) => css`
  height: ${height};

  width: 100%;
  border-radius: 30px;
  width: 100%;
  font-size: 16px;

  padding: ${padding}
  background-color: ${theme.colors.primary};
  color: ${({ $whiteText }) => ($whiteText ? theme.colors.white : theme.colors.black)};
  min-width: 100px;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  
  ${mobile`${responsiveStyles}`}
  ${({ sx }) => ({ ...sx })};

   &:disabled {
    cursor: not-allowed;
    background-color: #dcdcdc;
    color: #777777;
  }
`,
);

export const StyledDeleteBtn = styled(StyledBaseButton)`
  background-color: ${({ theme }) => theme.colors.red};
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
`;

export const StyledInlineDeleteBtn = styled(StyledBaseButton)`
  background-color: ${({ theme }) => theme.colors.red};
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  height: 25px;
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
  
  ${mobile`${responsiveStyles}`}
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
  
  ${mobile`${responsiveStyles}`}
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
  
  ${mobile`${responsiveStyles}`}
  ${({ sx }) => ({ ...sx })}
`;

export const StyledTransparentButton = styled.button`
  border: none;
  height: ${height};

  border-radius: 30px;
  padding: ${padding}
  color: ${({ theme }) => theme.colors.primary};
  min-width: 100px;
  background-color: transparent;
  cursor: pointer;
  align-items: center;
  white-space: nowrap;
  
  ${mobile`${responsiveStyles}`}
  ${({ sx }) => ({ ...sx })}
`;

export const StyledIconButton = styled.button`
  height: ${height};

  width: 100%;
  border-radius: 30px;
  padding: ${padding}
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  min-width: 100px;
  border: none;
  cursor: pointer;
  white-space: nowrap;

  ${mobile`${responsiveStyles}`}
  ${({ sx }) => ({ ...sx })}
`;
