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
  padding: 130px;
  gap: 40px;
  background-image: url(${BG1Image});
  background-size: 100% 33%;
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.color["light-blue"]};
`;
