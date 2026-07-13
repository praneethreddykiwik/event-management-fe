import { useDispatch, useSelector } from "react-redux";
import {
  usersSelector,
  usersFilterAction,
} from "../../redux/users/users.slice";
import {
  isFilterSelected,
  updateFilters,
} from "../../components/Filters/FilterBoxes/FilterBoxes.helper";
import FilterBoxes from "../../components/Filters/FilterBoxes/FilterBoxes";

export const UserFilterCards = () => {
  const { roleCounts, selectedRoleFilters } = useSelector(usersSelector);
  const dispatch = useDispatch();

  const handleClick = (key) => {
    const updated = updateFilters(
      key,
      selectedRoleFilters,
      "total",
      null,
      "value",
    );

    dispatch(usersFilterAction(updated));
  };

  return (
    <FilterBoxes
      countObj={roleCounts}
      getColor={() => "#000000"}
      onCardClick={handleClick}
      isSelected={(key) =>
        isFilterSelected(key, selectedRoleFilters, "total", null, "value")
      }
    />
  );
};
