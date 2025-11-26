/** @format */

import apple from '../../assets/Logo/apple.png';
import google from '../../assets/Logo/google.png';
import { StyledFlexContainer } from '../../components/Styled/Common.styled';
import {
  Apple,
  Google,
  SignInText,
  StartedWith,
} from '../../enum/Login.Common';
import {
  GetStarted,
  SignInTxtM,
  ContinueSignIn,
  AppleLogo,
  GoogleLogo,
  GetStartedWithButtonsWrapper,
  Button,
} from './Login.Styled';
const GetStartedWithButtons = () => {
  return (
    <GetStartedWithButtonsWrapper>
      <GetStarted>{StartedWith}</GetStarted>
      <SignInTxtM>{SignInText}</SignInTxtM>
      <ContinueSignIn>
        <Button type="outlined">
          <StyledFlexContainer>
            <AppleLogo src={apple} alt="apple" />
            {Apple}
          </StyledFlexContainer>
        </Button>
        <Button type="outlined">
          <StyledFlexContainer>
            <GoogleLogo src={google} alt="google" />
            {Google}
          </StyledFlexContainer>
        </Button>
      </ContinueSignIn>
    </GetStartedWithButtonsWrapper>
  );
};

export default GetStartedWithButtons;
