import styled from "styled-components";
import { Button } from "../Buttons/Button";
import { InputLayout } from "./InputLayout";
import { InputDefault } from "./Inputs.styled";
import { mobile } from "../../theme/media-queries";

export const BaseInput = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  disabled,
  error,
  width,
  withButton,
  onClickBtn,
  helperText,
}) => {
  const layoutProps = {
    label,
    error,
    width,
    helperText,
  };
  return (
    <InputLayout {...layoutProps}>
      <StyledCtn withButton={withButton}>
        <InputDefault
          name={name}
          type={"text"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          $hasError={!!error}
        />
        {withButton ? (
          <Button
            className="withButton"
            icon={withButton.btnIcon}
            whiteText
            onClick={onClickBtn}
          >
            {withButton.btnText}
          </Button>
        ) : null}
      </StyledCtn>
    </InputLayout>
  );
};

const StyledCtn = styled.div`
  position: relative;

  ${({ withButton }) =>
    withButton
      ? `
          input {
            padding-right: 180px;
            }
            ${mobile`input {padding-right: 100px;}`}}
        `
      : ``}

  .withButton {
    top: 1px;
    right: 1px;
    max-width: 26%;
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
    .withButton {
      padding: 0;
      width: 81px;
      min-width: 0px;
    }

    .input-text {
      display: none;
    }
  `}
`;
