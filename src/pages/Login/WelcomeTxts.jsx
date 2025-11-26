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
} from './Login.Styled';

const WelcomeTxts = ({ logo = logoImg }) => {
  return (
    <div>
      <LogoEventz>
        <Logo src={logo} alt="eventz logo" />
        <EventzTxt>{EVENTZ}</EventzTxt>
      </LogoEventz>

      <WelcomeTxt>
        <StyledHeading>{WelcomeText}</StyledHeading>
        <SignUpTxt>{SignUpText}</SignUpTxt>
      </WelcomeTxt>
    </div>
  );
};

export default WelcomeTxts;
