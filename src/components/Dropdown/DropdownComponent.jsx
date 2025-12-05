import { useState, useRef, useEffect } from "react";
import {
  DropdownContainer,
  Avatar,
  StyleImg,
  Menu,
  MenuItem,
  Divider,
  Icon,
} from "./Dropdown.styles";

import { defaultMenuItems } from "./Dropdown.helper";
import Speaker1 from "../../assets/Profile_images/Speaker1.png";

const DropdownComponent = ({
  avatarImage = Speaker1,
  items = defaultMenuItems,
}) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <DropdownContainer ref={menuRef}>
      <Avatar onClick={() => setOpen(!open)}>
        <StyleImg src={avatarImage} alt="avatar" />
      </Avatar>

      {open && (
        <Menu>
          {items.map((item, index) =>
            item.type === "divider" ? (
              <Divider key={index} />
            ) : (
              <MenuItem
                key={index}
                highlight={item.highlight}
                onClick={() => {
                  item.onClick?.();
                  setOpen(false);
                }}
              >
                {item.icon && (
                  <Icon className="material-icons-outlined">{item.icon}</Icon>
                )}
                {item.label}
              </MenuItem>
            )
          )}
        </Menu>
      )}
    </DropdownContainer>
  );
};

export default DropdownComponent;
