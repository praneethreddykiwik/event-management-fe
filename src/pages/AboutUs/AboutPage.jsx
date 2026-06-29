import styled from "styled-components";
import { mobile } from "../../theme/media-queries.jsx";

import { HomePageLayout } from "../Home/HomePageLayout.jsx";

import {
  StyledSemiHeading,
  StyledParagraphSmallGray,
  StyledAnchor,
} from "../../components/Styled/Typography.styled.jsx";

import { ABOUT_US_DATA } from "../../myEnum/aboutsText.jsx";
import { leadershipTeam } from "../../helpers/about.helper.jsx";
import Avatar from "../../components/Avatar/Avatar.jsx";
const AboutUs = () => {
  return (
    <StyledAboutWrapper>
      {/* Hero Section */}
      <StyledHeroSection flexDirection="column">
        <StyledTag>{ABOUT_US_DATA.ABOUT_TAG}</StyledTag>

        <StyledHeroHeading>{ABOUT_US_DATA.HERO_HEADING}</StyledHeroHeading>

        <StyledHeroParagraph>
          {ABOUT_US_DATA.HERO_PARAGRAPH}
        </StyledHeroParagraph>
      </StyledHeroSection>

      {/* Story Section */}
      <StyledSection>
        <StyledLeft>
          <StyledSemiHeading left>
            {ABOUT_US_DATA.STORY_HEADING}
          </StyledSemiHeading>

          <StyledParagraphSmallGray left>
            {ABOUT_US_DATA.STORY_PARAGRAPH_ONE}
          </StyledParagraphSmallGray>

          <StyledParagraphSmallGray left>
            {ABOUT_US_DATA.STORY_PARAGRAPH_TWO}
          </StyledParagraphSmallGray>
        </StyledLeft>

        <StyledRight>
          <StyledCard>
            <StyledCardHeading>
              {ABOUT_US_DATA.WHY_HELM_HEADING}
            </StyledCardHeading>

            <StyledCardItem>{ABOUT_US_DATA.WHY_HELM_ONE}</StyledCardItem>

            <StyledCardItem>{ABOUT_US_DATA.WHY_HELM_TWO}</StyledCardItem>

            <StyledCardItem>{ABOUT_US_DATA.WHY_HELM_THREE}</StyledCardItem>

            <StyledCardItem>{ABOUT_US_DATA.WHY_HELM_FOUR}</StyledCardItem>
          </StyledCard>
        </StyledRight>
      </StyledSection>

      {/* Leadership Section */}
      <StyledSection flexDirection="column">
        <StyledSemiHeading>
          {ABOUT_US_DATA.LEADERSHIP_HEADING}
        </StyledSemiHeading>

        <StyledSubText>{ABOUT_US_DATA.LEADERSHIP_SUBTEXT}</StyledSubText>

        <StyledLeadershipGrid>
          {leadershipTeam.map((member, index) => (
            <StyledLeaderCard key={index}>
              <Avatar
                name={member.name}
                displayInitials={true}
                style={{
                  position: "absolute",
                  top: "20px",
                  left: "20px",
                  width: "70px",
                  height: "70px",
                  fontSize: "28px",
                  fontWeight: "700",
                }}
              >
                {member.name.charAt(0)}
              </Avatar>

              <StyledLeaderName>{member.name}</StyledLeaderName>

              <StyledLeaderRole>{member.role}</StyledLeaderRole>

              <StyledParagraphSmallGray left>
                {member.description}
              </StyledParagraphSmallGray>

              <StyledExpertise>
                <strong>Expertise:</strong> {member.expertise}
              </StyledExpertise>
            </StyledLeaderCard>
          ))}
        </StyledLeadershipGrid>
      </StyledSection>

      {/* CTA */}
      <StyledCTASection>
        <StyledCTAHeading>{ABOUT_US_DATA.CTA_HEADING}</StyledCTAHeading>

        <StyledCTAText>{ABOUT_US_DATA.CTA_TEXT}</StyledCTAText>

        <StyledCTAButton>
          <StyledAnchor>{ABOUT_US_DATA.CTA_BUTTON}</StyledAnchor>
        </StyledCTAButton>
      </StyledCTASection>
    </StyledAboutWrapper>
  );
};

const StyledAboutWrapper = styled.div`
  width: 100%;
`;

const StyledHeroSection = styled(HomePageLayout)`
  background: #0f172a;
  padding: 120px 80px;
  text-align: center;

  ${mobile`
    padding: 80px 20px;
  `}
`;

const StyledTag = styled.div`
  color: #60a5fa;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const StyledHeroHeading = styled.h1`
  color: white;
  font-size: 60px;
  font-weight: 700;

  ${mobile`
    font-size: 38px;
  `}
`;

const StyledHeroParagraph = styled.p`
  color: #d1d5db;
  max-width: 850px;
  line-height: 1.8;
  margin-top: 20px;
`;

const StyledSection = styled(HomePageLayout)`
  padding: 100px 80px;
  gap: 60px;

  ${mobile`
    padding: 70px 20px;
    flex-direction: column;
  `}
`;

const StyledLeft = styled.div`
  width: 50%;

  ${mobile`
    width: 100%;
  `}
`;

const StyledRight = styled.div`
  width: 50%;

  ${mobile`
    width: 100%;
  `}
`;

const StyledCard = styled.div`
  background: #f8fafc;
  padding: 40px;
  border-radius: 20px;
`;

const StyledCardHeading = styled.h3`
  font-size: 28px;
  margin-bottom: 25px;
`;

const StyledCardItem = styled.div`
  padding: 15px 0;
  border-bottom: 1px solid #dbeafe;
`;

const StyledLeadershipGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-top: 50px;

  ${mobile`
    grid-template-columns: 1fr;
  `}
`;

const StyledLeaderCard = styled.div`
  background: #f8fafc;
  padding: 35px;
  border-radius: 24px;
  position: relative;
`;

const StyledLeaderName = styled.h3`
  font-size: 28px;
  font-weight: 700;
`;

const StyledLeaderRole = styled.p`
  color: #2563eb;
  margin: 10px 0 20px;
`;

const StyledExpertise = styled.div`
  margin-top: 20px;
  line-height: 1.8;
`;

const StyledCTASection = styled.div`
  background: #2563eb;
  padding: 100px 20px;
  text-align: center;
`;

const StyledCTAHeading = styled.h2`
  color: white;
  font-size: 50px;

  ${mobile`
    font-size: 36px;
  `}
`;

const StyledCTAText = styled.p`
  color: #dbeafe;
  max-width: 700px;
  margin: auto;
  margin-top: 20px;
`;

const StyledCTAButton = styled.div`
  margin-top: 40px;

  a {
    background: white;
    color: #2563eb;
    padding: 16px 35px;
    border-radius: 10px;
    text-decoration: none;
    font-weight: 700;
  }
`;

const StyledSubText = styled.p`
  color: #64748b;
  max-width: 850px;
  margin: 20px auto 0;
`;

export default AboutUs;
