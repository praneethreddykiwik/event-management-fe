import styled from "styled-components";

import * as enums from "../../../myEnum";
import speaker1 from "../../../assets/speaker1.jpg";
import speaker2 from "../../../assets/speaker2.jpg";
import Carousel from "../../../components/Carousel/Carousel";
import { Button } from "../../../components/Buttons/Button";
import { Icon } from "../../../components/Icons/Icons";

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
      label: enums.NEW_EVENT,
      title: enums.TITLE,
      date: enums.DATE_TIME,
      watchLive: enums.WATCH_LIVE,
      attendText: enums.ATTEND_IN_PERSON,
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
      <ImageWrapper>
        <LeftImage src={e.image} />
      </ImageWrapper>
      <RightContent>
        <TopRow>
          <NewEventTxt>{e.label}</NewEventTxt>
          {/* <ShareIcon className="material-symbols-outlined">share</ShareIcon> */}
          <Icon variant="share" sx={{ color: "#062e70" }} />
        </TopRow>

        <HeadingTight>{e.title}</HeadingTight>
        <DateText>{e.date}</DateText>

        <ButtonsRow>
          {/* <Button>{e.watchLive}</Button> */}
          <Button
            sx={{
              width: "120px",
              color: "white",
            }}
          >
            {e.watchLive}
          </Button>
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
  align-items: stretch;
`;

export const ImageWrapper = styled.div`
  width: 230px;
  height: 185px;
  overflow: hidden;
  border-radius: 4px;
`;

export const LeftImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const TopRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

// export const ShareIcon = styled.span`
//   cursor: pointer;
//   color: #062e70;
// `;

export const NewEventTxt = styled(StyledParagraphSmallGray)`
  font-weight: 600;
  color: #062e70;
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
  align-items: center;
`;

// export const Button = styled(StyledBaseButton)`
//   color: white;
//   width: 120px;
// `;

export const AttendLink = styled(StyledAnchorSmall)`
  color: #33b133 !important;
`;
