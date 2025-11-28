import joinNowOne from "../../assets/landingPage/joinNowVenue1.jpg";
import joinNowTwo from "../../assets/landingPage/joinNowVenue2.jpg";
import joinNowThree from "../../assets/landingPage/joinNowVenue3.jpg";
import { Button } from "../../components/Buttons/Button";
import { JOINCOMPONENT_TXT } from "../../enum/landingPage.common";
import { StyledSectionContainer } from "../../components/Styled/Common.styled.jsx";
import {
  StyledParagraph,
  StyledSemiHeading,
} from "../../components/Styled/Typography.styled.jsx";
import {
  StyledContainerOne,
  StyledContainerOneImg,
  StyledContainerTwo,
} from "../LandingPage/landingPageStyling/joinNowStyling.jsx";

const JoinNow = () => {
  return (
    <StyledSectionContainer sx={{ flexDireaction: " column " }}>
      <StyledContainerOne>
        <StyledContainerOneImg src={joinNowOne} />
        <StyledContainerOneImg src={joinNowTwo} />
        <StyledContainerOneImg src={joinNowThree} />
      </StyledContainerOne>
      <StyledContainerTwo>
        <StyledParagraph>{JOINCOMPONENT_TXT.JOIN_PARAGRAPH}</StyledParagraph>
        <StyledSemiHeading>{JOINCOMPONENT_TXT.JOIN_HEADING}</StyledSemiHeading>
        <Button type="base">{JOINCOMPONENT_TXT.JOIN_BTN}</Button>
      </StyledContainerTwo>
    </StyledSectionContainer>
  );
};

export default JoinNow;
