/** @format */
import LoginImages from './LoginImages';
import WelcomeTxts from './WelcomeTxts';
import GetStartedWithButtons from './GetStartedWithButtons';
import LineTxts from './LineTxts';
import LoginForm from './LoginForm';
import styled from 'styled-components';
import { mobile } from '../../theme/media-queries';

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

const StyledContainer = styled.div`
  height: 100%;
  background: ${({ theme }) =>
    theme.light?.appBackgroundColor || theme.appBackgroundColor || '#fff'};
  display: flex;
  margin: auto;
  gap: 16px;
  justify-content: center;
`;

const ContainerLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobile`
    width:85%;
  `}
`;

const MainContainer = styled.div`
  max-width: 460px;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
`;
