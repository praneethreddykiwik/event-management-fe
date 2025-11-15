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
    <StyledSectionContainer sx={{ flexDireaction: " column " }}>
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
    </StyledSectionContainer>
  );
};

const StyledImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  height: 300px;
`;

const StyledImage = styled.img`
  width: 50%;
  height: 100%;
`;

const StyledContainerTwo = styled.div`
  width: 50%;
  word-wrap: break-word;
`;

const StyledContent = styled(StyledParagraphSmallGray)`
  text-align: left;
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
