import { useEffect, useRef, useState } from "react";
import { Icon } from "../../Icons/Icons";
import styled from "styled-components";

export const Menu = ({
  icon,
  iconColor = "black",
  children,
  title,
  align = "right",
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => setOpen((prev) => !prev);

  return (
    <Ctn ref={containerRef}>
      <IconBtn onClick={toggleDropdown} type="button">
        <Icon variant={icon} sx={{ color: iconColor }} />
      </IconBtn>

      <DropdownMenu $open={open} $align={align}>
        {/* If children is a function, pass close handler so children can close the menu */}
        {typeof children === "function" ? children(() => setOpen(false)) : children}
      </DropdownMenu>
    </Ctn>
  );
};

const Ctn = styled.div`
  display: inline-block;
  position: relative;
`;

const IconBtn = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
`;

const DropdownMenu = styled.div`
  display: ${({ $open }) => ($open ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  top: 100%;
  ${({ $align }) => ($align === "left" ? "left: 0;" : "right: 0;")}
  background: white;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  z-index: 50;
  min-width: 180px;
  padding: 6px 0;
  margin-top: 4px;
`;
