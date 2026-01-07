import { useState } from "react";
import styled from "styled-components";
import VenueLocationMap from "../../components/Venue/VenueLocationMap";
import {
  StyledHeading,
  StyledParagraph,
} from "../../components/Styled/Typography.styled";
import { Button } from "../../components/Buttons/Button";
import { Inputs } from "../../components/Inputs/Inputs";

const VenueLocations = () => {
  const [inputUrl, setInputUrl] = useState("");
  const [mapUrl, setMapUrl] = useState("");

  const onShowLocation = () => {
    if (!inputUrl.includes("google.com/maps/embed")) {
      alert("Please paste a Google Maps embed URL");
      return;
    }
    setMapUrl(inputUrl);
  };

  return (
    <PageWrapper>
      <Header>
        <StyledHeading>Venues Near Me</StyledHeading>
        <StyledParagraph>
          Paste a Google Maps location link to view venue location
        </StyledParagraph>
      </Header>
      <Wrapper>
        <Inputs
          type="text"
          placeholder="Paste Google Maps URL here"
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)}
        />
        <ButtonSection>
          <Button onClick={onShowLocation}>Show Location</Button>
        </ButtonSection>
      </Wrapper>
      <VenueLocationMap mapUrl={mapUrl} />
    </PageWrapper>
  );
};

export default VenueLocations;

/* -------- styles -------- */

const PageWrapper = styled.div`
  padding: 40px 60px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 15px;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ButtonSection = styled.div`
  width:500px;
`;
