import { useState, useRef, useEffect } from "react";
import Speaker1 from "../../assets/Profile_images/Speaker1.png";
import styled from "styled-components";

const ProfileDropdown = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  
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
      <Avatar onClick={() => setOpen(!open)}>
        <StyleImg src={Speaker1} alt="profile" />
      </Avatar>

      {open && (
        <Menu>
          <MenuItem highlight>
            <StyleSpan className="material-icons-outlined">account_circle</StyleSpan>
            Profile
          </MenuItem>

          <MenuItem>
            <StyleSpan className="material-icons-outlined">settings</StyleSpan>
            Settings
          </MenuItem>

          <MenuItem>
            <StyleSpan className="material-icons-outlined">bookmark_border</StyleSpan>
            Bookmark
          </MenuItem>

          <MenuItem>
            <StyleSpan className="material-icons-outlined">help_outline</StyleSpan>
            Help
          </MenuItem>

          <Divider />

          <MenuItem>
            <StyleSpan className="material-icons-outlined">logout</StyleSpan>
            Log out
          </MenuItem>

        </Menu>
      )}
    </DropdownContainer>
  );
};

export default ProfileDropdown;
const StyleSpan = styled.div``;
const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;
const StyleImg = styled.img`
 width: 100%;
    height: 100%;
    `;
const Avatar = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;

 

  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
  }
`;

const Menu = styled.div`
  position: absolute;
  top: 55px;
  right: 0;
  width: clamp(150px, 40vw, 190px);   /* responsive width */

  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  padding: 8px 0;
  z-index: 100;

  @media (max-width: 480px) {
    top: 45px;
    border-radius: 10px;
  }
`;

const MenuItem = styled.div`
  padding: 10px 16px;
  display: flex;
  gap: 12px;
  align-items: center;
  cursor: pointer;
  color: #333;

  background: ${({ highlight }) => (highlight ? "#e6f7e9" : "transparent")};
  font-weight: ${({ highlight }) => (highlight ? "600" : "400")};

  .material-icons-outlined {
    font-size: 20px;
    color: #333;
  }

  &:hover {
    background: #e6f7e9;     /* same as highlight */
    font-weight: 600;
  }
`;


const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #e6e6e6;
  margin: 6px 0;
`;
