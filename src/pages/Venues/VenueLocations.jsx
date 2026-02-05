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
      <StyledParagraph>
        <StyledHeadingBig>Venues Near Me</StyledHeadingBig>
        <StyledParagraph>Select a venue and click view to see location</StyledParagraph>
      </StyledParagraph>

      <VenueList />
    </Wrapper>
  );
};

export default VenueLocations;

const Wrapper = styled.div`
  padding: 40px 40px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

