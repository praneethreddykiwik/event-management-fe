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
import { joinComponentTxt } from "../../enum/landingPage.common";

const JoinNow = () => {
  return (
    <StyledSectionContainer sx={{ flexDireaction: " column " }}>
      <StyledContainerOne>
        <StyledContainerOneImg src={joinNowOne} />
        <StyledContainerOneImg src={joinNowTwo} />
        <StyledContainerOneImg src={joinNowThree} />
      </StyledContainerOne>
      <StyledContainerTwo>
        <StyledParagraph>{joinComponentTxt.joinParagraph}</StyledParagraph>
        <StyledSemiHeading>{joinComponentTxt.joinHeading}</StyledSemiHeading>
        <Button type="base">{joinComponentTxt.joinBtn}</Button>
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

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 0px;
  }
`;

const StyledContainerOneImg = styled.img`
  width: 270px;

  @media (max-width: 768px) {
    width: 25%;
  }
`;

const StyledContainerTwo = styled.div`
  margin-top: 30px;

  @media (max-width: 768px) {
    width: 80%;
  }
`;
