import joinNowOne from "../../assets/landingPage/joinNowVenue1.jpg";
import joinNowTwo from "../../assets/landingPage/joinNowVenue2.jpg";
import joinNowThree from "../../assets/landingPage/joinNowVenue3.jpg";
import { HomePageLayout } from "./HomePageLayout.jsx";
import * as enums from "../../myEnum";
import {
  StyledParagraphSmallGray,
  StyledSemiHeading,
} from "../../components/Styled/Typography.styled.jsx";

import styled from "styled-components";

import { mobile } from "../../theme/media-queries.jsx";
import { Button } from "../../components/Buttons/Button.jsx";

const JoinNow = () => {
  return (
    <HomePageLayout flexDirection="column">
      <StyledContainerOne>
        <StyledContainerOneImg src={joinNowOne} />
        <StyledContainerOneImg src={joinNowTwo} />
        <StyledContainerOneImg src={joinNowThree} />
      </StyledContainerOne>
      <StyledContainerTwo>
        <StyledParagraphSmallGray>
          {enums.JOIN_PARAGRAPH}
        </StyledParagraphSmallGray>
        <StyledSemiHeading>{enums.JOIN_HEADING}</StyledSemiHeading>
        <Button sx={{ width: 120 }}>{enums.JOIN_BTN}</Button>
      </StyledContainerTwo>
    </HomePageLayout>
  );
};

const StyledJoinBtn = styled(Button)`
  width: 120px;

  ${mobile`
    width: 180px;
  `}
`;

const StyledJoinNowPara = styled(StyledParagraphSmallGray)``;

const StyledContainerOne = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 60px;

  ${mobile`
    margin-top: 0px;
    gap: 10px
  `}
`;

const StyledContainerOneImg = styled.img`
  width: 270px;

  ${mobile`
    width: 30%;
  `}
`;

const StyledContainerTwo = styled.div`
  margin-top: 30px;

  ${mobile`
    width: 80%;
  `}
`;

export default JoinNow;
