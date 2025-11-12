import styled from "styled-components";
import canon from "../../assets/landingPage/canon.png";
import qatar from "../../assets/landingPage/Qatar-Airways-Symbol.png";
import saleForce from "../../assets/landingPage/salesForce.png";
import standard from "../../assets/landingPage/standard_chartered.png";
import { StyledSemiHeading } from "../../components/Styled/Typography.styled";
import { StyledSectionContainer } from "../../components/Styled/Common.styled";
const TrustedBy = () => {
  return (
    <StyledSectionContainer sx={StylesContainer}>
      <StyledTextContainer>
        <StyledSemiHeading>Trusted By </StyledSemiHeading>
      </StyledTextContainer>
      <StyledContainerImg>
        <StyledIconContainer>
          <StyledIconOnes
            sx={{ width: "60px", height: "80px" }}
            src={standard}
          />
        </StyledIconContainer>
        <StyledIconOnes sx={{ "border-radius": "50%" }} src={saleForce} />
        <StyledIconOnes sx={{ borderRadius: "50%" }} src={canon} />
        <StyledIconOnes sx={{ borderRadius: "50%" }} src={qatar} />
      </StyledContainerImg>
    </StyledSectionContainer>
  );
};

export default TrustedBy;

const StylesContainer = {
  height: "45vh",
  flexDireaction: " column",
  background: " #f1faff;",
};
const StyledTextContainer = styled.div`
  margin-top: 30px;
`;

const StyledContainerImg = styled.div`
  height: 20vh;
  width: 55vw;
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
`;
// Icons

const StyledIconContainer = styled.div`
  width: 120px;
  background-color: white;
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
  // borderRadius: "50%";
  ${({ sx }) => ({ ...sx })}
`;
