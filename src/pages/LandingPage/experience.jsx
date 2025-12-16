import experienceImg1 from "../../assets/landingPage/experience-img1.jpg";
import experienceImg2 from "../../assets/landingPage/experience-img2.jpg";
import experienceImg3 from "../../assets/landingPage/experience-img3.jpg";
import { EXPERIENCECOMPONET_TXT } from "../../enum/landingPage.common";

import styled from "styled-components";
import { LandingPageLayout } from "../../layout/landingPage/landingPageLayout.jsx";
import {
  StyledHeading,
  StyledParagraphSmall,
  StyledParagraphBold,
} from "../../components/Styled/Typography.styled";

const Experience = () => {
  return (
    <StyledExperienceLayout>
      <StyledBodyContainer>
        {/* main sub one */}
        <StyledSubContainerOne>
          {/* sub 1 */}
          <StyledExperience>
            <Heading>{EXPERIENCECOMPONET_TXT.EXPERIENCE_HEADING1}</Heading>
            <StyledParagraph>
              {EXPERIENCECOMPONET_TXT.EXPERIENCE_PARA1}
            </StyledParagraph>
            <StyledHr />
            <StyledImageOne src={experienceImg1} />
          </StyledExperience>
          {/* sub 2 */}
          <StyledConnection>
            <Heading>{EXPERIENCECOMPONET_TXT.EXPERIENCE_HEADING2} </Heading>
            <StyledParagraph>
              {EXPERIENCECOMPONET_TXT.EXPERIENCE_PARA2}
            </StyledParagraph>
            <StyledHr />
            <StyledImageOne src={experienceImg3} />
          </StyledConnection>
        </StyledSubContainerOne>
        {/* main sub two */}
        <StyledSubContainerTwo>
          <StyledBigHeading>
            {EXPERIENCECOMPONET_TXT.EXPERIENCE_HEADING3}
          </StyledBigHeading>
          <StyledAnyWhere>
            <Heading>{EXPERIENCECOMPONET_TXT.EXPERIENCE_HEADING4} </Heading>
            <StyledParagraph>
              {EXPERIENCECOMPONET_TXT.EXPERIENCE_PARA3}
            </StyledParagraph>
            <StyledHr />
            <StyledImageOne src={experienceImg2} />
          </StyledAnyWhere>
        </StyledSubContainerTwo>
      </StyledBodyContainer>
    </StyledExperienceLayout>
  );
};

const StyledExperienceLayout = styled(LandingPageLayout)`
  background-color: #f1faff;

  @media (max-width: 768px) {
    display: none;
  }
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
  background-color: #ffffff;
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
  left: 10%;
`;

const StyledConnection = styled.div`
  background-color: #ffffff;
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
  background-color: #ffffff;
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
  text-align: left;
  margin-bottom: 50px;
  width: 75%;
`;

const Heading = styled(StyledParagraphBold)`
  margin-top: 10px;
  text-align: left;
`;

const StyledParagraph = styled(StyledParagraphSmall)`
  text-align: left;
  margin-top: -10px;
  word-wrap: break-word;
`;

const StyledHr = styled.hr`
  width: 100%;
  margin-top: -5px;
`;

//image stylings
const StyledImageOne = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 10px;
`;

export default Experience;
