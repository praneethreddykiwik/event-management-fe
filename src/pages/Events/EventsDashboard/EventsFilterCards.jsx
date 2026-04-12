import styled from "styled-components";
import { getStatusColor } from "../../../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { eventsSelector } from "../../../redux/events/events.slice";
import FilterCard from "../../../components/Cards/FilterCard";
import { INITIAL_FILTERS } from "../../../constants/events.constants";
import { eventsFilterAction } from "../../../redux/events/events.actions";

export const EventsFilterCards = () => {
  const { eventsStatusCounts, selectedEventFilters, eventsLoading } =
    useSelector(eventsSelector);

  const dispatch = useDispatch();

  const onClickFilter = (selectedKey) => {
    if (selectedKey === "total") {
      totalClickHandler();
      return;
    }
    const arr = selectedEventFilters.map((el) => {
      if (el.value === selectedKey) {
        return { ...el, selected: !el.selected };
      }
      return el;
    });

    dispatch(eventsFilterAction(arr));
  };

  const totalClickHandler = () => {
    const isEverySelected = isEveryFilterSelected();
    const arr = selectedEventFilters.map((el) => ({
      ...el,
      selected: !isEverySelected,
    }));
    dispatch(eventsFilterAction(arr));
  };

  const isEveryFilterSelected = () => {
    return INITIAL_FILTERS.every((es) => {
      const record = selectedEventFilters.find((sf) => sf.value === es.value);
      return record.selected;
    });
  };

  const isFilterSelected = (key) => {
    if (key === "total") {
      return isEveryFilterSelected();
    }

    return selectedEventFilters.find((el) => el.value === key)?.selected;
  };

  return (
    <CardsRow>
      {Object.keys(eventsStatusCounts).map((key) => (
        <FilterCard
          objKey={key}
          value={eventsStatusCounts[key]}
          color={getStatusColor(key, eventsStatusCounts)}
          onClick={() => onClickFilter(key)}
          selected={isFilterSelected(key)}
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
