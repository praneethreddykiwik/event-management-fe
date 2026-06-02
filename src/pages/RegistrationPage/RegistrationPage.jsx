import WelcomeTxts from "./WelcomeTxts";
import GetStartedWithButtons from "./GetStartedWithButtons";
import LineTxts from "./LineTxts";
import RegistrationImages from "./RegistrationImages";
import { BottomReg } from "./BottomReg";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { registrationAction } from "../../redux/users/users.actions";
import RegistrationForm from "../../Forms/RegistrationForm";
import { useEffect } from "react";
import { updateAllRegInputs } from "../../redux/farms/farms.slice";
import { generateRegInputsAccordingToRole } from "../../redux/farms/metadata/reg.metadata";
import { mobile } from "../../theme/media-queries";
import { authSelector } from "../../redux/auth/auth.slice";
import { paths } from "../../constants/paths";
// import { registrationMetaData } from "../../redux/farms/reg.metadata";

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const { authUser } = useSelector(authSelector);

  useEffect(() => {
    const dat = generateRegInputsAccordingToRole(authUser?.role);
    dispatch(updateAllRegInputs(dat));
  }, []);

  const onCreateUser = async (payload) => {
    console.log(payload);
    payload.navPath = paths.login;
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

const StyledContainer = styled.div`
  background: ${({ theme }) => theme.appBackgroundColor};
  display: flex;
  justify-content: center;
`;

const ContainerLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${(mobile,
  `
      width:85%;
    `)}
`;

const MainContainer = styled.div`
  max-width: 460px;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-bottom: 70px;
`;

export default RegistrationPage;
