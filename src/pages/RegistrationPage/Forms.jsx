import { useState } from "react";
import { AnchorLinkPrimary } from "../../components/Styled/Links.styles";

import {
  Form,
  InputBox,
  AccountSignIn,
  TermsConditionsTxt,
} from "./styled.RegistrationPage";

import {
  Continue,
  Account,
  SignIn,
  TermsConditions,
  Conditions,
  Policy,
  Terms,
} from "../../Enum/RegistrationPage.Enum";
import { registrationMetaData } from "./registration.helper";
import { Inputs } from "../../components/Inputs/Inputs";
import { StyledBaseButton } from "../../components/Styled/Buttons.styled";
import styled from "styled-components";
import { StyledAnchor, StyledParagraphSmallGray } from "../../components/Styled/Typography.styled";
import { Button } from "../../components/Buttons/Button";
import { useDispatch, useSelector } from "react-redux";
import { registrationAction } from "../../redux/auth/auth.actions";
import useTenant from "../../hooks/useTenant.hook";
import useNavigateWithQuery from "../../hooks/useNavigateWithQuery";
import { authSelector } from "../../redux/auth/auth.slice";

const Forms = () => {
  const navigate = useNavigateWithQuery();
  const dispatch = useDispatch();
  const tenantId = useTenant();
  const { registrationSuccess } = useSelector(authSelector);

  const [inputs, setInputs] = useState(registrationMetaData);

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
        email: inpObj.email,
        password: inpObj.password,
        role: inpObj.role.value,
      },
    };
    dispatch(registrationAction(payload));
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
    <Form onSubmit={(e) => e.preventDefault()}>
      <InputBox>
        {inputs.map((inp) => {
          return <Inputs {...inp} onChange={onChange} />;
        })}
      </InputBox>

      <Button whiteText onClick={onSubmit}>
        {Continue}
      </Button>

      <StyledBox>
        {registrationSuccess ? (
          <AccountSignIn>
            Successfully registered user. You can proceed to{" "}
            <AnchorLinkPrimary onClick={() => navigate("/login")}>
              {SignIn}
            </AnchorLinkPrimary>
          </AccountSignIn>
        ) : (
          <AccountSignIn>
            {Account}{" "}
            <AnchorLinkPrimary onClick={() => navigate("/login")}>
              {SignIn}
            </AnchorLinkPrimary>
          </AccountSignIn>
        )}

        <TermsConditionsTxt>{TermsConditions}</TermsConditionsTxt>

        <CheckboxRow>
        <AnchorParah>
          {Terms} <SignInAnchor>{Conditions}</SignInAnchor> and{" "}
          <SignInAnchor>{Policy}</SignInAnchor>
        </AnchorParah>
      </CheckboxRow>
      </StyledBox>
    </Form>
  );
};

const StyledBox = styled.div`
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

const AnchorParah = styled(StyledParagraphSmallGray)`
  margin: 0 auto;
  font-size: 12px;
  letter-spacing: 0;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const SignInAnchor = styled(StyledAnchor)`
  font-size: 12px;
  text-decoratoin: none;
`;

export default Forms;
