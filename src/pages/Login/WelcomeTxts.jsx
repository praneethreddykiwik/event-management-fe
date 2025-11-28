/** @format */
import logoImg from '../../assets/Logo/eventz-logo.png';
import { StyledHeading } from '../../components/Styled/Typography.styled';
import { EVENTZ, WelcomeText, SignUpText } from '../../enum/Login.Common';
import {
  LogoEventz,
  Logo,
  EventzTxt,
  WelcomeTxt,
  SignUpTxt,
  WelcomeTextBig,
} from './Login.Styled';

const WelcomeTxts = ({ logo = logoImg }) => {
  return (
    <>
      <LogoEventz>
        <Logo src={logo} alt="eventz logo" />
        <EventzTxt>{EVENTZ}</EventzTxt>
      </LogoEventz>
      <WelcomeTxt>
        <WelcomeTextBig>{WelcomeText}</WelcomeTextBig>
        <SignUpTxt>{SignUpText}</SignUpTxt>
      </WelcomeTxt>
    </>
  );
};

export default WelcomeTxts;
