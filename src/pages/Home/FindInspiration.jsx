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
        <StyledParagraphSmallGray left>{enums.FIND_PARAGRAPH}</StyledParagraphSmallGray>
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

`;

const StyledImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  height: 300px;
`;

const StyledImage = styled.img`
  width: 50%;
  height: 100%;
`;

const StyledContainerTwo = styled.div`
  width: 50%;
  word-wrap: break-word;
`;

const StyledBtnContainer = styled.div`
  display: flex;
  align-items: left;
  margin-top: 25px;
`;

export default FindInspiration;
