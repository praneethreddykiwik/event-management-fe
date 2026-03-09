import styled from "styled-components";

/**
 * Example icons
 * info
 * delete
 * close
 * close-small
 */

export const Icon = ({ variant, onClick, sx, className }) => (
  <StyledIcon
    className={`material-symbols-outlined common-icon ${className}`}
    onClick={onClick}
    sx={sx}
  >
    {variant}
  </StyledIcon>
);

const StyledIcon = styled.span`
  cursor: pointer;
  font-size: 20px;
  ${({ sx }) => ({ ...sx })}
`;
