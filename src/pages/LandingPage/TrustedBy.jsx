import styled from "styled-components";
import canon from "../../assets/landingPage/canon.png";
import qatar from "../../assets/landingPage/Qatar-Airways-Symbol.png";
import saleForce from "../../assets/landingPage/salesForce.png";
import standard from "../../assets/landingPage/standard_chartered.png";
import { StyledSemiHeading } from "../../components/Styled/Typography.styled";
const TrustedBy = () => {
  return (
    <TrustedByContainer>
      <TrustedByContainerText>
        <StyledSemiHeading>Trusted By </StyledSemiHeading>
      </TrustedByContainerText>
      <TrustedByContainerImg>
        <TrustedByImgOneDiv>
          <TrustedByImgOne src={standard} />
        </TrustedByImgOneDiv>
        <TrustedByImgTwo src={saleForce} />
        <TrustedByImgThree src={canon} />
        <TrustedByImgFour src={qatar} />
      </TrustedByContainerImg>
    </TrustedByContainer>
  );
};

export default TrustedBy;

const TrustedByContainer = styled.div`
  height: 45vh;
  background-color: #f1faff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TrustedByContainerText = styled.div`
  margin-top: 30px;
`;

const TrustedByContainerImg = styled.div`
  height: 20vh;
  width: 55vw;
  display: flex;
  margin-top:20px;
  justify-content: space-between;
`;

const TrustedByImgOneDiv = styled.div`
  width: 120px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;
const TrustedByImgOne = styled.img`
  width: 60px;
  height: 80px;
  background-color: white;
`;
const TrustedByImgTwo = styled.img`
  width: 120px;
  background-color: white;
  border-radius: 50%;
`;
const TrustedByImgThree = styled.img`
  width: 120px;
  background-color: white;
  border-radius: 50%;
`;
const TrustedByImgFour = styled.img`
  width: 120px;
  background-color: white;
  border-radius: 50%;
`;
