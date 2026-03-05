/** @format */

import { useState } from 'react';
import styled from 'styled-components';
import VenueLocationMap from './VenueLocationMap';
import { Button } from '../Buttons/Button';

const VenueCard = ({ venue, onView }) => {
  const [showMap, setShowMap] = useState(false);

  return (
    <Card>
      <TopRow>
        <LeftRow>
          <span className="material-symbols-outlined">location_on</span>
          <Address>{venue.address}</Address>
        </LeftRow>

        <Tag>{venue.type}</Tag>
      </TopRow>

      <ContentRow>
        <VenueImage src={venue.image} alt={venue.name} />

        <Details>
          <Title>{venue.name}</Title>

          <Stars>★★★★★</Stars>

          <Description>{venue.description}</Description>
        </Details>
      </ContentRow>

      <Button onClick={onView}>View Location</Button>
      {showMap && <VenueLocationMap mapUrl={venue.map} />}
    </Card>
  );
};

export default VenueCard;

const Card = styled.div`
  padding: 22px;
  border-radius: 18px;
  background: white;
  border: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftRow = styled.div`
  display: flex;
  gap: 8px;
  font-size: 18px;
  font-weight: 600;
`;

const Address = styled.span``;

const Tag = styled.div`
  color: #22c55e;
  font-weight: 700;
`;

const ContentRow = styled.div`
  display: flex;
  gap: 18px;
`;

const VenueImage = styled.img`
  width: 140px;
  height: 120px;
  border-radius: 12px;
  object-fit: cover;
`;
const Details = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  margin: 0;
`;

const Stars = styled.div`
  color: gold;
  margin-top: 4px;
  font-size: 18px;
`;

const Description = styled.div`
  color: #4b5563;
  margin-top: 8px;
`;
