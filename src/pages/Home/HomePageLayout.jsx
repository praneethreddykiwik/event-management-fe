import styled from "styled-components";

export const StyledFlexComponent = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  align-content: ${({ alignContent }) => alignContent || "center"};
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
`;

// landing page common compontent
export const HomePageLayout = styled(StyledFlexComponent)`
  background-color: ${({ sx }) => sx?.background || "#ffffffff"};
  padding: 40px 10px;
`;
