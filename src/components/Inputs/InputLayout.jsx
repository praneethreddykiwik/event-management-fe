import {
  StyledAnchorSmall,
  StyledParagraphError,
  StyledParagraphSmall,
} from "../Styled/Typography.styled";
import { StyledInputLayout } from "./Inputs.styled";
import { validationList } from "../../constants/validations.constants";

export const InputLayout = ({ label, error, width, helperText, ...props }) => {
  const isRequired = props.validations?.includes(validationList.REQUIRED);
  return (
    <StyledInputLayout style={{ flexBasis: width || "100%" }}>
      {label ? <StyledParagraphSmall>{label}{isRequired && " *"}</StyledParagraphSmall> : null}
      {props.children}
      {helperText ? (
        <StyledAnchorSmall target="_blank" href={helperText} left>
          {helperText}
        </StyledAnchorSmall>
      ) : null}
      {error ? <StyledParagraphError>{error}</StyledParagraphError> : null}
    </StyledInputLayout>
  );
};
