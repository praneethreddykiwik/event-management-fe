import styled from "styled-components";
import { StyledParagraphSmall } from "./Typography.styled";

export const StyledBadge = styled(StyledParagraphSmall)`
  white-space: nowrap;
  width: fit-content;
  height: 25px;
  padding: ${({ theme }) =>
    `${theme.spacings["spacing-1"]} ${theme.spacings["spacing-3"]}`};
  border-radius: 18px;
  font-weight: 700;
  color: ${({ theme, type }) => theme.badgeColors[`badge-${type}-primary`]};
  background-color: ${({ theme, type }) =>
    theme.badgeColors[`badge-${type}-transparent`]};
`;

export const StyledBadge2 = styled(StyledParagraphSmall)`
  color: ${({ theme, type }) => theme.badgeColors[`badge-${type}-primary`]};
  background-color: ${({ theme, type }) =>
    theme.badgeColors[`badge-${type}-transparent`]};
  padding: 2px 2px 2px 12px;
  border-radius: 18px;

  display: flex;
  align-items: center;
  gap: 10px;
}
`;
