import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  usersSelector,
  usersFilterAction,
} from "../../redux/users/users.slice";
import FilterCard from "../../components/Cards/FilterCard";

export const UserFilterCards = () => {
  const { roleCounts, selectedRoleFilters } = useSelector(usersSelector);
  const dispatch = useDispatch();

  const handleClick = (key) => {
    if (key === "total") {
      const allSelected = selectedRoleFilters.every((f) => f.selected);

      const updated = selectedRoleFilters.map((f) => ({
        ...f,
        selected: !allSelected,
      }));

      dispatch(usersFilterAction(updated));
      return;
    }

    const updated = selectedRoleFilters.map((f) =>
      f.value === key ? { ...f, selected: !f.selected } : f,
    );

    dispatch(usersFilterAction(updated));
  };

  const isSelected = (key) => {
    if (key === "total") {
      return selectedRoleFilters.every((f) => f.selected);
    }
    return selectedRoleFilters.find((f) => f.value === key)?.selected;
  };

  return (
    <Row>
      {Object.keys(roleCounts).map((key) => (
        <FilterCard
          key={key}
          objKey={key}
          value={roleCounts[key]}
          color="#000000"
          onClick={() => handleClick(key)}
          selected={isSelected(key)}
        />
      ))}
    </Row>
  );
};

const Row = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;
