import styled from "styled-components";

import { EVENT_TEXT } from "../../../Enum/EventText";
import speaker1 from "../../../assets/speaker1.jpg";
import speaker2 from "../../../assets/speaker2.jpg";

import Carousel from "../../../components/Carousel/Carousel";

import {
  StyledHeading,
  StyledParagraphSmallVisible,
  StyledParagraphSmallGray,
  StyledAnchorSmall,
} from "../../../components/Styled/Typography.styled";

import { StyledBaseButton } from "../../../components/Styled/Buttons.styled";

const EventIntroSection = () => {
  const headerEvents = [
    {
      image: speaker1,
      label: EVENT_TEXT.NEW_EVENT,
      title: EVENT_TEXT.TITLE,
      date: EVENT_TEXT.DATE_TIME,
      watchLive: EVENT_TEXT.WATCH_LIVE,
      attendText: EVENT_TEXT.ATTEND_IN_PERSON,
    },
    {
      image: speaker2,
      label: "Old Event",
      title: "Winning In Tomorrow's Economy",
      date: "Friday, 30 June 2023 at 18:00",
      watchLive: "Watch Live",
      attendText: "Attend in Person",
    },
  ];

  const carouselList = headerEvents.map((e) => (
    <IntroSlideContainer key={e.title}>
      <LeftImage src={e.image} />

      <RightContent>
        <TopRow>
          <NewEventTxt>{e.label}</NewEventTxt>
          <ShareIcon className="material-symbols-outlined">share</ShareIcon>
        </TopRow>

        <HeadingTight>{e.title}</HeadingTight>
        <DateText>{e.date}</DateText>

        <ButtonsRow>
          <Button>{e.watchLive}</Button>
          <AttendLink>{e.attendText}</AttendLink>
        </ButtonsRow>
      </RightContent>
    </IntroSlideContainer>
  ));

  return <Carousel type="type1" carouselList={carouselList} />;
};

export default EventIntroSection;

/* ---------------- Styled Components ---------------- */

export const IntroSlideContainer = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
`;

export const LeftImage = styled.img`
  width: 260px;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

export const RightContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: -45px;
  text-align: left;
  align-items: flex-start;
`;

export const TopRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ShareIcon = styled.span`
  cursor: pointer;
  color:#062E70;
`;

export const NewEventTxt = styled(StyledParagraphSmallGray)`
  font-weight: 600;
  color:#062E70;
`;

export const HeadingTight = styled(StyledHeading)`
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const DateText = styled(StyledParagraphSmallVisible)`
  color: #a9abaa;
  font-size: 15px;
`;

export const ButtonsRow = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
`;

export const Button = styled(StyledBaseButton)`
  color: white;
`;

export const AttendLink = styled(StyledAnchorSmall)`
  color: #33b133 !important;
`;
