/** @format */
import styled from 'styled-components';
import {
  StyledHeadingBig,
  StyledAnchor,
  StyledParagraphSmallGray,
  StyledParagraph,
  StyledAnchorSmall,
} from '../../components/Styled/Typography.styled';
import {
  StyledBaseButton,
  StyledOutlinedButton,
} from '../../components/Styled/Buttons.styled';

import { InputDefault } from '../../components/Styled/Inputs.styled';
export const InputCheckBox = styled.input``;
export const PassWordImg = styled.img``;
export const AccountSignIn = styled(StyledParagraphSmallGray)`
  @media (max-width: 768px) {
    display: none;
  }
`;
export const SignInAnchor = styled(StyledAnchor)`
  text-decoration: none;
  font-size: 14px;
`;
export const StyledContainer = styled.div`
  height: 100vh;
  background: #fff;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const ContainerLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const MainContainer = styled.div`
  width: 300px;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const LogoEventz = styled.div`
  justify-content: center;
  display: flex;
`;
export const Logo = styled.img`
  width: 60px;
  height: 60px;
`;
export const EventzTxt = styled(StyledHeadingBig)`
  font-weight: 350;
  margin: 0;
`;
export const WelcomeTxt = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px 0 6px 0px;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const SignUpTxt = styled(StyledParagraphSmallGray)`
  font-size: 13px;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const SignInTxtM = styled(StyledParagraph)`
  @media (min-width: 60px) and (max-width: 768px) {
    margin-top: 35px;
    font-size: 25px;
    font-weight: 400;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const GetStarted = styled(StyledParagraph)`
  font-size: 18px;
  font-weight: 420;
  @media (max-width: 768px) {
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

export const LineTxt = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  width: 90%;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const LineOne = styled.div`
  color: black;
  border: 0.1px solid #7e827f;
  width: 120px;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const LineTwo = styled.div`
  color: black;
  border: 0.1px solid #7e827f;
  width: 120px;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const SignWithEmail = styled.p`
  font-size: 16px;
  font-weight: 350;
  padding: 10px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const SignUpWith = styled.p`
  width: 100%;
  font-size: 16px;
  font-weight: 350;
  padding: 10px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
`;
export const Input = styled(InputDefault)``;
export const ShowHideIcon = styled.span`
  position: absolute;
  right: 12px;
  top: 8px;
  cursor: pointer;
  font-size: 18px;
`;
export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 10px;
`;
export const InputBox = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  flex-direction: column;
`;
export const ForgotPassword = styled(StyledParagraphSmallGray)`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const Reset = styled(StyledAnchor)`
  text-decoration: none;
  font-weight: 400;
  font-size: 14px;
  color: #26c867 !important;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const NewUser = styled(StyledParagraphSmallGray)`
  align-self: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const RegisterAnchor = styled(StyledAnchor)`
  text-decoration: none;
  font-weight: 400;
  font-size: 14px;
  color: #26c867 !important;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const CheckboxRow = styled.div`
  width: 100%;
  display: flex;
  align-items: baseline;
  gap: 10px;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const AnchorParah = styled(StyledParagraphSmallGray)`
  /* line-height: 18.2px;
  text-align: justify; */
`;
export const ContinueButton = styled(StyledBaseButton)`
  color: white;
  width: 100%;
`;
