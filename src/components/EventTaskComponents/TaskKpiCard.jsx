import styled from "styled-components";
import {
  StyledMediumHeading,
  StyledParagraphSmall,
} from "../Styled/Typography.styled";
import { Card } from "../Cards/Cards";
import { camelToWords } from "../../utils/utils";
import { mobile } from "../../theme/media-queries";
import { SkeletonLoaders } from "../UI/Loaders/SkeletonLoaders";

export const TaskKpiCard = ({
  objKey,
  value,
  color,
  onClick,
  selected,
  loading,
}) => {
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
  // flex-basis: calc(20% - 16px);
  flex-basis: calc(20% - 13px);

  cursor: pointer;

  background: ${({ $selected }) => ($selected ? "#e9f8e5" : "")};
  ${mobile`
    flex-grow: 1;
    height: 40px;
    display: flex;
    align-items: center;
    gap: 20px;
  `};
`;

const StyledLabel = styled(StyledParagraphSmall)`
  text-align: left;
  margin-top: 16px;

  ${mobile`
      margin-top: 0px;
  `}
`;
