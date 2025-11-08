import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.appBackgroundColor};
  display: flex;
  align-items: center;
  height: 60px;

  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  margin-bottom: 4px;
  padding: 0 40px;
  box-sizing: border-box;
  justify-content: space-between;
`;
