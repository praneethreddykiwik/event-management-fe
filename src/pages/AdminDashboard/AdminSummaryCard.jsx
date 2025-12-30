import styled from 'styled-components';
import {
  StyledMediumHeading,
  StyledParagraphSmall,
} from '../../components/Styled/Typography.styled';

const AdminSummaryCard = ({ value, label, type }) => (
  <AdminCard>
    <Value type={type}>{value}</Value>
    <Label>{label}</Label>
  </AdminCard>
);

const AdminCard = styled.div`
  padding: 25px 15px 0;
  border-radius: 14px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

const Value = styled(StyledMediumHeading)`
  width: 100%;
  text-align: left;
  margin: 0;
  color: ${({ theme, type }) =>
    type
      ? theme.badgeColors[`badge-${type}-primary`]
      : theme.colors.textPrimary};
`;

const Label = styled(StyledParagraphSmall)`
  width: 100%;
  text-align: left;
  margin-top: 10px;
`;
export default AdminSummaryCard;
