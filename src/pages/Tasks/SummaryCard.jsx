/** @format */

import styled from "styled-components";
import {
  StyledMediumHeading,
  StyledParagraphSmall,
} from "../../components/Styled/Typography.styled";
import { Card } from "../../components/Cards/Cards";

const SummaryCard = ({ value, label, type }) => (
  <Card>
    <Value type={type}>{value}</Value>
    <Label>{label}</Label>
  </Card>
);

const Value = styled(StyledMediumHeading)`
  text-align: left;
  margin: 0;
  color: ${({ theme, type }) =>
    type
      ? theme.badgeColors[`badge-${type}-primary`]
      : theme.colors.textPrimary};
`;

const Label = styled(StyledParagraphSmall)`
  text-align: left;
  margin-top: 10px;
`;
export default SummaryCard;
