import styled from "styled-components";
import { StyledFlexContainer } from "../../components/Styled/Common.styled";
import Badge from "../../components/Badge/Badge.component";
import {
  StyledHeading,
  StyledParagraph,
  StyledSemiHeading,
} from "../../components/Styled/Typography.styled";
import { Button } from "../../components/Buttons/Button";
import { useLocation } from "react-router-dom";
import { dateObj } from "../../utils/utils";
import { BADGE_TYPES } from "../../constants/badges";

const EventDetails = () => {
  const { state } = useLocation();
  const event = state?.event;

  const { date, time } = dateObj(event.scheduledAt);

  const EventDetailsMap = (event, date, time) => {
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

  return (
    <>
      {/* <BlueBackHOC> */}
      <StyledEventContainer>
        <StyledBG>
          <StyledEventHeader>
            <StyledEventHeaderInfo>
              <StyledEventHeaderInfoCont1>
                <StyledEventHeaderInfoCont1Top>
                  <StyledHeading>{event.eventName}</StyledHeading>
                  <StyledBadge type={event.type}>{event.eventType}</StyledBadge>
                </StyledEventHeaderInfoCont1Top>
                <StyledEventHeaderInfoCont1Bottom>
                  <StyledBadge type={BADGE_TYPES.ACCEPTED}>
                    {BADGE_TYPES.CORPORATE}
                  </StyledBadge>
                </StyledEventHeaderInfoCont1Bottom>
              </StyledEventHeaderInfoCont1>
              <StyledEventHeaderInfoCont2>
                <Button sx={StyledButton1} type="outlined" icon="edit">
                  Edit Event
                </Button>
                <Button sx={StyledButton2} type="icon" icon="delete">
                  Delete Event
                </Button>
              </StyledEventHeaderInfoCont2>
            </StyledEventHeaderInfo>
          </StyledEventHeader>

          {/* Event Body */}
          <StyledEventBody>
            <StyledEventBodyContainerLeft>
              <StyledEventBodyContainerLeftHeading left>
                Event Details
              </StyledEventBodyContainerLeftHeading>
              <StyledEventBodyContainerLeftContent>
                <StyledEvenInfo>
                  {EventDetailsMap(event, date, time).map((curItem) => (
                    <>
                      <StyledEvenInfoCard>
                        <StyledEvenInfoCardIcon>
                          <span className="material-symbols-outlined">
                            {curItem.Icon}
                          </span>
                        </StyledEvenInfoCardIcon>
                        <StyledEvenInfoCardInfo>
                          <StyledParagraph1 left>
                            {curItem.Type}
                          </StyledParagraph1>
                          <StyledParagraph2 left>
                            {curItem.Info}
                          </StyledParagraph2>
                        </StyledEvenInfoCardInfo>
                      </StyledEvenInfoCard>
                    </>
                  ))}
                </StyledEvenInfo>
              </StyledEventBodyContainerLeftContent>
            </StyledEventBodyContainerLeft>
            <StyledEventBodyContainerRight>
              <StyledEventBodyContainerRightTop>
                <StyledEventBodyHeader left>
                  Assigned Manager
                </StyledEventBodyHeader>
                <StyledEvenInfoCard>
                  <StyledEvenInfoCardIcon>
                    <StyledSpan className="material-symbols-outlined">
                      person
                    </StyledSpan>
                  </StyledEvenInfoCardIcon>
                  <StyledParagraph2 left>Adnan Shaik Yousuf</StyledParagraph2>
                </StyledEvenInfoCard>
              </StyledEventBodyContainerRightTop>
              <StyledEventBodyContainerRightBototm>
                <StyledEventBodyContainerRightBototmHeader>
                  <StyledEvenInfoCard2>
                    <StyledEventBodyHeader left>
                      Description
                    </StyledEventBodyHeader>
                    <StyledParagraph2 left>
                      Basic Event Description.
                    </StyledParagraph2>
                  </StyledEvenInfoCard2>
                </StyledEventBodyContainerRightBototmHeader>
              </StyledEventBodyContainerRightBototm>
            </StyledEventBodyContainerRight>
          </StyledEventBody>
        </StyledBG>
        {/* 
        
        1. Container 1: HEADER
          a. Left Container (Heading):
            i. Event Name - Heading 1
            ii. status Badge
            iii. Event Type (Badge)
          b. Right Container (Button)
            i. Edit Event Button
            i. Delete Event Button
        2. Container 2: BODY
          a. Left container.
            i. Heading
            ii. Date, TIme, Venue, Expected Attendes
          b. Right container.
            i. Right Top Container.
              a. Assigned Manager
            ii. Right Botton Container.
              a. Description.
        */}

        {/* Event Header */}
      </StyledEventContainer>
      {/* </BlueBackHOC> */}
    </>
  );
};

const StyledEventContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* margin: 100px; */
  border: 1px solid blue;
  padding: 60px;
  /* margin: 200px; */
`;

// --------- Event Header ------------

const StyledEventHeader = styled(StyledFlexContainer)`
  /* border: 1px solid red; */
  /* width: 100vw; */
  /* margin-top: 80px; */
`;

const StyledEventHeaderInfo = styled.div`
  // HEADING FROM TYPO G FILE
  /* border: 1px solid green; */
  display: flex;
  justify-content: space-between;
  max-width: 95%;
  /* padding: 20px; */
  width: 100%;
`;

const StyledEventHeaderInfoCont1 = styled.div`
  /* border: 1px solid crimson; */
  /* display: flex;
  align-items: center; */
  /* gap: 5px; */
`;

const StyledEventHeaderInfoCont1Top = styled.div`
  /* border: 1px solid pink; */
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StyledEventHeaderInfoCont1Bottom = styled.div`
  /* border: 1px solid yellow; */
  /* margin-bottom: 20px; */
  /* display: flex;
  align-items: center;
  gap: 10px; */
`;

const StyledBadge = styled(Badge)`
  height: 10%;
`;

const StyledEventHeaderInfoCont2 = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const StyledButton1 = {
  height: "50px",
  width: "160px",
};

const StyledButton2 = {
  height: "50px",
  width: "160px",
  "background-color": "#d63a2f;",
};

// --------- Event BODY -------------

const StyledEventBody = styled.div`
  /* border: 1px solid crimson; */
  display: flex;
  /* justify-content: start; */
  gap: 30px;
  margin-top: ${({ theme }) => `${theme.spacings["spacing-6"]}`};
`;

const StyledSpan = styled.span`
  /* color: ${({ theme }) => theme.colors["primary"]}; */
`;

const StyledEventBodyContainerLeft = styled.div`
  /* border: 1px solid red; */
  width: 30%;
  background-color: white;
  box-shadow: ${({ theme }) => theme.shadows["level-1"]};
  border-radius: 10px;
  padding: 15px 35px;
  /* padding: ${({ theme }) => `${theme.spacings["spacing-6"]}`}; */
  border: ${({ theme }) => theme.borders["border-gray"]};
`;

const StyledEventBodyHeader = styled(StyledSemiHeading)`
  /* border: 1px solid peachpuff; */
`;

const StyledBG = styled.div`
  background-color: white;
  padding: 40px 50px;
  box-shadow: ${({ theme }) => theme.shadows["level-1"]};
`;

const StyledEventBodyContainerRight = styled.div`
  justify-content: start;
  display: flex;
  flex-direction: column;
  /* margin: 0 auto; */
  /* border: 1px solid purple; */
  /* padding: ${({ theme }) => `10px ${theme.spacings["spacing-5"]}`}; */
  width: 30%;
`;

const StyledEventBodyContainerRightTop = styled.div`
  /* border: 1px solid yellow; */
  background-color: white;
  box-shadow: ${({ theme }) => theme.shadows["level-1"]};
  margin-bottom: 40px;
  height: 50%;
  /* gap: 20px; */
  padding: 25px;
  border-radius: 10px;
  border: ${({ theme }) => theme.borders["border-gray"]};
`;

const StyledEventBodyContainerRightBototm = styled.div`
  border: ${({ theme }) => theme.borders["border-gray-lite"]};
  background-color: white;
  box-shadow: ${({ theme }) => theme.shadows["level-1"]};
  border-radius: 10px;
  height: 50%;
  padding: 15px 35px;
  /* padding: ${({ theme }) => `${theme.spacings["spacing-6"]}`}; */
  border: ${({ theme }) => theme.borders["border-gray"]};
  /* border: 1px solid pink; */
`;

const StyledEventBodyContainerRightBototmHeader = styled.div`
  /* border: 1px solid pink; */
`;

const StyledEventBodyContainerLeftHeading = styled(StyledSemiHeading)`
  /* border: 1px solid green; */
`;

const StyledEventBodyContainerLeftContent = styled.div`
  /* border: 1px solid pink; */
`;

const StyledEvenInfo = styled.div``;

const StyledParagraph1 = styled(StyledParagraph)`
  color: ${({ theme }) => theme.colors["text-gray-color"]};
  font-weight: 400;
`;

const StyledParagraph2 = styled(StyledParagraph)`
  max-width: "60%";
`;

const StyledEvenInfoCard = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StyledEvenInfoCard2 = styled.div`
  width: 100%;
`;

const StyledEvenInfoCardIcon = styled.div`
  /* display: flex;
  flex-direction: column; */
`;

const StyledEvenInfoCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

export default EventDetails;
