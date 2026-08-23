// import E_logo from "../../assets/Header_images/E_logo.jpg";
import Helm_logo from "../../assets/Logos/Helm_logo.svg";
import { paths } from "../../constants/paths";
import styled from "styled-components";
import useNavigateWithQuery from "../../hooks/useNavigateWithQuery";
import { mobile } from "../../theme/media-queries";

export const HeaderLogo = () => {
  const navigate = useNavigateWithQuery();
  const goHome = () => navigate(paths.home);

  return (
    <LogoBox onClick={goHome}>
      <LogoImage src={Helm_logo} alt="logo" />
    </LogoBox>
  );
};

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const LogoImage = styled.img`
  width: 146px;
  height: 60px;
  border-radius: 8px;
  margin-top: -40px;
  margin-bottom: -25px;

  ${mobile`
    margin: 0;
    width: auto;
    height: 48px;
    `}
`;

const LogoSVG = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 8px;
`;

const LogoTitle = styled.span`
  font-size: 22px;
  font-weight: 700;
  color: #222;
`;
