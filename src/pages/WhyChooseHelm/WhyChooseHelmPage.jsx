import styled from "styled-components";
import { mobile } from "../../theme/media-queries.jsx";
import { HomePageLayout } from "../Home/HomePageLayout.jsx";
import { WHY_CHOOSE_DATA } from "../../myEnum/WhyHelmText.jsx";
import WhyChooseReasons from "./WhyChooseReasons.jsx";
import WhyChooseTable from "./WhyChooseTable.jsx";

const WhyChoose = () => {
  return (
    <StyledWrapper>
      {/* Hero */}
      <StyledHeroSection flexDirection="column">
        <StyledHeroHeading>{WHY_CHOOSE_DATA.HERO_HEADING}</StyledHeroHeading>

        <StyledHeroSubHeading>
          {WHY_CHOOSE_DATA.HERO_SUBHEADING}
        </StyledHeroSubHeading>
      </StyledHeroSection>

      <WhyChooseReasons />

      <WhyChooseTable />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
`;

const StyledHeroSection = styled(HomePageLayout)`
  background: linear-gradient(135deg, #0f172a 0%, #1d4ed8 100%);
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

  ${mobile`
    font-size: 38px;
  `}
`;

const StyledHeroSubHeading = styled.p`
  color: #dbeafe;
  max-width: 900px;
  margin-top: 25px;
  line-height: 1.8;
`;

export default WhyChoose;
