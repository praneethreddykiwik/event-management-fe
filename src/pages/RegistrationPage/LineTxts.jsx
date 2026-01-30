import { SignUpLine } from "../../myEnum/RegistrationPage.Enum";
// import { LineTxt, SignUpWith, SignWithEmail } from "./styled.RegistrationPage";

import styled from "styled-components";

import {
  StyledParagraph,
} from "../../components/Styled/Typography.styled";

const LineTxts = () => {
  return (
    <>
      <LineTxt>
        <SignUpWith>{SignUpLine}</SignUpWith>
      </LineTxt>

      {/* Mobile view */}
      <SignWithEmail>Or Sign Up with Email</SignWithEmail>
    </>
  );
};

export default LineTxts;

const LineTxt = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  width: 90%;
`;

 const SignWithEmail = styled(StyledParagraph)`
  font-size: ${({ theme }) => theme.typography["body-regular"]["font-size"]};
  font-weight: ${({ theme }) => theme.fontWeights.default};
  padding: 8px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

 const SignUpWith = styled(StyledParagraph)`
  width: 100%;
  font-size: ${({ theme }) => theme.typography["body-regular"]["font-size"]};
  font-weight: ${({ theme }) => theme.fontWeights.default};
  padding: 24px;
`;
