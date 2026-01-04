import { useState, useRef, useEffect } from "react";
import {
  DropdownContainer,
  AvatarC,
  StyleImg,
  Menu,
  MenuItem,
  Divider,
  Icon,
} from "./Avatar.styles";

import Speaker1 from "../../assets/Profile_images/Speaker1.png";

const Avatar = ({ avatarImage = Speaker1, items = [], onClick }) => {
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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <DropdownContainer ref={menuRef}>
      <AvatarC onClick={() => setOpen(!open)}>
        <StyleImg src={avatarImage} alt="avatar" />
      </AvatarC>

      <Menu open={open}>
        {items.map((item, index) =>
          item.type === "divider" ? (
            <Divider key={index} />
          ) : (
            <MenuItem
              key={index}
              highlight={item.highlight}
              onClick={() => {
                onClick(item);
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
    </DropdownContainer>
  );
};

export default Avatar;
