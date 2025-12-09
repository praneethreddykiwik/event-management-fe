import React from "react";
import styled from "styled-components";

import UserProfileCard from "./UserProfileCard";
import ProfileEdit from "./ProfileEdit";

import BG1Image from "../../assets/Profile_images/BG1Image.jpg"; 

const Profile = () => {
  return (
    <StyleMainContainer>
      <UserProfileCard />
      <ProfileEdit />
    </StyleMainContainer>
  );
};

export default Profile;



export const StyleMainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  padding: 130px;
  gap: 40px;
  background-image: url(${BG1Image});
  background-size: 100% 33%;
  background-repeat: no-repeat;
  background-position: top;
  background-color: #eef7fc;

  @media (max-width: 1200px) {
    padding: 80px;
    gap: 25px;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 50px 20px;
    background-image: none;
    background-color: transparent;
    background-size: auto;
  }

  @media (max-width: 600px) {
    padding: 40px 15px;
    gap: 15px;
    background-image: none;
    background-color: transparent;
  }
`;
