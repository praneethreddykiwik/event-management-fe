import styled from "styled-components";
import {
  StyledParagraphError,
  StyledParagraphSmall,
} from "../Styled/Typography.styled";

export const InputLayout = ({ label, error, width, ...props }) => {
  return (
    <StyledCtn style={{ flexBasis: width || "100%" }}>
      {label ? <StyledParagraphSmall>{label}</StyledParagraphSmall> : null}
      {props.children}
      {error ? <StyledParagraphError>{error}</StyledParagraphError> : null}
    </StyledCtn>
  );
};

const StyledCtn = styled.div`
  position: relative;
  p {
    text-align: left;
    margin-left: 20px;
  }
`;
