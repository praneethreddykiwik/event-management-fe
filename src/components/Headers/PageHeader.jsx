import styled from "styled-components";
import { StyledHeading } from "../Styled/Typography.styled";
import { StyledHr } from "../Styled/Common.styled";

export const PageHeader = ({ children, title }) => {
  return (
    <StyledCtn>
      {title ? <StyledHeading>{children}</StyledHeading> : children}
      <StyledHr className="page-header-hr" />
    </StyledCtn>
  );
};

const StyledCtn = styled.div`
  background: rgb(255, 255, 255);
  position: sticky;
  top: 0;
  width: calc(100% + 2px);
  height: 76px;
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  z-index: 1;
  margin-left: -1px;

  h1 {
    font-size: 26px;
    font-weight: 700;
  }

  & .page-header-hr {
    position: absolute;
    bottom: 0;
    margin: 0;
  }
`;
