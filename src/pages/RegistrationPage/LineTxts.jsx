import { SignUpLine } from '../../Enum/RegistrationPage.Enum';
import { LineOne, LineTwo, LineTxt, SignUpWith, SignWithEmail } from './styled.RegistrationPage';

const LineTxts = () => {
  return (
    <>
      <LineTxt>
        <LineOne />
        <SignUpWith>{SignUpLine}</SignUpWith>
        <LineTwo />
      </LineTxt>

      {/* Mobile view */}
      <SignWithEmail>Or Sign Up with Email</SignWithEmail>
    </>
  );
};

export default LineTxts;
