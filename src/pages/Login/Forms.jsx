/** @format */
import { useState } from 'react';
import styled from 'styled-components';
import ClosePassWord from '../../assets/Logo/ClosePassword.svg';
import SeePassWord from '../../assets/Logo/SeePassword.svg';
import { LOGIN_COMMON } from '../../enum/Login.Common';
import { InputDefault } from '../../components/Styled/Inputs.styled';
import {
  StyledAnchor,
  StyledParagraphSmallGray,
} from '../../components/Styled/Typography.styled';
import { StyledBaseButton } from '../../components/Styled/Buttons.styled';

const Forms = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Form>
      <InputBox>
        <InputWrapper>
          <Input type="email" required placeholder="Email address" />
        </InputWrapper>

        <InputWrapper>
          <Input
            type={showPassword ? 'text' : 'password'}
            required
            placeholder="Password"
          />
          <ShowHideIcon onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <PassWordImg src={SeePassWord} alt="show" />
            ) : (
              <PassWordImg src={ClosePassWord} alt="hide" />
            )}
          </ShowHideIcon>
        </InputWrapper>
      </InputBox>
      <ForgotPassword>
        {LOGIN_COMMON.FORGOT_PASS}
        <Reset> {LOGIN_COMMON.RESET}</Reset>
      </ForgotPassword>

      <CheckboxRow>
        <InputCheckBox type="checkbox" />
        <AnchorParah>
          {LOGIN_COMMON.TERMS}{' '}
          <SignInAnchor>{LOGIN_COMMON.CONDITIONS}</SignInAnchor> and{' '}
          <SignInAnchor>{LOGIN_COMMON.POLICY}</SignInAnchor>
        </AnchorParah>
      </CheckboxRow>

      <ContinueButton type="base">{LOGIN_COMMON.CONTINUE}</ContinueButton>
      <NewUser>
        {LOGIN_COMMON.NEW_USER}<RegisterAnchor>{LOGIN_COMMON.REGISTER}</RegisterAnchor>
      </NewUser>

      <AccountSignIn>
        {LOGIN_COMMON.ACCOUNT}{' '}
        <SignInAnchoru>{LOGIN_COMMON.SIGN_IN}</SignInAnchoru>
      </AccountSignIn>
      <TermsConditionsTxt>{LOGIN_COMMON.TERMS_CONDITIONS}</TermsConditionsTxt>
    </Form>
  );
};
export default Forms;

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
export const InputWrapper = styled.div`
  position: relative;
`;
export const Input = styled(InputDefault)``;
export const ShowHideIcon = styled.span`
  position: absolute;
  right: 15px;
  top: 9px;
  cursor: pointer;
  font-size: 18px;
`;
export const PassWordImg = styled.img``;

export const ForgotPassword = styled(StyledParagraphSmallGray)`
  margin-top: 3px;
  margin-bottom: 15px;
  @media screen and (min-width: 769px) {
    display: none;
  }
`;
export const Reset = styled(StyledAnchor)`
  text-decoration: none;
  font-weight: 400;
  font-size: 14px;
  color: #26c867 !important;
  @media screen and (min-width: 769px) {
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
export const InputCheckBox = styled.input``;
export const NewUser = styled(StyledParagraphSmallGray)`
  @media screen and (min-width: 769px) {
    display: none;
  }
`;
export const RegisterAnchor = styled(StyledAnchor)`
  text-decoration: none;
  font-weight: 400;
  font-size: 14px;
  color: #26c867 !important;
  @media screen and (min-width: 769px) {
    display: none;
  }
`;

export const AnchorParah = styled(StyledParagraphSmallGray)`
  line-height: 18.2px;
  text-align: justify;
`;
export const ContinueButton = styled(StyledBaseButton)`
  color: white;
  width: 100%;
`;
export const TermsConditionsTxt = styled(StyledParagraphSmallGray)`
  width: 75%;
  margin: 0;
  @media screen and (min-width: 769px) {
    display: none;
  }
`;
export const AccountSignIn = styled(StyledParagraphSmallGray)`
  @media (max-width: 768px) {
    display: none;
  }
`;
export const SignInAnchor = styled(StyledAnchor)`
  font-size: 14px;
`;
export const SignInAnchoru = styled(StyledAnchor)`
  text-decoration: none;
  font-size: 14px;
`;
