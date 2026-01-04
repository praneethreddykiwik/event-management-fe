import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../Buttons/Button";
import Avatar from "../Avatar/Avatar";

export const HeaderMenu = ({ menuOpen, isLoggedIn, goLogin }) => {
  const navigate = useNavigate();

  return (
    <MenuBox open={menuOpen}>
      <MenuItem onClick={() => navigate("/")}>Home</MenuItem>
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
              <Avatar />
            </AvatarBox>
          </>
        )}
      </MobileOnlyContainer>
    </MenuBox>
  );
};

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
    display: ${(props) => (props.open ? "flex" : "none")};
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

const ArrowIcon = styled.span.attrs(() => ({
  className: "material-symbols-outlined",
  children: "expand_more",
}))`
  font-size: 20px;
  display: flex;
  align-items: center;
`;

const MobileOnlyContainer = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: flex;
    gap: 22px;
    align-items: center;
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
