import styled from "styled-components";
import forward_arrow from "../../assets/landingPage/arrow_forward.png";
import getStarted_img from "../../assets/landingPage/get_started.jpg";
import { StyledHeadingBig } from "../../components/Styled/Typography.styled";
import {SectionContainer} from "../../components/Styled/Common.styled";
import { Button } from "../../components/Buttons/Button";
// import {  SectionContainer } from "../../components/Styled/Common.styled";
const GetStarted = () => {
  return (
    <>
      <SectionContainer sx ={{background:" #f1faff; "}}>
        <ChildContainer sx={{ width: "50vw", color: "blue" }}>
          <Content>
            <StyledHeadingBig left>
              Book Your Perfect Event, Anytime, Anywhere!
            </StyledHeadingBig>
            <ContentParagraph>
              Looking for perfect place to host your next event? got you
              covered. Browse, compare, and book thousands of venues across the
              country in minutes. No hassle, no hidden fees, no stress. Just
              find your dream venue and let us handle the rest.
            </ContentParagraph>
            <ContentBtn>
              <Button type="base">Get started</Button>
              <Button type="transparent">
                Explore
                <BtnIcon src={forward_arrow} />
              </Button>
            </ContentBtn>
          </Content>
        </ChildContainer>

        <ChildContainer sx={{ width: "50vw" }}>
          <RightChildContainer>
            <ChildContainerImg src={getStarted_img} alt="image" />
          </RightChildContainer>
        </ChildContainer>
      </SectionContainer>
    </>
  );
};

export default GetStarted;


const ChildContainer = styled.div`
  width: ${({ sx }) => sx?.width || "inherit"};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 30vw;
`;

const ContentParagraph = styled.p`
  width: 30vw;
  text-wrap: wrap;
  font-size: 12px;
  text-align: left;
  color: #88898bff;
`;

const ContentBtn = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 20px;
`;

const BtnIcon = styled.img`
  margin-left: 5px;
  width: 10px;
`;

const RightChildContainer = styled.div`
  width: 40vw;
`;
const ChildContainerImg = styled.img`
  width: 100%;
`;
