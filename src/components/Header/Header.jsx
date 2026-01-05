import styled from "styled-components";
import { useState } from "react";
import { paths } from "../../constants/paths";
import { Button } from "../Buttons/Button";
import Avatar from "../Avatar/Avatar";

import { useDispatch, useSelector } from "react-redux";
import { authSelector } from "../../redux/auth/auth.slice";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderMenu } from "./HeaderMenu";

import { userProfileMeta } from "../../metadata/userProfileMetadata";
import { logoutAction } from "../../redux/auth/auth.actions";
import useNavigateWithQuery from "../../hooks/useNavigateWithQuery";

const Header = () => {
  const navigate = useNavigateWithQuery();
  const dispatch = useDispatch();

  const { authStatus } = useSelector(authSelector);

  const isLoggedIn = authStatus === "authenticated";
  const [menuOpen] = useState(false);

  const goLogin = () => navigate(paths.login);

  const onClickMenu = (item) => {
    if (item.label === "Logout") {
      dispatch(logoutAction());
      return;
    }

    if (item.navigate) {
      navigate(item.navigate);
    }
  };

  return (
    <Navbar>
      <HeaderLogo />

      {/* CENTER MENU */}
      <HeaderMenu
        menuOpen={menuOpen}
        isLoggedIn={isLoggedIn}
        goLogin={goLogin}
      />

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
              <Avatar items={userProfileMeta} onClick={onClickMenu} />
            </AvatarBox>
          </>
        )}
      </RightBox>

      {/* RIGHT ICONS (Mobile only) */}
      {/* <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
        <Icon aria-label={menuOpen ? "Close menu" : "Open menu"}>
          {menuOpen ? "close" : "menu"}
        </Icon>
      </Hamburger> */}
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

const RightBox = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;

  @media (max-width: 900px) {
    display: none;
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
