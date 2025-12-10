import { EVENT_TEXT } from "../../../Enum/EventText";
import Carousel from "../../../components/Carousel/Carousel";
import styled from "styled-components";
import {
  StyledParagraphGray,
  StyledSemiHeading,
  StyledParagraphSmallGray,
  StyledParagraphSmallVisible,
} from "../../../components/Styled/Typography.styled";

const AboutAndNextEventSection = () => {
  const eventList = [
    {
      title: EVENT_TEXT.NEXT_EVENT_TITLE,
      name: EVENT_TEXT.NEXT_EVENT_NAME,
      location: EVENT_TEXT.SHOW_LOCATION,
      date: EVENT_TEXT.NEXT_EVENT_DATE,
      bgColor: "#cba50c",
    },
    {
      title: "Another Event",
      name: "Content Creators and the Future of the Global Economy",
      location: EVENT_TEXT.SHOW_LOCATION,
      date: "Mon, 10 Mar 2025 at 11:00",
      bgColor: "#8b5cf6",
    },
  ];

  const carouselList = eventList.map((e) => (
    <YellowCard bg={e.bgColor}>
      <SmallTitle>{e.title}</SmallTitle>
      <MainTitle>{e.name}</MainTitle>
      <Row>
        <span className="material-symbols-outlined">location_on</span>
        <LocText>{e.location}</LocText>
      </Row>

      <RowSpaceBetween>
        <div className="left-group">
          <span className="material-symbols-outlined">notifications</span>
          <DateText>{e.date}</DateText>
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
            <AboutTitle>{EVENT_TEXT.ABOUT_TITLE}</AboutTitle>
            <HelpIcon className="material-symbols-outlined">help</HelpIcon>
          </AboutLeftSide>

          <LocationRow>
            <LocationIcon className="material-symbols-outlined">
              location_on
            </LocationIcon>
            <ShowLocationText>{EVENT_TEXT.SHOW_LOCATION}</ShowLocationText>
          </LocationRow>
        </AboutHeaderRow>

        <AboutParagraph>{EVENT_TEXT.ABOUT_DESCRIPTION}</AboutParagraph>
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
  justify-content: space-between;
  align-items: flex-start;
  gap: 30px;
  padding: 20px 38px;
  background: #fff;
  width: 100%;
  box-sizing: border-box;
  align-items: stretch;
  overflow: visible;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const AboutLeft = styled.div`
  flex: 1;
  min-width: 0;
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

export const AboutParagraph = styled(StyledParagraphGray)`
  color: #a9abaa;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
`;

export const RightNextEvent = styled.div`
  flex: 1;
`;

/* ---------------- YELLOW CARD MAIN CONTAINER ---------------- */

export const YellowCard = styled.div`
  width: 100%;
  max-width: 355px;
  background: ${(p) => p.bg};

  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  padding: 20px 24px;

  color: white;
  box-sizing: border-box;
  overflow: hidden;
`;

export const SmallTitle = styled(StyledParagraphSmallGray)`
  color: black;
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  text-align: left;
`;

export const MainTitle = styled(StyledSemiHeading)`
  color: white;
  margin: 0;
  font-size: 20px;
  line-height: 26px;
  width: 100%;
  text-align: left;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;
`;

export const LocText = styled(StyledParagraphSmallVisible)`
  margin: 0;
  color: white;
  font-size: 14px;
  text-align: left;
`;

export const DateText = styled(StyledParagraphSmallVisible)`
  margin: 0;
  color: black;
  font-size: 15px;
  font-weight: 500;
  text-align: left;
`;

export const RowSpaceBetween = styled.div`
  display: flex;
  align-items: center;
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

  p {
    color: black !important;
  }
`;
