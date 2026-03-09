import styled from "styled-components";
import AppleImg from "../../assets/Logos/Apple-logo.jpeg";
import GoogleImg from "../../assets/Logos/Google-logo.jpeg";

import {
  APPLE,
  GOOGLE,
  SIGN_IN_TEXT,
} from "../../myEnum/RegistrationPage.Enum";
import { StyledFlexContainer } from "../../components/Styled/Common.styled";

import { StyledParagraph } from "../../components/Styled/Typography.styled";
import { StyledOutlinedButton } from "../../components/Styled/Buttons.styled";
const GetStartedWithButtons = () => {
  return (
    <GetStartedWithButtonsWrapper>
      <SignInTxtM>{SIGN_IN_TEXT}</SignInTxtM>

      <ContinueSignIn>
        <Button type="outlined">
          <StyledFlexContainer>
            <AppleLogo src={AppleImg} alt="Apple" />
            {APPLE}
          </StyledFlexContainer>
        </Button>

        <Button type="outlined">
          <StyledFlexContainer>
            <GoogleLogo src={GoogleImg} alt="Google" />
            {GOOGLE}
          </StyledFlexContainer>
        </Button>
      </ContinueSignIn>
    </GetStartedWithButtonsWrapper>
  );
};

export default GetStartedWithButtons;

const GetStartedWithButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`;
const SignInTxtM = styled(StyledParagraph)`
  font-size: ${({ theme }) => theme.typography["heading-h3"]["font-size"]};
  font-weight: ${({ theme }) => theme.fontWeights.default};
  margin-top: 20px;
`;
const ContinueSignIn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const Button = styled(StyledOutlinedButton)`
  width: 100%;
  height: 50px;
`;

const AppleLogo = styled.img`
  width: 17px;
  position: relative;
  right: 4px;
  bottom: 2px;
`;

const GoogleLogo = styled.img`
  width: 20px;
  position: relative;
  right: 4px;
  bottom: 1px;
`;
