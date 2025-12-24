/** @format */

import { useState } from 'react';
import styled from 'styled-components';
import { LOGIN_COMMON } from '../../enum/Login.Common';
import { validateInput } from '../../components/Validations/validationInput';
import { Input } from '../../components/Inputs/Input';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Buttons/Button';
import {
  StyledAnchor,
  StyledParagraphSmallGray,
} from '../../components/Styled/Typography.styled';
import { StyledBaseButton } from '../../components/Styled/Buttons.styled';

const Forms = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    terms: '',
  });

  const handleSubmit = () => {
    const newErrors = {
      email: validateInput(email, ['required', 'email']),
      password: validateInput(password, [
        'required',
        { type: 'min-length', value: 6 },
      ]),
      terms: acceptedTerms ? '' : 'You must accept terms & conditions',
    };

    setErrors(newErrors);

    const hasError = Object.values(newErrors).some(Boolean);
    if (hasError) return;

    navigate('/');
  };

  return (
    <Form>
      <InputBox>
        <InputWrapper>
          <Input
            type="email"
            name="email"
            placeholder="Email address"
            value={email}
            onChange={({ value }) => setEmail(value)}
            validations={['required', 'email']}
            error={errors.email}
            setError={(err) => setErrors((prev) => ({ ...prev, email: err }))}
          />
        </InputWrapper>

        <InputWrapper>
          <Input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            value={password}
            onChange={({ value }) => setPassword(value)}
            validations={['required', { type: 'min-length', value: 6 }]}
            error={errors.password}
            setError={(err) =>
              setErrors((prev) => ({ ...prev, password: err }))
            }
          />

          <ShowHideIcon onClick={() => setShowPassword(!showPassword)}>
            <span className="material-symbols-outlined">
              {showPassword ? 'visibility' : 'visibility_off'}
            </span>
          </ShowHideIcon>
        </InputWrapper>
      </InputBox>

      <ForgotPassword>
        {LOGIN_COMMON.FORGOT_PASS}
        <Reset>{LOGIN_COMMON.RESET}</Reset>
      </ForgotPassword>

      <CheckboxRow>
        <Input
          type="checkbox"
          name="terms"
          list={[
            <AnchorParah>
              {LOGIN_COMMON.TERMS}
              <SignInAnchor>{LOGIN_COMMON.CONDITIONS}</SignInAnchor> and
              <SignInAnchor>{LOGIN_COMMON.POLICY}</SignInAnchor>
            </AnchorParah>,
          ]}
          value={acceptedTerms}
          onChange={({ value }) => setAcceptedTerms(value)}
        />
      </CheckboxRow>
      {errors.terms && (
        <ErrorTerms style={{ color: 'red', margin: 0, fontSize: 12 }}>
          {errors.terms}
        </ErrorTerms>
      )}
      <Button type="base" onClick={handleSubmit}>
        {LOGIN_COMMON.CONTINUE}
      </Button>
      <NewUser>
        {LOGIN_COMMON.NEW_USER}
        <RegisterAnchor onClick={() => navigate('/registration')}>
          {LOGIN_COMMON.REGISTER}
        </RegisterAnchor>
      </NewUser>
      <AccountSignIn>
        {LOGIN_COMMON.ACCOUNT}
        <SignInAnchoru onClick={() => navigate('/login')}>
          {LOGIN_COMMON.SIGN_IN}
        </SignInAnchoru>
      </AccountSignIn>
      <TermsConditionsTxt>{LOGIN_COMMON.TERMS_CONDITIONS}</TermsConditionsTxt>
    </Form>
  );
};

const ErrorTerms = styled(StyledParagraphSmallGray)`
  @media (max-width: 768px) {
    display: none;
  }
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 10px;
`;
const InputBox = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  flex-direction: column;
`;
const InputWrapper = styled.div`
  position: relative;
`;
const ShowHideIcon = styled.span`
  position: absolute;
  right: 15px;
  top: 9px;
  cursor: pointer;
  font-size: 18px;
`;
const ForgotPassword = styled(StyledParagraphSmallGray)`
  margin-top: 3px;
  margin-bottom: 15px;
  @media screen and (min-width: 769px) {
    display: none;
  }
`;
const Reset = styled(StyledAnchor)`
  text-decoration: none;
  font-weight: 400;
  font-size: 14px;
  color: #26c867 !important;
  @media screen and (min-width: 769px) {
    display: none;
  }
`;
const CheckboxRow = styled.div`
  width: 100%;
  display: flex;
  align-items: baseline;
  gap: 10px;
  @media (max-width: 768px) {
    display: none;
  }
`;
const InputCheckBox = styled.input`
  accent-color: #27c14a;
  color: white;
`;
const NewUser = styled(StyledParagraphSmallGray)`
  @media screen and (min-width: 769px) {
    display: none;
  }
`;
const RegisterAnchor = styled(StyledAnchor)`
  text-decoration: none;
  font-weight: 400;
  font-size: 14px;
  color: #26c867 !important;
  @media screen and (min-width: 769px) {
    display: none;
  }
`;

const AnchorParah = styled(StyledParagraphSmallGray)`
  text-align: justify;
  margin-bottom: 0;
`;
const ContinueButton = styled(StyledBaseButton)`
  color: white;
  width: 100%;
`;
const TermsConditionsTxt = styled(StyledParagraphSmallGray)`
  width: 75%;
  margin: 0;
  @media screen and (min-width: 769px) {
    display: none;
  }
`;
const AccountSignIn = styled(StyledParagraphSmallGray)`
  @media (max-width: 768px) {
    display: none;
  }
`;
const SignInAnchor = styled(StyledAnchor)`
  font-size: 14px;
`;
const SignInAnchoru = styled(StyledAnchor)`
  text-decoration: none;
  font-size: 14px;
`;
export default Forms;
