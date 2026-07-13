import { getStatusColor } from "../../../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { eventsSelector } from "../../../redux/events/events.slice";
import { INITIAL_FILTERS } from "../../../constants/events.constants";
import { eventsFilterAction } from "../../../redux/events/events.actions";
import {
  isFilterSelected,
  updateFilters,
} from "../../../components/Filters/FilterBoxes/FilterBoxes.helper";
import FilterBoxes from "../../../components/Filters/FilterBoxes/FilterBoxes";

export const EventsFilterCards = () => {
  const { eventsStatusCounts, selectedEventFilters } =
    useSelector(eventsSelector);

  const dispatch = useDispatch();

  const onClickFilter = (key) => {
    const updated = updateFilters(
      key,
      selectedEventFilters,
      "total",
      INITIAL_FILTERS,
      "value",
    );

    dispatch(eventsFilterAction(updated));
  };

  return (
    <FilterBoxes
      countObj={eventsStatusCounts}
      getColor={(key) => getStatusColor(key, eventsStatusCounts)}
      onCardClick={onClickFilter}
      isSelected={(key) =>
        isFilterSelected(
          key,
          selectedEventFilters,
          "total",
          INITIAL_FILTERS,
          "value",
        )
      }
    />
  );
};
