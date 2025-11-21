import styled from "styled-components";
import forward_arrow from "../../assets/landingPage/arrow_forward.svg";
import getStarted_img from "../../assets/landingPage/get_started.jpg";
import getStarted_imgMi from "../../assets/landingPage/get_startedMi.jpg";
import {
  StyledHeadingBig,
  StyledParagraphGray,
} from "../../components/Styled/Typography.styled";
import { StyledSectionContainer } from "../../components/Styled/Common.styled";
import { Button } from "../../components/Buttons/Button";

const GetStarted = () => {
  return (
    <>
      <StyledContainer>
        <StyledChildContainer>
          <StyledContent>
            <StyledHeadingBig left>
              Book Your Perfect Event, Anytime, Anywhere!
            </StyledHeadingBig>
            <StyledContentParagraph>
              Looking for perfect place to host your next event? got you
              covered. Browse, compare, and book thousands of venues across the
              country in minutes. No hassle, no hidden fees, no stress. Just
              find your dream venue and let us handle the rest.
            </StyledContentParagraph>
            <StyledContentBtn>
              <Button type="base">Get started</Button>
              <Button type="transparent">
                <span class="material-symbols-outlined">Explore</span>
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
const StyledContainer = styled(StyledSectionContainer)`
  justify-content: center;
  background-color: #f1faff;
  gap: 20px;
  @media (max-width: 768px) {
    justify-content: center;
    background-color: #ffffff;
    background-image: url(${getStarted_imgMi});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

const StyledChildContainer = styled.div`
  width: 40%;
  display: flex;
  height: 100%;
  justify-content: center;
  align-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 80%;
    justify-content: center;
  }
`;
const StyledRightChildContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;
const StyledContent = styled.div`
  width: 100%;
  padding: 10px;
  word-wrap: break-word;
`;

const StyledContentParagraph = styled(StyledParagraphGray)`
  font-size: 12px;
  word-wrap: break-word;
  text-align: left;
  color: #88898bff;
  @media (max-width: 768px) {
    color: #000000;
    font-size: 16px;
  }
`;

const StyledContentBtn = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 20px;
`;

const StyledBtnIcon = styled.img`
  margin-left: 5px;
  width: 10px;
`;

const StyledChildContainerImg = styled.img`
  width: 100%;
  @media (max-width: 768px) {
    justify-content: center;
    background-color: red;
    background-image: url(${getStarted_imgMi});
    background-size: cover;
    background-repeat: no-repeat;
  }
`;
