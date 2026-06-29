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

  const data = {
    events: {
      label: "Events",
      dropdownKey: "events",
      shouldLoggedIn: true,
      ddArr: [
        { icon: "event", label: "Upcoming Events", path: "/" },
        { icon: "event_note", label: "Current Events", path: "/" },
        {
          icon: "add_ad",
          label: "Create Event",
          path: paths.createEvent,
          perm: "event:edit",
        },
      ],
    },
    market: {
      label: "Market",
      dropdownKey: "market",
      shouldLoggedIn: false,
      ddArr: [
        { icon: "local_mall", label: "Market Place", path: paths.marketPlace },
        { icon: "map_search", label: "Venues Near Me", path: "/venues" },
      ],
    },
    pages: {
      label: "Pages",
      dropdownKey: "pages",
      shouldLoggedIn: false,
      ddArr: [
        {
          icon: "event",
          label: "Events",
          path: paths.eventsDashboard,
          perm: "admin:panel",
        },
        {
          icon: "checklist_rtl",
          label: "Tasks",
          path: paths.tasks,
          perm: "task:view",
        },
        {
          icon: "storefront",
          label: "Vendor",
          path: paths.tasks,
          perm: "vendor:panel",
        },
        {
          icon: "storefront",
          label: "Supervisor",
          path: paths.supervisor,
          perm: "supervisor:panel",
        },
        {
          icon: "award_star",
          label: "QA",
          path: paths.qa,
          perm: "qa:panel",
        },
        {
          icon: "supervised_user_circle",
          label: "User Management",
          path: paths.userManagement,
          perm: "admin:panel",
        },
        {
          icon: "info",
          label: "About Us",
          path: paths.aboutUs,
        },
      ],
    },
  };

  return (
    <MenuBox ref={menuRef} open={menuOpen}>
      <MenuItem onClick={() => navigate("/")}>Home</MenuItem>

      {Object.keys(data).map((key) => {
        const mainDat = data[key];
        const authCheckFail = mainDat.shouldLoggedIn && !isLoggedIn;
        if (authCheckFail) {
          return null;
        }

        const dd = openDropdown === mainDat.dropdownKey;
        return (
          <MenuItem onClick={() => toggleDropdown(mainDat.dropdownKey)}>
            {mainDat.label} <ArrowIcon $open={dd} />
            <Dropdown $open={dd}>
              {mainDat.ddArr.map((option) =>
                option.perm ? (
                  <RBACHOC perm={option.perm}>
                    <DropdownItem onClick={() => navigate(option.path)}>
                      <ItemIcon>{option.icon}</ItemIcon>
                      {option.label}
                    </DropdownItem>
                  </RBACHOC>
                ) : (
                  <DropdownItem onClick={() => navigate(option.path)}>
                    <ItemIcon>{option.icon}</ItemIcon>
                    {option.label}
                  </DropdownItem>
                ),
              )}
            </Dropdown>
          </MenuItem>
        );
      })}
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
    background: ${({ theme }) => theme.colors.primaryLight};
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
