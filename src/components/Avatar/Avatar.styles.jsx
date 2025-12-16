import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const Avatar = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
`;

export const StyleImg = styled.img`
  width: 100%;
  height: 100%;
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
