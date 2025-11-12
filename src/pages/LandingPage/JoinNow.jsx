import styled from "styled-components";
import { SectionContainer } from "../../components/Styled/Common.styled";
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
    <SectionContainer sx= {{ flexDireaction: " column " , height:"90vh" }}>
      <ContainerOne>
        <ContainerOneImg src={joinNowOne} />
        <ContainerOneImg src={joinNowTwo} />
        <ContainerOneImg src={joinNowThree} />
      </ContainerOne>
      <ContainerTwo>
        <StyledParagraph>
          Experience the convenience on our wedsite today and discover how easy
          it is to plan your events with us
        </StyledParagraph>
        <StyledSemiHeading>There is a venue for every event</StyledSemiHeading>
        <Button type="base">Join now</Button>
      </ContainerTwo>
    </SectionContainer>
  );
};

export default JoinNow;


const ContainerOne = styled.div`
  height: 50vh;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top:60px;
`;

const ContainerOneImg = styled.img`
  width: 270px;
`;

const ContainerTwo = styled.div`                                                 
  margin-top:30px;
`;
