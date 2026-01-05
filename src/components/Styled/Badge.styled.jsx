import styled from "styled-components";
import { StyledParagraphSmall } from "./Typography.styled";

export const StyledBadge = styled(StyledParagraphSmall)`
  white-space: nowrap;
  width: fit-content;
  height: 20px;
  padding: ${({ theme }) =>
    `${theme.spacings["spacing-1"]} ${theme.spacings["spacing-3"]}`};
  border-radius: 18px;
  font-weight: 700;
  color: ${({ theme, type }) => theme.badgeColors[`badge-${type}-primary`]};
  background-color: ${({ theme, type }) =>
    theme.badgeColors[`badge-${type}-transparent`]};
`;