import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { paths } from "../../constants/paths";
import { Button } from "../Buttons/Button";
import AvatarComponent from "../Avatar/AvatarComponent";
import E_logo from "../../assets/Header_images/E_logo.jpg";

const Header = () => {
  const navigate = useNavigate();

  const [isLoggedIn] = useState(false); // replace with auth state later
  const [menuOpen, setMenuOpen] = useState(false);

  const goHome = () => navigate(paths.home);
  const goLogin = () => navigate(paths.login);

  return (
    <Navbar>
      {/* LEFT LOGO */}
      <LogoBox onClick={goHome}>
        <LogoImage src={E_logo} alt="logo" />
        <LogoTitle>eventz</LogoTitle>
      </LogoBox>

      {/* CENTER MENU */}
      <MenuBox open={menuOpen}>
        <MenuItem>Home</MenuItem>
        <MenuItem>
          Events <ArrowIcon />
        </MenuItem>
        <MenuItem>
          Venues <ArrowIcon />
        </MenuItem>

        {/* MOBILE EXTRA ICONS */}
        <MobileOnlyContainer>
          <Icon aria-label="Search">search</Icon>
          <Icon aria-label="Language">language</Icon>

          {!isLoggedIn ? (
            <Button onClick={goLogin}>Login</Button>
          ) : (
            <>
              <Icon aria-label="Notifications">notifications</Icon>
              <AvatarBox>
                <AvatarComponent />
              </AvatarBox>
            </>
          )}
        </MobileOnlyContainer>
      </MenuBox>

      {/* RIGHT ICONS (Desktop Only) */}
      <RightBox>
        <Icon aria-label="Search">search</Icon>
        <Icon aria-label="Language">language</Icon>

        {!isLoggedIn ? (
          <Button onClick={goLogin}>Login</Button>
        ) : (
          <>
            <Icon aria-label="Notifications">notifications</Icon>
            <AvatarBox>
              <AvatarComponent />
            </AvatarBox>
          </>
        )}
      </RightBox>

      {/* MOBILE MENU ICON */}
      <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
        <Icon aria-label={menuOpen ? "Close menu" : "Open menu"}>
          {menuOpen ? "close" : "menu"}
        </Icon>
      </Hamburger>
    </Navbar>
  );
};

export default Header;

const Navbar = styled.header`
  padding: 12px 40px;
  background: #ffffff;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    padding: 12px 20px;
  }
`;

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

const MenuBox = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: 900px) {
    position: absolute;
    flex-direction: column;
    top: 70px;
    left: 0;
    width: 100%;
    background: #fff;
    padding: 20px 0;
    border-top: 1px solid #eee;
    display: ${props => (props.open ? "flex" : "none")};
    z-index: 20;
  }
`;

const MenuItem = styled.div`
  font-size: 16px;
  color: #444;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 6px;
  position: relative;

  transition: color 0.2s ease;

  &:hover {
    color: #1ac468;
  }

  &:hover::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background: #1ac468;
    bottom: -4px;
    left: 0;
    border-radius: 6px;
  }
`;

const RightBox = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;

  @media (max-width: 900px) {
    display: none;
  }
`;

const MobileOnlyContainer = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: flex;
    gap: 22px;
    align-items: center;
  }
`;

const AvatarBox = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 900px) {
    display: block;
  }
`;

const Icon = styled.span.attrs(() => ({
  className: "material-symbols-outlined",
}))`
  font-size: 26px;
  cursor: pointer;
  color: #444;

  &:hover {
    color: #1ac468;
  }
`;

const ArrowIcon = styled.span.attrs(() => ({
  className: "material-symbols-outlined",
  children: "expand_more",
}))`
  font-size: 20px;
  display: flex;
  align-items: center;
`;
