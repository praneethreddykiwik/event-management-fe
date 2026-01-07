import styled from "styled-components";
import { StyledParagraph } from "../Styled/Typography.styled";

const VenueLocationMap = ({ mapUrl }) => {
  if (!mapUrl) {
    return (
      <EmptyState>
        <StyledParagraph>
          Enter a Google Maps link to view location
        </StyledParagraph>
      </EmptyState>
    );
  }

  return (
    <MapWrapper>
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="venue-location"
      />
    </MapWrapper>
  );
};

export default VenueLocationMap;

/* -------- styles -------- */

const MapWrapper = styled.div`
  width: 100%;
  height: 420px;
  border-radius: 12px;
  overflow: hidden;
  border: ${({ theme }) => theme.borders["border-gray-lite"]};
`;

const EmptyState = styled.div`
  width: 100%;
  height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: #f9fafb;
  border: 1px dashed #d1d5db;
`;
