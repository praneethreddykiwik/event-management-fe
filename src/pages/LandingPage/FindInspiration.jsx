import { StyledSectionContainer } from "../../components/Styled/Common.styled";
import styled from "styled-components";
import venue_hall from "../../assets/landingPage/venue.jpg";
import {
  StyledSemiHeading,
  StyledParagraphSmallGray,
} from "../../components/Styled/Typography.styled";
import forward_arrow from "../../assets/landingPage/arrow_forward.svg";
import { Button } from "../../components/Buttons/Button";

const FindInspiration = () => {
  return (
    <StyledSection>
      <StyledImageContainer>
        <StyledImage src={venue_hall} />
      </StyledImageContainer>
      <StyledContainerTwo>
        <StyledSemiHeading left>
          Seamless Events, Unforgettable Venue
        </StyledSemiHeading>
        <StyledContent>
          Experience the convenience on our wedsite. Effortlessly explore a wide
          range of events that match your interests, while also having the
          ability to create and manage your own events seamlessly. Find
          inspiration, connect with others, and make every event a success, all
          in one place.
        </StyledContent>
        <StyledBtnContainer>
          <Button type="transparent">
            Find inspiration <StyledIcon src={forward_arrow} />
          </Button>
        </StyledBtnContainer>
      </StyledContainerTwo>
    </StyledSection>
  );
};

const StyledSection = styled(StyledSectionContainer)`
  flex-direction: column;
  @media (max-width: 768px) {
    background-color: #f1faff;
  }
  @media (max-width: 510px) {
    padding-bottom: 120px;
  }
`;

const StyledImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  height: 300px;
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const StyledImage = styled.img`
  width: 50%;
  height: 100%;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const StyledContainerTwo = styled.div`
  width: 50%;
  word-wrap: break-word;
  @media (max-width: 768px) {
    margin-top: 10px;
    width: 90%;
    height: 200px;
    color: #000000;
  }
`;

const StyledContent = styled(StyledParagraphSmallGray)`
  text-align: left;
  @media (max-width: 768px) {
    font-weight: 600;
    font-size: 16px;
  }
`;

const StyledIcon = styled.img`
  margin-left: 5px;
  width: 10px;
`;

const StyledBtnContainer = styled.div`
  display: flex;
  align-items: left;
`;

export default FindInspiration;
