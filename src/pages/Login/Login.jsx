/** @format */
import LoginImages from './LoginImages';
import WelcomeTxts from './WelcomeTxts';
import GetStartedWithButtons from './GetStartedWithButtons';
import LineTxts from './LineTxts';
import Forms from './Forms';
import leftImage1 from '../../assets/loginImgs/left1.jpg';
import leftImage2 from '../../assets/loginImgs/left2.jpg';
import leftImage3 from '../../assets/loginImgs/left3.jpg';
import leftImage4 from '../../assets/loginImgs/left4.jpg';
import middleImage1 from '../../assets/loginImgs/middle1.jpg';
import middleImage2 from '../../assets/loginImgs/middle2.jpg';
import middleImage3 from '../../assets/loginImgs/middle3.jpg';
import middleImage4 from '../../assets/loginImgs/middle4.jpg';
import rightImage1 from '../../assets/loginImgs/right1.jpg';
import rightImage2 from '../../assets/loginImgs/right2.jpg';
import rightImage3 from '../../assets/loginImgs/right3.jpg';
import rightImage4 from '../../assets/loginImgs/right4.jpg';
import styled from 'styled-components';

const Login = () => {
  const leftImages = [
    leftImage2,
    leftImage1,
    leftImage3,
    leftImage4,
    middleImage3,
    leftImage1,
  ];
  const middleImages = [
    leftImage2,
    middleImage3,
    middleImage2,
    leftImage2,
    middleImage3,
    middleImage4,
    middleImage1,
    leftImage2,
  ];
  const rightImages = [
    rightImage1,
    middleImage3,
    middleImage3,
    rightImage2,
    rightImage3,
    leftImage2,
    rightImage4,
  ];

  return (
    <StyledContainer>
      <ContainerLeft>
        <MainContainer>
          <WelcomeTxts />
          <GetStartedWithButtons />
          <LineTxts />
          <Forms />
        </MainContainer>
      </ContainerLeft>
      <LoginImages
        leftImages={leftImages}
        middleImages={middleImages}
        rightImages={rightImages}
      />
    </StyledContainer>
  );
};

export default Login;

export const StyledContainer = styled.div`
  height: 100%;
  background: #fff;
  display: flex;
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
  width: 300px;
  align-items: center;
  display: flex;
  flex-direction: column;
`;
