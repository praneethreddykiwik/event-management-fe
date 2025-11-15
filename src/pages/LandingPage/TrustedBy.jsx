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
      <StyledSemiHeading>Trusted By </StyledSemiHeading>
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
  flexDireaction: " column",
  background: " #f1faff;",
};

const StyledContainerImg = styled.div`
  height: 20%;
  width: 50%;
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
  ${({ sx }) => ({ ...sx })}
`;
