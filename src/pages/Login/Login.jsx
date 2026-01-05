/** @format */
import LoginImages from "./LoginImages";
import WelcomeTxts from "./WelcomeTxts";
import GetStartedWithButtons from "./GetStartedWithButtons";
import LineTxts from "./LineTxts";
import LoginForm from "./LoginForm";

import styled from "styled-components";

const Login = () => {
  return (
    <StyledContainer>
      <ContainerLeft>
        <MainContainer>
          <WelcomeTxts />
          <GetStartedWithButtons />
          <LineTxts />
          <LoginForm />
        </MainContainer>
      </ContainerLeft>
      <LoginImages />
    </StyledContainer>
  );
};

export default Login;

export const StyledContainer = styled.div`
  height: 100%;
  background: #fff;
  display: flex;
  margin: auto;
  gap: 20px;
  justify-content: center;

  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 25px;
  }
`;

export const ContainerLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const MainContainer = styled.div`
  max-width: 460px;
  align-items: center;
  display: flex;
  flex-direction: column;
`;
