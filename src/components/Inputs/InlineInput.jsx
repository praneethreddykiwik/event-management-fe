import { useRef, useState } from "react";
import { Icon } from "../Icons/Icons";
import { BaseInput } from "./BaseInput";
import styled from "styled-components";

export const InlineInput = ({ icon = "info", ...props }) => {
  const inpRef = useRef(null);
  const [showSearch, setShowSearch] = useState(false);

  const onBlurLoc = () => {
    if (props.value && props.value.trim()) {
      return;
    }
    setShowSearch(false);
  };

  const onIconClick = () => {
    setShowSearch(!showSearch);
    inpRef.current.focus();
  };

  return (
    <StyledCtn $show={showSearch}>
      <BaseInput {...props} onBlur={onBlurLoc} inpRef={inpRef} />
      {showSearch ? null : <Icon variant={icon} onClick={onIconClick} />}
    </StyledCtn>
  );
};

const StyledCtn = styled.div`
  display: flex;
  align-items: center;

  & .base-input {
    max-width: ${({ $show }) => ($show ? "200px" : "0px")};
    opacity: ${({ $show }) => ($show ? 1 : 0)};
    transform: ${({ $show }) =>
      $show ? "translateX(0)" : "translateX(-10px)"};
    margin-left: ${({ $show }) => ($show ? "8px" : "0px")};

    transition: all 0.4s ease-out;

    ${({ $show }) => (!$show ? "padding: 0 !important" : "")};
  }

  & > div {
    flex-basis: unset !important;
  }
`;
