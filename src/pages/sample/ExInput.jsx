/** @format */

import { Input } from '../../components/Inputs/Input';
import styled from 'styled-components';
import { useState } from 'react';
import { Button } from '../../components/Buttons/Button';
import ClosePassWord from '../../assets/Logo/ClosePassword.svg';
import SeePassWord from '../../assets/Logo/SeePassword.svg';
import { PassWordImg, ShowHideIcon } from '../Login/Forms';

const MyComponent = () => {
  const [userName, setUserName] = useState('');
  const [firstName, setfirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [gender, setGender] = useState('');
  const [favPlaces, setFavPlaces] = useState([]);

  function handleUserNameChage(UserName) {
    setUserName(UserName.value);
  }

  function handleFirstNameChage(firstName) {
    setfirstName(firstName.value);
  }

  function handleSecondNameChage(secondName) {
    setSecondName(secondName.value);
  }

  function handleNumberChage(number) {
    setNumber(number.value);
  }
  function handlePasswordChage(password) {
    setPassword(password.value);
  }

  function handleGenderChange(gender) {
    setGender(gender.value);
  }

  function handleCheckBoxChage(data) {
    setFavPlaces((prev) =>
      data.checked ? [...prev, data.item] : prev.filter((v) => v !== data.item)
    );
  }

  function handleSubmit() {
    const formData = {
      userName,
      firstName,
      secondName,
      number,
      password,
      gender,
      favPlaces,
    };
    console.log('Submitted Data:', formData);
  }

  return (
    <ExampleInputs>
      <Input
        type="text"
        value={userName}
        onChange={handleUserNameChage}
        placeholder={'User Name'}
      />

      <Input
        type="text"
        value={firstName}
        onChange={handleFirstNameChage}
        placeholder={'First Name'}
      />

      <Input
        type="text"
        value={secondName}
        onChange={handleSecondNameChage}
        placeholder={'Second Name'}
      />

      <Input
        type="number"
        value={number}
        onChange={handleNumberChage}
        placeholder={'Mobile Number'}
      />

      <ExInputWrapper>
        <Input
          type={showPassword ? 'text' : 'password'}
          required
          value={password}
          onChange={handlePasswordChage}
          placeholder={'Password'}
        />
        <ShowHideIcon onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? (
            <PassWordImg src={SeePassWord} alt="show" />
          ) : (
            <PassWordImg src={ClosePassWord} alt="hide" />
          )}
        </ShowHideIcon>
      </ExInputWrapper>

      <Input
        type="radio-group"
        name="gender"
        placeholder="Gender"
        list={['male', 'female', 'prefer not to say']}
        value={gender}
        onChange={handleGenderChange}
      />
      <Input
        type="checkbox-group"
        name="FavPlaces"
        placeholder="Favourite places"
        list={['Hyderbad', 'Delhi', 'Some other place']}
        value={favPlaces}
        onChange={handleCheckBoxChage}
      />

      <Button type="base" onClick={handleSubmit}>
        Submit
      </Button>
    </ExampleInputs>
  );
};
const ExampleInputs = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
`;

const ExInputWrapper = styled.div`
  position: relative;
  width: 100%;
`;
export default MyComponent;
