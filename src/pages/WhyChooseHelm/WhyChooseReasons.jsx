import styled from "styled-components";
import {
  StyledParagraphSmallGray,
  StyledSemiHeading,
} from "../../components/Styled/Typography.styled";
import { mobile } from "../../theme/media-queries";
import { whyChooseData } from "../../helpers/WhyChoose.helper.jsx";
import { WHY_CHOOSE_DATA } from "../../myEnum/WhyHelmText.jsx";

const WhyChooseReasons = () => {
  return (
    <>
      {whyChooseData.map((item) => (
        <StyledReasonSection key={item.id}>
          <StyledReasonTag>Reason {item.id}</StyledReasonTag>

          <StyledSemiHeading left>{item.title}</StyledSemiHeading>

          <StyledParagraphSmallGray left>
            {item.description}
          </StyledParagraphSmallGray>

          <StyledGrid>
            {WHY_CHOOSE_DATA.REASON_CARD_CONFIG.map(({ key, title }) => {
              if (!item[key]) {
                return null;
              }

              return (
                <StyledCard key={key}>
                  <StyledCardHeading>{title}</StyledCardHeading>

                  {item[key].map((point, index) => (
                    <StyledListItem key={index}>{point}</StyledListItem>
                  ))}
                </StyledCard>
              );
            })}
          </StyledGrid>

          {item.tracking && <StyledInfoBox>{item.tracking}</StyledInfoBox>}
        </StyledReasonSection>
      ))}
    </>
  );
};

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

export default WhyChooseReasons;
