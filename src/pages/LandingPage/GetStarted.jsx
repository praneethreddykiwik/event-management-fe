import styled from "styled-components";
import forward_arrow from "../../assets/landingPage/arrow_forward.png";
import getStarted_img from "../../assets/landingPage/get_started.jpg";
import { StyledHeadingBig } from "../../components/Styled/Typography.styled";
import { Button } from "../../components/Buttons/Button";
// import {  SectionContainer } from "../../components/Styled/Common.styled";
const GetStarted = () => {
  return (
    <>
      <SectionContainer>
        <GetStarted_Main_Div_Child1>
          <GetStarted_Main_Div_Child1_content>
            <StyledHeadingBig left>
              Book Your Perfect Event, Anytime, Anywhere!
            </StyledHeadingBig>
            <GetStarted_Main_Div_Child1_p>
              Looking for perfect place to host your next event? got you
              covered. Browse, compare, and book thousands of venues across the
              country in minutes. No hassle, no hidden fees, no stress. Just
              find your dream venue and let us handle the rest.
            </GetStarted_Main_Div_Child1_p>
            <GetStarted_Main_Div_Child1_btn>
              <Button type="base">Get started</Button>
              <Button type="transparent">
                Explore
                <GetStarted_Main_Div_Child1_btn_img src={forward_arrow} />
              </Button>
            </GetStarted_Main_Div_Child1_btn>
          </GetStarted_Main_Div_Child1_content>
        </GetStarted_Main_Div_Child1>

        <GetStarted_Main_Div_child2>
          <GetStarted_Main_Div_Child2_content>
            <GetStarted_Main_Div_child2_img src={getStarted_img} alt="image" />
          </GetStarted_Main_Div_Child2_content>
        </GetStarted_Main_Div_child2>
      </SectionContainer>
    </>
  );
};

export default GetStarted;

const SectionContainer = styled.div`
  background-color: #f1faff;
  height: 80vh;
  display: flex;
`;
const GetStarted_Main_Div_Child1 = styled.div`
  width: 50vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GetStarted_Main_Div_Child1_content = styled.div`
  width: 30vw;
`;

const GetStarted_Main_Div_Child1_p = styled.p`
  width: 30vw;
  text-wrap: wrap;
  font-size: 12px;
  text-align: left;
  color: #88898bff;
`;

const GetStarted_Main_Div_Child1_btn = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 20px;
`;

const GetStarted_Main_Div_Child1_btn_img = styled.img`
  margin-left: 5px;
  width: 10px;
`;

const GetStarted_Main_Div_child2 = styled.div`
  display: flex;
  align-items: center;
`;

const GetStarted_Main_Div_Child2_content = styled.div`
  width: 40vw;
`;
const GetStarted_Main_Div_child2_img = styled.img`
  width: 100%;
`;
