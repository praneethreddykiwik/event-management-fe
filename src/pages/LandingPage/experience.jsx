import styled from "styled-components";
import { StyledSectionContainer } from "../../components/Styled/Common.styled";
import experienceImg1 from "../../assets/landingPage/experience-img1.jpg";
import experienceImg2 from "../../assets/landingPage/experience-img2.jpg";
import experienceImg3 from "../../assets/landingPage/experience-img3.jpg";
import {
  StyledHeading,
  StyledParagraphSmall,
  StyledParagraphBold,
} from "../../components/Styled/Typography.styled";
import {
  experienceHeading1,
  experienceHeading2,
  experienceHeading3,
  experienceHeading4,
  experiencePara1,
  experiencePara2,
  experiencePara3,
} from "../../enum/landingPage.common";

const Experience = () => {
  return (
    <StyledContainer>
      <StyledBodyContainer>
        {/* main sub one */}
        <StyledSubContainerOne>
          {/* sub 1 */}
          <StyledExperience>
            <Heading>{experienceHeading1}</Heading>
            <StyledParagraph>{experiencePara1}</StyledParagraph>
            <StyledHr />
            <StyledImageOne src={experienceImg1} />
          </StyledExperience>
          {/* sub 2 */}
          <StyledConnection>
            <Heading>{experienceHeading2} </Heading>
            <StyledParagraph>{experiencePara2}</StyledParagraph>
            <StyledHr />
            <StyledImageOne src={experienceImg3} />
          </StyledConnection>
        </StyledSubContainerOne>
        {/* main sub two */}
        <StyledSubContainerTwo>
          <StyledBigHeading>
            {experienceHeading3}
          </StyledBigHeading>
          <StyledAnyWhere>
            <Heading>{experienceHeading4} </Heading>
            <StyledParagraph>{experiencePara3}</StyledParagraph>
            <StyledHr />
            <StyledImageOne src={experienceImg2} />
          </StyledAnyWhere>
        </StyledSubContainerTwo>
      </StyledBodyContainer>
    </StyledContainer>
  );
};

export default Experience;
const StyledContainer = styled(StyledSectionContainer)`
  background-color: #f1faff;
  justify-content: center;

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
