/** @format */
import { useState } from 'react';
import styled from 'styled-components';
import { Inputs } from '../../components/Inputs/Inputs';
import { Button } from '../../components/Buttons/Button';

const meta = [
  {
    type: 'text',
    name: 'username',
    label: 'Username',
    placeholder: 'Enter username',
    validations: ['required'],
  },
  {
    type: 'email',
    name: 'email',
    label: 'Email',
    placeholder: 'Enter email',
    validations: ['required'],
  },
  {
    type: 'password',
    name: 'password',
    label: 'Password',
    placeholder: 'Enter password',
    validations: ['required'],
  },
  {
    type: 'date',
    name: 'dob',
    label: 'Date of Birth',
    validations: ['required'],
  },
  {
    type: 'time',
    name: 'loginTime',
    label: 'Preferred Login Time',
  },
  {
    type: 'datetime-local',
    name: 'meeting',
    label: 'Meeting Date & Time',
  },
  {
    type: 'dropdown',
    name: 'eventType',
    label: 'Event Type',
    options: [
      { value: 'public', label: 'Public' },
      { value: 'private', label: 'Private' },
      { value: 'corporate', label: 'Corporate' },
    ],
    validations: ['required'],
  },
  {
    type: 'radio-group',
    name: 'gender',
    placeholder: 'Gender',
    list: ['Male', 'Female', 'Other'],
    validations: ['required'],
  },
  {
    type: 'checkbox-group',
    name: 'skills',
    placeholder: 'Skills',
    list: ['React', 'Node', 'Mongo', 'Redis'],
    validations: ['required'],
  },
  {
    type: 'checkbox',
    name: 'agree',
    list: ['I agree to the terms & conditions'],
    validations: ['required'],
  },
  {
    type: 'textarea',
    name: 'bio',
    label: 'Bio',
    placeholder: 'Tell something about yourself',
  },
];

const SampleInput = () => {
  const [inputs, setInputs] = useState(
    meta.map((f) => ({ ...f, value: '', error: null }))
  );

  const onChange = (e) => {
    const { name, type, value, checked } = e.target;
    const finalValue = type === 'checkbox' ? checked : value;

    setInputs((prev) =>
      prev.map((field) =>
        field.name === name
          ? { ...field, value: finalValue, error: null }
          : field
      )
    );
  };

  const onSubmit = () => {
    let hasError = false;

    const updated = inputs.map((f) => {
      if (f.validations?.includes('required') && !f.value) {
        hasError = true;
        return { ...f, error: 'This field is required' };
      }
      return f;
    });

    setInputs(updated);

    if (!hasError) {
      const payload = updated.reduce(
        (acc, cur) => ({ ...acc, [cur.name]: cur.value }),
        {}
      );

      console.log('FORM DATA', payload);
      alert('Form valid — check console');
    }
  };

  return (
    <Container>
      {inputs.map((field) => (
        <Inputs key={field.name} {...field} onChange={onChange} />
      ))}

      <Button onClick={onSubmit}>Submit</Button>
    </Container>
  );
};

export default SampleInput;

const Container = styled.div`
  max-width: 500px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
