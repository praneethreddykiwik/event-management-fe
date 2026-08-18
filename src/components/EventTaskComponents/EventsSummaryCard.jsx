import styled from "styled-components";
import {
  StyledMediumHeading,
  StyledParagraphSmall,
} from "../Styled/Typography.styled";
import { Card } from "../Cards/Cards";
import { mobile } from "../../theme/media-queries";
import { SkeletonLoaders } from "../UI/Loaders/SkeletonLoaders";

const EventsSummaryCard = ({ value, label, type, chart, inline, loading }) => {
  // if (loading) {
  //   return <SkeletonLoaders count={1} height={120} width={340} type="card" />;
  // }
  return (
    <Ctn $inline={inline} className="events-summary-card">
      <TextBox $inline={inline}>
        <StyledValue type={type}>{value || 0}</StyledValue>
        <StyledLabel>{label}</StyledLabel>
      </TextBox>

      {chart ? <ChartWrap $inline={inline}>{chart}</ChartWrap> : null}
    </Ctn>
  );
};
const Ctn = styled(Card)`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;

  ${mobile`
    flex-direction: ${({ $inline }) => ($inline ? "row" : "column")};
    align-items: center;
    gap: 12px;
  `}
`;

const TextBox = styled.div`
  text-align: ${({ $inline }) => ($inline ? "left" : "center")};
`;

const StyledValue = styled(StyledMediumHeading)`
  color: ${({ theme, type }) =>
    type
      ? theme.badgeColors[`badge-${type}-primary`]
      : theme.colors.textPrimary};
`;

const ChartWrap = styled.div`
  flex-shrink: 0;
  ${({ $inline }) =>
    $inline &&
    `
      margin-left: 8px;
    `}
`;

const StyledLabel = styled(StyledParagraphSmall)`
  margin-top: 10px;
`;
export default EventsSummaryCard;
