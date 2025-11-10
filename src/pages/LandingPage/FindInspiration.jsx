// import { SectionContainerTwo } from "../../components/Styled/Common.styled";
import styled from "styled-components";
import venue_hall from "../../assets/landingPage/venue.jpg";
import { StyledSemiHeading} from "../../components/Styled/Typography.styled";
import {StyledTransparentButtonWhite } from "../../components/Styled/Buttons.styled";
import forward_arrow from "../../assets/landingPage/arrow_forward.png";
const FindInspiration = () => {
  return (
    <SectionContainerTwo>
      <SectionLandingPageDiv1>  
        <SectionLandingPageDiv1img src={venue_hall} />
      </SectionLandingPageDiv1>
      <SectionLandingPageDiv2>
        <StyledSemiHeading left>
          Seamless Events, Unforgettable Venue
        </StyledSemiHeading>
        <LandingPageDiv2Content>
          Experience the convenience on our wedsite. Effortlessly explore a wide
          range of events that match your interests, while also having the
          ability to create and manage your own events seamlessly. Find
          inspiration, connect with others, and make every event a success, all
          in one place.
        </LandingPageDiv2Content>
        <StyledTransparentButtonDiv>
          <StyledTransparentButtonWhite>
            Find inspiration <SectionLandingPageDiv2_img src={forward_arrow} />
          </StyledTransparentButtonWhite>
        </StyledTransparentButtonDiv>
      </SectionLandingPageDiv2>
    </SectionContainerTwo>
  );
};
 const SectionContainerTwo = styled.div`
  background-color: #ffffffff;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items:center;
`;

const SectionLandingPageDiv1 = styled.div`
  background-color: #838383ff;
  width: 55vw;
  display: flex;
  margin-top: 30px;
`;

const SectionLandingPageDiv2 = styled.div`
  width: 55vw;
`;

const LandingPageDiv2Content = styled.p`
  text-align: left;
  font-size:13px;
`;
const SectionLandingPageDiv1img = styled.img`
  width: 55vw;
  height: 45vh;
`;

const SectionLandingPageDiv2_img = styled.img`
  margin-left: 5px;
  width: 10px;
`;


const StyledTransparentButtonDiv = styled.div`
  display: flex;
  align-items: left;
`;

export default FindInspiration;
