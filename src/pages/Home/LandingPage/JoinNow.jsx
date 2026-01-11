import joinNowOne from "../../../assets/landingPage/joinNowVenue1.jpg";
import joinNowTwo from "../../../assets/landingPage/joinNowVenue2.jpg";
import joinNowThree from "../../../assets/landingPage/joinNowVenue3.jpg";
import { JOINCOMPONENT_TXT } from "../../../enum/landingPage.common.jsx";
import { LandingPageLayout } from "../../../layout/landingPage/landingPageLayout.jsx";
import {
  StyledParagraphSmallGray,
  StyledSemiHeading,
} from "../../../components/Styled/Typography.styled.jsx";

import styled from "styled-components";
import { StyledBaseButton } from "../../../components/Styled/Buttons.styled.jsx";

const JoinNow = () => {
  return (
    <LandingPageLayout flexDirection="column">
      <StyledContainerOne>
        <StyledContainerOneImg src={joinNowOne} />
        <StyledContainerOneImg src={joinNowTwo} />
        <StyledContainerOneImg src={joinNowThree} />
      </StyledContainerOne>
      <StyledContainerTwo>
        <StyledJoinNowPara>
          {JOINCOMPONENT_TXT.JOIN_PARAGRAPH}
        </StyledJoinNowPara>
        <StyledSemiHeading>{JOINCOMPONENT_TXT.JOIN_HEADING}</StyledSemiHeading>
        <StyledJoinBtn>{JOINCOMPONENT_TXT.JOIN_BTN}</StyledJoinBtn>
      </StyledContainerTwo>
    </LandingPageLayout>
  );
};

const StyledJoinBtn = styled(StyledBaseButton)`
  width: 120px;
`;

const StyledJoinNowPara = styled(StyledParagraphSmallGray)``;

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

export default JoinNow;
