import styled from "styled-components";
import {
  StyledParagraph,
  StyledSemiHeading,
} from "../../../components/Styled/Typography.styled";
import { dateObj } from "../../../utils/utils";
import { useSelector } from "react-redux";
import { eventsSelector } from "../../../redux/events/events.slice";

export const DetailsBox = () => {
  const { eventDetails: event } = useSelector(eventsSelector);
  const eventDetailsMap = (event, date, time) => {
    return [
      {
        Type: "Date",
        Info: date,
        Icon: "date_range",
      },
      {
        Type: "Time",
        Info: time,
        Icon: "aod_watch",
      },
      {
        Type: "Venue",
        Info: event.venue,
        Icon: "map",
      },
      {
        Type: "Expected Attendes",
        Info: event.expectedAttendees,
        Icon: "group",
      },
    ];
  };
  const { date, time } = dateObj(event.scheduledAt);

  return (
    <StyledCtn>
      <StyledSemiHeading left>Event Details</StyledSemiHeading>
      <StyledEvenInfo>
        {eventDetailsMap(event, date, time).map((curItem) => (
          <>
            <StyledEvenInfoCard>
              <div>
                <span className="material-symbols-outlined">
                  {curItem.Icon}
                </span>
              </div>
              <StyledEvenInfoCardInfo>
                <StyledParagraph left>{curItem.Type}</StyledParagraph>
                <StyledParagraph left>{curItem.Info}</StyledParagraph>
              </StyledEvenInfoCardInfo>
            </StyledEvenInfoCard>
          </>
        ))}
      </StyledEvenInfo>
    </StyledCtn>
  );
};

const StyledCtn = styled.div`
  background-color: white;
  box-shadow: ${({ theme }) => theme.shadows["level-1"]};
  border-radius: 10px;
  padding: 14px 24px;
  border: ${({ theme }) => theme.borders["border-gray"]};
`;

const StyledEvenInfo = styled.div``;

const StyledEvenInfoCard = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StyledEvenInfoCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;
