import styled from "styled-components";
import video_image from "../../assets/video_image.jpg";
import {
  StyledParagraphGray,
  StyledHeadingBig,
  StyledMediumHeading,
  StyledParagraphBold,
  StyledSemiHeading,
} from "../../components/Styled/Typography.styled";

export const PageWrapper = styled.div`
  background-color: #e8f4ff;
  min-height: 768px;
  padding-left: 120px;
  padding-right: 120px;
  padding-bottom: 60px;

  @media (max-width: 768px) {
    padding: 16px;
    padding-bottom: 40px;
  }
`;

export const SecondContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  background: #fff;
  padding: 32px;
  gap: 32px;
  box-shadow: 0px 6px 12px -4px rgba(0, 0, 0, 0.3);
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LocationIcon = styled.span`
  color: #062e70;
  cursor: pointer;
`;

export const AboutLeft = styled.div`
  flex: 1;
  min-width: 0;
`;

export const AboutLeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const NextEventRight = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

export const HelpIcon = styled.span`
  color: #062e70;
  cursor: pointer;
`;

export const AboutHeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ShowLocationText = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #0541a8;
`;

export const LocationRow = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;

export const AboutParagraph = styled(StyledParagraphGray)`
  color: #a9abaa;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
`;

export const ParticipantsCard = styled.div`
  width: 300px;
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 6px 12px -4px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  height: 420px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ParticipantsHeaderRow = styled.div`
  background-color: #d8f5dd;
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 35px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  box-shadow: 0px -6px 12px -4px rgba(0, 0, 0, 0.3);
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  font-size: 16px;
`;

export const CountBadge = styled.div`
  background-color: #d8f5dd;
  color: black;
  height: 22px;
  width: 22px;
  border-radius: 50%;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;

export const MoreIcon = styled.span`
  cursor: pointer;
`;

export const ParticipantsBody = styled.div`
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0px -6px 12px -4px rgba(0, 0, 0, 0.3);
  padding-top: 8px;
  padding-bottom: 8px;
  overflow: hidden;
`;

export const ParticipantRow = styled.div`
  display: flex;
  gap: 12px;
  padding: 8px 14px;
`;

export const Avatar = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 8px;
  object-fit: cover;
`;

export const ParticipantDetails = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  align-items: center;
`;

export const ParticipantName = styled.p`
  margin: 0;
  font-size: 14px;
`;

export const ParticipantActions = styled.div`
  display: flex;
  gap: 8px;
`;

export const SeeAll = styled.p`
  padding: 12px 12px;
  font-size: 14px;
  font-weight: 500;
  color: #1a0468ff;
  cursor: pointer;
`;

export const Icon = styled.span`
  font-size: 20px;
  color: #555;
  cursor: pointer;
`;

export const PastEventsCard = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  height: 420px;
  box-shadow: 0px 6px 12px -4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const VideoThumbnail = styled.div`
  flex-grow: 1;
  position: relative;
  background-image: url(${video_image});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 240px;

  @media (max-width: 768px) {
    height: 170px;
  }
`;

export const OverlayText = styled.div`
  position: absolute;
  top: 40%;
  left: 16px;
  right: 16px;
  transform: translateY(-50%);
  color: white;
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media (max-width: 768px) {
    top: 40%;
    transform: translateY(-45%);
    left: 12px;
    right: 12px;
    gap: 4px;
  }
`;

export const EventDate = styled.span`
  font-size: 14px;
  opacity: 0.85;
  color: black;
`;

export const ControlsContainer = styled.div`
  padding: 10px 15px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const ControlIcon = styled.span`
  color: #333;
  cursor: pointer;
`;

export const ControlsRow = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 20px;
  }
`;

export const TimeText = styled.span`
  font-size: 14px;
  color: #777;
  min-width: 40px;
`;

export const LeftControls = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const CenterControls = styled.div`
  display: flex;
  align-items: center;
  gap: 26px;
`;

export const RightControls = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const TimelineRow = styled.div`
  padding-top: 6px;
  width: 60%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 768px) {
    width: 60%;
    max-width: 300px;
    gap: 8px;
  }
`;

export const TimelineWrapper = styled.div`
  flex: 1;
  height: 6px;
  background: #ddd;
  border-radius: 6px;
  position: relative;
`;

export const TimelineBar = styled.div`
  position: absolute;
  width: 100%;
  height: 6px;
  background: #dddddd;
  border-radius: 6px;
`;

export const TimelineProgress = styled.div`
  position: absolute;
  height: 6px;
  width: 50%;
  background: black;
  border-radius: 6px;
`;

export const VolumeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const VolumeIcon = styled.span`
  cursor: pointer;
`;

export const VolumeBar = styled.div`
  width: 80px;
  height: 6px;
  background: #ddd;
  border-radius: 6px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    width: 40%;
    background: #333;
    border-radius: inherit;
  }
`;

export const CardsRow = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 40px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const StyledMediumHeadingWhite = styled(StyledMediumHeading)`
  color: #7aeaf4e6;
`;

export const StyledHeadingBigWhite = styled(StyledHeadingBig)`
  color: white;
  font-size: 35px;
  margin-bottom: 0px;
`;

export const StyledParagraphBoldWhite = styled(StyledParagraphBold)`
  color: white;
  margin-top: 6px;
  font-weight: 500;
`;

export const ShareIconWhite = styled.span`
  cursor: pointer;
  color: #7aeaf4e6;
`;

export const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const ExpandIconWhite = styled.span`
  cursor: pointer;
  color: #7aeaf4e6;
`;

export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    margin-bottom: 12px;
  }
`;

export const AboutTitle = styled(StyledSemiHeading)`
  font-size: 20px;
  color: #062e70;
`;
