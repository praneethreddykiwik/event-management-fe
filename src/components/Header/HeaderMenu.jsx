import styled from "styled-components";
import { Button } from "../Buttons/Button";
import Avatar from "../Avatar/Avatar";
import useNavigateWithQuery from "../../hooks/useNavigateWithQuery";
import { useEffect, useRef, useState } from "react";
import { paths } from "../../constants/paths";

export const HeaderMenu = ({ menuOpen, isLoggedIn, goLogin }) => {
  const navigate = useNavigateWithQuery();
  const [openDropdown, setOpenDropdown] = useState(null);
  const menuRef = useRef(null);

  const toggleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const onClick = () => {};

  return (
    <MenuBox ref={menuRef} open={menuOpen}>
      <MenuItem onClick={() => navigate("/")}>Home</MenuItem>

      <MenuItem onClick={() => toggleDropdown("events")}>
        Events <ArrowIcon $open={openDropdown === "events"} />
        <Dropdown $open={openDropdown === "events"}>
          <DropdownItem onClick={() => navigate("/")}>
            <ItemIcon>event</ItemIcon>
            Upcoming Events
          </DropdownItem>
          <DropdownItem onClick={() => navigate("/")}>
            <ItemIcon>schedule</ItemIcon>
            Current Events
          </DropdownItem>
          <DropdownItem onClick={() => navigate("/")}>
            <ItemIcon>add_circle</ItemIcon>
            Create Event
          </DropdownItem>
        </Dropdown>
      </MenuItem>

      <MenuItem onClick={() => toggleDropdown("venues")}>
        Venues <ArrowIcon $open={openDropdown === "venues"} />
        <Dropdown $open={openDropdown === "venues"}>
          <DropdownItem onClick={() => navigate("/")}>
            <ItemIcon>location_on</ItemIcon>
            Venues Near Me
          </DropdownItem>
        </Dropdown>
      </MenuItem>

      <MenuItem onClick={() => toggleDropdown("pages")}>
        Pages <ArrowIcon $open={openDropdown === "pages"} />
        <Dropdown $open={openDropdown === "pages"}>
          <DropdownItem onClick={() => navigate(paths.adminDashboard)}> 
            <ItemIcon>admin_panel_settings</ItemIcon>
            Admin
          </DropdownItem>
          <DropdownItem onClick={() => navigate(paths.eventManager)}>
            <ItemIcon>dashboard</ItemIcon>
            Event Manager
          </DropdownItem>
          <DropdownItem onClick={() => navigate("/")}>
            <ItemIcon>dashboard</ItemIcon>
            User Management
          </DropdownItem>
        </Dropdown>
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

const Dropdown = styled.div`
  position: absolute;
  top: 40px;
  left: 0;
  width: clamp(150px, 40vw, 200px);
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
  padding: 8px 0;
  text-align: left;
  z-index: 50;

  opacity: ${(props) => (props.$open ? 1 : 0)};
  visibility: ${(props) => (props.$open ? "visible" : "hidden")};
  transform: ${(props) => (props.$open ? "translateY(0)" : "translateY(10px)")};

  transition: all 0.2s ease;
`;

const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 18px;
  font-size: 15px;
  color: #333;
  cursor: pointer;

  &:hover {
    background: #e6f7e9;
  }
`;

const ItemIcon = styled.span.attrs(() => ({
  className: "material-symbols-outlined",
}))`
  font-size: 20px;
  color: #444;

  ${DropdownItem}:hover & {
    color: #1ac468;
  }
`;
