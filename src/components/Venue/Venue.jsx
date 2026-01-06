import styled from "styled-components";

export const Venue = ({ venueDetails }) => {
  return (
    <StyledVenue>
      <img />
      <p>{venueDetails.location}</p>
      <p>{venueDetails.description}</p>
    </StyledVenue>
  );
};

const StyledVenue = styled.div``;
