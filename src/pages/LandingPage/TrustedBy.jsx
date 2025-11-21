import styled from "styled-components";
import canon from "../../assets/landingPage/canon.png";
import qatar from "../../assets/landingPage/Qatar-Airways-Symbol.png";
import saleForce from "../../assets/landingPage/salesForce.png";
import standard from "../../assets/landingPage/standard_chartered.png";
import { StyledSemiHeading } from "../../components/Styled/Typography.styled";
import { StyledSectionContainer } from "../../components/Styled/Common.styled";
const TrustedBy = () => {
  return (
    <StylesContainer>
      <StyledSemiHeading>Trusted By </StyledSemiHeading>
      <StyledContainerImg>
        <StyledIconContainer>
          <StyledIconFirst src={standard} />
        </StyledIconContainer>
        <StyledIconOnes sx={{ "border-radius": "50%" }} src={saleForce} />
        <StyledIconOnes sx={{ borderRadius: "50%" }} src={canon} />
        <StyledIconOnes sx={{ borderRadius: "50%" }} src={qatar} />
      </StyledContainerImg>
    </StylesContainer>
  );
};

export default TrustedBy;

const StylesContainer = styled(StyledSectionContainer)`
  flex-direction: column;
  background-color: #f1faff;
  @media (max-width: 768px) {
    background-color: #ffffff;
  }
`;

const StyledContainerImg = styled.div`
  height: 20%;
  width: 50%;
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 90%;
    display: flex;
    justify-content: space-between;
  }
`;
// Icons

const StyledIconFirst = styled.img`
  width: 60px;
  height: 80px;
  @media (max-width: 768px) {
    width: 50px;
    height: 60px;
  }
`;
const StyledIconContainer = styled.div`
  width: 120px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

const StyledIconOnes = styled.img`
  width: 120px;
  height: none;
  border-radius: none;
  background-color: white;
  @media (max-width: 768px) {
    width: 80px;
  }
  ${({ sx }) => ({ ...sx })}
`;
