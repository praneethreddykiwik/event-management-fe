import React from "react";
import {
  PageWrapper,
  FirstContainer ,
  LeftSection,
  RightSection,
  ShareIconSpan,
  EventImage,
  NewEventRow,
  LeftSide,
  RightSide,
  HeadingTight,
  DateText,
  NewEventTxt,
  ButtonsRow,
  Button,
  AttendText,
  ArrowButton,
  SecondContainer,
  LocationIcon,
  AboutLeft,
  AboutLeftSide,
  NextEventRight,
  ArrowCircle,
  NextEventCard,
  HelpIcon,
  EventDateRow,
  NotificationIcon,
  PodcastIcon,
  CardContent,
  SmallHeading,
  EventTitle,
  EventLocationRow,
  LocationText,
  AboutHeaderRow,
  ShowLocationText,
  LocationRow,
  AboutParagraph,
  ParticipantsCard,
  ParticipantsHeaderRow,
  HeaderLeft,
  CountBadge,
  MoreIcon,
  ParticipantsBody,
  ParticipantRow,
  Avatar,
  ParticipantDetails,
  ParticipantName,
  ParticipantActions,
  SeeAll,
  Icon,
  PastEventsCard,
  VideoThumbnail,
  OverlayText,
  EventDate,
  ControlsContainer,
  ControlIcon,
  ControlsRow,
  TimeText,
  LeftControls,
  CenterControls,
  RightControls,
  TimelineRow,
  TimelineWrapper,
  TimelineBar,
  TimelineProgress,
  VolumeWrapper,
  VolumeIcon,
  VolumeBar,
  CardsRow,
  StyledMediumHeadingWhite,
  StyledHeadingBigWhite,
  StyledParagraphBoldWhite,
  ShareIconWhite,
  LeftGroup,
  ExpandIconWhite,
  TopRow,
  AboutTitle
} from "./NewEvent.styles";

import speaker1 from "../../assets/speaker1.jpg";

import participant1 from "../../assets/participant1.jpg";
import participant2 from "../../assets/participant2.jpg";
import participant3 from "../../assets/participant3.jpg";
import participant4 from "../../assets/participant4.jpg";
import participant5 from "../../assets/participant5.jpg";
import participant6 from "../../assets/participant6.jpg";

import { EVENT_TEXT } from "../../Enum/EventText";

import ArrowLeftIcon from "@mui/icons-material/ChevronLeft";
import ArrowRightIcon from "@mui/icons-material/ChevronRight";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const NewEvent = () => {
  const participants = [
    { img: participant1, name: "Alex Johnson" },
    { img: participant2, name: "Sarah Wilson" },
    { img: participant3, name: "David Smith" },
    { img: participant4, name: "Emily Carter" },
    { img: participant5, name: "Michael Brown" },
    { img: participant6, name: "Sophia Martinez" },
  ];

  return (
    <PageWrapper>
      <FirstContainer >
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
              <ArrowButton>
                <ArrowLeftIcon fontSize="small" />
              </ArrowButton>
              <ArrowButton>
                <ArrowRightIcon fontSize="small" />
              </ArrowButton>
            </RightSide>
          </NewEventRow>

          <HeadingTight left>{EVENT_TEXT.TITLE}</HeadingTight>
          <DateText>{EVENT_TEXT.DATE_TIME}</DateText>

          <ButtonsRow>
            <Button type="base">{EVENT_TEXT.WATCH_LIVE}</Button>
            <AttendText>{EVENT_TEXT.ATTEND_IN_PERSON}</AttendText>
          </ButtonsRow>

        </RightSection>
      </FirstContainer >

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
          <ArrowCircle>
            <ArrowLeftIcon />
          </ArrowCircle>

          <NextEventCard>
            <CardContent>
              <SmallHeading>{EVENT_TEXT.NEXT_EVENT_TITLE}</SmallHeading>

              <EventTitle>
                {EVENT_TEXT.NEXT_EVENT_NAME}
              </EventTitle>

              <EventLocationRow>
                <LocationOnIcon />
                <LocationText>{EVENT_TEXT.SHOW_LOCATION}</LocationText>
              </EventLocationRow>

              <EventDateRow>
                <NotificationIcon className="material-symbols-outlined">notifications</NotificationIcon>
                <EventDate>{EVENT_TEXT.NEXT_EVENT_DATE}</EventDate>
                <PodcastIcon className="material-symbols-outlined">podcasts</PodcastIcon>
              </EventDateRow>
            </CardContent>
          </NextEventCard>

          <ArrowCircle>
            <ArrowRightIcon />
          </ArrowCircle>
        </NextEventRight>
      </SecondContainer>

      <CardsRow>
        <ParticipantsCard>
          <ParticipantsHeaderRow>
            <HeaderLeft>
              {EVENT_TEXT.PARTICIPANTS}
              <CountBadge>56</CountBadge>
            </HeaderLeft>

            <MoreIcon className="material-symbols-outlined">more_vert</MoreIcon>
          </ParticipantsHeaderRow>

          <ParticipantsBody>
            {participants.map((p, i) => (
              <ParticipantRow key={i}>
                <Avatar src={p.img} />

                <ParticipantDetails>
                  <ParticipantName>{p.name}</ParticipantName>

                  <ParticipantActions>
                    <Icon className="material-symbols-outlined">mic</Icon>
                    <Icon className="material-symbols-outlined">video_camera_front_off</Icon>

                  </ParticipantActions>
                </ParticipantDetails>
              </ParticipantRow>
            ))}

            <SeeAll>{EVENT_TEXT.SEE_ALL_PARTICIPANTS}</SeeAll>
          </ParticipantsBody>
        </ParticipantsCard>

        <PastEventsCard>
          <VideoThumbnail>
            <OverlayText>
              <TopRow>
                <LeftGroup>
                  <StyledMediumHeadingWhite left small>{EVENT_TEXT.PAST_EVENTS}</StyledMediumHeadingWhite>
                  <ShareIconWhite className="material-symbols-outlined">share</ShareIconWhite>
                </LeftGroup>

                <ExpandIconWhite className="material-symbols-outlined">arrows_output</ExpandIconWhite>
              </TopRow>

              <StyledHeadingBigWhite left style={{ whiteSpace: "pre-line" }}>
                {EVENT_TEXT.PAST_EVENT_LOCATION}

              </StyledHeadingBigWhite>

              <StyledParagraphBoldWhite left>
                {EVENT_TEXT.PAST_EVENT_DATE}
              </StyledParagraphBoldWhite>
            </OverlayText>
          </VideoThumbnail>

          <ControlsContainer>
            <ControlsRow>
              <LeftControls>
                <ControlIcon className="material-symbols-outlined">undo</ControlIcon>
                <ControlIcon className="material-symbols-outlined">shuffle</ControlIcon>
              </LeftControls>

              <CenterControls>
                <ControlIcon className="material-symbols-outlined">skip_previous</ControlIcon>
                <ControlIcon className="material-symbols-outlined">play_circle</ControlIcon>
                <ControlIcon className="material-symbols-outlined">skip_next</ControlIcon>
              </CenterControls>

              <RightControls>
                <ControlIcon className="material-symbols-outlined">favorite</ControlIcon>

                <VolumeWrapper>
                  <VolumeIcon className="material-symbols-outlined">volume_up</VolumeIcon>
                  <VolumeBar />
                </VolumeWrapper>
              </RightControls>
            </ControlsRow>

            <TimelineRow>
              <TimeText>41:07</TimeText>

              <TimelineWrapper>
                <TimelineBar />
                <TimelineProgress />
              </TimelineWrapper>

              <TimeText>52:10</TimeText>
            </TimelineRow>
          </ControlsContainer>
        </PastEventsCard>
      </CardsRow>

    </PageWrapper>
  );
};

export default NewEvent;
