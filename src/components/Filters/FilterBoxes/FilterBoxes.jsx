import styled from "styled-components";
import FilterCard from "../../Cards/FilterCard";
import { SkeletonLoaders } from "../../UI/Loaders/SkeletonLoaders";

const FilterBoxes = ({
  countObj,
  getColor,
  onCardClick,
  isSelected,
  isLoading,
}) => {
  if (isLoading) {
    return <SkeletonLoaders count={9} height={50} type="card" width={200} />;
  }

  return (
    <CardsRow>
      {Object.keys(countObj).map((key) => (
        <FilterCard
          key={key}
          objKey={key}
          value={countObj[key]}
          color={getColor(key)}
          onClick={() => onCardClick(key)}
          selected={isSelected(key)}
        />
      ))}
    </CardsRow>
  );
};

const CardsRow = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

export default FilterBoxes;
