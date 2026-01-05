import styled from "styled-components";
import {
  StyledMediumHeading,
  StyledParagraphSmall,
} from "../../components/Styled/Typography.styled";
import { Card } from "../../components/Cards/Cards";

const AdminSummaryCard = ({ value, label, type }) => (
  <Card>
    <StyledValue type={type}>{value || 0}</StyledValue>
    <StyledLabel>{label}</StyledLabel>
  </Card>
);

const StyledValue = styled(StyledMediumHeading)`
  width: 100%;
  text-align: left;
  margin: 0;
  color: ${({ theme, type }) =>
    type
      ? theme.badgeColors[`badge-${type}-primary`]
      : theme.colors.textPrimary};
`;

const StyledLabel = styled(StyledParagraphSmall)`
  width: 100%;
  text-align: left;
  margin-top: 10px;
`;

export default AdminSummaryCard;
