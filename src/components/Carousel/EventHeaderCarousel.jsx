import React, { useState } from "react";
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
    AttendLink,
    Button,
} from "../Styled/EventHeaderCarousel.styled";

const EventHeaderCarousel = ({ events }) => {
    const [current, setCurrent] = useState(0);

    const prev = () => {
        setCurrent((index) => (index - 1 + events.length) % events.length);
    };

    const next = () => {
        setCurrent((index) => (index + 1) % events.length);
    };

    const event = events[current];

    return (
        <FirstContainer bgColor={event.bgColor}>
            <LeftSection>
                <EventImage src={event.image} alt="event-image" />
            </LeftSection>

            <RightSection>
                <NewEventRow>
                    <LeftSide>
                        <NewEventTxt>{event.label}</NewEventTxt>
                        <ShareIconSpan className="material-symbols-outlined">share</ShareIconSpan>
                    </LeftSide>

                    <RightSide>
                        <ArrowButton onClick={prev}>
                            <span className="material-symbols-outlined">chevron_left</span>
                        </ArrowButton>

                        <ArrowButton onClick={next}>
                            <span className="material-symbols-outlined">chevron_right</span>
                        </ArrowButton>
                    </RightSide>
                </NewEventRow>

                <HeadingTight left>{event.title}</HeadingTight>
                <DateText>{event.date}</DateText>

                <ButtonsRow>
                    <Button type="base">{event.watchLive}</Button>
                    <AttendLink>{event.attendText}</AttendLink>
                </ButtonsRow>
            </RightSection>
        </FirstContainer>
    );
};

export default EventHeaderCarousel;
