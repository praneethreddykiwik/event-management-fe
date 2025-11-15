import styled from "styled-components";
import { StyledSectionContainer } from "../../components/Styled/Common.styled";
import joinNowOne from "../../assets/landingPage/joinNowVenue1.jpg";
import joinNowTwo from "../../assets/landingPage/joinNowVenue2.jpg";
import joinNowThree from "../../assets/landingPage/joinNowVenue3.jpg";
import { Button } from "../../components/Buttons/Button";
import {
  StyledParagraph,
  StyledSemiHeading,
} from "../../components/Styled/Typography.styled";

const JoinNow = () => {
  return (
    <StyledSectionContainer sx={{ flexDireaction: " column " }}>
      <StyledContainerOne>
        <StyledContainerOneImg src={joinNowOne} />
        <StyledContainerOneImg src={joinNowTwo} />
        <StyledContainerOneImg src={joinNowThree} />
      </StyledContainerOne>
      <StyledContainerTwo>
        <StyledParagraph>
          Experience the convenience on our wedsite today and discover how easy
          it is to plan your events with us
        </StyledParagraph>
        <StyledSemiHeading>There is a venue for every event</StyledSemiHeading>
        <Button type="base">Join now</Button>
      </StyledContainerTwo>
    </StyledSectionContainer>
  );
};

export default JoinNow;

const StyledContainerOne = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 60px;
`;

const StyledContainerOneImg = styled.img`
  width: 270px;
`;

const StyledContainerTwo = styled.div`
  margin-top: 30px;
`;
