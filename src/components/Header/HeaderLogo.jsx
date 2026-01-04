import { useNavigate } from "react-router-dom";
import E_logo from "../../assets/Header_images/E_logo.jpg";
import { paths } from "../../constants/paths";
import styled from "styled-components";

export const HeaderLogo = () => {
  const navigate = useNavigate();
  const goHome = () => navigate(paths.home);

  return (
    <LogoBox onClick={goHome}>
      <LogoImage src={E_logo} alt="logo" />
      <LogoTitle>eventz</LogoTitle>
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
  width: 34px;
  height: 34px;
  border-radius: 8px;
`;

const LogoTitle = styled.span`
  font-size: 22px;
  font-weight: 700;
  color: #222;
`;
