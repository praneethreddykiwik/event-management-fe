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
  AboutParagraph
} from "../NewEvent.styles";

import { EVENT_TEXT } from "../../../Enum/EventText";
import EventCarousel from "../../../components/Carousel/EventCarousel";


const AboutAndNextEventSection = () => {
  const eventList = [
    {
      title: EVENT_TEXT.NEXT_EVENT_TITLE,
      name: EVENT_TEXT.NEXT_EVENT_NAME,
      location: EVENT_TEXT.SHOW_LOCATION,
      date: EVENT_TEXT.NEXT_EVENT_DATE,
      bgColor: "#cba50c"
    },
    {
      title: "Another Event",
      name: EVENT_TEXT.NEXT_EVENT_NAME, 
      location: EVENT_TEXT.SHOW_LOCATION,
      date: "Mon, 10 Mar 2025 at 11:00",
      bgColor: "#8b5cf6"
    }
  ];
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

      <EventCarousel events={eventList} />
      
    </SecondContainer>
  );
};

export default AboutAndNextEventSection;
