import { memo, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import AdminTaskItem from "./AdminTaskItem";
import { StyledParagraphSmallGray } from "../../../components/Styled/Typography.styled";
import { mapEventForUI } from "../../../helpers/Dashboard.helper";
import { SkeletonLoaders } from "../../../components/UI/Loaders/SkeletonLoaders";
import { eventsSelector } from "../../../redux/events/events.slice";

const EVENTS_PER_BATCH = 10;

export const EventContainer = memo(function EventContainer() {
  const { eventGridView, events, eventsLoading } = useSelector(eventsSelector);

  const [visibleCount, setVisibleCount] = useState(EVENTS_PER_BATCH);
  const loadMoreRef = useRef(null);

  useEffect(() => {
    setVisibleCount(EVENTS_PER_BATCH);
  }, [events]);

  useEffect(() => {
    const loadMoreElement = loadMoreRef.current;
    const hasMoreEvents = visibleCount < events.length;

    if (!loadMoreElement || !hasMoreEvents) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleCount((currentCount) =>
            Math.min(currentCount + EVENTS_PER_BATCH, events.length),
          );
        }
      },
      {
        rootMargin: "200px 0px",
        threshold: 0,
      },
    );

    observer.observe(loadMoreElement);

    return () => observer.disconnect();
  }, [events.length, visibleCount]);

  if (eventsLoading) {
    return <SkeletonLoaders count={1} height={150} />;
  }

  if (!events.length) {
    return (
      <StyledParagraphSmallGray>No Events available</StyledParagraphSmallGray>
    );
  }

  return (
    <>
      <TaskList $gridView={eventGridView}>
        {events.slice(0, visibleCount).map((event) => (
          <AdminTaskItem
            key={event.uid}
            event={mapEventForUI(event)}
            gridView={eventGridView}
          />
        ))}
      </TaskList>

      {visibleCount < events.length && (
        <LoadMoreSentinel ref={loadMoreRef} aria-hidden="true" />
      )}
    </>
  );
});

const LoadMoreSentinel = styled.div`
  width: 100%;
  height: 1px;
`;

const TaskList = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-evenly;
  flex-direction: ${(props) => (props.$gridView ? "row" : "column")};
  flex-wrap: wrap;
  width: 100%;
`;
