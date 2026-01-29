import styled from "styled-components";
import * as enums from "../../myEnum";
import { Button } from "../../components/Buttons/Button";
import {
  StyledAnchor,
  StyledParagraphSmallGray,
} from "../../components/Styled/Typography.styled";
import { AnchorLinkPrimary } from "../../components/Styled/Links.styles";
import { useDispatch } from "react-redux";
import { loginAction } from "../../redux/auth/auth.actions";
import useTenant from "../../hooks/useTenant.hook";
import { Conditions, Policy, Terms } from "../../myEnum/RegistrationPage.Enum";
import useNavigateWithQuery from "../../hooks/useNavigateWithQuery";
import { Inputs } from "../../components/Inputs/Inputs";
import { loginMetaData } from "./login.helper";
import { useState } from "react";

const LoginForm = () => {
  const navigate = useNavigateWithQuery();
  const dispatch = useDispatch();
  const tenantId = useTenant();

  const [inputs, setInputs] = useState(loginMetaData);

  const validateFields = () => {
    let isValid = true;
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
        {enums.FORGOT_PASS}
        <Reset>{enums.RESET}</Reset>
      </ForgotPassword>

      <Button onClick={onSubmit}>{enums.CONTINUE}</Button>
      <AccountSignIn>
        {enums.DONT_HAVE_ACCOUNT_TEXT}
        <AnchorLinkPrimary onClick={() => navigate("/registration")}>
          {enums.REGISTER}
        </AnchorLinkPrimary>
      </AccountSignIn>
      <TermsConditionsTxt>{enums.BY_USING_OUR_APPS_PP}</TermsConditionsTxt>

      <CheckboxRow>
        <AnchorParah>
          {Terms} <SignInAnchor>{Conditions}</SignInAnchor> and{" "}
          <SignInAnchor>{Policy}</SignInAnchor>
        </AnchorParah>
      </CheckboxRow>
    </Form>
  );
};

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
  flex-direction: column;
  gap: 16px;
`;

const ForgotPassword = styled(StyledParagraphSmallGray)`
  margin-top: 4px;
  margin-bottom: 16px;

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

const Reset = styled(StyledAnchor)`
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fontWeights.default};
  font-size: ${({ theme }) => theme.typography["body-small"]["font-size"]};
  color: ${({ theme }) => theme.colors.primary} !important;

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

const CheckboxRow = styled.div`
  width: 100%;
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const AnchorParah = styled(StyledParagraphSmallGray)`
  margin: 0 auto;
  margin-top: 32px;
  font-size: ${({ theme }) => theme.typography.caption["font-size"]};
  letter-spacing: 0;
  line-height: ${({ theme }) => theme.typography.caption["line-height"]};
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
  font-size: ${({ theme }) => theme.typography.caption["font-size"]};
  text-decoration: none;
`;


export default LoginForm;
