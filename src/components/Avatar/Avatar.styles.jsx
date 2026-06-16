import styled from "styled-components";
import { mobile } from "../../theme/media-queries";
export const DropdownContainer = styled.div`
  // position: relative;
  display: inline-block;
`;

export const AvatarC = styled.div`
  width: ${({ $size }) => {
    if ($size === "small") return "24px";
    if ($size === "large") return "80px";
    if ($size === "xlarge") return "110px";
    return "42px";
  }};

  height: ${({ $size }) => {
    if ($size === "small") return "24px";
    if ($size === "large") return "80px";
    if ($size === "xlarge") return "110px";
    return "42px";
  }};
  border: ${({ $borderColor, $size }) =>
    $size === "small" ? `2px solid ${$borderColor || "#0084ff"}` : "none"};
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: ${({ $size }) => ($size === "xlarge" ? "30px" : "")};

  ${mobile`
    width: ${({ $size }) =>
      $size === "xlarge" ? "80px" : $size === "large" ? "65px" : ""};

    height: ${({ $size }) =>
      $size === "xlarge" ? "80px" : $size === "large" ? "65px" : ""};

    margin: ${({ $size }) => ($size === "xlarge" ? "10px auto" : "")};
  `}
`;

export const StyleImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Menu = styled.div`
  position: absolute;
  top: 55px;
  right: 0;
  width: clamp(150px, 40vw, 190px);
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 8px 0;
  z-index: 100;

  position: absolute;
  right: 0;

  min-height: 100px;

  background: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  opacity: ${({ open }) => (open ? 1 : 0)};
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-8px)")};

  pointer-events: ${({ open }) => (open ? "auto" : "none")};

  transition:
    opacity 0.2s ease,
    transform 0.2s ease;

  z-index: 1000;
`;

export const MenuItem = styled.div`
  padding: 10px 16px;
  display: flex;
  gap: 12px;
  align-items: center;
  cursor: pointer;
  color: #333;

  background: ${({ highlight }) => (highlight ? "#e6f7e9" : "transparent")};
  font-weight: ${({ highlight }) => (highlight ? "600" : "400")};

  &:hover {
    background: #e6f7e9;
    font-weight: 600;
  }
`;

export const Divider = styled.div`
  height: 1px;
  background: #e6e6e6;
  margin: 6px 0;
`;

export const Icon = styled.span`
  font-size: 20px;
  color: #333;
`;
