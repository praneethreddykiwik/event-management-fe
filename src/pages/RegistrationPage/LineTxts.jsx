import { SIGN_UP_LINE } from "../../myEnum/RegistrationPage.Enum";
// import { LineTxt, SignUpWith, SignWithEmail } from "./styled.RegistrationPage";

import { SignUpLine } from "../../myEnum/RegistrationPage.Enum";
import styled from "styled-components";
import { StyledParagraph } from "../../components/Styled/Typography.styled";

const LineTxts = () => {
  return (
    <>
      <LineTxt>
        <SignUpWith>{SIGN_UP_LINE}</SignUpWith>
      </LineTxt>
    </>
  );
};

export default LineTxts;

const LineTxt = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  width: 90%;
`;

const SignUpWith = styled(StyledParagraph)`
  width: 100%;
  font-size: ${({ theme }) => theme.typography["body-regular"]["font-size"]};
  font-weight: ${({ theme }) => theme.fontWeights.default};
  padding: 24px;
`;
