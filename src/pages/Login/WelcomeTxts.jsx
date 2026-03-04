/** @format */
import styled from "styled-components";
import Helm_logo from "../../assets/Logos/Helm_logo.svg";

import {
  StyledHeading,
  StyledHeadingBig,
  StyledParagraphSmallGray,
} from "../../components/Styled/Typography.styled";
import * as enums from "../../myEnum";
import { mobile } from "../../theme/media-queries";

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



const WelcomeTxt = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 0 4px 0;
`;


const SignUpTxt = styled(StyledParagraphSmallGray)`
  font-size: 13px;
  ${mobile`
      display:none;
    `}
`;
export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const LogoImage = styled.img`
  height: 60px;
  border-radius: 8px;
  margin-top: -40px;
  margin-bottom: -25px;
`;


