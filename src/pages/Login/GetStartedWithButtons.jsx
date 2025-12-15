/** @format */

import apple from '../../assets/Logo/Apple.svg.png';
import styled from 'styled-components';

import google from '../../assets/Logo/Google.svg.webp';
import { StyledFlexContainer } from '../../components/Styled/Common.styled';
import {LOGIN_COMMON} from '../../enum/Login.Common';
import { StyledOutlinedButton } from '../../components/Styled/Buttons.styled';
import { StyledParagraph } from '../../components/Styled/Typography.styled';
const GetStartedWithButtons = () => {
  return (
    <GetStartedWithButtonsWrapper>
      <GetStarted>{LOGIN_COMMON.STARTED_WITH}</GetStarted>
      <SignInTxtM>{LOGIN_COMMON.SIGN_IN_TEXT}</SignInTxtM>
      <ContinueSignIn>
        <Button type="outlined">
          <StyledFlexContainer>
            <AppleLogo src={apple} alt="apple" />
            {LOGIN_COMMON.APPLE}
          </StyledFlexContainer>
        </Button>
        <Button type="outlined">
          <StyledFlexContainer>
            <GoogleLogo src={google} alt="google" />
            {LOGIN_COMMON.GOOGLE}
          </StyledFlexContainer>
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
export const Button = styled(StyledOutlinedButton)`
  width: 100%;
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
