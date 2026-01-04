import WelcomeTxts from "./WelcomeTxts";
import GetStartedWithButtons from "./GetStartedWithButtons";
import LineTxts from "./LineTxts";
import Forms from "./Forms";
import RegistrationImages from "./RegistrationImages";
import {
  StyledContainer,
  ContainerLeft,
  MainContainer,
} from "./styled.RegistrationPage";

import leftImage1 from "../../assets/Registration-imgs/left1.jpg";
import leftImage2 from "../../assets/Registration-imgs/left2.jpg";
import leftImage3 from "../../assets/Registration-imgs/left3.jpg";
import leftImage4 from "../../assets/Registration-imgs/left4.jpg";
import middleImage1 from "../../assets/Registration-imgs/middle1.jpg";
import middleImage2 from "../../assets/Registration-imgs/middle2.jpg";
import middleImage3 from "../../assets/Registration-imgs/middle3.jpg";
import middleImage4 from "../../assets/Registration-imgs/middle4.jpg";
import rightImage1 from "../../assets/Registration-imgs/right1.jpg";
import rightImage2 from "../../assets/Registration-imgs/right2.jpg";
import rightImage3 from "../../assets/Registration-imgs/right3.jpg";
import rightImage4 from "../../assets/Registration-imgs/right4.jpg";

const RegistrationPage = () => {
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

      <RegistrationImages
        leftImages={[leftImage1, leftImage2, leftImage3, leftImage4]}
        middleImages={[middleImage1, middleImage2, middleImage3, middleImage4]}
        rightImages={[rightImage1, rightImage2, rightImage3, rightImage4]}
      />
    </StyledContainer>
  );
};

export default RegistrationPage;
