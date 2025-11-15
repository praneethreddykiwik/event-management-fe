import styled from "styled-components";
import forward_arrow from "../../assets/landingPage/arrow_forward.svg";
import getStarted_img from "../../assets/landingPage/get_started.jpg";
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
  display: flex;
  justify-content: center;
  background: #f1faff;
`;

const StyledChildContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledRightChildContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledContent = styled.div`
  width: 450px;
  word-wrap: break-word;
`;

const StyledContentParagraph = styled(StyledParagraphGray)`
  font-size: 12px;
  text-align: left;
  color: #88898bff;
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
  width: 500px;
  height: 300px;
`;
