import experienceImg1 from "../../assets/landingPage/experience-img1.jpg";
import experienceImg2 from "../../assets/landingPage/experience-img2.jpg";
import experienceImg3 from "../../assets/landingPage/experience-img3.jpg";
import { EXPERIENCECOMPONET_TXT } from "../../enum/landingPage.common";

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
    </StyledContainer>
  );
};

export default Experience;
