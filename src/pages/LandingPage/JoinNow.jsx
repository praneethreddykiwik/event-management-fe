import styled from "styled-components";
// import { SectionContainerTwo } from "../../components/Styled/Common.styled";
import joinNowOne from "../../assets/landingPage/joinNowVenue1.jpg";
import joinNowTwo from "../../assets/landingPage/joinNowVenue2.jpg";
import joinNowThree from "../../assets/landingPage/joinNowVenue3.jpg";
import {
  StyledParagraph,
  StyledSemiHeading,
} from "../../components/Styled/Typography.styled";
import { StyledBaseButton } from "../../components/Styled/Buttons.styled";

const JoinNow = () => {
  return (
    <SectionContainerTwo>
      <JoinNowContainerOne>
        <JoinNowContainerOneImgOne src={joinNowOne} />
        <JoinNowContainerOneImgTwo src={joinNowTwo} />
        <JoinNowContainerOneImgThree src={joinNowThree} />
      </JoinNowContainerOne>
      <JoinNowContainerTwo>
        <StyledParagraph>
          Experience the convenience on our wedsite today and discover how easy
          it is to plan your events with us
        </StyledParagraph>
        <StyledSemiHeading>There is a venue for every event</StyledSemiHeading>
        <StyledBaseButton>Join now</StyledBaseButton>
      </JoinNowContainerTwo>
    </SectionContainerTwo>
  );
};

export default JoinNow;

 const SectionContainerTwo = styled.div`
  background-color: #ffffffff;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items:center;
`;

const JoinNowContainerOne = styled.div`
  height: 50vh;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top:60px;
`;

const JoinNowContainerOneImgOne = styled.img`
  width: 250px;
`;
const JoinNowContainerOneImgTwo = styled.img`
  width: 250px;
`;
const JoinNowContainerOneImgThree = styled.img`
  width: 250px;
`;

const JoinNowContainerTwo = styled.div`                                                 
  margin-top:30px;
`;
