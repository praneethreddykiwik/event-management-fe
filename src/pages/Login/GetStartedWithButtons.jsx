/** @format */
import styled from 'styled-components';
import apple from '../../assets/Logo/Apple.svg';
import google from '../../assets/Logo/Google.svg.webp';
import * as enums from '../../myEnum';
import { StyledParagraph } from '../../components/Styled/Typography.styled';
import { Button } from '../../components/Buttons/Button';
import { desktop, laptop, mobile, tablet } from '../../theme/media-queries';
const GetStartedWithButtons = () => {
  return (
    <GetStartedWithButtonsWrapper>
      <GetStarted>{enums.STARTED_WITH}</GetStarted>
      <SignInTxtM>{enums.SIGN_IN_TEXT}</SignInTxtM>
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
  font-size: ${({ theme }) => theme.typography['heading-h3']['font-size']};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-top: 20px;
  ${mobile`
        display:none;
      `}
`;

const SignInTxtM = styled(StyledParagraph)`
  font-size: ${({ theme }) => theme.typography['heading-h3']['font-size']};
  font-weight: ${({ theme }) => theme.fontWeights.default};
  margin-top: 20px;
  ${desktop`
        display:none;
      `}
  ${laptop`
        display:none;
      `}
  ${tablet`
        display:none;
      `}
`;

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
  gap: 18px;
`;