import styled from "styled-components";
import { Button } from "../../components/Buttons/Button";
import {
  StyledSemiHeading,
  StyledHeadingBig,
} from "../../components/Styled/Typography.styled";

const Login = () => {
  return (
    <StyledContainer>
      <StyledHeadingBig>Eventz</StyledHeadingBig>
      <StyledSemiHeading>Welcome to Eventz</StyledSemiHeading>
      {/* add inputs late */}

      <StyledBox2>
        <Button>Continue</Button>
        <Button type="outlined">Back</Button>
        <Button type="secondary">My secondary button</Button>
      </StyledBox2>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  height: 100vh;
  background: #fff;
`;
const StyledBox2 = styled.div`
  display: flex;
  flexdirection: column;
  width: 400px;
  margin: auto;
  gap: 20px;
  margintop: 40px;
`;

export default Login;
