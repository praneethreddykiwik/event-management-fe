import {
  StyledAnchorSmall,
  StyledParagraphError,
  StyledParagraphSmall,
} from "../Styled/Typography.styled";
import { StyledInputLayout } from "./Inputs.styled";

<<<<<<< HEAD

export const InputLayout = ({ label, error, width, ...props }) => {


  return (
    <StyledCtn style={{ flexBasis: width || "100%" }}>
      {label ? <StyledParagraphSmall>{label} </StyledParagraphSmall> : null}
=======
export const InputLayout = ({ label, error, width, helperText, ...props }) => {
  return (
    <StyledInputLayout style={{ flexBasis: width || "100%" }}>
      {label ? <StyledParagraphSmall>{label}</StyledParagraphSmall> : null}
>>>>>>> 0f622fe8252655418a97eab39802edf16ffa27db
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
