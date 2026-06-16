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

const Avatar = ({
  name = "",
  displayInitials,
  src,
  avatarImage = Speaker1,
  items = [],
  onClick,
  openCondition = false,
  size,
  borderColor,
  style,
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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const initials = name
    .split(" ")
    .map((firstword) => firstword[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  const imagesrc = src || avatarImage;
  const colors = [
    "#1AC468",
    "#2196F3",
    "#FF9800",
    "#9C27B0",
    "#F44336",
    "#009688",
  ];
  const backgroundColor = colors[name.length % colors.length];
  return (
    <DropdownContainer ref={menuRef}>
      <AvatarC
        onClick={() => (openCondition ? setOpen(!open) : setOpen(false))}
        $backgroundColor={backgroundColor}
        $size={size}
        $borderColor={borderColor}
        style={style}
      >
        {displayInitials ? (
          <span>{initials}</span>
        ) : (
          <StyleImg src={imagesrc} alt="avatar" />
        )}
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
          ),
        )}
      </Menu>
    </DropdownContainer>
  );
};

export default Avatar;
