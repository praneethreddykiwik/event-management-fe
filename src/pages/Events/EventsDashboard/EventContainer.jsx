import { useSelector } from "react-redux";
import styled from "styled-components";
import { eventsSelector } from "../../../redux/events/events.slice";
import AdminTaskItem from "./AdminTaskItem";
import { StyledParagraphSmallGray } from "../../../components/Styled/Typography.styled";
import { mapEventForUI } from "../../../helpers/Dashboard.helper";
import { SkeletonLoaders } from "../../../components/UI/Loaders/SkeletonLoaders";

export const EventContainer = () => {
  const { eventGridView, events, eventsLoading } = useSelector(eventsSelector);

  if (eventsLoading) {
    return <SkeletonLoaders count={1} height={150} />;
  }

  if (!events.length) {
    return (
      <StyledParagraphSmallGray>No Events available</StyledParagraphSmallGray>
    );
  }

  return (
    <TaskList $gridView={eventGridView}>
      {events.map((event) => (
        <AdminTaskItem event={mapEventForUI(event)} gridView={eventGridView} />
      ))}
    </TaskList>
  );
};

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
