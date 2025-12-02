// images
import arrow_forward from "../../assets/landingPage/arrow_forwardC.svg";
import arrow_back from "../../assets/landingPage/arrow_backC.svg";
import customer1 from "../../assets/landingPage/customer1.jpg";
import customer2 from "../../assets/landingPage/customer2.jpg";
import customer3 from "../../assets/landingPage/experience-img1.jpg";
import customer4 from "../../assets/landingPage/customer4.jpg";
import customer5 from "../../assets/landingPage/customer5.jpg";
import customer6 from "../../assets/landingPage/customer6.jpg";

// text component
import { CUSTOMERCOMPONET_TXT } from "../../enum/landingPage.common";
("../LandingPage/landingPageStyling/customerStyling");

import styled from "styled-components";

import { LandingPageLayout } from "../../layout/landingPage/landingPageLayout.jsx";

import {
  StyledHeading,
  StyledParagraph,
  StyledParagraphBold,
  StyledParagraphSmallVisible,
} from "../../components/Styled/Typography.styled.jsx";

const Customer = () => {
  const imagesOne = [customer6, customer1, customer5, customer3, customer2];
  const imagesTwo = [customer3, customer4, customer5, customer1, customer6];

  return (
    <StyledCustomerLayout>
      <StyledSubContainerOne>
        <StyledHead left>{CUSTOMERCOMPONET_TXT.CUSTOMER_HEADING}</StyledHead>
        <StyledParagraphContainer>
          {CUSTOMERCOMPONET_TXT.CUSTOMER_PARA}
        </StyledParagraphContainer>
        <StyledProfile>
          <StyledProfileImg src={customer2} />
          <StyledProfileName>
            <StyledProfileHead>
              {CUSTOMERCOMPONET_TXT.PROFILE_NAME}
            </StyledProfileHead>
            <StyledAnchors>{CUSTOMERCOMPONET_TXT.PROFILE_NAME}</StyledAnchors>
          </StyledProfileName>
        </StyledProfile>
        <StyledIcon>
          <StyledBackIcon src={arrow_back} />
          <StyledForwardIcon src={arrow_forward} />
        </StyledIcon>
      </StyledSubContainerOne>
      <StyledSubContainerTwo>
        <StyledHeadM>{CUSTOMERCOMPONET_TXT.CUSTOMER_HEADINGM}</StyledHeadM>
        <StyledImageOne>
          {imagesOne.map((img, i) => (
            <StyledImgOne key={i} src={img} />
          ))}
        </StyledImageOne>
        <StyledImageTwo>
          {imagesTwo.map((img, i) => (
            <StyledImgOne key={i} src={img} />
          ))}
        </StyledImageTwo>
      </StyledSubContainerTwo>
    </StyledCustomerLayout>
  );
};

const StyledCustomerLayout = styled(LandingPageLayout)`
  background-color: #000000;
  height: 400px;
  overflow: hidden;

  @media (max-width: 767px) {
    flex-direction: column-reverse;
    height: fit-content;
  }
`;

const StyledSubContainerOne = styled.div`
  width: 40%;
  overflow: hidden;

  @media (max-width: 767px) {
    width: 65%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
  }
`;

const StyledImgOne = styled.div`
  width: 150px;
  height: 150px;
  background-image: ${(params) => "url(" + params.src + ")"};
  background-position: center;
  background-size: cover;
`;

const StyledSubContainerTwo = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 767px) {
    width: 100%;
    flex-direction: column;
  }
`;

const StyledImageOne = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  overflow: hidden;

  @media (max-width: 767px) {
    flex-direction: row;
    width: 100%;
    justify-content: center;
  }
`;

const StyledImageTwo = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  flex-direction: column;
  gap: 15px;
  height: 100%;
  margin-top: 75px;

  @media (max-width: 767px) {
    flex-direction: row;
    margin-top: 0%;
  }
`;

const StyledProfileHead = styled(StyledParagraphBold)`
  color: white;
  position: relative;
  bottom: 10px;
`;

const StyledAnchors = styled(StyledParagraphSmallVisible)`
  text-decoration: none;
  position: relative;
  bottom: 30px;
  color: #26c867;
`;

const StyledParagraphContainer = styled(StyledParagraph)`
  display: flex;
  text-align: left;
  color: #ffffff;
  width: 67%;
  margin-top: 30px;

  @media (max-width: 767px) {
    width: 100%;
    text-align: center;
  }
`;

const StyledProfile = styled.div`
  display: flex;
  width: 250px;
  margin-top: 30px;
  justify-content: center;
  text-align: left;

  @media (max-width: 767px) {
    text-align: center;
    justify-content: center;
  }
`;

const StyledProfileName = styled.div`
  height: 50px;
  padding-left: 10px;
`;

const StyledProfileImg = styled.img`
  width: 55px;
  border-radius: 50%;
`;

const StyledIcon = styled.div`
  width: 160px;
  margin-top: 50px;

  @media (max-width: 767px) {
    width: 250px;
  }
`;

const StyledForwardIcon = styled.img`
  margin-left: 60px;
  width: 15px;
  cursor: pointer;

  @media (max-width: 767px) {
    margin-left: 120px;
  }
`;

const StyledBackIcon = styled.img`
  width: 15px;
  cursor: pointer;
`;

const StyledHead = styled(StyledHeading)`
  color: #26c867;

  @media (max-width: 767px) {
    display: none;
  }
`;

const StyledHeadM = styled(StyledHeading)`
  color: #26c867;
  display: none;

  @media (max-width: 767px) {
    display: flex;
    color: #555d58;
    justify-content: center;
    padding: 20px;
  }
`;

export default Customer;
