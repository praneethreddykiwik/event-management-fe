import styled from "styled-components";
import {
  StyledParagraphSmall,
  StyledParagraph,
  StyledSemiHeading,
} from "../Styled/Typography.styled";
import { Button } from "../Buttons/Button";

export const Venue = ({ venueDetails }) => {
  return (
    <StyledVenue>
      <ImageWrapper>
        <VenueImage
          src={venueDetails.image}
          alt={venueDetails.name}
        />
        <Badge>{venueDetails.bookings}</Badge>
      </ImageWrapper>

      <TextBlock>
        <Address left>{venueDetails.address}</Address>
        <VenueName left>{venueDetails.name}</VenueName>
        <VenueDesc left>{venueDetails.description}</VenueDesc>
      </TextBlock>

      {venueDetails.available ? (
        <Button
          sx={{
            marginTop: "auto",
            width: "auto",
            padding: "12px 28px",
          }}
        > Book now
        </Button>
      ) : (
        <Button
          type="secondary"
          sx={{
            marginTop: "auto",
            width: "auto",
            cursor: "not-allowed",
            backgroundColor: "#dcdcdc",
            color: "#777777",
          }}
        > Fully Booked
        </Button>
      )}
    </StyledVenue>
  );
};


const StyledVenue = styled.div`
  background: #ffffff;
  border-radius: 6px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  width: 330px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 210px;
  padding: 8px;
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

const Badge = styled.span`
  position: absolute;
  top: 20px;
  left: 20px;
  background: #3b82f6;
  color: #ffffff;
  font-size: 12px;
  font-weight: 600;
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

const Address = styled(StyledParagraphSmall)`
  color: #22c55e;
  margin: 0;

  display: flex;
  align-items: center;
  gap: 6px;

  &::before {
    content: "location_on";
    font-family: "Material Symbols Outlined";
    font-size: 18px;
    line-height: 1;
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