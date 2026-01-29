import styled from "styled-components";
import logoImg from "../../assets/Logos/eventz-logo.png";
import { StyledHeading, StyledHeadingBig } from "../../components/Styled/Typography.styled";
import { EVENTZ } from "../../myEnum/RegistrationPage.Enum";


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

 const LogoEventz = styled.div`
  justify-content: center;
  display: flex;
`;

 const Logo = styled.img`
  width: 60px;
  height: 60px;
`;

 const EventzTxt = styled(StyledHeadingBig)`
  font-weight: ${({ theme }) => theme.fontWeights.default};
  font-size: 35px;
  margin: 0;
`;
