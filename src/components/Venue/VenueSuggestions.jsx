import styled from "styled-components";
import VenueCard from "./VenueCard";
import { useState } from "react";
import MapModal from "./MapModal";

import { useNavigate } from "react-router-dom";
import { paths } from "../../constants/paths";

import { venuesMetadata } from "../../redux/farms/metadata/venues.metadata";

const VenueSuggestions = () => {
  const [openMap, setOpenMap] = useState(null);
  const navigate = useNavigate();

  const handleSelect = (venue) => {
    navigate(paths.createEvent, {
      state: {
        venueName: venue.name,
        venueUrl: venue.map,
      },
    });
  };

  const onViewMap = (venue) => {
    setOpenMap(
      `https://www.google.com/maps?q=${encodeURIComponent(
        `${venue.name} ${venue.address}`,
      )}&output=embed`,
    );
  };

  return (
    <Grid>
      {venuesMetadata.map((v) => (
        <VenueCard
          key={v.name}
          venue={v}
          onView={() => onViewMap(v)}
          onSelect={handleSelect}
        />
      ))}
      <MapModal mapUrl={openMap} onClose={() => setOpenMap(null)} />
    </Grid>
  );
};

export default VenueSuggestions;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;
