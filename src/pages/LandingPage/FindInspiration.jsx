import venue_hall from "../../assets/landingPage/venue.jpg";
import forward_arrow from "../../assets/landingPage/arrow_forward.svg";
import { Button } from "../../components/Buttons/Button";
import { FINDINSIPRATION_TXT } from "../../enum/landingPage.common";
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
          {FINDINSIPRATION_TXT.FIND_HEADING}
        </StyledSemiHeading>
        <StyledContent>{FINDINSIPRATION_TXT.FIND_PARAGRAPH}</StyledContent>
        <StyledBtnContainer>
          <Button type="transparent">
            {FINDINSIPRATION_TXT.FINDOUTLINE_BTN}{" "}
            <StyledIcon src={forward_arrow} />
          </Button>
        </StyledBtnContainer>
      </StyledContainerTwo>
    </StyledSection>
  );
};

export default FindInspiration;
