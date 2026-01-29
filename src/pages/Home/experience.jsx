import experienceImg1 from "../../assets/landingPage/experience-img1.jpg";
import experienceImg2 from "../../assets/landingPage/experience-img2.jpg";
import experienceImg3 from "../../assets/landingPage/experience-img3.jpg";
import * as enums from "../../myEnum";

import styled from "styled-components";
import { HomePageLayout } from "./HomePageLayout.jsx";
import {
  StyledHeading,
  StyledParagraphSmall,
  StyledParagraphBold,StyledParagraphSmallGray
} from "../../components/Styled/Typography.styled";

const Experience = () => {
  return (
    <StyledExperienceLayout>
      <StyledBodyContainer>
        {/* main sub one */}
        <StyledSubContainerOne>
          {/* sub 1 */}
          <StyledExperience>
            <Heading left>{enums.EXPERIENCE_HEADING1}</Heading>
            <StyledParagraph left>{enums.EXPERIENCE_PARA1}</StyledParagraph>
            <StyledHr />
            <StyledImageOne src={experienceImg1} />
          </StyledExperience>
          {/* sub 2 */}
          <StyledConnection>
            <Heading left>{enums.EXPERIENCE_HEADING2} </Heading>
            <StyledParagraph left>{enums.EXPERIENCE_PARA2}</StyledParagraph>
            <StyledHr />
            <StyledImageOne src={experienceImg3} />
          </StyledConnection>
        </StyledSubContainerOne>
        {/* main sub two */}
        <StyledSubContainerTwo>
          <StyledBigHeading left>{enums.EXPERIENCE_HEADING3}</StyledBigHeading>
          <StyledAnyWhere>
            <Heading left>{enums.EXPERIENCE_HEADING4} </Heading>
            <StyledParagraph left>{enums.EXPERIENCE_PARA3}</StyledParagraph>
            <StyledHr />
            <StyledImageOne src={experienceImg2} />
          </StyledAnyWhere>
        </StyledSubContainerTwo>
      </StyledBodyContainer>
    </StyledExperienceLayout>
  );
};

const StyledExperienceLayout = styled(HomePageLayout)`
  background-color: #f1faff;
`;

const StyledBodyContainer = styled.div`
  display: flex;
  width: 90%;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

//Sub containers
const StyledSubContainerOne = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  padding-bottom: 130px;
  align-items: center;
`;

const StyledSubContainerTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

// cards
const StyledExperience = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 350px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  position: relative;
  left: 10%;
`;

const StyledConnection = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 350px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  position: relative;
  top: 130px;
  right: 10%;
`;

const StyledAnyWhere = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 400px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

// typo stylings
const StyledBigHeading = styled(StyledHeading)`
  margin-bottom: 50px;
  width: 75%;
`;

const Heading = styled(StyledParagraphBold)`
  margin-top: 10px;
`;

const StyledParagraph = styled(StyledParagraphSmall)`
  margin-bottom: 15px;
`;

const StyledHr = styled.hr`
  width: 100%;
  margin-top: -10px;
  margin-bottom: 10px;
`;

//image stylings
const StyledImageOne = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 5px;
`;

export default Experience;
