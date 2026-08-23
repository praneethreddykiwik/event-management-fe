import styled from "styled-components";
import { StyledSemiHeading } from "../../components/Styled/Typography.styled";
import { mobile } from "../../theme/media-queries";
import { comparisonTable, testimonials, whyChooseData } from "../../helpers/WhyChoose.helper";
import { WHY_CHOOSE_DATA } from "../../myEnum/WhyHelmText";
const WhyChooseTable = () => {
  return (
    <>
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
              <StyledReview>“{item.review}”</StyledReview>

              <StyledClientName>{item.name}</StyledClientName>

              <StyledCompany>{item.company}</StyledCompany>
            </StyledTestimonialCard>
          ))}
        </StyledTestimonialGrid>
      </StyledTestimonialSection>

      {/* CTA */}
      <StyledCTASection>
        <StyledCTAHeading>{WHY_CHOOSE_DATA.CTA_HEADING}</StyledCTAHeading>

        <StyledCTAText>{WHY_CHOOSE_DATA.CTA_TEXT}</StyledCTAText>
      </StyledCTASection>
    </>
  );
};

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

export default WhyChooseTable;
