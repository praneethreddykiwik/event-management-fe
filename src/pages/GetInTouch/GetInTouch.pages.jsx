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
} from "../../myEnum";

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
  background: ${({ theme }) => theme.colors.bgLight};
  min-height: 10vh;
  display: flex;
  justify-content: center;
  padding: 0 ${({ theme }) => theme.spacings["spacing-12"]} ${({ theme }) => theme.spacings["spacing-15"]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacings["spacing-5"]};
  }
`;

 const StyledContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 90%;
  max-width: 1200px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 0;
  padding: ${({ theme }) => theme.spacings["spacing-7"]};
  box-shadow: 0 6px 20px rgba(16, 36, 53, 0.06);
  gap: ${({ theme }) => theme.spacings["spacing-7"]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    text-align: center;
  }
`;

 const StyledBox = styled.div`
  flex: 1;
`;

 const StyledHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.spacings["spacing-5"]};
  text-align: left;
  margin-left: ${({ theme }) => theme.spacings["spacing-7"]};
`;

 const HeaderTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography["heading-2"].fontSize};
  color: ${({ theme }) => theme.colors.textPrimary};
  text-align: left;
  max-width: 100%;
  letter-spacing: -0.25%;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography["heading-3"].fontSize};
  }
`;

 const HeaderText = styled.p`
  margin: ${({ theme }) => `${theme.spacings["spacing-2"]} 0 0 0`};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.body.fontSize};
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography["body-small"].fontSize};
  }
`;

 const StyledCardsGrid = styled.div`
  display: grid;
  padding: 0 ${({ theme }) => theme.spacings["spacing-5"]};
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => `${theme.spacings["spacing-5"]} ${theme.spacings["spacing-12"]}`};
  margin-top: ${({ theme }) => theme.spacings["spacing-7"]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

 const StyledCard = styled.div`
  padding: ${({ theme }) => `${theme.spacings["spacing-5"]} ${theme.spacings["spacing-5"]}`};
  border-radius: 0;
  box-shadow: 0 6px 18px rgba(73, 82, 82, 0.2);
  width: 100%;
  min-height: 150px;
  text-align: start;
  background: ${({ theme }) => theme.colors.white};
`;

 const CardContent = styled.div``;

 const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography["heading-5"].fontSize};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-top: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.body.fontSize};
  }
`;

 const CardText = styled.p`
  font-size: ${({ theme }) => theme.typography["body-small"].fontSize};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacings["spacing-5"]};
  line-height: 1.5;
  text-align: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography["body-xsmall"].fontSize};
  }
`;

 const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 9999px;
  font-size: ${({ theme }) => theme.typography["body-small"].fontSize};
  cursor: pointer;
`;

 const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.primaryDark};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

 const StyledImageBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  padding: ${({ theme }) => theme.spacings["spacing-5"]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: center;
    margin-top: ${({ theme }) => theme.spacings["spacing-7"]};
  }
`;

 const StyledImage = styled.img`
  width: 100%;
  max-width: 380px;
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 250px;
  }
`;

 const StyledNote = styled.div`
  margin: ${({ theme }) => theme.spacings["spacing-6"]} 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography["body-small"].fontSize};
  text-align: center;
`;

export default GetInTouch;
