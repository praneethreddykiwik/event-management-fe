import experienceImg1 from "../../assets/landingPage/experience-img1.jpg";
import experienceImg2 from "../../assets/landingPage/experience-img2.jpg";
import experienceImg3 from "../../assets/landingPage/experience-img3.jpg";
import { experienceComponetTxt } from "../../enum/landingPage.common";

import {
  StyledImageOne,
  StyledHr,
  StyledParagraph,
  Heading,
  StyledBigHeading,
  StyledAnyWhere,
  StyledConnection,
  StyledExperience,
  StyledSubContainerTwo,
  StyledSubContainerOne,
  StyledBodyContainer,
  StyledContainer,
} from "../LandingPage/landingPageStyling/experienceStyling";

const Experience = () => {
  return (
    <StyledContainer>
      <StyledBodyContainer>
        {/* main sub one */}
        <StyledSubContainerOne>
          {/* sub 1 */}
          <StyledExperience>
            <Heading>{experienceComponetTxt.EXPERIENCE_HEADING1}</Heading>
            <StyledParagraph>
              {experienceComponetTxt.EXPERIENCE_PARA1}
            </StyledParagraph>
            <StyledHr />
            <StyledImageOne src={experienceImg1} />
          </StyledExperience>
          {/* sub 2 */}
          <StyledConnection>
            <Heading>{experienceComponetTxt.EXPERIENCE_HEADING2} </Heading>
            <StyledParagraph>
              {experienceComponetTxt.EXPERIENCE_PARA2}
            </StyledParagraph>
            <StyledHr />
            <StyledImageOne src={experienceImg3} />
          </StyledConnection>
        </StyledSubContainerOne>
        {/* main sub two */}
        <StyledSubContainerTwo>
          <StyledBigHeading>
            {experienceComponetTxt.EXPERIENCE_HEADING3}
          </StyledBigHeading>
          <StyledAnyWhere>
            <Heading>{experienceComponetTxt.EXPERIENCE_HEADING4} </Heading>
            <StyledParagraph>
              {experienceComponetTxt.EXPERIENCE_PARA3}
            </StyledParagraph>
            <StyledHr />
            <StyledImageOne src={experienceImg2} />
          </StyledAnyWhere>
        </StyledSubContainerTwo>
      </StyledBodyContainer>
    </StyledContainer>
  );
};

export default Experience;
