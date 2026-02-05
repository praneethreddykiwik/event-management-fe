/** @format */

import styled from "styled-components";
import * as enums from "../../myEnum";

import { StyledParagraph } from "../../components/Styled/Typography.styled";

const LineTxts = () => {
  return (
    <>
      <LineTxt>
        <LineOne />
        <SignUpWith>{enums.SIGN_IN_EMAIL}</SignUpWith>
        <LineTwo />
      </LineTxt>
      <SignWithEmail>{enums.SIGN_IN_EMAIL}</SignWithEmail>
    </>
  );
};
export default LineTxts;

const SignUpWith = styled(StyledParagraph)`
  width: 100%;
  padding: 8px;

 
`;

const LineTxt = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;

`;

const LineOne = styled.div`
  color: ${({ theme }) => theme.colors.black};
  border: 1px solid ${({ theme }) => theme.colors["gray-disabled"]};
  width: 120px;

  
`;

const LineTwo = styled.div`
  color: ${({ theme }) => theme.colors.black};
  border: 1px solid ${({ theme }) => theme.colors["gray-disabled"]};
  width: 120px;
`;

const SignWithEmail = styled(StyledParagraph)`
  padding: 8px;
  @media screen and (min-width: 769px) {
    display: none;
  }
`;



