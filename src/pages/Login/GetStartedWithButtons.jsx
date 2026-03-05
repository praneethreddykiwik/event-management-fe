/** @format */

import styled from "styled-components";
import apple from "../../assets/Logo/Apple.svg";
import google from "../../assets/Logo/Google.svg.webp";
import * as enums from "../../myEnum";
import { StyledParagraph } from "../../components/Styled/Typography.styled";
import { Button } from "../../components/Buttons/Button";
const GetStartedWithButtons = () => {
  return (
    <GetStartedWithButtonsWrapper>
      <GetStarted>{enums.STARTED_WITH}</GetStarted>
      <SignInTxtM>{enums.SIGN_IN_TEXT}</SignInTxtM>
      <ContinueSignIn>
        <Button type="outlined" image={apple}>
          {enums.APPLE}
        </Button>
        <Button type="outlined" image={google}>
          {enums.GOOGLE}
        </Button>
      </ContinueSignIn>
    </GetStartedWithButtonsWrapper>
  );
};

export default GetStartedWithButtons;

export const GetStarted = styled(StyledParagraph)`
  font-size: 18px;
  font-weight: 420;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const SignInTxtM = styled(StyledParagraph)`
  @media (min-width: 60px) and (max-width: 768px) {
    margin-top: 35px;
    font-size: 22px;
    font-weight: 350;
  }
  @media screen and (min-width: 769px) {
    display: none;
  }
`;
export const GetStartedWithButtonsWrapper = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  flex-direction: column;
`;
export const ContinueSignIn = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;
  gap: 10px;
`;

export const AppleLogo = styled.img`
  width: 17px;
  position: relative;
  right: 4px;
  bottom: 2px;
`;
export const GoogleLogo = styled.img`
  width: 20px;
  position: relative;
  right: 4px;
  bottom: 1px;
`;
