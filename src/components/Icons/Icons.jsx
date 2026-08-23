import styled from "styled-components";

/**
 * Example icons
 * info
 * delete
 * close
 * close-small
 */

export const Icon = ({
  variant,
  onClick,
  sx,
  className,
  children,
  selected,
  title,
}) => (
  <StyledIcon
    className={`material-symbols-outlined common-icon ${className}`}
    onClick={onClick}
    sx={sx}
    $selected={selected}
    title={title}
  >
    {variant || children}
  </StyledIcon>
);

const StyledIcon = styled.span`
  cursor: pointer;
  font-size: 20px;
  ${({ $selected }) => ($selected ? `text-decoration: underline;` : "")}
  ${({ sx }) => ({ ...sx })}
`;
