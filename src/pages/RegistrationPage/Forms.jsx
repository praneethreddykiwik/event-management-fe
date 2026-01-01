/** @format */

import { useState } from 'react';
import ClosePassWord from '../../assets/Logos/SeePassWord.svg';
import SeePassWord from '../../assets/Logos/ClosePassword.svg';
import { useNavigate } from 'react-router-dom';

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
  TermsConditionsTxt,
} from './styled.RegistrationPage';

import {
  Terms,
  Conditions,
  Policy,
  Continue,
  Account,
  SignIn,
  TermsConditions,
} from '../../Enum/RegistrationPage.Enum';

const Forms = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const navigate = useNavigate();
  const handleContinue = () => {
    navigate('/login');
  };
  return (
    <Form onSubmit={(e) => e.preventDefault()}>
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

        {/* Confirm Password */}
        <InputWrapper>
          <Input
            type={showConfirmPass ? 'text' : 'password'}
            required
            placeholder="Confirm Password"
          />
          <ShowHideIcon onClick={() => setShowConfirmPass(!showConfirmPass)}>
            {showConfirmPass ? (
              <PassWordImg src={SeePassWord} alt="show" />
            ) : (
              <PassWordImg src={ClosePassWord} alt="hide" />
            )}
          </ShowHideIcon>
        </InputWrapper>
      </InputBox>

      {/* Terms + Checkbox */}
      <CheckboxRow>
        <InputCheckBox type="checkbox" required />
        <AnchorParah>
          {Terms} <SignInAnchor>{Conditions}</SignInAnchor> and{' '}
          <SignInAnchor>{Policy}</SignInAnchor>
        </AnchorParah>
      </CheckboxRow>

      {/*  Button no longer triggers HTTP request */}
      <ContinueButton type="button" onClick={handleContinue}>
        {Continue}
      </ContinueButton>

      <AccountSignIn>
        {Account} <SignInAnchor onClick={()=> navigate("/login")}>{SignIn}</SignInAnchor>
      </AccountSignIn>

      <TermsConditionsTxt>{TermsConditions}</TermsConditionsTxt>
    </Form>
  );
};

export default Forms;
