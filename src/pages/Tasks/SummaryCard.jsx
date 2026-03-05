import styled from "styled-components";
import {
  StyledMediumHeading,
  StyledParagraphSmall,
} from "../../components/Styled/Typography.styled";
import { Card } from "../../components/Cards/Cards";
import { camelToWords, getStatusColor } from "../../utils/utils";
import { mobile } from "../../theme/media-queries";
// #b2ffd1
const SummaryCard = ({ taskCountObj }) => (
  <CardsRow>
    {Object.keys(taskCountObj).map((key) => (
      <StyledCard>
        <StyledValue color={getStatusColor(key, taskCountObj)}>
          {taskCountObj[key]}
        </StyledValue>
        <StyledLabel>{camelToWords(key)}</StyledLabel>
      </StyledCard>
    ))}
  </CardsRow>
);

const StyledValue = styled(StyledMediumHeading)`
  text-align: left;
  margin: 0;
  color: ${({ color }) => color};
`;

const StyledCard = styled(Card)`
  flex-basis: 260px;

  ${mobile`
    flex-grow: 1;
    height: 40px;
    display: flex;
    align-items: center;
    gap: 20px;
  `}
`;

const StyledLabel = styled(StyledParagraphSmall)`
  text-align: left;
  margin-top: 16px;

  ${mobile`
      margin-top: 0px;
  `}
`;

const CardsRow = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;
export default SummaryCard;
