import styled from "styled-components";
import {
  StyledHeadingBig,
  StyledParagraph,
} from "../../components/Styled/Typography.styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { paths } from "../../constants/paths";
import { venuesMetadata } from "../../redux/farms/metadata/venues.metadata";
import VenueCard from "../../components/Venue/VenueCard";
import MapModal from "../../components/Venue/MapModal";
import { useDispatch, useSelector } from "react-redux";
import {
  formsSelector,
  updateAllEventInputs,
} from "../../redux/farms/farms.slice";

const Venues = () => {
  const [openMap, setOpenMap] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { createEventInputs } = useSelector(formsSelector);

  const handleSelect = (venue) => {
    const dat = createEventInputs.map((el) => {
      if (el.name === "venue") {
        return { ...el, value: venue.name, helperText: venue.map };
      }
      return el;
    });

    dispatch(updateAllEventInputs(dat));
    navigate(paths.createEvent, {});
  };

  const onViewMap = (venue) => {
    setOpenMap(
      `https://www.google.com/maps?q=${encodeURIComponent(
        `${venue.name} ${venue.address}`,
      )}&output=embed`,
    );
  };

  return (
    <Wrapper>
      <StyledParagraph>
        <StyledHeadingBig>Venues Near Me</StyledHeadingBig>
        <StyledParagraph>
          Select a venue and click view to see location
        </StyledParagraph>
      </StyledParagraph>

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
    </Wrapper>
  );
};

export default Venues;

const Wrapper = styled.div`
  padding: 40px 40px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

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
