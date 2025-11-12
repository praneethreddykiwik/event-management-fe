import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.appBackgroundColor};
  display: flex;
  align-items: center;
  height: 60px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  // margin-bottom: 4px;  //commited this line based on figma, need review
  padding: 0 40px;
  box-sizing: border-box;
  justify-content: space-between;
`;

// landing page common compontent
export const StyledSectionContainer = styled.div`
  background-color: ${({ sx }) => sx?.background || " #ffffffff;"};
  height: ${({ sx }) => sx?.height || "80vh"};
  display: flex;
  flex-direction: ${({ sx }) => sx?.flexDireaction || "row"};
  align-items: center;
`;
