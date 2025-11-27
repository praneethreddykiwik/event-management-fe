import styled from "styled-components";
import {
  StyledSecButton,
  StyledBaseButton,
} from "../../components/Styled/Buttons.styled";
import { StyledHeadingBig } from "../../components/Styled/Typography.styled";
import logo from "../../assets/gateway-images/eventz-logo.png";

const RegistrationPage = () => {
  return (
    <Container_parent>
      <LogoWrapper>
        <LogoIcon src={logo} />
        <StyledCstHeading>eventz</StyledCstHeading>
      </LogoWrapper>

      <Title>Quickly Sign Up with</Title>

      <AppleButton>
        <AppleIcon></AppleIcon>
        Continue with Apple
      </AppleButton>

      <DividerText>Or Sign Up with Email</DividerText>

      <InputBox placeholder="Email address" />
      <InputWrapper>
        <InputBox type="password" placeholder="Password" />
        <EyeIcon></EyeIcon>
      </InputWrapper>

      <InputWrapper>
        <InputBox type="password" placeholder="Verify Password" />
        <EyeIcon></EyeIcon>
      </InputWrapper>

      <ContinueBtn>Continue</ContinueBtn>

      <LoginText>
        Already have an account? <SignInLink>Sign in</SignInLink>
      </LoginText>

      <FooterNote>
        By using our app you agree to the <br />
        Terms of Use and Privacy Policy
      </FooterNote>
    </Container_parent>
  );
};

export default RegistrationPage;

const LoginText = styled.p`
  margin-top: 25px;
  font-size: 14px;
  color: #000;
  text-align: center;
`;

const SignInLink = styled.span`
  color: #0aad41;
  font-weight: 600;
  cursor: pointer;
`;

const FooterNote = styled.p`
  text-align: center;
  font-size: 11px;
  color: #888;
  margin-top: auto;
  margin-bottom: 10px;
  line-height: 1.4;
`;


const ContinueBtn = styled(StyledBaseButton)`
  width: 100%;
  border-radius: 30px;
  margin-top: 10px;
  padding: 14px;
  font-size: 16px;
`;

const Container_parent = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 40px 25px;
  font-family: "Inter", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 35px;
`;

const LogoIcon = styled.img`
  width: 45px;
`;

const StyledCstHeading = styled(StyledHeadingBig)`
  font-weight: 600;
  font-size: 28px;
`;

const Title = styled.h2`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
`;

const AppleButton = styled(StyledSecButton)`
  width: 100%;
  padding: 14px 18px;
  font-size: 16px;
  border-radius: 30px;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const AppleIcon = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

const DividerText = styled.p`
  color: #6b6b6b;
  margin: 10px 0 20px;
  font-size: 14px;
`;

const InputBox = styled.input`
  width: 100%;
  height: 52px;
  border-radius: 12px;
  border: 1px solid #ddd;
  padding: 0 15px;
  font-size: 15px;
  outline: none;
  margin-bottom: 15px;

  &::placeholder {
    color: #aaa ;
}
`;
const InputWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const EyeIcon = styled.span`
  position: absolute;
  right: 15px;
  top: 17px;
  font-size: 18px;
  opacity: 0.5;
  cursor: pointer;
`;