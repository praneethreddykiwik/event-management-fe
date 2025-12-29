// images
import customer1 from "../../assets/landingPage/customer1.jpg";
import customer2 from "../../assets/landingPage/customer2.jpg";
import customer3 from "../../assets/landingPage/experience-img1.jpg";
import customer4 from "../../assets/landingPage/customer4.jpg";
import customer5 from "../../assets/landingPage/customer5.jpg";
import customer6 from "../../assets/landingPage/customer6.jpg";

// text component
import { CUSTOMERCOMPONET_TXT } from "../../enum/landingPage.common";

import styled from "styled-components";

import { LandingPageLayout } from "../../layout/landingPage/landingPageLayout.jsx";

import Carousel from "../../components/Carousel/Carousel.jsx";

import { StyledHeading } from "../../components/Styled/Typography.styled.jsx";

import DemoComment from "../../pages/LandingPage/helper.customer.jsx";
import CommentCard from "../../pages/LandingPage/customerCommentCard.jsx";

const Customer = () => {
  const imagesOne = [customer6, customer1, customer5, customer3, customer2];
  const imagesTwo = [customer3, customer4, customer5, customer1, customer6];

  return (
    <StyledCustomerLayout>
      <StyledSubContainerOne>
        <StyledHead left>{CUSTOMERCOMPONET_TXT.CUSTOMER_HEADING}</StyledHead>
        <CustomerCarouselWrapper>
          <Carousel
            type="type3"
            bgColor="black"
            carouselList={DemoComment.map((item, index) => (
              <CommentCard key={index} comment={item} />
            ))}
          />
        </CustomerCarouselWrapper>
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

const CustomerCarouselWrapper = styled.div`
  position: relative;
  overflow: visible;
  z-index: 1;

  .material-symbols-outlined {
    color: ${({ theme }) => theme.colors.white};
    font-size: 20px;
    line-height: 8;
  }
`;

const StyledCustomerLayout = styled(LandingPageLayout)`
  background-color: ${({ theme }) => theme.colors.black};
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

const StyledHead = styled(StyledHeading)`
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 767px) {
    display: none;
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

const StyledHeadM = styled(StyledHeading)`
  display: none;

  @media (max-width: 767px) {
    display: flex;
    color: ${({ theme }) => theme.colors["inactive-color"]};
    justify-content: center;
    padding: 20px;
  }
`;

export default Customer;
