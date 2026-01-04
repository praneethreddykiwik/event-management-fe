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
} from "../../Enum/RegistrationPage.Enum";
import { registrationMetaData } from "./registration.helper";
import { Inputs } from "../../components/Inputs/Inputs";
import { StyledBaseButton } from "../../components/Styled/Buttons.styled";
import styled from "styled-components";
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

        {/* Raghavendra */}
      </StyledBox>
    </Form>
  );
};

const StyledBox = styled.div`
  margin-top: 30px;
`;

export default Forms;
