import React from "react";
import styled from "styled-components";
import images from "../../assets/Get_in_touch_images/images.png";
import { Button } from "../../components/Buttons/Button";
import { cardData1 } from "./GetInTouch.helper";
import { mobile } from "../../theme/media-queries";
import {
  GETINTOUCH,
  PRIVACY_POLICY,
  PRIVACY_TEXT_END,
  PRIVACY_TEXT_START,
  SPECIFICENQUIRY,
} from "../../myEnum";

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
        <StyledBox>
          <StyledHeader>
            <StyledHeadingBig left>{GETINTOUCH}</StyledHeadingBig>{" "}
            {/* typography */}
            <StyledParagraphSmallGray left>
              {SPECIFICENQUIRY}
            </StyledParagraphSmallGray>
          </StyledHeader>

          <StyledCardsGrid>
            {cardData.map((item, index) => (
              <StyledCard key={index}>
                <StyledMediumHeading small left>
                  {item.title}
                </StyledMediumHeading>{" "}
                {/*No bottom margin is avaliable*/}
                <CardText left>
                  {" "}
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

          <StyledNote>
            {PRIVACY_TEXT_START}{" "}
            <StyledLink href="#">{PRIVACY_POLICY}</StyledLink>{" "}
            {PRIVACY_TEXT_END}
          </StyledNote>
        </StyledBox>

        <StyledImageBox>
          <StyledImage src={images} alt="contact illustration" />
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
    align-items: center;
     width: 100%;
    padding: 20px 16px;
  `}
`;

const StyledBox = styled.div`
  flex: 1;
`;

const StyledHeader = styled.div`
  margin-bottom: 20px;
  margin-left: 27px;

  ${mobile`
    margin-left: 50px;
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
      width: 100%;       
      max-width: 260px;
      margin: 12px auto 0;
      padding: 16px;
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
  justify-content: flex-end;
  padding: 20px;

  ${mobile`
    order: -1;            
    justify-content: center;
    padding: 10px 0;
  `}
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 380px;

  ${mobile`
    max-width: 220px;     
  `}
`;

const StyledNote = styled.div`
  margin: 24px 0;
  text-align: center;
  color: ${({ theme }) => theme.colors["text-gray-color"]};
  font-size: 13px;

  ${mobile`
    font-size: 12px;
    padding: 0 12px;
  `}
`;

export default GetInTouch;
