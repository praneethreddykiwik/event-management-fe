import styled from "styled-components";
import { HomePageLayout } from "./HomePageLayout.jsx";
import {
  StyledParagraphSmallGray,
} from "../../components/Styled/Typography.styled.jsx";
import { StyledBaseButton } from "../../components/Styled/Buttons.styled.jsx";
import { mobile } from "../../theme/media-queries.jsx";
import joinNowVenue1 from "../../assets/landingPage/joinNowVenue1.jpg";
import * as enums from "../../myEnum";

const HeroSection = () => {
  return (
    <StyledHeroLayout flexDirection="column">
      <StyledContentContainer>
        <StyledHeadline>
          {enums.HERO_SECTION_DATA.HERO_HEADING}
        </StyledHeadline>

        <StyledSubHeading>
          {enums.HERO_SECTION_DATA.HERO_SUBHEADING}
        </StyledSubHeading>

        <StyledTagline>
          {enums.HERO_SECTION_DATA.HERO_TAGLINE}
        </StyledTagline>

        <StyledDescription>
          {enums.HERO_SECTION_DATA.HERO_DESCRIPTION}
        </StyledDescription>

        <StyledButtonContainer>
          <PrimaryButton>
            {enums.HERO_SECTION_DATA.HERO_PRIMARY_BTN}
          </PrimaryButton>

          <SecondaryButton>
            {enums.HERO_SECTION_DATA.HERO_SECONDARY_BTN}
          </SecondaryButton>
        </StyledButtonContainer>
      </StyledContentContainer>
    </StyledHeroLayout>
  );
};

export default HeroSection;

const StyledHeroLayout = styled(HomePageLayout)`
  padding: 60px 0;
  justify-content: center;
  align-items: center;
  text-align: center;

  /* Background Image */
  background-image: url(${joinNowVenue1});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  /* Overlay for readability */
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.75); /* light overlay */
    z-index: -1;
  }

  ${mobile`
    padding: 40px 0;
  `}
`;

const StyledContentContainer = styled.div`
  max-width: 900px;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.6);
  padding: 30px;
  border-radius: 12px;
`;

const StyledHeadline = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 20px;

  ${mobile`
    font-size: 32px;
  `}
`;

const StyledSubHeading = styled(StyledParagraphSmallGray)`
  font-size: 18px;
  margin-bottom: 20px;

  ${mobile`
    font-size: 16px;
  `}
`;

const StyledTagline = styled.p`
  font-weight: 600;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.primary};
`;

const StyledDescription = styled(StyledParagraphSmallGray)`
  font-size: 16px;
  margin-bottom: 30px;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  ${mobile`
    flex-direction: column;
    gap: 16px;
  `}
`;

const PrimaryButton = styled(StyledBaseButton)`
  min-width: 220px;

  ${mobile`
    width: 100%;
  `}
`;

const SecondaryButton = styled(StyledBaseButton)`
  min-width: 220px;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }

  ${mobile`
    width: 100%;
  `}
`;