import styled from "styled-components";
import canon from "../../assets/landingPage/canon.png";
import qatar from "../../assets/landingPage/Qatar-Airways-Symbol.png";
import saleForce from "../../assets/landingPage/salesForce.png";
import standard from "../../assets/landingPage/standard_chartered.png";
import { StyledSemiHeading } from "../../components/Styled/Typography.styled";
import { SectionContainer } from "../../components/Styled/Common.styled";
const TrustedBy = () => {
  return (
    <SectionContainer sx={StylesContainer}>
      <TextContainer>
        <StyledSemiHeading>Trusted By </StyledSemiHeading>
      </TextContainer>
      <ContainerImg>
        <IconContainer>
          <IconOnes sx={{ width: "60px", height: "80px" }} src={standard} />
        </IconContainer>
        <IconOnes sx={{ borderRadius: "50%" }} src={saleForce} />
        <IconOnes sx={{ borderRadius: "50%" }} src={canon} />
        <IconOnes sx={{ borderRadius: "50%" }} src={qatar} />
      </ContainerImg>
    </SectionContainer>
  );
};

export default TrustedBy;

const StylesContainer = {
  height: "45vh",
  flexDireaction: " column",
  background: " #f1faff;",
};
const TextContainer = styled.div`
  margin-top: 30px;
`;

const ContainerImg = styled.div`
  height: 20vh;
  width: 55vw;
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
`;

const IconContainer = styled.div`
  width: 120px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

const IconOnes = styled.img`
  width: 120px;
  height: none;
  border-radius: none;
  background-color: white;
  ${({ sx }) => ({ ...sx })}
`;

