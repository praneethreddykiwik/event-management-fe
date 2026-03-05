import {
  StyledAnchorSmall,
  StyledParagraphError,
  StyledParagraphSmall,
} from "../Styled/Typography.styled";
import { StyledInputLayout } from "./Inputs.styled";

export const InputLayout = ({ label, error, width, helperText, ...props }) => {
  return (
    <StyledInputLayout style={{ flexBasis: width || "100%" }}>
      {label ? <StyledParagraphSmall>{label}</StyledParagraphSmall> : null}
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
