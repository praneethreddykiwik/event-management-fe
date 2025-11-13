import styled from "styled-components";
import {
  StyledSecButton,
  StyledBaseButton,
} from "../../components/Styled/Buttons.styled";
import {StyledHeadingBig} from "../../components/Styled/Typography.styled";
import logo from "../../assets/gateway-images/eventz-logo.png";
import Gateway from "../../assets/gateway-images/img.jpg";
const GatewayPage = () => {
  return (
    <Container_parent>
      <Container_child1>
        <LogoText>
          <LogoIcon src={logo} />
          <StyledCstHeading>eventz</StyledCstHeading>
        </LogoText>

        <Title>
          Your Gateway to <br /> Memorable Experiences
        </Title>
        <Description>
          no need to rummage through irrelevant halls <br /> anymore, we got You
          covered. we send you <br /> relevant delas based off of your interest
        </Description>
        <Button_section>
          <Skip>Skip</Skip>
          <Next>Next</Next>
        </Button_section>
      </Container_child1>
      <Container_child2>
        <ContainerImg src={Gateway} />
      </Container_child2>
    </Container_parent>
  );
};
export default GatewayPage;

const ContainerImg = styled.img`
  height: 100%;
  width: 100%;
`;
const Container_parent = styled.div`
  display: flex;
  height: 100vh;
  font-family: "Inter", sans-serif;
`;

const Container_child1 = styled.div`
  width: 50vw;
  background: #f5fbff;
  padding: 60px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Container_child2 = styled.div`
  width: 50vw;
  background-size: cover;
  background-position: center;
`;

const LogoRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  gap: 10px;
`;

const LogoIcon = styled.img`
  width: 80px;
`;

const LogoText = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  margin-bottom: 60px;
`;

const Title = styled.h1`
  font-size: 35px;
  line-height: 1.3;
  font-weight: 700;
  color: #0a0a0a;
  margin-bottom: 0px;
`;

const Description = styled.p`
  font-size: 15px;
  color: #555;
  margin-bottom: 45px;
`;

const Button_section = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;
const Skip = styled(StyledSecButton)`
  width: 150px;
`;
const Next = styled(StyledBaseButton)`
  width: 250px;
`;
const StyledCstHeading = styled(StyledHeadingBig)`
  font-weight: 300;

`
