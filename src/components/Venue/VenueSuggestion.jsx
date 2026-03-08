import styled from "styled-components";
import {
  StyledParagraphSmall,
  StyledParagraph,
  StyledSemiHeading,
  StyledAnchorSmall,
} from "../Styled/Typography.styled";
import { Button } from "../Buttons/Button";
import { Icon } from "../Icons/Icons";

export const VenueSuggestion = ({ venueDetails, btnText, onClick }) => {
  return (
    <StyledVenue className="venue-ctn">
      <ImageWrapper>
        <VenueImage src={venueDetails.image} alt={venueDetails.title} />
        <Badge>{venueDetails.bookings || 0}</Badge>
      </ImageWrapper>

      <TextBlock>
        <Address
          left
          title={venueDetails.location}
          href={venueDetails.location}
          target="_blank"
        >
          {" "}
          <Icon variant="location_on" />
          <span className="location">{venueDetails.location || "None"}</span>
        </Address>
        <VenueName left>{venueDetails.title}</VenueName>
        <VenueDesc left>{venueDetails.description}</VenueDesc>
      </TextBlock>

      <Button
        sx={{ marginTop: "auto" }}
        disabled={!venueDetails.available}
        onClick={() => onClick(venueDetails)}
      >
        {btnText || "Book now"}
      </Button>

      {/* Fully Booked */}
    </StyledVenue>
  );
};

const StyledVenue = styled.div`
  background: #ffffff;
  border-radius: 6px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 210px;
  box-sizing: border-box;
`;

const VenueImage = styled.img`
  position: absolute;
  top: 8px;
  left: 8px;
  right: 8px;
  bottom: 8px;

  width: calc(100% - 16px);
  height: calc(100% - 16px);

  object-fit: cover;
  border-radius: 4px;
`;

const Badge = styled(StyledParagraphSmall)`
  position: absolute;
  top: 20px;
  left: 20px;
  background: #3b82f6;
  color: #ffffff;
  line-height: 14.2px;
  padding: 4px 10px;
  border-radius: 20px;
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 14px;
  margin-bottom: 24px;
`;

const Address = styled(StyledAnchorSmall)`
  color: #22c55e;
  margin: 0;
  width: 99%;

  display: flex;
  align-items: center;
  gap: 6px;

  .location {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const VenueName = styled(StyledSemiHeading)`
  margin: 0;
`;

const VenueDesc = styled(StyledParagraph)`
  color: #666666;
  line-height: 1.5;
  margin: 0;
`;
