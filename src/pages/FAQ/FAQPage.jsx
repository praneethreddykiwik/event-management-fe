import styled from "styled-components";
import { mobile } from "../../theme/media-queries";
import { FAQ_DATA } from "../../myEnum/FAQText";
import { faqSections } from "../../helpers/FAQ.helper";

const FAQ = () => {
  return (
    <StyledWrapper>
      <StyledHero>
        <StyledHeroHeading>{FAQ_DATA.HERO_HEADING}</StyledHeroHeading>

        <StyledHeroSubHeading>{FAQ_DATA.HERO_SUBHEADING}</StyledHeroSubHeading>
      </StyledHero>

      {faqSections.map((section, index) => (
        <StyledSection key={index}>
          <StyledSectionHeading>{section.title}</StyledSectionHeading>

          {section.questions.map((faq, idx) => (
            <StyledFAQCard key={idx}>
              <StyledQuestion>{faq.question}</StyledQuestion>

              <StyledAnswer>{faq.answer}</StyledAnswer>
            </StyledFAQCard>
          ))}
        </StyledSection>
      ))}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  padding: 40px 80px;
  background: ${({ theme }) => theme.colors["light-blue"]};

  ${mobile`
    padding: 20px;
  `}
`;

const StyledHero = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const StyledHeroHeading = styled.h1`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 16px;
`;

const StyledHeroSubHeading = styled.p`
  font-size: 18px;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
`;

const StyledSection = styled.div`
  margin-bottom: 40px;
`;

const StyledSectionHeading = styled.h2`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const StyledFAQCard = styled.div`
  background: #fff;
  padding: 20px;
  margin-bottom: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const StyledQuestion = styled.h4`
  margin-bottom: 10px;
  font-weight: 600;
`;

const StyledAnswer = styled.p`
  line-height: 1.6;
  color: #555;
`;

export default FAQ;
