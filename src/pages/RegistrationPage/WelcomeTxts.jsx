import logoImg from '../../assets/Logos/eventz-logo.png';
import { StyledHeading } from '../../components/Styled/Typography.styled';
import { EVENTZ, } from '../../Enum/RegistrationPage.Enum';
import { LogoEventz, Logo, EventzTxt } from './styled.RegistrationPage';

const WelcomeTxts = ({ logo = logoImg }) => {
  return (
    <div>
      <LogoEventz>
        <Logo src={logoImg} alt="eventz logo" />
        <EventzTxt>{EVENTZ}</EventzTxt>
      </LogoEventz>

      {/* <WelcomeTxt>
        <StyledHeading>{WelcomeText}</StyledHeading>
        <SignUpTxt>{SignUpText}</SignUpTxt>
      </WelcomeTxt> */}
    </div>
  );
};

export default WelcomeTxts;
