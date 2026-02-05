import styled from "styled-components";
import Helm_logo from "../../assets/Logos/Helm_logo.svg";
import { LogoBox, LogoImage } from "../Login/WelcomeTxts";
const WelcomeTxts = () => {
  return (
    <div>
      <LogoBox>
        <LogoHelm src={Helm_logo} alt="logo" />
      </LogoBox>
    </div>
  );
};

export default WelcomeTxts;

const LogoHelm = styled(LogoImage)`
  margin-top: 0px;
  margin-bottom: 0px;
`;
