import {
  FirstContainer,
  LeftSection,
  EventImage,
  RightSection,
  NewEventRow,
  LeftSide,
  RightSide,
  ShareIconSpan,
  HeadingTight,
  DateText,
  NewEventTxt,
  ButtonsRow,
  ArrowButton,
  AttendText,
  Button,
} from "../NewEvent.styles";

import { EVENT_TEXT } from "../../../Enum/EventText";
import speaker1 from "../../../assets/speaker1.jpg";

import ArrowLeftIcon from "@mui/icons-material/ChevronLeft";
import ArrowRightIcon from "@mui/icons-material/ChevronRight";

const EventIntroSection = () => {
  return (
    <FirstContainer>
      <LeftSection>
        <EventImage src={speaker1} />
      </LeftSection>

      <RightSection>
        <NewEventRow>
          <LeftSide>
            <NewEventTxt>{EVENT_TEXT.NEW_EVENT}</NewEventTxt>
            <ShareIconSpan className="material-symbols-outlined">share</ShareIconSpan>
          </LeftSide>

          <RightSide>
            <ArrowButton><ArrowLeftIcon/></ArrowButton>
            <ArrowButton><ArrowRightIcon/></ArrowButton>
          </RightSide>
        </NewEventRow>

        <HeadingTight left>{EVENT_TEXT.TITLE}</HeadingTight>
        <DateText>{EVENT_TEXT.DATE_TIME}</DateText>

        <ButtonsRow>
          <Button type="base">{EVENT_TEXT.WATCH_LIVE}</Button>
          <AttendText>{EVENT_TEXT.ATTEND_IN_PERSON}</AttendText>
        </ButtonsRow>
      </RightSection>
    </FirstContainer>
  );
};

export default EventIntroSection;
