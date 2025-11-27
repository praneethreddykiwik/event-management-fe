import customer1 from "../../assets/landingPage/customer1.jpg";
import arrow_forward from "../../assets/landingPage/arrow_forwardC.svg";
import arrow_back from "../../assets/landingPage/arrow_backC.svg";
import customer2 from "../../assets/landingPage/customer2.jpg";
import customer3 from "../../assets/landingPage/experience-img1.jpg";
import customer4 from "../../assets/landingPage/customer4.jpg";
import customer5 from "../../assets/landingPage/customer5.jpg";
import customer6 from "../../assets/landingPage/customer6.jpg";
import { customerComponetTxt } from "../../enum/landingPage.common";
import {
  StyledHeadM,
  StyledHead,
  StyledBackIcon,
  StyledForwardIcon,
  StyledIcon,
  StyledProfileImg,
  StyledProfileName,
  StyledProfile,
  StyledParagraphContainer,
  StyledAnchors,
  StyledProfileHead,
  StyledImageTwo,
  StyledImageOne,
  StyledSubContainerTwo,
  StyledImgOne,
  StyledSubContainerOne,
  StyledContainerBody,
} from "../LandingPage/landingPageStyling/customerStyling";

const Customer = () => {
  return (
    <StyledContainerBody>
      <StyledSubContainerOne>
        <StyledHead left>{customerComponetTxt.CUSTOMER_HEADING}</StyledHead>
        <StyledParagraphContainer>
          {customerComponetTxt.CUSTOMER_PARA}
        </StyledParagraphContainer>
        <StyledProfile>
          <StyledProfileImg src={customer2} />
          <StyledProfileName>
            <StyledProfileHead>
              {customerComponetTxt.PROFILE_NAME}
            </StyledProfileHead>
            <StyledAnchors>{customerComponetTxt.PROFILE_NAME}</StyledAnchors>
          </StyledProfileName>
        </StyledProfile>
        <StyledIcon>
          <StyledBackIcon src={arrow_back} />
          <StyledForwardIcon src={arrow_forward} />
        </StyledIcon>
      </StyledSubContainerOne>
      <StyledSubContainerTwo>
        <StyledHeadM>{customerComponetTxt.CUSTOMER_HEADINGM}</StyledHeadM>
        <StyledImageOne>
          <StyledImgOne src={customer6} />
          <StyledImgOne src={customer1} />
          <StyledImgOne src={customer5} />
          <StyledImgOne src={customer3} />
          <StyledImgOne src={customer2} />
        </StyledImageOne>
        <StyledImageTwo>
          <StyledImgOne src={customer3} />
          <StyledImgOne src={customer4} />
          <StyledImgOne src={customer5} />
          <StyledImgOne src={customer1} />
          <StyledImgOne src={customer6} />
        </StyledImageTwo>
      </StyledSubContainerTwo>
    </StyledContainerBody>
  );
};

export default Customer;
