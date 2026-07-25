import styled from "styled-components";
import { Button } from "../Buttons/Button";
import { InputLayout } from "./InputLayout";
import { InputDefault } from "./Inputs.styled";
import { mobile } from "../../theme/media-queries";
import { useRef, useState } from "react";

export const InlineInput = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  disabled,
  error,

  validations,
  icon,

  width,
  helperText,
  clearHelperText,
  onClickHelperText,
  // inpRef,
}) => {
  const inpRef = useRef(null);
  const [showSearch, setShowSearch] = useState(false);

  const onBlurLoc = (e) => {
    if (!value?.trim()) {
      setShowSearch(false);
    }
    onBlur?.(e); // add required parameters
  };

  const onIconClick = () => {
    setShowSearch(!showSearch);

    requestAnimationFrame(() => inpRef.current.focus());
  };

  const layoutProps = {
    label,
    name,
    error,
    width,
    helperText,
    clearHelperText,
    validations,
    onClickHelperText,
  };
  return (
    <StyledCtn $show={showSearch} $width={width}>
      <InputLayout {...layoutProps}>
        <InputDefault
          name={name}
          type={"text"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          $hasError={!!error}
          ref={inpRef}
          className="base-input"
          onBlur={onBlurLoc}
        />
        {icon ? (
          <Button
            className="input-icon"
            icon={icon}
            whiteText
            onClick={onIconClick}
          />
        ) : null}
      </InputLayout>
    </StyledCtn>
  );
};

const StyledCtn = styled.div`
  width: ${({ $width }) => $width || "280px"};
  height: 40px;

  & .base-input {
    clip-path: ${({ $show }) =>
      $show ? "inset(0 0 0 0)" : "inset(0 0 0 140px)"};

    transition:
      clip-path 300ms cubic-bezier(0.4, 0, 0.2, 1),
      opacity 200ms ease;
    // will-change: clip-path;
    opacity: ${({ $show }) => ($show ? 1 : 0)};
  }

  .input-icon {
    top: 1px;
    right: 1px;
    max-width: 80px;
    min-width: 80px;
    position: absolute;

    height: 38px;
    min-height: 38px;

    .input-text {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .common-icon {
      font-size: 20px;
    }
  }

  ${mobile`
    .input-icon {
      padding: 0;
      width: 81px;
      min-width: 0px;
    }

    .input-text {
      display: none;
    }

    width: 100%;
  `}
`;
