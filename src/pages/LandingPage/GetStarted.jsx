import styled from "styled-components";
import forward_arrow from "../../assets/landingPage/arrow_forward.png";
import getStarted_img from "../../assets/landingPage/get_started.jpg";
import { StyledHeadingBig } from "../../components/Styled/Typography.styled";
import { StyledSectionContainer } from "../../components/Styled/Common.styled";
import { Button } from "../../components/Buttons/Button";

const GetStarted = () => {
  return (
    <>
      <StyledSectionContainer sx={{ background: " #f1faff; " }}>
        <StyledChildContainer sx={{ width: "50vw", color: "blue" }}>
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
                Explore
                <StyledBtnIcon src={forward_arrow} />
              </Button>
            </StyledContentBtn>
          </StyledContent>
        </StyledChildContainer>

        <StyledChildContainer sx={{ width: "50vw" }}>
          <StyledRightChildContainer>
            <StyledChildContainerImg src={getStarted_img} alt="image" />
          </StyledRightChildContainer>
        </StyledChildContainer>
      </StyledSectionContainer>
    </>
  );
};

export default GetStarted;

const StyledChildContainer = styled.div`
  width: ${({ sx }) => sx?.width || "inherit"};
  display: flex;
  justify-content: center;
  align-items: center;
`;

// const StyledButtonLoc = styled(Button)`
//   margin-bottom: 10px;
// `;

const StyledContent = styled.div`
  width: 30vw;
`;

const StyledContentParagraph = styled.p`
  width: 30vw;
  text-wrap: wrap;
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

const StyledRightChildContainer = styled.div`
  width: 40vw;
`;
const StyledChildContainerImg = styled.img`
  width: 100%;
`;
