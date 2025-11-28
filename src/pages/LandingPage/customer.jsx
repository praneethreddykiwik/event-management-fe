import arrow_forward from "../../assets/landingPage/arrow_forwardC.svg";
import arrow_back from "../../assets/landingPage/arrow_backC.svg";
import customer1 from "../../assets/landingPage/customer1.jpg";
import customer2 from "../../assets/landingPage/customer2.jpg";
import customer3 from "../../assets/landingPage/experience-img1.jpg";
import customer4 from "../../assets/landingPage/customer4.jpg";
import customer5 from "../../assets/landingPage/customer5.jpg";
import customer6 from "../../assets/landingPage/customer6.jpg";
import { CUSTOMERCOMPONET_TXT } from "../../enum/landingPage.common";
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
  const imagesOne = [customer6, customer1, customer5, customer3, customer2];
  const imagesTwo = [customer3, customer4, customer5, customer1, customer6];

  return (
    <StyledContainerBody>
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
    </StyledContainerBody>
  );
};

export default Customer;
