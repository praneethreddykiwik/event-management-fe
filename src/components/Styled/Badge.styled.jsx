import styled from "styled-components";
import { StyledParagraphSmall } from "./Typography.styled";

export const StyledBadge = styled(StyledParagraphSmall)`
  max-width: 150px;
  height: 20px;
  padding: ${({ theme }) =>
    `${theme.spacings["spacing-1"]} ${theme.spacings["spacing-3"]}`};
  border-radius: 18px;
  font-weight: 700;
  color: ${({ theme, type }) => theme.badgeColors[`badge-${type}-primary`]};
  background-color: ${({ theme, type }) =>
    theme.badgeColors[`badge-${type}-transparent`]};
`;

// export const StyledCompletedBadge = styled(StyledBadge)`
//   color: ${({ theme }) => theme.colors["badge-completed-primary"]};
//   background-color: ${({ theme }) => theme.colors["primary-transparent"]};
// `;

// export const StyledInProgressBadge = styled(StyledBadge)`
//   color: ${({ theme }) => theme.colors["badge-inprogress-primary"]};
//   background-color: ${({ theme }) =>
//     theme.colors["badge-inprogress-transparent"]};
// `;

// export const StyledPendingBadge = styled(StyledBadge)`
//   color: ${({ theme }) => theme.colors["badge-pending-primary"]};
//   background-color: ${({ theme }) =>
//     theme.colors["badge-pending-primary-transparent"]};
// `;

// export const StyledAcceptedBadge = styled(StyledBadge)`
//   color: ${({ theme }) => theme.colors["badge-pending-color"]};
//   background-color: ${({ theme }) =>
//     theme.colors["inactive-color-transparent"]};
// `;
