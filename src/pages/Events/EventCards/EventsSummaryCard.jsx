import styled from "styled-components";
import {
  StyledMediumHeading,
  StyledParagraphSmall,
} from "../../../components/Styled/Typography.styled";
import { Card } from "../../../components/Cards/Cards";

const EventsSummaryCard = ({ value, label, type, chart }) => (
  <Ctn>
    <TextBox>
      <StyledValue type={type}>{value || 0}</StyledValue>
      <StyledLabel>{label}</StyledLabel>
    </TextBox>
    {chart ? <ChartWrap>{chart}</ChartWrap> : null}
  </Ctn>
);

const Ctn = styled(Card)`
  flex-grow: 1;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const TextBox = styled.div``;

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
  // width: 60px;
  // height: 60px;
  // flex: 0 0 64px;
`;

const StyledLabel = styled(StyledParagraphSmall)`
  width: 100%;
  text-align: left;
  margin-top: 10px;
`;
export default EventsSummaryCard;
