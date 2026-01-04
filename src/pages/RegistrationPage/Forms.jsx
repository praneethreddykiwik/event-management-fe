import { useState } from "react";
import { useNavigate } from "react-router-dom";
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

const Forms = () => {
  const navigate = useNavigate();
  const handleContinue = () => {
    navigate("/login");
  };

  const [inputs, setInputs] = useState(registrationMetaData);

  /*
    {
      "tenantId": "tenant_001",
      "username": "abdul",
      "email": "abdul.s@criskasecurity.com",
      "password": "MyStrongPassword@123",
      "role": "admin"
    }
  */

  const onChange = (e) => {
    setInputs((prv) => {
      const dat = prv.map((el) => ({
        ...el,
        value: prv.name === el.name ? e.target.value : el.value,
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

      {/* Terms + Checkbox */}
      {/* <CheckboxRow>
        <InputCheckBox type="checkbox" required />
        <AnchorParah>
          {Terms} <SignInAnchor>{Conditions}</SignInAnchor> and{" "}
          <SignInAnchor>{Policy}</SignInAnchor>
        </AnchorParah>
      </CheckboxRow> */}

      <StyledBaseButton $whiteText onClick={handleContinue}>
        {Continue}
      </StyledBaseButton>

      <StyledBox>
        <AccountSignIn>
          {Account}{" "}
          <AnchorLinkPrimary onClick={() => navigate("/login")}>
            {SignIn}
          </AnchorLinkPrimary>
        </AccountSignIn>

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
