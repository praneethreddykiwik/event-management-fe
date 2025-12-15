/** @format */

import styled from "styled-components";

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

export const StyledFlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  gap: 10px;
`;
