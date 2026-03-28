import styled from "styled-components";
import useNavigateWithQuery from "../../hooks/useNavigateWithQuery";
import { useEffect, useRef, useState } from "react";
import { paths } from "../../constants/paths";
import { RBACHOC } from "../../RBAC/RBAC";
import { useSelector } from "react-redux";
import { authSelector } from "../../redux/auth/auth.slice";
import { mobile } from "../../theme/media-queries";

export const HeaderMenu = ({ menuOpen }) => {
  const navigate = useNavigateWithQuery();
  const { authStatus } = useSelector(authSelector);

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

  const isLoggedIn = authStatus === "authenticated";

  return (
    <MenuBox ref={menuRef} open={menuOpen}>
      <MenuItem onClick={() => navigate("/")}>Home</MenuItem>

      {isLoggedIn ? (
        <MenuItem onClick={() => toggleDropdown("events")}>
          Events <ArrowIcon $open={openDropdown === "events"} />
          <Dropdown $open={openDropdown === "events"}>
            <DropdownItem onClick={() => navigate("/")}>
              <ItemIcon>event</ItemIcon>
              Upcoming Events
            </DropdownItem>
            <DropdownItem onClick={() => navigate("/")}>
              <ItemIcon>event_note</ItemIcon>
              Current Events
            </DropdownItem>
            <DropdownItem onClick={() => navigate("/events/create-event")}>
              <ItemIcon>add_ad</ItemIcon>
              Create Event
            </DropdownItem>
          </Dropdown>
        </MenuItem>
      ) : null}

      <MenuItem onClick={() => toggleDropdown("venues")}>
        Market <ArrowIcon $open={openDropdown === "venues"} />
        <Dropdown $open={openDropdown === "venues"}>
          <DropdownItem onClick={() => navigate("/venues")}>
            <ItemIcon>map_search</ItemIcon>
            Venues Near Me
          </DropdownItem>
          <DropdownItem onClick={() => navigate(paths.marketPlace)}>
            <ItemIcon>local_mall</ItemIcon>
            Market Place
          </DropdownItem>
        </Dropdown>
      </MenuItem>

      {isLoggedIn ? (
        <MenuItem onClick={() => toggleDropdown("pages")}>
          Pages <ArrowIcon $open={openDropdown === "pages"} />
          <Dropdown $open={openDropdown === "pages"}>
            <RBACHOC perm="admin:panel">
              <DropdownItem onClick={() => navigate(paths.eventsDashboard)}>
                <ItemIcon>event</ItemIcon>
                Admin Dashboard
              </DropdownItem>
            </RBACHOC>
            <DropdownItem onClick={() => navigate(paths.tasks)}>
              <ItemIcon>checklist_rtl</ItemIcon>
              Tasks
            </DropdownItem>
            <RBACHOC perm="vendor:panel">
              <DropdownItem onClick={() => navigate(paths.vendor)}>
                <ItemIcon>storefront</ItemIcon>
                Vendor
              </DropdownItem>
            </RBACHOC>
            <RBACHOC perm="supervisor:panel">
              <DropdownItem onClick={() => navigate(paths.supervisor)}>
                <ItemIcon>storefront</ItemIcon>
                Supervisor
              </DropdownItem>
            </RBACHOC>
            <RBACHOC perm="customer:panel">
              <DropdownItem onClick={() => navigate(paths.customer)}>
                <ItemIcon>emoji_people</ItemIcon>
                Customer
              </DropdownItem>
            </RBACHOC>
            <RBACHOC perm="admin:panel">
              <DropdownItem onClick={() => navigate(paths.userManagement)}>
                <ItemIcon>supervised_user_circle</ItemIcon>
                User Management
              </DropdownItem>
            </RBACHOC>
          </Dropdown>
        </MenuItem>
      ) : null}

      {/* MOBILE EXTRA ICONS */}
      {/* <MobileOnlyContainer>
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
      </MobileOnlyContainer> */}
    </MenuBox>
  );
};

const MenuBox = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  ${mobile`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    height: 65px;
    background: #fff;
    border-top: 1px solid #eee;

    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    align-items: center;
    z-index: 1000;
    
  `}
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
  ${mobile`
      position: relative;
  `}
`;

const ArrowIcon = styled.span.attrs(() => ({
  className: "material-symbols-outlined",
  children: "expand_more",
}))`
  font-size: 20px;
  display: flex;
  align-items: center;
`;

// const MobileOnlyContainer = styled.div`
//   display: none;

//   ${mobile`
//     display: flex;
//     align-items: center;
//     gap: 12px;

//     position: absolute;
//     right: 16px;
//     top: 50%;
//     transform: translateY(-50%);
//   `}
// `;

const Icon = styled.span.attrs(() => ({
  className: "material-symbols-outlined",
}))`
  font-size: 26px;
  cursor: pointer;
  color: #444;

  &:hover {
    color: #1ac468;
  }
  ${mobile`
      display: none;
  `}
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
  z-index: 50;

  opacity: ${(props) => (props.$open ? 1 : 0)};
  visibility: ${(props) => (props.$open ? "visible" : "hidden")};
  transform: ${(props) => (props.$open ? "translateY(0)" : "translateY(10px)")};

  transition: all 0.2s ease;

  ${mobile`
    top: auto;
    bottom: 50px;   
    left: 50%;
    transform: translateX(-22%);
    width: 200px;
  `}
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
