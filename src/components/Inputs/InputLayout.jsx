import {
  StyledAnchorSmall,
  StyledParagraphError,
  StyledParagraphSmall,
} from "../Styled/Typography.styled";
import { StyledInputLayout } from "./Inputs.styled";
import { validationList } from "../../constants/validations.constants";
import styled from "styled-components";
import { Icon } from "../Icons/Icons";

export const InputLayout = ({
  label,
  error,
  width,
  helperText,
  clearHelperText,
  ...props
}) => {
  const onCopy = () => {
    const tempInput = document.createElement("input");
    tempInput.value = helperText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  };

  const isRequired = props.validations?.includes(validationList.REQUIRED);
  return (
    <StyledInputLayout style={{ flexBasis: width || "100%" }}>
      {label ? (
        <StyledParagraphSmall>
          {label}
          {isRequired && " *"}
        </StyledParagraphSmall>
      ) : null}
      {props.children}
      {helperText ? (
        <HelperTextCtn>
          <StyledAnchorSmall target="_blank" href={helperText} left>
            {helperText}
          </StyledAnchorSmall>
          <Icon
            variant="content_copy"
            className="content_copy"
            onClick={onCopy}
          />
          <Icon variant="cancel" className="cancel" onClick={clearHelperText} />
        </HelperTextCtn>
      ) : null}
      {error ? <StyledParagraphError>{error}</StyledParagraphError> : null}
    </StyledInputLayout>
  );
};

const HelperTextCtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 20px;

  .content_copy {
    margin-left: auto;
    margin-right: 10px;
    color: #26c867;
  }

  .cancel {
    // color: red;
  }
`;
