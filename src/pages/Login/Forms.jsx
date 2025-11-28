/** @format */
import { useState } from 'react';
import ClosePassWord from '../../assets/Logo/ClosePassword.svg';
import SeePassWord from '../../assets/Logo/SeePassword.svg';
import {
  AnchorParah,
  CheckboxRow,
  Form,
  Input,
  InputCheckBox,
  PassWordImg,
  InputWrapper,
  InputBox,
  ShowHideIcon,
  ContinueButton,
  AccountSignIn,
  SignInAnchor,
  ForgotPassword,
  NewUser,
  RegisterAnchor,
  Reset,
  TermsConditionsTxt,
} from './Login.Styled';
import {
  Conditions,
  Policy,
  Terms,
  Continue,
  Account,
  SignIn,
  TermsConditions,
} from '../../enum/Login.Common';

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
        Forgot Password? <Reset>Reset</Reset>
      </ForgotPassword>

      <CheckboxRow>
        <InputCheckBox type="checkbox" />
        <AnchorParah>
          {Terms} <SignInAnchor>{Conditions}</SignInAnchor> and{' '}
          <SignInAnchor>{Policy}</SignInAnchor>
        </AnchorParah>
      </CheckboxRow>

      <ContinueButton type="base">{Continue}</ContinueButton>
      <NewUser>
        New User? <RegisterAnchor>Register</RegisterAnchor>
      </NewUser>

      <AccountSignIn>
        {Account} <SignInAnchor>{SignIn}</SignInAnchor>
      </AccountSignIn>
      <TermsConditionsTxt>{TermsConditions}</TermsConditionsTxt>
    </Form>
  );
};
export default Forms;
