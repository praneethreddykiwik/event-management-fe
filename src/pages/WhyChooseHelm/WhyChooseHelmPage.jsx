import styled from "styled-components";
 
import { mobile } from "../../theme/media-queries.jsx";
 
import { HomePageLayout } from "../Home/HomePageLayout.jsx";
 
import {
  StyledSemiHeading,
  StyledParagraphSmallGray,
} from "../../components/Styled/Typography.styled.jsx";
 
import {
  whyChooseData,
  comparisonTable,
  testimonials,
} from "../../helpers/WhyChoose.helper.jsx";
 
import { WHY_CHOOSE_DATA } from "../../myEnum/WhyHelmText.jsx";
 
const WhyChoose = () => {
  return (
    <StyledWrapper>
 
      {/* Hero */}
      <StyledHeroSection flexDirection="column">
 
        <StyledHeroHeading>
          {WHY_CHOOSE_DATA.HERO_HEADING}
        </StyledHeroHeading>
 
        <StyledHeroSubHeading>
          {WHY_CHOOSE_DATA.HERO_SUBHEADING}
        </StyledHeroSubHeading>
 
      </StyledHeroSection>
 
      {/* Reasons */}
      {whyChooseData.map((item) => (
        <StyledReasonSection key={item.id}>
 
          <StyledReasonTag>
            Reason {item.id}
          </StyledReasonTag>
 
          <StyledSemiHeading left>
            {item.title}
          </StyledSemiHeading>
 
          <StyledParagraphSmallGray left>
            {item.description}
          </StyledParagraphSmallGray>
 
          <StyledGrid>
 
            {item.eliminate && (
              <StyledCard>
 
                <StyledCardHeading>
                  {WHY_CHOOSE_DATA.ELIMINATE_HEADING}
                </StyledCardHeading>
 
                {item.eliminate.map((point, idx) => (
                  <StyledListItem key={idx}>
                    {point}
                  </StyledListItem>
                ))}
 
              </StyledCard>
            )}
 
            {item.gain && (
              <StyledCard>
 
                <StyledCardHeading>
                  {WHY_CHOOSE_DATA.GAIN_HEADING}
                </StyledCardHeading>
 
                {item.gain.map((point, idx) => (
                  <StyledListItem key={idx}>
                    {point}
                  </StyledListItem>
                ))}
 
              </StyledCard>
            )}
 
            {item.flow && (
              <StyledCard>
 
                <StyledCardHeading>
                  {WHY_CHOOSE_DATA.FLOW_HEADING}
                </StyledCardHeading>
 
                {item.flow.map((point, idx) => (
                  <StyledListItem key={idx}>
                    {point}
                  </StyledListItem>
                ))}
 
              </StyledCard>
            )}
 
            {item.focus && (
              <StyledCard>
 
                <StyledCardHeading>
                  {WHY_CHOOSE_DATA.FOCUS_HEADING}
                </StyledCardHeading>
 
                {item.focus.map((point, idx) => (
                  <StyledListItem key={idx}>
                    {point}
                  </StyledListItem>
                ))}
 
              </StyledCard>
            )}
 
            {item.handles && (
              <StyledCard>
 
                <StyledCardHeading>
                  {WHY_CHOOSE_DATA.HELM_HANDLES}
                </StyledCardHeading>
 
                {item.handles.map((point, idx) => (
                  <StyledListItem key={idx}>
                    {point}
                  </StyledListItem>
                ))}
 
              </StyledCard>
            )}
 
            {item.security && (
              <StyledCard>
 
                <StyledCardHeading>
                  {WHY_CHOOSE_DATA.SECURITY_HEADING}
                </StyledCardHeading>
 
                {item.security.map((point, idx) => (
                  <StyledListItem key={idx}>
                    {point}
                  </StyledListItem>
                ))}
 
              </StyledCard>
            )}
 
            {item.deliver && (
              <StyledCard>
 
                <StyledCardHeading>
                  {WHY_CHOOSE_DATA.DELIVER_HEADING}
                </StyledCardHeading>
 
                {item.deliver.map((point, idx) => (
                  <StyledListItem key={idx}>
                    {point}
                  </StyledListItem>
                ))}
 
              </StyledCard>
            )}
 
            {item.clients && (
              <StyledCard>
 
                <StyledCardHeading>
                  {WHY_CHOOSE_DATA.CLIENTS_HEADING}
                </StyledCardHeading>
 
                {item.clients.map((point, idx) => (
                  <StyledListItem key={idx}>
                    {point}
                  </StyledListItem>
                ))}
 
              </StyledCard>
            )}
 
          </StyledGrid>
 
          {item.tracking && (
            <StyledInfoBox>
              {item.tracking}
            </StyledInfoBox>
          )}
 
        </StyledReasonSection>
      ))}
 
      {/* Comparison Table */}
      <StyledComparisonSection>
 
        <StyledSemiHeading>
          {WHY_CHOOSE_DATA.COMPARISON_HEADING}
        </StyledSemiHeading>
 
        <StyledTableWrapper>
 
          <StyledTable>
 
            <thead>
 
              <tr>
                <StyledTh>Feature</StyledTh>
                <StyledTh>HELM</StyledTh>
                <StyledTh>Spreadsheets</StyledTh>
                <StyledTh>Basic Tools</StyledTh>
                <StyledTh>Enterprise</StyledTh>
              </tr>
 
            </thead>
 
            <tbody>
 
              {comparisonTable.map((row, index) => (
                <tr key={index}>
 
                  <StyledTd>{row.feature}</StyledTd>
                  <StyledTd>{row.helm}</StyledTd>
                  <StyledTd>{row.spreadsheet}</StyledTd>
                  <StyledTd>{row.basic}</StyledTd>
                  <StyledTd>{row.enterprise}</StyledTd>
 
                </tr>
              ))}
 
            </tbody>
 
          </StyledTable>
 
        </StyledTableWrapper>
 
      </StyledComparisonSection>
 
      {/* Testimonials */}
      <StyledTestimonialSection>
 
        <StyledSemiHeading>
          {WHY_CHOOSE_DATA.TESTIMONIAL_HEADING}
        </StyledSemiHeading>
 
        <StyledTestimonialGrid>
 
          {testimonials.map((item, index) => (
            <StyledTestimonialCard key={index}>
 
              <StyledReview>
                “{item.review}”
              </StyledReview>
 
              <StyledClientName>
                {item.name}
              </StyledClientName>
 
              <StyledCompany>
                {item.company}
              </StyledCompany>
 
            </StyledTestimonialCard>
          ))}
 
        </StyledTestimonialGrid>
 
      </StyledTestimonialSection>
 
      {/* CTA */}
      <StyledCTASection>
 
        <StyledCTAHeading>
          {WHY_CHOOSE_DATA.CTA_HEADING}
        </StyledCTAHeading>
 
        <StyledCTAText>
          {WHY_CHOOSE_DATA.CTA_TEXT}
        </StyledCTAText>
 
      </StyledCTASection>
 
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
 
const StyledReasonSection = styled.div`
  padding: 90px 80px;
  border-bottom: 1px solid #e2e8f0;
 
  ${mobile`
    padding: 70px 20px;
  `}
`;
 
const StyledReasonTag = styled.div`
  color: #2563eb;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 20px;
`;
 
const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-top: 40px;
 
  ${mobile`
    grid-template-columns: 1fr;
  `}
`;
 
const StyledCard = styled.div`
  background: #f8fafc;
  padding: 35px;
  border-radius: 20px;
`;
 
const StyledCardHeading = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
`;
 
const StyledListItem = styled.div`
  padding: 14px 0;
  border-bottom: 1px solid #dbeafe;
`;
 
const StyledInfoBox = styled.div`
  background: #eff6ff;
  padding: 30px;
  border-left: 6px solid #2563eb;
  margin-top: 35px;
  border-radius: 16px;
`;
 
const StyledComparisonSection = styled.div`
  padding: 100px 80px;
 
  ${mobile`
    padding: 70px 20px;
  `}
`;
 
const StyledTableWrapper = styled.div`
  overflow-x: auto;
  margin-top: 40px;
`;
 
const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;
 
const StyledTh = styled.th`
  background: #1e293b;
  color: white;
  padding: 18px;
  text-align: left;
`;
 
const StyledTd = styled.td`
  padding: 18px;
  border: 1px solid #e2e8f0;
`;
 
const StyledTestimonialSection = styled.div`
  background: #f8fafc;
  padding: 100px 80px;
 
  ${mobile`
    padding: 70px 20px;
  `}
`;
 
const StyledTestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-top: 50px;
 
  ${mobile`
    grid-template-columns: 1fr;
  `}
`;
 
const StyledTestimonialCard = styled.div`
  background: white;
  padding: 35px;
  border-radius: 20px;
`;
 
const StyledReview = styled.p`
  line-height: 1.8;
  color: #475569;
`;
 
const StyledClientName = styled.h4`
  margin-top: 25px;
  font-size: 20px;
`;
 
const StyledCompany = styled.p`
  color: #2563eb;
`;
 
const StyledCTASection = styled.div`
  background: #2563eb;
  text-align: center;
  padding: 100px 20px;
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
  margin-top: 20px;
`;
 
export default WhyChoose;