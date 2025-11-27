import forward_arrow from "../../assets/landingPage/arrow_forward.svg";
import getStarted_img from "../../assets/landingPage/get_started.jpg";
import { Button } from "../../components/Buttons/Button";
import { getStartedTxt } from "../../enum/landingPage.common";
import {StyledHeadingBig} from "../../components/Styled/Typography.styled.jsx";
import {
  StyledContainer,
  StyledChildContainer,
  StyledRightChildContainer,
  StyledContent,
  StyledContentParagraph,
  StyledContentBtn,
  StyledBtnIcon,
  StyledChildContainerImg,
} from "../LandingPage/landingPageStyling/getStartedStyling.jsx";

const GetStarted = () => {
  return (
    <>
      <StyledContainer>
        <StyledChildContainer>
          <StyledContent>
            <StyledHeadingBig left>
              {getStartedTxt.MAIN_HEADING}
            </StyledHeadingBig>
            <StyledContentParagraph>
              {getStartedTxt.MAIN_PARAGRAPH}
            </StyledContentParagraph>
            <StyledContentBtn>
              <Button type="base">{getStartedTxt.START_BTN}</Button>
              <Button type="transparent">
                {getStartedTxt.OUTLINE_BTN}
                <StyledBtnIcon src={forward_arrow} />
              </Button>
            </StyledContentBtn>
          </StyledContent>
        </StyledChildContainer>

        <StyledRightChildContainer>
          <StyledChildContainerImg src={getStarted_img} alt="image" />
        </StyledRightChildContainer>
      </StyledContainer>
    </>
  );
};

export default GetStarted;
