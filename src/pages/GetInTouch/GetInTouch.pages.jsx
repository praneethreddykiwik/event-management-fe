import React from "react";
import styled from "styled-components";
import images from "../../assets/Get_in_touch_images/images.png";
import { Button } from "../../components/Buttons/Button";
import { cardData1 } from "./GetInTouch.helper";
import {
  GETINTOUCH,
  PRIVACY_POLICY,
  PRIVACY_TEXT_END,
  PRIVACY_TEXT_START,
  SPECIFICENQUIRY,
} from "../../enum";

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
                  <CardText>
                    {" "}
                    {item.text}{" "}
                    {item.email && (
                      <StyledLink href={`mailto:${item.email}`}>
                        {item.email}
                      </StyledLink>
                    )}
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
  background: #eef7fcff;
  min-height: 10vh;
  display: flex;
  justify-content: center;
  padding: 0px 100px 60px;

  @media (max-width: 900px) {
    padding: 20px;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 90%;
  max-width: 1200px;
  background: #fff;
  border-radius: 0;
  padding: 30px;
  box-shadow: 0 6px 20px rgba(16, 36, 53, 0.06);
  gap: 30px;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
  }
`;

const StyledBox = styled.div`
  flex: 1;
`;

const StyledHeader = styled.div`
  margin-bottom: 20px;
  text-align: left;
  margin-left: 27px;
`;

const HeaderTitle = styled.h1`
  font-size: 42px;
  color: #17171bff;
  text-align: left;
  max-width: 100%;
  letter-spacing: -0.25%;

  @media (max-width: 900px) {
    font-size: 32px;
  }
`;

const HeaderText = styled.p`
  margin: 10px 0 0 0;
  color: #6b7280;
  font-size: 15px;
  text-align: left;

  @media (max-width: 900px) {
    font-size: 14px;
  }
`;

const StyledCardsGrid = styled.div`
  display: grid;
  padding: 0px 20px;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px 60px;
  margin-top: 30px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const StyledCard = styled.div`
  padding: 20px 20px;
  border-radius: 0;
  box-shadow: 0 6px 18px rgba(73, 82, 82, 0.2);
  width: 100%;
  min-height: 150px;
  text-align: start;
  background: #fff;
`;

const CardContent = styled.div``;

const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #111827;
  margin-top: 0px;

  @media (max-width: 900px) {
    font-size: 18px;
  }
`;

const CardText = styled.p`
  font-size: 12px;
  color: #6b7280;
  margin-bottom: 20px;
  line-height: 1.5;
  text-align: start;

  @media (max-width: 900px) {
    font-size: 11px;
  }
`;

const StyledButton = styled.button`
  background-color: #26c867;
  color: #fff;
  border: none;
  border-radius: 9999px;
  font-size: 14px;
  cursor: pointer;
`;

const StyledLink = styled.a`
  color: #21146bff;
  text-decoration: none;
  font-weight: 600;
`;

const StyledImageBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  padding: 20px;

  @media (max-width: 900px) {
    justify-content: center;
    margin-top: 30px;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 380px;
  height: auto;

  @media (max-width: 700px) {
    max-width: 250px;
  }
`;

const StyledNote = styled.div`
  margin: 24px 0;
  color: #6b7280;
  font-size: 13px;
  text-align: center;
`;

export default GetInTouch;
