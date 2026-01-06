import styled from "styled-components";
import { Venue } from "../../components/Venue/Venue";

export const Venues = () => {
  const venues = [
    {
      location: "Andhra Pradesh",
      description: "",
      locationLink: "",
      bookingsCount: "",
    },
    {
      location: "Andhra Pradesh",
      description: "",
      locationLink: "",
      bookingsCount: "",
    },
  ];
  return (
    <StyledCtn>
      {venues.map((obj) => {
        return <Venue venueDetails={obj} />;
      })}
    </StyledCtn>
  );
};

const StyledCtn = styled.div``;
