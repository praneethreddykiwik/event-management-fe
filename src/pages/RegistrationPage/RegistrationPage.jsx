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
      <RegistrationImages />
    </StyledContainer>
  );
};

export default RegistrationPage;
