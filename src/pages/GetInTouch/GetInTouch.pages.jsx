
import React from "react";
import images from "../../assets/Get_in_touch_images/images.png";
import { Button } from "../../components/Buttons/Button";
import { cardData1 } from "./GetInTouch.helper";
import { 
  StyledPage,
  StyledContainer,
  StyledBox,
  StyledHeader,
  HeaderTitle,
  HeaderText,
  StyledCardsGrid,
  StyledCard,
  CardContent,
  CardTitle,
  CardText,
  StyledButton,
  StyledLink,
  StyledImageBox,
  StyledImage,
  StyledNote
} from "./GetInTouch.Style";

import { GETINTOUCH, PRIVACY_POLICY, PRIVACY_TEXT_END, PRIVACY_TEXT_START, SPECIFICENQUIRY } from "../../enum/Common";

const GetInTouch = () => {

  const cardData = cardData1;

  return (
    <StyledPage>
      <StyledContainer>
        <StyledBox>
          <StyledHeader>
            <HeaderTitle>{GETINTOUCH}</HeaderTitle>
            <HeaderText>{SPECIFICENQUIRY}</HeaderText>
          </StyledHeader>

          <StyledCardsGrid>
            {cardData.map((item, index) => (
              <StyledCard key={index}>
                <CardContent>
                  <CardTitle>{item.title}</CardTitle>
                  <CardText> {item.text}{" "}
                    {item.email && (
                      <StyledLink href={`mailto:${item.email}`}>
                        {item.email}
                      </StyledLink>)}
                  </CardText>
                </CardContent>

                {item.button && (
                  <Button>
                    <StyledButton>Contact</StyledButton>
                  </Button>
                )}
              </StyledCard>
            ))}
          </StyledCardsGrid>

          <StyledNote>
            {PRIVACY_TEXT_START} <StyledLink href="#">{PRIVACY_POLICY}</StyledLink> {PRIVACY_TEXT_END}
          </StyledNote>
        </StyledBox>

        <StyledImageBox>
          <StyledImage src={images} alt="contact illustration" />
        </StyledImageBox>
      </StyledContainer>
    </StyledPage>
  );
};

export default GetInTouch;
