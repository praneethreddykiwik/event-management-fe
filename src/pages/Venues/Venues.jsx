import styled from "styled-components";
import VenueSuggestions from "../../components/Venue/VenueSuggestions";
import {
  StyledHeadingBig,
  StyledParagraph,
} from "../../components/Styled/Typography.styled";

const Venues = () => {
  return (
    <Wrapper>
      <StyledParagraph>
        <StyledHeadingBig>Venues Near Me</StyledHeadingBig>
        <StyledParagraph>
          Select a venue and click view to see location
        </StyledParagraph>
      </StyledParagraph>

      <VenueSuggestions />
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
