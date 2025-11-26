/** @format */
import LoginImages from './LoginImages';
import WelcomeTxts from './WelcomeTxts';
import GetStartedWithButtons from './GetStartedWithButtons';
import LineTxts from './LineTxts';
import Forms from './Forms';
import { StyledContainer, ContainerLeft, MainContainer } from './Login.Styled';

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

const Login = () => {
  const leftImages = [leftImage1, leftImage2, leftImage3, leftImage4];
  const middleImages = [middleImage1, middleImage2, middleImage3, middleImage4];
  const rightImages = [rightImage1, rightImage2, rightImage3, rightImage4];

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
