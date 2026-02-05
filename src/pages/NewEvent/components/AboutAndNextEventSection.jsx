import * as enums from "../../../myEnum";
import Carousel from "../../../components/Carousel/Carousel";
import styled from "styled-components";
import {
  StyledSemiHeading,
  StyledParagraphSmallGray,
  StyledParagraphBold,
  StyledParagraph,
} from "../../../components/Styled/Typography.styled";

const AboutAndNextEventSection = () => {
  const eventList = [
    {
      title: enums.NEXT_EVENT_TITLE,
      name: enums.NEXT_EVENT_NAME,
      location: enums.SHOW_LOCATION,
      date: enums.NEXT_EVENT_DATE,
      bgColor: "#cba50c",
    },
    {
      title: "Another Event",
      name: "Content Creators and the Future of the Global Economy",
      location: enums.SHOW_LOCATION,
      date: "Mon, 10 Mar 2025 at 11:00",
      bgColor: "#8b5cf6",
    },
  ];

  const carouselList = eventList.map((e) => (
    <YellowCard bg={e.bgColor}>
      <StyledParagraphBold left>{e.title}</StyledParagraphBold>
      <MainTitle left>{e.name}</MainTitle>
      <Row>
        <span className="material-symbols-outlined">location_on</span>
        <LocText>{e.location}</LocText>
      </Row>

      <RowSpaceBetween>
        <div className="left-group">
          <span className="material-symbols-outlined">notifications</span>
          <StyledParagraph>{e.date}</StyledParagraph>
        </div>

        <span className="material-symbols-outlined">podcasts</span>
      </RowSpaceBetween>
    </YellowCard>
  ));

  return (
    <SecondContainer>
      <AboutLeft>
        <AboutHeaderRow>
          <AboutLeftSide>
            <AboutTitle>{enums.ABOUT_TITLE}</AboutTitle>
            <HelpIcon className="material-symbols-outlined">help</HelpIcon>
          </AboutLeftSide>

          <LocationRow>
            <LocationIcon className="material-symbols-outlined">
              location_on
            </LocationIcon>
            <ShowLocationText>{enums.SHOW_LOCATION}</ShowLocationText>
          </LocationRow>
        </AboutHeaderRow>

        <StyledParagraphSmallGray left>
          {enums.ABOUT_DESCRIPTION}
        </StyledParagraphSmallGray>
      </AboutLeft>

      <RightNextEvent>
        <Carousel type="type2" carouselList={carouselList} />
      </RightNextEvent>
    </SecondContainer>
  );
};

export default AboutAndNextEventSection;

export const SecondContainer = styled.div`
  display: flex;
  gap: 30px;
  padding: 20px 38px;
  background: ${({ theme }) => theme.colors.white};
  width: 100%;
`;

export const AboutLeft = styled.div`
  flex: 1;
`;

export const AboutHeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AboutLeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const AboutTitle = styled(StyledSemiHeading)`
  font-size: 20px;
  color: #062e70;
`;

export const HelpIcon = styled.span`
  color: #062e70;
  cursor: pointer;
`;

export const LocationRow = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;

export const LocationIcon = styled.span`
  color: #062e70;
  cursor: pointer;
`;

export const ShowLocationText = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #0541a8;
`;

export const RightNextEvent = styled.div`
  flex: 1;
`;

/* ---------------- YELLOW CARD MAIN CONTAINER ---------------- */

export const YellowCard = styled.div`
  width: 100%;
  max-width: 80%;
  background: ${(p) => p.bg};

  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 24px;

  color: white;
`;

export const MainTitle = styled(StyledSemiHeading)`
  color: white;
`;

export const Row = styled.div`
  display: flex;
  gap: 8px;
`;

export const LocText = styled(StyledParagraphSmallGray)`
  margin: 0;
  color: white;
`;

export const RowSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 8px;

  .left-group {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  span.material-symbols-outlined {
    color: black !important;
  }
`;
