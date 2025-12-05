import React, { useState } from "react";
import {
  CarouselWrapper,
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
  EventDateText
} from "../Styled/EventCarousel.styled";


export const EventCarousel = ({ events }) => {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prevIndex) => (prevIndex - 1 + events.length) % events.length);
  };

  const next = () => {
    setCurrent((prevIndex) => (prevIndex + 1) % events.length);
  };

  const event = events[current];

  return (
    <CarouselWrapper>
      <ArrowCircle onClick={prev}>
        <span className="material-symbols-outlined">chevron_left</span>
      </ArrowCircle>

      <NextEventCard  bgColor={event.bgColor}>
        <CardContent>
          <SmallHeading>{event.title}</SmallHeading>

          <EventTitle>{event.name}</EventTitle>

          <EventLocationRow>
            <span className="material-symbols-outlined">location_on</span>
            <LocationText>{event.location}</LocationText>
          </EventLocationRow>

          <EventDateRow>
            <NotificationIcon className="material-symbols-outlined">notifications</NotificationIcon>
            <EventDateText>{event.date}</EventDateText>
            <PodcastIcon className="material-symbols-outlined">podcasts</PodcastIcon>
          </EventDateRow>
        </CardContent>
      </NextEventCard>

      <ArrowCircle onClick={next}>
        <span className="material-symbols-outlined">chevron_right</span>
      </ArrowCircle>
    </CarouselWrapper>
  );
};

export default EventCarousel;
