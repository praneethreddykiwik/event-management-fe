import React from "react";
import styled from "styled-components";
import images from "../../assets/Get_in_touch_images/images.png";
import { Button } from "../../components/Buttons/Button";
import { mobile } from "../../theme/media-queries";
import { cardData1 } from "../GetInTouch/GetInTouch.helper";
import { GET_IN_TOUCH_DATA } from "../../myEnum/ContactUsText";
import {
  StyledHeadingBig,
  StyledParagraphSmallGray,
  StyledMediumHeading,
  StyledParagraphSmall,
  StyledAnchor,
} from "../../components/Styled/Typography.styled";

const GetInTouch = () => {
  const cardData = cardData1;

  return (
    <StyledPage>
      <StyledContainer>
        <StyledImageWrapper>
          <StyledImage src={images} alt="contact illustration" />
        </StyledImageWrapper>
        <StyledBox>
          <StyledHeader>
            <StyledHeadingBig left>
              {GET_IN_TOUCH_DATA.HERO_HEADING}
            </StyledHeadingBig>
            <StyledParagraphSmallGray left>
              {GET_IN_TOUCH_DATA.HERO_SUBHEADING}
            </StyledParagraphSmallGray>
          </StyledHeader>

          <StyledCardsGrid>
            {cardData.map((item, index) => (
              <StyledCard key={index}>
                <StyledMediumHeading small left>
                  {item.title}
                </StyledMediumHeading>
                <CardText left>
                  {item.text}{" "}
                  {item.email && (
                    <StyledLink href={`mailto:${item.email}`}>
                      {item.email}
                    </StyledLink>
                  )}
                </CardText>
                {item.button && <Button whiteText>Contact</Button>}
              </StyledCard>
            ))}
          </StyledCardsGrid>

          <StyledInfoSection>
            <StyledMediumHeading left>
              {GET_IN_TOUCH_DATA.CONTACT_HEADING}
            </StyledMediumHeading>

            <StyledParagraphSmallGray left>
              <strong>{GET_IN_TOUCH_DATA.SALES_INQUIRY}:</strong>{" "}
              <StyledLink href={`mailto:${GET_IN_TOUCH_DATA.SALES_EMAIL}`}>
                {GET_IN_TOUCH_DATA.SALES_EMAIL}
              </StyledLink>
            </StyledParagraphSmallGray>

            <StyledParagraphSmallGray left>
              <strong>{GET_IN_TOUCH_DATA.GENERAL_INFO}:</strong>{" "}
              <StyledLink
                href={`mailto:${GET_IN_TOUCH_DATA.GENERAL_INFO_EMAIL}`}
              >
                {GET_IN_TOUCH_DATA.GENERAL_INFO_EMAIL}
              </StyledLink>
            </StyledParagraphSmallGray>

            <StyledParagraphSmallGray left>
              <strong>{GET_IN_TOUCH_DATA.TECH_SUPPORT}:</strong>{" "}
              <StyledLink
                href={`mailto:${GET_IN_TOUCH_DATA.TECH_SUPPORT_EMAIL}`}
              >
                {GET_IN_TOUCH_DATA.TECH_SUPPORT_EMAIL}
              </StyledLink>
            </StyledParagraphSmallGray>
          </StyledInfoSection>

          <StyledInfoSection>
            <StyledMediumHeading left>
              {GET_IN_TOUCH_DATA.CTA_HEADING}
            </StyledMediumHeading>
            <StyledParagraphSmallGray left>
              {GET_IN_TOUCH_DATA.CTA_TEXT}
            </StyledParagraphSmallGray>
          </StyledInfoSection>

          <StyledNoteDesktop>
            {GET_IN_TOUCH_DATA.PRIVACY_TEXT_START}{" "}
            <StyledLink href="#">{GET_IN_TOUCH_DATA.PRIVACY_POLICY}</StyledLink>{" "}
            {GET_IN_TOUCH_DATA.PRIVACY_TEXT_END}
          </StyledNoteDesktop>
        </StyledBox>

        <StyledImageBox>
          <StyledDesktopImage src={images} alt="contact illustration" />

          <StyledInfoSection>
            <StyledMediumHeading left>
              {GET_IN_TOUCH_DATA.WHY_HELM_HEADING}
            </StyledMediumHeading>

            <StyledParagraphSmallGray left>
              <strong>{GET_IN_TOUCH_DATA.DEMO_HEADING}:</strong>{" "}
              {GET_IN_TOUCH_DATA.DEMO_DESCRIPTION}
            </StyledParagraphSmallGray>

            <StyledParagraphSmallGray left>
              <strong>{GET_IN_TOUCH_DATA.PRICING_HEADING}:</strong>{" "}
              {GET_IN_TOUCH_DATA.PRICING_DESCRIPTION}
            </StyledParagraphSmallGray>

            <StyledParagraphSmallGray left>
              <strong>{GET_IN_TOUCH_DATA.INTEGRATION_HEADING}:</strong>{" "}
              {GET_IN_TOUCH_DATA.INTEGRATION_DESCRIPTION}
            </StyledParagraphSmallGray>

            <StyledParagraphSmallGray left>
              <strong>{GET_IN_TOUCH_DATA.SUCCESS_HEADING}:</strong>{" "}
              {GET_IN_TOUCH_DATA.SUCCESS_DESCRIPTION}
            </StyledParagraphSmallGray>
          </StyledInfoSection>

          <StyledNoteMobile>
            {GET_IN_TOUCH_DATA.PRIVACY_TEXT_START}{" "}
            <StyledLink href="#">{GET_IN_TOUCH_DATA.PRIVACY_POLICY}</StyledLink>{" "}
            {GET_IN_TOUCH_DATA.PRIVACY_TEXT_END}
          </StyledNoteMobile>
        </StyledImageBox>
      </StyledContainer>
    </StyledPage>
  );
};

const StyledPage = styled.div`
  background: ${({ theme }) => theme.colors["light-blue"]};
  display: flex;
  justify-content: center;
  padding: 0px 100px 60px;

  ${mobile`
    padding: 20px 16px 40px;
  `}
`;

const StyledContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 90%;
  max-width: 1200px;
  background: ${({ theme }) => theme.colors.white};
  padding: 30px;
  box-shadow: ${({ theme }) => theme.shadows["level-2"]};
  gap: 30px;

  ${mobile`
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    gap: 0;
  `}
`;

const StyledImageWrapper = styled.div`
  display: none;

  ${mobile`
    display: flex;
    justify-content: center;
    width: 100%;
    order: 1;
  `}
`;

const StyledBox = styled.div`
  flex: 1;

  ${mobile`
    order: 2;
  `}
`;

const StyledHeader = styled.div`
  margin-bottom: 20px;
  margin-left: 27px;

  ${mobile`
    margin-left: 0;
    text-align: center;
  `}
`;

const StyledCardsGrid = styled.div`
  display: grid;
  padding: 0 ${({ theme }) => theme.spacings["spacing-5"]};
  grid-template-columns: repeat(2, 1fr);
  gap: 25px 30px;
  margin-top: 30px;

  ${mobile`
    grid-template-columns: 1fr;
    width: 100%;
    padding: 0;
  `}
`;

const StyledCard = styled.div`
  padding: 20px 20px;
  box-shadow: 0 6px 18px rgba(73, 82, 82, 0.2);
  width: 100%;
  background: ${({ theme }) => theme.colors.white};

  ${mobile`
    text-align: center;
    
 button {
      width: 60%;
      max-width: 260px;
      margin: 12px auto 0;
      padding: 16px;
      text-align: center;
      justify-content: center;
      display: flex;
      align-items: center;
    }
  `}
`;

const CardText = styled(StyledParagraphSmall)`
  margin-bottom: 20px;
`;

const StyledLink = styled(StyledAnchor)`
  color: #21146bff;
`;

const StyledImageBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  ${mobile`
    width: 100%;
    order: 3;
    gap: 0;
  `}
`;

const StyledDesktopImage = styled.img`
  width: 100%;
  max-width: 580px;

  ${mobile`
    display: none;
  `}
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 220px;
`;

const StyledNoteDesktop = styled.div`
  margin: 24px 0;
  text-align: center;
  color: ${({ theme }) => theme.colors["text-gray-color"]};
  font-size: 13px;

  ${mobile`
    display: none !important;
  `}
`;

const StyledNoteMobile = styled.div`
  display: none;
  text-align: center;
  color: ${({ theme }) => theme.colors["text-gray-color"]};
  font-size: 12px;
  padding: 0 12px;
  margin: 16px 0;

  ${mobile`
    display: block !important;
  `}
`;

const StyledInfoSection = styled.div`
  margin-top: 30px;
  padding: 25px;
  background: #f8fafc;
  border-radius: 12px;

  p {
    margin-top: 12px;
    line-height: 1.8;
  }

  ${mobile`
    margin-top: 16px;
  `}
`;

export default GetInTouch;
