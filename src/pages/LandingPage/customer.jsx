import styled from "styled-components";
import { StyledSectionContainer } from "../../components/Styled/Common.styled";
import customer1 from "../../assets/landingPage/customer1.jpg";
import arrow_forward from "../../assets/landingPage/arrow_forwardC.svg";
import arrow_back from "../../assets/landingPage/arrow_backC.svg";
import customer2 from "../../assets/landingPage/customer2.jpg";
import customer3 from "../../assets/landingPage/experience-img1.jpg";
import customer4 from "../../assets/landingPage/customer4.jpg";
import customer5 from "../../assets/landingPage/customer5.jpg";
import customer6 from "../../assets/landingPage/customer6.jpg";
import {
  StyledHeading,
  StyledParagraph,
  StyledParagraphBold,
  StyledParagraphSmallVisible,
} from "../../components/Styled/Typography.styled";
const Customer = () => {
  return (
    <StyledContainerBody>
      <StyledSubContainerOne>
        <StyledHead>What our customers are saying</StyledHead>
        <StyledParagraphContainer>
          "I recently used the online event and venue booking service, and it
          exceeded my expectations. The entire booking process was incredibly
          smooth, and I was able to find the perfect venue for my event without
          any hassle."
        </StyledParagraphContainer>
        <StyledProfile>
          <StyledProfileImg src={customer2} />
          <StyledProfileName>
            <StyledProfileHead>Cameron Wiliamson</StyledProfileHead>
            <StyledAnchors>Pictoplasma Conference</StyledAnchors>
          </StyledProfileName>
        </StyledProfile>
        <StyledIcon>
          <StyledBackIcon src={arrow_back} />
          <StyledForwardIcon src={arrow_forward} />
        </StyledIcon>
      </StyledSubContainerOne>
      <StyledSubContainerTwo>
        <StyledImageOne>
          <StyledImgOne sx={{ height: "40%" }} src={customer2} />
          <StyledImgOne sx={{ height: "40%" }} src={customer3} />
          <StyledImgOne sx={{ height: "20%" }} src={customer1} />
        </StyledImageOne>
        <StyledImageTwo>
          <StyledImgOne sx={{ height: "20%" }} src={customer6} />
          <StyledImgOne sx={{ height: "60%" }} src={customer5} />
          <StyledImgOne sx={{ height: "30%" }} src={customer4} />
        </StyledImageTwo>
      </StyledSubContainerTwo>
    </StyledContainerBody>
  );
};

export default Customer;

const StyledContainerBody = styled(StyledSectionContainer)`
  display: flex;
  padding: 0px;
  align-items: center;
  background-color: #000000;
  align-content: center;
  justify-content: center;
`;

const StyledSubContainerTwo = styled.div`
  width: 50%;
  height: 500px;
  display: flex;
  gap: 15px;
`;

const StyledImgOne = styled.img`
  width: 250px;
  ${({ sx }) => ({ ...sx })}
`;
const StyledImageOne = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const StyledImageTwo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
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
  margin: auto;
  margin-top: 30px;
`;
const StyledSubContainerOne = styled.div`
  width: 50%;
  height: 400px;
`;

const StyledProfile = styled.div`
  display: flex;
  width: 250px;
  margin-top: 30px;
  margin-left: 17%;
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
  margin-left: 11%;
`;
const StyledForwardIcon = styled.img`
  margin-left: 60px;
  width: 15px;
  cursor: pointer;
`;
const StyledBackIcon = styled.img`
  width: 15px;
  cursor: pointer;
`;

const StyledHead = styled(StyledHeading)`
  color: #26c867;
`;
