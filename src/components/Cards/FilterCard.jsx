import styled from "styled-components";
import {
  StyledMediumHeading,
  StyledParagraphSmall,
} from "../Styled/Typography.styled";
import { Card } from "./Cards";
import { camelToWords } from "../../utils/utils";
import { mobile } from "../../theme/media-queries";
import { SkeletonLoaders } from "../UI/Loaders/SkeletonLoaders";

const FilterCard = ({ objKey, value, color, onClick, selected, loading }) => {
  if (loading) {
    return <SkeletonLoaders count={1} height={90} width={360} type="card" />;
  }
  return (
    <StyledCard onClick={onClick} $selected={selected}>
      <StyledValue color={color}>{value}</StyledValue>
      <StyledLabel>{camelToWords(objKey)}</StyledLabel>
    </StyledCard>
  );
};
const StyledValue = styled(StyledMediumHeading)`
  text-align: left;
  margin: 0;
  color: ${({ color }) => color};
`;

const StyledCard = styled(Card)`
  cursor: pointer;
  padding: 10px 14px;
  background: ${({ $selected }) => ($selected ? "#e9f8e5" : "")};

  flex-basis: calc(20% - 20px);
  // flex-basis: calc(33.3% - 11px);
  display: flex;
  align-items: center;
  gap: 20px;

  ${mobile`
    // flex-grow: 1;
    // flex: 1;
    // gap: 10px;
    flex-basis: calc(50% - 10px);
  `}

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows["level-15"]};
  }
`;

const StyledLabel = styled(StyledParagraphSmall)`
  text-align: left;
  margin-top: 0px;
`;

export default FilterCard;
