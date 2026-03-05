/** @format */

import styled from 'styled-components';
import VenueList from '../../components/Venue/VenueList';
import {
  StyledHeadingBig,
  StyledParagraph,
} from '../../components/Styled/Typography.styled';

const VenueLocations = () => {
  return (
    <Wrapper>
      <VenueTxt>
        <VenueNm>Venues Near Me</VenueNm>
        <SelectVenue>Select a venue and click view to see location</SelectVenue>
      </VenueTxt>

      <VenueList />
    </Wrapper>
  );
};

export default VenueLocations;

const Wrapper = styled.div`
  padding: 40px 60px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const VenueNm = styled(StyledHeadingBig)``;
const SelectVenue = styled(StyledParagraph)``;
const VenueTxt = styled(StyledParagraph)`
  margin: 0;
`;
