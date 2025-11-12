import { StyledSectionContainer } from "../../components/Styled/Common.styled";
import styled from "styled-components";
import venue_hall from "../../assets/landingPage/venue.jpg";
import { StyledSemiHeading } from "../../components/Styled/Typography.styled";
import forward_arrow from "../../assets/landingPage/arrow_forward.png";
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
  background-color: #838383ff;
  width: 55vw;
  display: flex;
  margin-top: 30px;
`;

const StyledContainerTwo = styled.div`
  width: 55vw;
`;

const StyledContent = styled.p`
  text-align: left;
  font-size: 13px;
`;
const StyledImage = styled.img`
  width: 55vw;
  height: 45vh;
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
