/** @format */

import styled from 'styled-components';
import { Input } from '../../components/Inputs/Input';

const myInputs = [
  {
    type: 'text',
    placeholder: 'Username',
    name: 'username',
    disabled: false,
    value: '',
    isError: false,
    validations: ['required', { type: 'min-length', value: 3 }],
    errorMessage: 'Username is required and should be at least 3 chars',
  },
  {
    type: 'text',
    placeholder: 'First Name',
    name: 'firstName',
    disabled: false,
    value: '',
    isError: false,
    validations: ['required'],
    errorMessage: 'First name is required',
  },
  {
    type: 'text',
    placeholder: 'Last Name',
    name: 'secondName',
    disabled: false,
    value: '',
    isError: false,
    validations: [],
    errorMessage: 'Something Went Wrong!',
  },
  {
    type: 'password',
    placeholder: 'Password',
    name: 'password',
    disabled: false,
    value: '',
    isError: false,
    validations: ['required', { type: 'min-length', value: 6 }],
    errorMessage: 'Password required (min 6 chars)',
  },
  {
    type: 'radio-group',
    placeholder: 'Gender',
    name: 'gender',
    disabled: false,
    value: '',
    isError: false,
    validations: ['required'],
    errorMessage: 'Please select your gender',
    list: ['Male', 'Female', 'Other'],
  },
  {
    type: 'checkbox-group',
    placeholder: 'Favourite places',
    name: 'favPlaces',
    disabled: false,
    value: [],
    isError: false,
    validations: ['required'],
    errorMessage: 'Choose at least one place',
    list: ['Hyderabad', 'Dubai', 'Some other area'],
  },
];

const SampleInput = () => {
  return (
    <SampleInputContainer>
      {myInputs.map((metadata) => (
        <Input {...metadata} />
      ))}
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

const FieldWrapper = styled.div`
  margin-bottom: 16px;
`;
const ErrorText = styled.div`
  color: #d32f2f;
  font-size: 13px;
  margin-top: 6px;
`;
export default SampleInput;
