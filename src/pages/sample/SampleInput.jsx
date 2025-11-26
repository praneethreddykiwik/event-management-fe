/** @format */

import styled from 'styled-components';
import {
  InputDefault,
  InputNumber,
  InputPassword,
  InputCheckbox,
  InputRadio,
} from '../../components/Styled/Inputs.styled';

const SampleInput = () => {
  return (
    <SampleInputContainer>
      <InputTxt type="text"/>
     
      <InputNum type="number" />
     
      <InputPass type="password"/>
     
      <InputCheck type="checkbox"/>
     
      <InputRad type="radio"/>
    </SampleInputContainer>
  );
};
const SampleInputContainer = styled.div`
  margin-top: 100px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
`;

const InputTxt = styled(InputDefault)``;

const InputNum = styled(InputNumber)``;

const InputPass = styled(InputPassword)``;

const InputCheck = styled(InputCheckbox)``;

const InputRad= styled(InputRadio)``;

export default SampleInput;
