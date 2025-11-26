/** @format */
import { useState } from 'react';
import ClosePassWord from '../../assets/Logo/lock_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg';
import SeePassWord from '../../assets/Logo/lock_open_right_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg';
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
} from './Login.Styled';
import {
  Conditions,
  Policy,
  Terms,
  Continue,
  Account,
  SignIn,
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
    </Form>
  );
};
export default Forms;
