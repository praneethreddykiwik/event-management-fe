/** @format */

import styled from 'styled-components';
import logo from '../../assets/Logo/eventz-logo.png';
import apple from '../../assets/Logo/apple.png';
import google from '../../assets/Logo/google.png';
import leftColumnImg1 from '../../assets/loginImgs/left1.jpg';
import leftColumnImg2 from '../../assets/loginImgs/left2.jpg';
import leftColumnImg3 from '../../assets/loginImgs/left3.jpg';
import leftColumnImg4 from '../../assets/loginImgs/left4.jpg';
import middleColumnImg1 from '../../assets/loginImgs/middle1.jpg';
import middleColumnImg2 from '../../assets/loginImgs/middle2.jpg';
import middleColumnImg3 from '../../assets/loginImgs/middle3.jpg';
import middleColumnImg4 from '../../assets/loginImgs/middle4.jpg';
import rightColumnImg1 from '../../assets/loginImgs/right1.jpg';
import rightColumnImg2 from '../../assets/loginImgs/right2.jpg';
import rightColumnImg3 from '../../assets/loginImgs/right3.jpg';
import rightColumnImg4 from '../../assets/loginImgs/right4.jpg';
import { Button } from '../../components/Buttons/Button';

import {
  StyledHeadingBig,
  StyledHeading,
  StyledSemiHeading,
  StyledParagraphSmall,
  StyledParagraphGray,
  StyledAnchorSmall,
  StyledAnchor,
  StyledGrayLink,
  StyledParagraphSmallGray,
  StyledParagraph,
} from '../../components/Styled/Typography.styled';
import {
  StyledBaseButton,
  StyledOutlinedButton,
  StyledSecButton,
} from '../../components/Styled/Buttons.styled';
import { StyledFlexContainer } from '../../components/Styled/Common.styled';
const Login = () => {
  return (
    <StyledContainer>
      <ContainerLeft>
        <MainContainer>
          <LogoEventz>
            <Logo src={logo} />
            <EventzTxt>eventz</EventzTxt>
          </LogoEventz>
          <WelcomeTxt>
            <StyledHeading>Welcome to Eventz</StyledHeading>
            <SignUpTxt>
              Sign Up now to get access to 1000+ Events, Schedule a venue for an
              upcoming events or get in touch with a planner.
            </SignUpTxt>
          </WelcomeTxt>
          <GetStartedWithButtons>
            <GetStarted>Get started with</GetStarted>
            <ContinueSignIn>
              <AppleButton type="outlined">
                <StyledFlexContainer>
                  <AppleLogo src={apple} />
                  Continue with Apple
                </StyledFlexContainer>
              </AppleButton>
              <GoogleButton type="outlined">
                <StyledFlexContainer>
                  <GoogleLogo src={google} />
                  Continue with Google
                </StyledFlexContainer>
              </GoogleButton>
            </ContinueSignIn>
          </GetStartedWithButtons>
          <LineTxt>
            <LineOne></LineOne>
            <SignUpWith>Or Sign Up with</SignUpWith>
            <LineTwo></LineTwo>
          </LineTxt>
          <Form>
            <InputBox>
              <Input type="email" placeholder="Enter your email" />
              <Input type="password" placeholder="Password" />
            </InputBox>
            <CheckboxRow>
              <Input type="checkbox" />
              <AnchorParah>
                By using our app you agree to the
                <StyledAnchor> Terms of Use </StyledAnchor> and
                <StyledAnchor> Privacy Policy</StyledAnchor>
              </AnchorParah>
            </CheckboxRow>
            <ContinueButton  type="base">
              Continue
            </ContinueButton>
            <AnchorParah>
              Already have an account? <StyledAnchor>Sign in</StyledAnchor>
            </AnchorParah>
          </Form>
        </MainContainer>
      </ContainerLeft>
      <ContainerRight>
        <LeftColumn>
          <LeftColumnImg1 src={leftColumnImg1} />
          <LeftColumnImg2 src={leftColumnImg2} />
          <LeftColumnImg3 src={leftColumnImg3} />
          <LeftColumnImg4 src={leftColumnImg4} />
        </LeftColumn>
        <MiddleColumn>
          <MiddleColumnImg1 src={middleColumnImg1} />
          <MiddleColumnImg2 src={middleColumnImg2} />
          <MiddleColumnImg3 src={middleColumnImg3} />
          <MiddleColumnImg4 src={middleColumnImg4} />
        </MiddleColumn>
        <RightColumn>
          <RightColumnImg1 src={rightColumnImg1} />
          <RightColumnImg2 src={rightColumnImg2} />
          <RightColumnImg3 src={rightColumnImg3} />
          <RightColumnImg4 src={rightColumnImg4} />
        </RightColumn>
      </ContainerRight>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  height: 100vh;
  background: #fff;
  display: flex;
`;

// Form Container

const ContainerLeft = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const MainContainer = styled.div`
  width: 45%;
`;
const LogoEventz = styled.div`
  justify-content: center;
  display: flex;
  margin-top: -50px;
`;
const Logo = styled.img`
  width: 60px;
  height: 60px;
  margin-top: 20px;
`;
const EventzTxt = styled(StyledHeadingBig)`
  font-weight: 350;
`;
const WelcomeTxt = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;
`;

const SignUpTxt = styled(StyledParagraphSmall)`
font-size: '13px' ;
`;

const GetStarted = styled(StyledParagraph)`
  font-size: 18px;
  font-weight: 400;
`;
const GetStartedWithButtons = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;
const ContinueSignIn = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;
  gap: 10px;
`;
const AppleButton = styled(StyledOutlinedButton)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const GoogleButton = styled(StyledOutlinedButton)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const AppleLogo = styled.img`
  width: 15px;
  position: relative;
  padding: none;
  right: 4px;
  bottom: 2px;
`;
const GoogleLogo = styled.img`
  width: 20px;
  position: relative;
  padding: none;
  right: 4px;
  bottom: 1px;
`;
const LineTxt = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LineOne = styled.div`
  color: black;
  border: 0.1px solid #7e827f;
  width: 28%;
`;
const LineTwo = styled.div`
  color: black;
  border: 0.1px solid #7e827f;
  width: 28%;
`;
const SignUpWith = styled.p`
  font-size: 14px;
  font-weight: 400;
  padding: 10px;
  line-height: 22.4px;
`;
const Form = styled.div`
  display : flex;
  flex-direction: column;
  align-items: center;
`;
const InputBox = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  flex-direction: column;
`;
const Input = styled.input`
  padding: 14px 12px;
  border-radius: 8px;
  border: 1px solid #d9d9d9;
  font-size: 15px;
  outline: none;
  &:focus {
    border-color: #6ddf6d;
  }
`;
const CheckboxRow = styled.div`
  width: 100%;
  display: flex;
  align-items: baseline;
  gap: 10px;
`;
const AnchorParah = styled(StyledParagraphSmallGray)`
  line-height: 18.2px;
  text-align: justify;
`;
const ContinueButton = styled(StyledBaseButton)`
  width: 100%;
`
//Image Container

const ContainerRight = styled.div`
  display: flex;
  width: 50vw;
  overflow: hidden;
  gap: 10px;
`;
const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 16vw;
  position: relative;
  bottom: 100px;
  gap: 10px;
`;
const MiddleColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 16vw;
  bottom: 150px;
  gap: 10px;
`;
const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 16vw;
  gap: 10px;
`;
const LeftColumnImg1 = styled.img`
  height: 250px;
`;
const LeftColumnImg2 = styled.img`
  height: 250px;
`;
const LeftColumnImg3 = styled.img`
  height: 250px;
`;
const LeftColumnImg4 = styled.img`
  height: 250px;
`;
const MiddleColumnImg1 = styled.img`
  height: 250px;
`;
const MiddleColumnImg2 = styled.img`
  height: 250px;
`;
const MiddleColumnImg3 = styled.img`
  height: 250px;
`;
const MiddleColumnImg4 = styled.img`
  height: 250px;
`;
const RightColumnImg1 = styled.img`
  height: 250px;
`;
const RightColumnImg2 = styled.img`
  height: 250px;
`;
const RightColumnImg3 = styled.img`
  height: 250px;
`;
const RightColumnImg4 = styled.img`
  height: 250px;
`;

export default Login;
