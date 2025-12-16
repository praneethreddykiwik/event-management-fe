/** @format */

import styled from 'styled-components';
import { LOGIN_COMMON } from '../../enum/Login.Common';

const LineTxts = () => {
  return (
    <>
      <LineTxt>
        <LineOne />
        <SignUpWith>{LOGIN_COMMON.SIGN_UP_LINE}</SignUpWith>
        <LineTwo />
      </LineTxt>
      <SignWithEmail>{LOGIN_COMMON.SIGN_IN_EMAIL}</SignWithEmail>
    </>
  );
};
export default LineTxts;

export const SignUpWith = styled.p`
  width: 100%;
  font-size: 16px;
  font-weight: 350;
  padding: 10px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const LineTxt = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  width: 90%;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const LineOne = styled.div`
  color: black;
  border: 0.1px solid #7e827f;
  width: 120px;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const LineTwo = styled.div`
  color: black;
  border: 0.1px solid #7e827f;
  width: 120px;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const SignWithEmail = styled.p`
  font-size: 16px;
  font-weight: 350;
  padding: 10px;
  @media screen and (min-width: 769px) {
    display: none;
  }
`;
