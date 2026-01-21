import venue_hall from "../../assets/landingPage/venue.jpg";
import forward_arrow from "../../assets/landingPage/arrow_forward.svg";
import * as enums from "../../myEnum";
import {
  StyledSemiHeading,
  StyledParagraphSmallGray,
  StyledAnchor,
} from "../../components/Styled/Typography.styled.jsx";
import styled from "styled-components";

import { HomePageLayout } from "./HomePageLayout.jsx";

const FindInspiration = () => {
  return (
    <StyledFindInspirationLayout flexDirection="column">
      <StyledImageContainer>
        <StyledImage src={venue_hall} />
      </StyledImageContainer>
      <StyledContainerTwo>
        <StyledSemiHeading left>{enums.FIND_HEADING}</StyledSemiHeading>
        <StyledContent>{enums.FIND_PARAGRAPH}</StyledContent>
        <StyledBtnContainer>
          <StyledLink>{enums.FINDOUTLINE_BTN}</StyledLink>
          <StyledIcon src={forward_arrow} />
        </StyledBtnContainer>
      </StyledContainerTwo>
    </StyledFindInspirationLayout>
  );
};

const StyledLink = styled(StyledAnchor)`
  color: ${({ theme }) => theme.colors.primary};
  font: ${({ theme }) => theme.typography["button-text"]};
  text-decoration: none;
`;

const StyledIcon = styled.img`
  margin-left: 5px;
  width: 8px;
  margin-top: 1.2px;
`;

const StyledFindInspirationLayout = styled(HomePageLayout)`
  @media (max-width: 768px) {
    background-color: #f1faff;
  }

  @media (max-width: 510px) {
    padding-bottom: 120px;
  }
`;

const StyledImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  height: 300px;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const StyledImage = styled.img`
  width: 50%;
  height: 100%;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const StyledContainerTwo = styled.div`
  width: 50%;
  word-wrap: break-word;

  @media (max-width: 768px) {
    margin-top: 10px;
    width: 90%;
    height: 200px;
    color: ${({ theme }) => theme.colors.black};
  }
`;

const StyledContent = styled(StyledParagraphSmallGray)`
  text-align: left;

  @media (max-width: 768px) {
    font-weight: 600;
    font-size: 16px;
  }
`;

const StyledBtnContainer = styled.div`
  display: flex;
  align-items: left;
`;

export default FindInspiration;
