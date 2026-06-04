import styled from "styled-components";
import * as enums from "../../myEnum";
import { CONTINUE } from "../../myEnum/RegistrationPage.Enum";
import { Button } from "../../components/Buttons/Button";
import {
  StyledAnchor,
  StyledParagraphSmallGray,
} from "../../components/Styled/Typography.styled";
import { AnchorLinkPrimary } from "../../components/Styled/Links.styles";
import { useDispatch } from "react-redux";
import { loginAction } from "../../redux/auth/auth.actions";
import useTenant from "../../hooks/useTenant.hook";
import { CONDITIONS, POLICY, TERMS } from "../../myEnum/RegistrationPage.Enum";
import useNavigateWithQuery from "../../hooks/useNavigateWithQuery";
import { Inputs } from "../../components/Inputs/Inputs";
import { loginMetaData } from "./login.helper";
import { useState } from "react";
import { generateLoginReq } from "../../models/requests/auth.req.model";
// import { desktop, laptop, tablet } from "../../theme/media-queries";

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

    const loginpayload = {
      navigate,
      reqPayload: generateLoginReq({
        tenantId,
        inputs,
      }),
    };
    dispatch(loginAction(loginpayload));
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

      <Button onClick={onSubmit}>{CONTINUE}</Button>
      <AccountSignIn>
        {enums.DONT_HAVE_ACCOUNT_TEXT}
        <AnchorLinkPrimary onClick={() => navigate("/registration")}>
          {enums.REGISTER}
        </AnchorLinkPrimary>
      </AccountSignIn>
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
  margin-bottom: 10px;
`;

const Reset = styled(StyledAnchor)`
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fontWeights.default};
  font-size: ${({ theme }) => theme.typography["body-small"]["font-size"]};
  color: ${({ theme }) => theme.colors.primary} !important;
`;

const AccountSignIn = styled(StyledParagraphSmallGray)`
  margin: 0;
  margin-top: -8px;
`;

export default LoginForm;
