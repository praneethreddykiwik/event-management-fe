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
  Conditions,
  Policy,
  Terms,
} from "../../Enum/RegistrationPage.Enum";
import { registrationMetaData } from "./registration.helper";
import { Inputs } from "../../components/Inputs/Inputs";
import { StyledBaseButton } from "../../components/Styled/Buttons.styled";
import styled from "styled-components";
import { StyledAnchor, StyledParagraphSmallGray } from "../../components/Styled/Typography.styled";

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
