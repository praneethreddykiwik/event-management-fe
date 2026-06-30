import { useState } from "react";
import styled from "styled-components";
import { Icon } from "../../Icons/Icons";

export const Menu = ({
  icon,
  iconColor = "black",
  children,
  title,
  align = "right",
  type,
  selectedOption = null,   
  options = [],            
  onOptionToggle,          
}) => {
  const [open, setOpen] = useState(false);
  const isActive = !!selectedOption;

  const handleBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setOpen(false);
    }
  };

  return (
    <Ctn tabIndex={-1} onBlur={handleBlur}>
      <IconBtn onClick={() => setOpen((prev) => !prev)} type="button">
        <Icon
          variant={icon}
          style={{ color: isActive ? "#D4AF37" : iconColor }}
        />
      </IconBtn>

      <DropdownMenu $open={open} $align={align}>
        {title && <MenuHeader>{title}</MenuHeader>}

        {typeof children === "function" ? children(() => setOpen(false)) : children}

        {options.length > 0 && (
          <CheckboxListWrapper>
            {options.map((opt) => {
              const isChecked = selectedOption === opt.label;
              return (
                <CheckboxItem
                  key={opt.id}
                  onClick={() => onOptionToggle?.(opt.label, type)}
                >
                  <StyledCheckbox
                    type="checkbox"
                    checked={isChecked}
                    readOnly // Handled by structural row click handler
                  />
                  <CheckboxLabel>{opt.label}</CheckboxLabel>
                </CheckboxItem>
              );
            })}
          </CheckboxListWrapper>
        )}
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

const MenuHeader = styled.div`
  padding: 6px 16px;
  font-size: 11px;
  font-weight: bold;
  text-transform: uppercase;
  color: #70757a;
  border-bottom: 1px solid #f1f3f4;
  margin-bottom: 4px;
  white-space: nowrap;
`;

const CheckboxListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
`;

const CheckboxItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #f1f3f4;
  }
`;

const StyledCheckbox = styled.input`
  appearance: none;
  -webkit-appearance: none;
  width: 18px;
  height: 18px;
  border: 2px solid #b4b8bc;
  border-radius: 4px;
  outline: none;
  background-color: #fff;
  cursor: pointer;
  display: grid;
  place-content: center;
  transition: all 0.15s ease-in-out;

  &:hover {
    border-color: #26c867;
  }

  &:checked {
    background-color: #26c867;
    border-color: #26c867;
  }

  &:checked::before {
    content: "";
    width: 10px;
    height: 6px;
    border-left: 2px solid white;
    border-bottom: 2px solid white;
    transform: rotate(-45deg) translate(1px, -1px);
  }
`;

const CheckboxLabel = styled.span`
  font-size: 13px;
  color: #3c4043;
  user-select: none;
`;
