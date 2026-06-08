import styled from "styled-components";

import { mobile } from "../../theme/media-queries.jsx";

import { HomePageLayout } from "../Home/HomePageLayout.jsx";

import {
  StyledSemiHeading,
  StyledParagraphSmallGray,
} from "../../components/Styled/Typography.styled.jsx";

import { SERVICES_PAGE_DATA } from "../../myEnum/OurServicesText.jsx";

import { servicesData } from "../../helpers/Ourservices.helper.jsx";

const OurServices = () => {
  return (
    <StyledWrapper>

      {/* Hero Section */}
      <StyledHeroSection flexDirection="column">

        <StyledHeroHeading>
          {SERVICES_PAGE_DATA.HERO_HEADING}
        </StyledHeroHeading>

        <StyledHeroSubHeading>
          {SERVICES_PAGE_DATA.HERO_SUBHEADING}
        </StyledHeroSubHeading>

      </StyledHeroSection>

      {/* Services */}
      {servicesData.map((service, index) => (
        <StyledServiceSection key={service.id}>

          <StyledTopLabel>
            Service {service.id}
          </StyledTopLabel>

          <StyledSemiHeading left>
            {service.title}
          </StyledSemiHeading>

          <StyledParagraphSmallGray left>
            {service.description}
          </StyledParagraphSmallGray>

          {/* Benefits */}
          <StyledContentGrid>

            <StyledContentCard>

              <StyledCardTitle>
                {SERVICES_PAGE_DATA.BENEFITS_HEADING}
              </StyledCardTitle>

              {service.benefits?.map((item, idx) => (
                <StyledListItem key={idx}>
                  {item}
                </StyledListItem>
              ))}

            </StyledContentCard>

            {/* Use Cases */}
            {service.useCases && (
              <StyledContentCard>

                <StyledCardTitle>
                  {SERVICES_PAGE_DATA.USE_CASES_HEADING}
                </StyledCardTitle>

                {service.useCases.map((item, idx) => (
                  <StyledListItem key={idx}>
                    {item}
                  </StyledListItem>
                ))}

              </StyledContentCard>
            )}

            {/* Business Benefits */}
            {service.businessBenefits && (
              <StyledContentCard>

                <StyledCardTitle>
                  {SERVICES_PAGE_DATA.BUSINESS_BENEFITS}
                </StyledCardTitle>

                {service.businessBenefits.map((item, idx) => (
                  <StyledListItem key={idx}>
                    {item}
                  </StyledListItem>
                ))}

              </StyledContentCard>
            )}

          </StyledContentGrid>

          {/* Example */}
          {service.example && (
            <StyledExampleBox>

              <StyledExampleHeading>
                {SERVICES_PAGE_DATA.REAL_WORLD_EXAMPLE}
              </StyledExampleHeading>

              <StyledParagraphSmallGray left>
                {service.example}
              </StyledParagraphSmallGray>

            </StyledExampleBox>
          )}

          {/* Lifecycle */}
          {service.phases && (
            <StyledLifecycleGrid>

              <StyledLifecycleCard>

                <StyledCardTitle>
                  {SERVICES_PAGE_DATA.PRE_EVENT}
                </StyledCardTitle>

                {service.phases.preEvent.map((item, idx) => (
                  <StyledListItem key={idx}>
                    {item}
                  </StyledListItem>
                ))}

              </StyledLifecycleCard>

              <StyledLifecycleCard>

                <StyledCardTitle>
                  {SERVICES_PAGE_DATA.EVENT_DAY}
                </StyledCardTitle>

                {service.phases.eventDay.map((item, idx) => (
                  <StyledListItem key={idx}>
                    {item}
                  </StyledListItem>
                ))}

              </StyledLifecycleCard>

              <StyledLifecycleCard>

                <StyledCardTitle>
                  {SERVICES_PAGE_DATA.POST_EVENT}
                </StyledCardTitle>

                {service.phases.postEvent.map((item, idx) => (
                  <StyledListItem key={idx}>
                    {item}
                  </StyledListItem>
                ))}

              </StyledLifecycleCard>

            </StyledLifecycleGrid>
          )}

        </StyledServiceSection>
      ))}

    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
`;

const StyledHeroSection = styled(HomePageLayout)`
  background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%);
  padding: 120px 80px;
  text-align: center;

  ${mobile`
    padding: 80px 20px;
  `}
`;

const StyledHeroHeading = styled.h1`
  color: white;
  font-size: 60px;
  font-weight: 700;
  max-width: 1000px;
  line-height: 1.2;

  ${mobile`
    font-size: 38px;
  `}
`;

const StyledHeroSubHeading = styled.p`
  color: #dbeafe;
  max-width: 900px;
  line-height: 1.8;
  margin-top: 25px;
  font-size: 18px;
`;

const StyledServiceSection = styled.div`
  padding: 90px 80px;
  border-bottom: 1px solid #e2e8f0;

  ${mobile`
    padding: 70px 20px;
  `}
`;

const StyledTopLabel = styled.div`
  color: #2563eb;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const StyledContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-top: 40px;

  ${mobile`
    grid-template-columns: 1fr;
  `}
`;

const StyledContentCard = styled.div`
  background: #f8fafc;
  padding: 35px;
  border-radius: 20px;
`;

const StyledCardTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const StyledListItem = styled.div`
  padding: 14px 0;
  border-bottom: 1px solid #dbeafe;
  line-height: 1.7;
`;

const StyledExampleBox = styled.div`
  background: #eff6ff;
  margin-top: 40px;
  padding: 35px;
  border-left: 6px solid #2563eb;
  border-radius: 16px;
`;

const StyledExampleHeading = styled.h4`
  font-size: 22px;
  margin-bottom: 15px;
`;

const StyledLifecycleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  margin-top: 40px;

  ${mobile`
    grid-template-columns: 1fr;
  `}
`;

const StyledLifecycleCard = styled.div`
  background: #f8fafc;
  padding: 35px;
  border-radius: 20px;
`;

export default OurServices;