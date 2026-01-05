import styled from "styled-components";

export const Icon = ({ variant, onClick }) => (
  <StyledIcon className="material-symbols-outlined" onClick={onClick}>
    {variant}
  </StyledIcon>
);

const StyledIcon = styled.span`
  cursor: pointer;
`;
