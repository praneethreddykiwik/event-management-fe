/** @format */
import styled from 'styled-components';
import logoImg from '../../assets/Logo/eventz-logo.png';
import {
  StyledHeading,
  StyledHeadingBig,
  StyledParagraphSmallGray,
} from '../../components/Styled/Typography.styled';
import {LOGIN_COMMON} from '../../enum/Login.Common.jsx'

const WelcomeTxts = ({ logo = logoImg }) => {
  return (
    <>
      <LogoEventz>
        <Logo src={logo} alt="eventz logo" />
        <EventzTxt>{LOGIN_COMMON.EVENTZ}</EventzTxt>
      </LogoEventz>
      <WelcomeTxt>
        <WelcomeTextBig>{LOGIN_COMMON.WELCOME_TEXT}</WelcomeTextBig>
        <SignUpTxt>{LOGIN_COMMON.SIGN_UP_TXT}</SignUpTxt>
      </WelcomeTxt>
    </>
  );
};

export default WelcomeTxts;

export const LogoEventz = styled.div`
  justify-content: center;
  display: flex;
`;
export const Logo = styled.img`
  width: 60px;
  height: 60px;
`;
export const EventzTxt = styled(StyledHeadingBig)`
  font-weight: 400;
  font-size: 35px;
  margin: 0;
`;
export const WelcomeTxt = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px 0 6px 0px;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const WelcomeTextBig = styled(StyledHeading)`
  margin: 0;
`;
export const SignUpTxt = styled(StyledParagraphSmallGray)`
  font-size: 13px;
  @media (max-width: 768px) {
    display: none;
  }
`;
