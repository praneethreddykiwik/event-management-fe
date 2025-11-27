import React from "react";
import {
  SecondContainer,
  AboutLeft,
  AboutHeaderRow,
  AboutLeftSide,
  AboutTitle,
  HelpIcon,
  LocationRow,
  LocationIcon,
  ShowLocationText,
  AboutParagraph,
  NextEventRight,
  ArrowCircle,
  NextEventCard,
  CardContent,
  SmallHeading,
  EventTitle,
  EventLocationRow,
  LocationText,
  EventDateRow,
  NotificationIcon,
  PodcastIcon,
} from "../NewEvent.styles";

import { EVENT_TEXT } from "../../../Enum/EventText";

import ArrowLeftIcon from "@mui/icons-material/ChevronLeft";
import ArrowRightIcon from "@mui/icons-material/ChevronRight";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const AboutAndNextEventSection = () => {
  return (
    <SecondContainer>
      <AboutLeft>
        <AboutHeaderRow>
          <AboutLeftSide>
            <AboutTitle>{EVENT_TEXT.ABOUT_TITLE}</AboutTitle>
            <HelpIcon className="material-symbols-outlined">help</HelpIcon>
          </AboutLeftSide>

          <LocationRow>
            <LocationIcon className="material-symbols-outlined">location_on</LocationIcon>
            <ShowLocationText>{EVENT_TEXT.SHOW_LOCATION}</ShowLocationText>
          </LocationRow>
        </AboutHeaderRow>

        <AboutParagraph>
          {EVENT_TEXT.ABOUT_DESCRIPTION}
        </AboutParagraph>
      </AboutLeft>

      <NextEventRight>
        <ArrowCircle><ArrowLeftIcon /></ArrowCircle>

        <NextEventCard>
          <CardContent>
            <SmallHeading>{EVENT_TEXT.NEXT_EVENT_TITLE}</SmallHeading>

            <EventTitle>{EVENT_TEXT.NEXT_EVENT_NAME}</EventTitle>

            <EventLocationRow>
              <LocationOnIcon />
              <LocationText>{EVENT_TEXT.SHOW_LOCATION}</LocationText>
            </EventLocationRow>

            <EventDateRow>
              <NotificationIcon className="material-symbols-outlined">notifications</NotificationIcon>
              {EVENT_TEXT.NEXT_EVENT_DATE}
              <PodcastIcon className="material-symbols-outlined">podcasts</PodcastIcon>
            </EventDateRow>
          </CardContent>
        </NextEventCard>

        <ArrowCircle><ArrowRightIcon /></ArrowCircle>
      </NextEventRight>

    </SecondContainer>
  );
};

export default AboutAndNextEventSection;
