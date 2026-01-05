import styled from "styled-components";
import {
  StyledMediumHeading,
  StyledParagraphSmall,
} from "../../components/Styled/Typography.styled";
import { Card } from "../../components/Cards/Cards";

const AdminSummaryCard = ({ value, label, type, chart }) => (
  <Card>
    <HeaderRow>
      <MainRow>
        <TextBlock>
          <StyledValue type={type}>{value || 0}</StyledValue>
        </TextBlock>

        {chart ? <ChartWrap>{chart}</ChartWrap> : null}
      </MainRow>

      <InfoIcon className="material-symbols-outlined">info</InfoIcon>
    </HeaderRow>

    <LabelRow>
      <StyledLabel>{label}</StyledLabel>
    </LabelRow>
  </Card>
);
const HeaderRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
`;
const MainRow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  flex: 1;
  min-width: 0;
`;
const TextBlock = styled.div`
  min-width: 0;
`;

const StyledValue = styled(StyledMediumHeading)`
  width: 100%;
  text-align: left;
  margin: 0;
  color: ${({ theme, type }) =>
    type
      ? theme.badgeColors[`badge-${type}-primary`]
      : theme.colors.textPrimary};
`;

const ChartWrap = styled.div`
  width: 60px;
  height: 60px;
  flex: 0 0 64px;
`;

const StyledLabel = styled(StyledParagraphSmall)`
  width: 100%;
  text-align: left;
  margin-top: 10px;
`;
const LabelRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

const InfoIcon = styled.span`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: pointer;
`;

export default AdminSummaryCard;
