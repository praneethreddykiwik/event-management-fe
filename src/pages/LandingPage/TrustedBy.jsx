import canon from "../../assets/landingPage/canon.png";
import qatar from "../../assets/landingPage/Qatar-Airways-Symbol.png";
import saleForce from "../../assets/landingPage/salesForce.png";
import standard from "../../assets/landingPage/standard_chartered.png";
import { StyledSemiHeading } from "../../components/Styled/Typography.styled";
import {
  StylesContainer,
  StyledContainerImg,
  StyledIconFirst,
  StyledIconContainer,
  StyledIconOnes,
} from "../LandingPage/landingPageStyling/trustedStyling.jsx";
import { TRUSTEDCOMPONENT_TXT } from "../../enum/landingPage.common.jsx";
const TrustedBy = () => {
  return (
    <StylesContainer>
      <StyledSemiHeading>{TRUSTEDCOMPONENT_TXT.JOIN_HEADING}</StyledSemiHeading>
      <StyledContainerImg>
        <StyledIconContainer>
          <StyledIconFirst src={standard} />
        </StyledIconContainer>
        <StyledIconOnes sx={{ "border-radius": "50%" }} src={saleForce} />
        <StyledIconOnes sx={{ borderRadius: "50%" }} src={canon} />
        <StyledIconOnes sx={{ borderRadius: "50%" }} src={qatar} />
      </StyledContainerImg>
    </StylesContainer>
  );
};

export default TrustedBy;
