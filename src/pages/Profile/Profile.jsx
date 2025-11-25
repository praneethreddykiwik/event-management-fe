import React from "react";
import { StyleMainContainer } from "./Profile.Style";
import ProfileLeftCard from "./ProfileView";
import ProfileRightCard from "./ProfileEdit";

const Profile = () => {
  return (
    <StyleMainContainer>
      <ProfileLeftCard />
      <ProfileRightCard />
    </StyleMainContainer>
  );
};

export default Profile;
