import AppleImg from '../../assets/Logos/Apple-logo.jpeg';
import GoogleImg from '../../assets/Logos/Google-logo.jpeg';

import { Apple, Google, SignInText } from '../../Enum/RegistrationPage.Enum';
import { StyledFlexContainer } from '../../components/Styled/Common.styled';

import {
  SignInTxtM,
  ContinueSignIn,
  AppleLogo,
  GoogleLogo,
  GetStartedWithButtonsWrapper,
  Button,
} from './styled.RegistrationPage';

const GetStartedWithButtons = () => {
  return (
    <GetStartedWithButtonsWrapper>
      <SignInTxtM>{SignInText}</SignInTxtM>

      <ContinueSignIn>
        <Button type="outlined">
          <StyledFlexContainer>
            <AppleLogo src={AppleImg} alt="Apple" />
            {Apple}
          </StyledFlexContainer>
        </Button>

        <Button type="outlined">
          <StyledFlexContainer>
            <GoogleLogo src={GoogleImg} alt="Google" />
            {Google}
          </StyledFlexContainer>
        </Button>
      </ContinueSignIn>
    </GetStartedWithButtonsWrapper>
  );
};

export default GetStartedWithButtons;
