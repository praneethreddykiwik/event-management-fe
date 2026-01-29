/** @format */
import styled from "styled-components";
import apple from "../../assets/Logo/Apple.svg";
import google from "../../assets/Logo/Google.svg.webp";
import * as enums from "../../myEnum";
import { StyledParagraph } from "../../components/Styled/Typography.styled";
import { Button } from "../../components/Buttons/Button";
const GetStartedWithButtons = () => {
  return (
    <GetStartedWithButtonsWrapper>
      <GetStarted>{enums.STARTED_WITH}</GetStarted>
      {/* <SignInTxtM>{enums.SIGN_IN_TEXT}</SignInTxtM> */}
      <ContinueSignIn>
        <Button type="outlined" image={apple}>
          {enums.APPLE}
        </Button>
        <Button type="outlined" image={google}>
          {enums.GOOGLE}
        </Button>
      </ContinueSignIn>
    </GetStartedWithButtonsWrapper>
  );
};

export default GetStartedWithButtons;

const GetStarted = styled(StyledParagraph)`
  font-size: ${({ theme }) => theme.typography["heading-h3"]["font-size"]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};

  @media (max-width: 768px) {
    display: none;
  }
`;

// const SignInTxtM = styled(StyledParagraph)`
//   @media (min-width: 60px) and (max-width: 768px) {
//     margin-top: 32px;
//     font-size: ${({ theme }) => theme.typography["heading-h2"]["font-size"]};
//     font-weight: ${({ theme }) => theme.fontWeights.default};
//   }

//   @media screen and (min-width: 769px) {
//     display: none;
//   }
// `;

const GetStartedWithButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px; 
`;

const ContinueSignIn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px; 
`;

const AppleLogo = styled.img`
  width: 16px;
  position: relative;
  right: 4px; 
  bottom: 2px;
`;

const GoogleLogo = styled.img`
  width: 20px;
  position: relative;
  right: 4px;
  bottom: 1px;
`;

