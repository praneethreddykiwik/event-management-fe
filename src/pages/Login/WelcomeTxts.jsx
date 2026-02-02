/** @format */
import styled from "styled-components";
import Helm_logo from "../../assets/Logos/Helm_logo.svg";

import {
  StyledHeading,
  StyledHeadingBig,
  StyledParagraphSmallGray,
} from "../../components/Styled/Typography.styled";
import * as enums from "../../myEnum";

const WelcomeTxts = () => {
  return (
    <>
      <LogoBox>
        <LogoImage src={Helm_logo} alt="logo" />
      </LogoBox>
      <WelcomeTxt>
        <SignUpTxt>{enums.SIGN_UP_TXT}</SignUpTxt>
      </WelcomeTxt>
    </>
  );
};

export default WelcomeTxts;

const LogoEventz = styled.div`
  justify-content: center;
  display: flex;
`;

const Logo = styled.img`
  width: 60px;
  height: 60px;
`;



const WelcomeTxt = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 0 4px 0;
`;

const WelcomeTextBig = styled(StyledHeading)`
`;

const SignUpTxt = styled(StyledParagraphSmallGray)`
  font-size: 13px;
`;
export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

export const LogoImage = styled.img`
  height: 60px;
  border-radius: 8px;
  margin-top: -40px;
  margin-bottom: -25px;
`;


