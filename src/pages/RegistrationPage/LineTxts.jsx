import { SignUpLine } from "../../enum/RegistrationPage.Enum";
import { LineTxt, SignUpWith, SignWithEmail } from "./styled.RegistrationPage";

const LineTxts = () => {
  return (
    <>
      <LineTxt>
        <SignUpWith>{SignUpLine}</SignUpWith>
      </LineTxt>

      {/* Mobile view */}
      <SignWithEmail>Or Sign Up with Email</SignWithEmail>
    </>
  );
};

export default LineTxts;
