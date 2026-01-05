import styled from "styled-components";
import { LOGIN_COMMON } from "../../enum/Login.Common";
import { Input } from "../../components/Inputs/Input";
import { Button } from "../../components/Buttons/Button";
import {
  StyledAnchor,
  StyledParagraphSmallGray,
} from "../../components/Styled/Typography.styled";
import { StyledBaseButton } from "../../components/Styled/Buttons.styled";
import { AnchorLinkPrimary } from "../../components/Styled/Links.styles";
import Spinner from "../../components/Spinner/Spinner.component";
import RoleDropdown from "../../components/RoleDropdown/RoleDropdown";
import { useDispatch } from "react-redux";
import { loginAction } from "../../redux/auth/auth.actions";
import useTenant from "../../hooks/useTenant.hook";
import { Conditions, Policy, Terms } from "../../Enum/RegistrationPage.Enum";
import useNavigateWithQuery from "../../hooks/useNavigateWithQuery";
import { Inputs } from "../../components/Inputs/Inputs";
import { loginMetaData } from "./login.helper";
import { useState } from "react";

const Forms = () => {
  const navigate = useNavigateWithQuery();
  const dispatch = useDispatch();
  const tenantId = useTenant();

  const [inputs, setInputs] = useState(loginMetaData);

  const validateFields = () => {
    let isValid = true;
    debugger;
    const newInputs = inputs.map((el) => {
      if (!el.value) {
        isValid = false;
        return { ...el, error: "Invalid input!" };
      }
      return el;
    });

    setInputs(newInputs);

    return isValid;
  };

  const onSubmit = () => {
    const isValid = validateFields();
    debugger;
    if (!isValid) return;

    const inpObj = inputs.reduce((acu, cur) => {
      return { ...acu, [cur.name]: cur.value };
    }, {});

    const payload = {
      navigate,
      reqPayload: {
        tenantId,
        username: inpObj.username,
        password: inpObj.password,
      },
    };
    dispatch(loginAction(payload));
  };

  const onChange = (e) => {
    const { name, value } = e.target;

    setInputs((prv) => {
      const dat = prv.map((el) => ({
        ...el,
        value: name === el.name ? value : el.value,
        error: null,
      }));

      return dat;
    });
  };

  return (
    <Form>
      <InputBox>
        {inputs.map((inp) => {
          return <Inputs {...inp} onChange={onChange} />;
        })}
      </InputBox>

      <ForgotPassword>
        {LOGIN_COMMON.FORGOT_PASS}
        <Reset>{LOGIN_COMMON.RESET}</Reset>
      </ForgotPassword>

      <Button onClick={onSubmit}>{LOGIN_COMMON.CONTINUE}</Button>
      <NewUser>
        {LOGIN_COMMON.NEW_USER}
        <AnchorLinkPrimary onClick={() => navigate("/registration")}>
          {LOGIN_COMMON.REGISTER}
        </AnchorLinkPrimary>
      </NewUser>
      <AccountSignIn>
        {LOGIN_COMMON.DONT_HAVE_ACCOUNT_TEXT}
        <AnchorLinkPrimary onClick={() => navigate("/registration")}>
          {LOGIN_COMMON.REGISTER}
        </AnchorLinkPrimary>
      </AccountSignIn>
      <TermsConditionsTxt>{LOGIN_COMMON.TERMS_CONDITIONS}</TermsConditionsTxt>

      <CheckboxRow>
        <AnchorParah>
          {Terms} <SignInAnchor>{Conditions}</SignInAnchor> and{" "}
          <SignInAnchor>{Policy}</SignInAnchor>
        </AnchorParah>
      </CheckboxRow>
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
  gap: 16px;
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
  margin-bottom: 30px;
  @media (max-width: 768px) {
    display: none;
  }
`;
const InputCheckBox = styled.input`
  accent-color: #27c14a;
  color: white;
`;
const NewUser = styled(StyledParagraphSmallGray)`
  margin-bottom: 0;
  margin-top: 0;
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
  margin: 0 auto;
  font-size: 12px;
  letter-spacing: 0;
  line-height: 16px;
  margin-top: 30px;
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
  margin: 0;
  margin-top: -8px;
  @media (max-width: 768px) {
    display: none;
  }
`;
const SignInAnchor = styled(StyledAnchor)`
  font-size: 12px;
  text-decoratoin: none;
`;
export default Forms;
