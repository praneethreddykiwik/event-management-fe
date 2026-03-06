import styled from "styled-components";
import { mobile } from "../../theme/media-queries";

export const StyledHeader = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.appBackgroundColor};
  display: flex;
  align-items: center;
  height: ${({ theme }) => theme.spacings["spacing-6"]};

  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  padding: 0 40px;
  box-sizing: border-box;
  justify-content: space-between;
`;

// refactor
export const StyledFlexContainer = styled.div`
  display: flex;
  align-items: ${({ align }) => align || "center"};
  justify-content: ${({ justify }) => justify || "center"};
  gap: ${({ gap }) => gap || "10px"};
  flex-direction: ${({ direction }) => direction || "row"};
  flex-wrap: ${({ wrap }) => wrap || "nowrap"};
`;

export const StyledHr = styled.hr`
  border: none;
  border-bottom: 1px solid #dfdfdf;
  margin: 0 0px 40px 0px;
  width: 100%;

  ${mobile`
      margin: 0 0px 20px 0px;
  `}
`;
