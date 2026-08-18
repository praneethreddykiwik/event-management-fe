import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  eventsSelector,
  setEventsGridView,
  setSearchFilter,
  setSelectedEventFilters,
} from "../../../redux/events/events.slice";
import { fetchEventsDispatch } from "../../../redux/events/events.actions";
import {
  isFilterSelected,
  updateFilters,
} from "../../../components/Filters/FilterCards/FilterCards.helper";
import * as enums from "../../../myEnum";
import { FilterHeaders } from "../../../components/Headers/FilterHeaders";
import FilterCards from "../../../components/Filters/FilterCards/FilterCards";
import { getStatusColor } from "../../../utils/utils";
import {
  StyledMediumHeading,
  StyledParagraphSmall,
} from "../../../components/Styled/Typography.styled";
import { EventContainer } from "../EventsDashboard/EventContainer";
import styled from "styled-components";
import { mobile } from "../../../theme/media-queries";
import { debounce } from "../../../utils/debouncer";
import { Icon } from "../../../components/Icons/Icons";

const AssignedEvents = () => {
  const dispatch = useDispatch();
  const [openManagersPopup, setOpenManagersPopup] = useState(false);

  const { searchFilter, eventGridView, eventsStatusCounts, selectedEventFilters } =
    useSelector(eventsSelector);

  const fetchEvents = (query, searchFilterArg) => {
    dispatch(
      fetchEventsDispatch({
        query,
        searchText: searchFilterArg,
      }),
    );
  };

  const viewClickHandler = () => {
    dispatch(setEventsGridView(!eventGridView));
  };

  const debounceFetchEventsFn = useMemo(
    () => debounce(fetchEvents, 2000),
    [dispatch],
  );

  const onChangeSearch = (e) => {
    const value = e.target.value;
    dispatch(setSearchFilter(value));

    const query = selectedEventFilters
      .filter((fl) => fl.selected)
      .map((m) => m.value)
      .join(",");
    debounceFetchEventsFn(query, value);
  };

  const onClickFilter = (key) => {
    const updated = updateFilters(key, selectedEventFilters);
    dispatch(setSelectedEventFilters(updated));

    const query = updated
      .filter((fl) => fl.selected)
      .map((m) => m.value)
      .join(",");
    fetchEvents(query, searchFilter);
  };

  const isSelected = (key) => {
    return isFilterSelected(key, selectedEventFilters);
  };

  return (
    <>
      <FilterHeaders
        placeholder="Search Events"
        value={searchFilter}
        onChange={onChangeSearch}
      />

      <FilterCards
        countObj={eventsStatusCounts}
        getColor={(key) => getStatusColor(key, eventsStatusCounts)}
        onCardClick={onClickFilter}
        isSelected={isSelected}
      />

      <TaskMainCard>
        <Tasktxt2>
          <Textwrapper>
            <StyledMediumHeading left>Events</StyledMediumHeading>
            <StyledParagraphSmall left>{enums.MONITOR_EV}</StyledParagraphSmall>
          </Textwrapper>
          <AlignBox onClick={viewClickHandler}>
            <Icon selected={!eventGridView}>view_list</Icon>
            <Icon selected={eventGridView}>grid_view</Icon>
          </AlignBox>
        </Tasktxt2>
        <EventContainer />
      </TaskMainCard>
    </>
  );
};
const TaskMainCard = styled.div`
  border-radius: 14px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow:
    rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

const Tasktxt2 = styled.div`
  padding: 20px 20px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AlignBox = styled.div`
  display: flex;
  justify-content: end;
  padding-right: 8px;
  gap: 10px;
  cursor: pointer;
  ${mobile`display: none;`}
`;

const Textwrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default AssignedEvents;
