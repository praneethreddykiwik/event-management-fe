import { SignUpLine } from '../../enum/Login.Common';
import {
  LineOne,
  LineTwo,
  LineTxt,
  SignUpWith,
  SignWithEmail,
} from './Login.Styled';

const LineTxts = () => {
  return (
    <>
      <LineTxt>
        <LineOne />
        <SignUpWith>{SignUpLine}</SignUpWith>
        <LineTwo />
      </LineTxt>
      <SignWithEmail>Or Sign in with Email</SignWithEmail>
    </>
  );
};
export default LineTxts;
