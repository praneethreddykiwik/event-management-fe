import { useEffect, useRef, useState } from "react";
import { Icon } from "../../Icons/Icons";
import styled from "styled-components";
import { Button } from "../Button";

export const InlineButton = ({ onClick, small, children, type, icon }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!containerRef.current) return;

      if (!containerRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const iconColors = {
    primary: "#26c867",
    secondary: "black",
    delete: "#d63a2f",
  };

  const iconColor = iconColors[type] || "black";

  return (
    <Ctn ref={containerRef}>
      <IconBtn onClick={() => setOpen((k) => !k)}>
        <Icon variant={icon} sx={{ color: iconColor }} />
      </IconBtn>

      <SlideArea $open={open}>
        <Button
          onClick={onClick}
          small={small}
          sx={{ height: "25px", padding: "0 20px" }}
          type={type}
          whiteText
        >
          {children}
        </Button>
      </SlideArea>
    </Ctn>
  );
};

const Ctn = styled.div`
  display: inline-flex;
  align-items: center;
`;

const IconBtn = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  max-height: 20px;
`;

const SlideArea = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;

  max-width: ${({ $open }) => ($open ? "200px" : "0px")};
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transform: ${({ $open }) => ($open ? "translateX(0)" : "translateX(-10px)")};
  margin-left: ${({ $open }) => ($open ? "8px" : "0px")};

  transition: all 0.25s ease;
`;
