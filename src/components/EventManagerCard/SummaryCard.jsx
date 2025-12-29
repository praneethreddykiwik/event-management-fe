/** @format */

import styled from 'styled-components';
import { StyledMediumHeading, StyledParagraphSmall } from '../Styled/Typography.styled';

const SummaryCard = ({ value, label, type }) => (
  <Card>
    <Value type={type}>{value}</Value>
    <Label>{label}</Label>
  </Card>
);

const Card = styled.div`
  padding: 25px 15px 0;
  border-radius: 14px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

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
