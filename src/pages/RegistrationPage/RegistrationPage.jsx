import WelcomeTxts from "./WelcomeTxts";
import GetStartedWithButtons from "./GetStartedWithButtons";
import LineTxts from "./LineTxts";
import RegistrationImages from "./RegistrationImages";
import { BottomReg } from "./BottomReg";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { registrationAction } from "../../redux/users/users.actions";
import RegistrationForm from "../../Forms/RegistrationForm";
import { useEffect } from "react";
import { updateAllRegInputs } from "../../redux/farms/farms.slice";
import { registrationMetaData } from "../../redux/farms/reg.metadata";

const RegistrationPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateAllRegInputs(registrationMetaData));
  }, []);

  const onCreateUser = async (payload) => {
    dispatch(registrationAction(payload));
  };

  return (
    <StyledContainer>
      <ContainerLeft>
        <MainContainer>
          <WelcomeTxts />
          <GetStartedWithButtons />
          <LineTxts />
          <RegistrationForm onCreateUser={onCreateUser} />
          <BottomReg />
        </MainContainer>
      </ContainerLeft>
      <RegistrationImages />
    </StyledContainer>
  );
};

export const StyledContainer = styled.div`
  // height: 100vh;
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
  max-width: 460px;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export default RegistrationPage;
