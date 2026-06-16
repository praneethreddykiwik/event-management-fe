import styled from "styled-components";
import { StyledAnchor } from "./Typography.styled";

export const AnchorLinkPrimary = styled(StyledAnchor)`
  text-decoration: none;
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary};
  margin-left: 4px;
`;
