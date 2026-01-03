/** @format */
import styled from "styled-components";
import { LOGIN_COMMON } from "../../enum/Login.Common";
import { Input } from "../../components/Inputs/Input";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Buttons/Button";
import {
  StyledAnchor,
  StyledParagraphSmallGray,
} from "../../components/Styled/Typography.styled";
import { StyledBaseButton } from "../../components/Styled/Buttons.styled";
import { AnchorLinkPrimary } from "../../components/Styled/Links.styles";
import { useLoginForm } from "../../hooks/useLoginForm.hook";
import Spinner from "../../components/Spinner/Spinner.component";

const Forms = () => {
  const navigate = useNavigate();

  const {
    email,
    password,
    acceptedTerms,
    showPassword,
    errors,
    loading,
    // error,
    setEmail,
    setPassword,
    setAcceptedTerms,
    setShowPassword,
    setErrors,
    submit,
  } = useLoginForm();

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
            validations={["required", "email"]}
            error={errors.email}
            setError={(err) => setErrors((prev) => ({ ...prev, email: err }))}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={password}
            onChange={({ value }) => setPassword(value)}
            validations={["required", { type: "min-length", value: 6 }]}
            error={errors.password}
            setError={(err) =>
              setErrors((prev) => ({ ...prev, password: err }))
            }
          />

          <ShowHideIcon onClick={() => setShowPassword(!showPassword)}>
            <span className="material-symbols-outlined">
              {showPassword ? "visibility_off" : "visibility"}
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
        <ErrorTerms style={{ color: "red", margin: 0, fontSize: 12 }}>
          {errors.terms}
        </ErrorTerms>
      )}
      <Button type="base" onClick={submit} disabled={loading}>
        {loading ? <Spinner loading={loading} /> : LOGIN_COMMON.CONTINUE}
      </Button>
      <NewUser>
        {LOGIN_COMMON.NEW_USER}
        <AnchorLinkPrimary onClick={() => navigate("/registration")}>
          {LOGIN_COMMON.REGISTER}
        </AnchorLinkPrimary>
      </NewUser>
      <AccountSignIn>
        {LOGIN_COMMON.DONT_HAVE_ACCOUNT_TEXT}
        <AnchorLinkPrimary onClick={() => navigate("/register")}>
          {LOGIN_COMMON.REGISTER}
        </AnchorLinkPrimary>
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
  /* @media screen and (min-width: 769px) {
    display: none;
  } */
`;
const RegisterAnchor = styled(StyledAnchor)`
  text-decoration: none;
  font-weight: 400;
  font-size: 14px;
  color: #26c867 !important;
  margin-left: 4px;
  /* @media screen and (min-width: 769px) {
    display: none;
  } */
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
