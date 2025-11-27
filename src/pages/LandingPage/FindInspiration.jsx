import venue_hall from "../../assets/landingPage/venue.jpg";
import forward_arrow from "../../assets/landingPage/arrow_forward.svg";
import { Button } from "../../components/Buttons/Button";
import { findInspirationTxt } from "../../enum/landingPage.common";
import {StyledSemiHeading} from "../../components/Styled/Typography.styled.jsx";

import {
  StyledSection,
  StyledImageContainer,
  StyledImage,
  StyledContainerTwo,
  StyledContent,
  StyledIcon,
  StyledBtnContainer,
} from "../LandingPage/landingPageStyling/findInspirationStyling.jsx";

const FindInspiration = () => {
  return (
    <StyledSection>
      <StyledImageContainer>
        <StyledImage src={venue_hall} />
      </StyledImageContainer>
      <StyledContainerTwo>
        <StyledSemiHeading left>
          {findInspirationTxt.FIND_HEADING}
        </StyledSemiHeading>
        <StyledContent>{findInspirationTxt.FIND_PARAGRAPH}</StyledContent>
        <StyledBtnContainer>
          <Button type="transparent">
            {findInspirationTxt.FINDOUTLINE_BTN}{" "}
            <StyledIcon src={forward_arrow} />
          </Button>
        </StyledBtnContainer>
      </StyledContainerTwo>
    </StyledSection>
  );
};

export default FindInspiration;
